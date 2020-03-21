// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import _ from 'lodash';
import router from './router';
import VueCookie from 'vue-cookie';
import shared from '@/shared/index.js';
import APIManager from '@/shared/apimanager.js';
import Keyring from '@/shared/keyring.js';
import Application from '@/shared/application.js';
import DateFormatter from '@/shared/dateformatter.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.config.productionTip = false;

Vue.use(shared);
Vue.use(VueCookie);
Vue.use(_);
Vue.use(Keyring, VueCookie);
Vue.use(Application);
Vue.use(DateFormatter);
Vue.use(APIManager, process.env.API_URL, 60000);
Vue.component('font-awesome-icon', FontAwesomeIcon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: function () {
    return {
      loggedIn: false,
      lastPath: null,
      initializing: true,
      intervalID: null,
      // silownik
      temperatureInGarden: undefined,
      temperatureInGardenLoading: false,
      isOpenedWindow: undefined,
      timeOfCheckedTemperature: undefined,
      // min temp for window
      minTemperatureForOpeningWindowLoading: false,
      minTemperatureForOpeningWindow: undefined,
      // system info
      ram: {},
      cpu: {},
      disk: 0,
      uptime: {},
      temperature: undefined,
      temperatureLoading: false,
      debugMode: (process.env.NODE_ENV != 'production')
    }
  },
  methods: {
    /**
     *  Invoked when receiving a 401 unauthorized response.
     */
    didReceiveAuthenticationError: function() {
      if (this._route.name != 'Main') {
        this.lastPath = this._route.path;
        this.loggedIn = false;
        this._router.push('/');
      }
    },
    /**
     *  Invoked when user has authenticated and received a token.
     *
     *  @param  {String} token  The session token.
     *  @param  {Object} user  The session user props.
     */
    didAuthenticate: function(token, user) {
      this.$APIManager.setToken(token);
      this.setToken(token);
      this.setUser(user);
      this.loggedIn = true;
      this.update();

      if (this.lastPath) {
        this._router.push(decodeURIComponent(this.lastPath));
        this.lastPath = null;
      }
      else {
        this._router.push('/dashboard');
      }
    },
    /**
     *  Returns the session token.
     *  @return {String}  The session token.
     */
    getToken: function() {
      return this.$cookie.get('_token');
    },
    /**
     *  Returns the session user props.
     *  @return {object} The session user props.
     */
    getUser: function() {
      const user = this.$cookie.get('_user');
      return JSON.parse(user);
    },
    /**
     *  Returns the session user type.
     *  @return {string} The session user type.
     */
    getUserType: function() {
      return _.get(this.getUser(), 'type');
    },
    /**
     *  Sets the session token.
     *
     *  @param  {String} token  The token.
     */
    setToken: function(token) {
      return this.$cookie.set('_token', token, '0');
    },
    /**
     *  Sets the user props.
     *
     *  @param  {Object} props  The props.
     */
    setUser: function(props) {
      const user = JSON.stringify(props);
      return this.$cookie.set('_user', user, {});
    },
    /**
     *  Returns the current browser bookmark.
     *
     *  @return {String}   Path to the favorite folder.
     */
    getBookmark: function() {
      return this.$cookie.get('bookmark');
    },
    /**
     *  Sets the current browser bookmark.
     *
     *  @param  {String} bookmark   Path to the favorite folder.
     */
    setBookmark: function(bookmark) {
      this.$cookie.set('bookmark', bookmark, { expires: '1Y' });
    },
    /**
     *  Clears the current browser bookmark.
     */
    clearBookmark: function() {
      this.$cookie.delete('bookmark');
    },

    endSession: function() {
      this.$cookie.delete('_token');
      this.$cookie.delete('_user');
      this.$APIManager.endSession();
      this.loggedIn = false;
      this._router.push('/');
    },
    getSystemInformation: function () {
      this.temperatureLoading = this.temperature === undefined;

      this.$APIManager.getSystemInformation(response => {
        if (response.success) {
          this.ram = response.result.ram;
          this.cpu = response.result.cpu;
          this.disk = response.result.disk;
          this.uptime = response.result.uptime;
          this.temperature = response.result.temperature;
          this.temperatureLoading = false;
        } else {
          if (response.error.statusCode == 401) {
            this.didReceiveAuthenticationError();
            this.temperatureLoading = false;
          }
        }
      });
    },
    getTempInformation: function () {
      this.temperatureInGardenLoading = this.temperatureInGarden === undefined;

      this.$APIManager.getTempInformation(response => {
        if (response.success) {
          this.temperatureInGarden = response.result.temperature;
          this.timeOfCheckedTemperature = response.result.time;
          this.isOpenedWindow = response.result.is_open;
          this.temperatureInGardenLoading = false;
        } else {
          if (response.error.statusCode == 401) {
            this.didReceiveAuthenticationError();
            this.temperatureInGardenLoading = false;
          }
        }
      });
    },
    getMinTempInformation: function () {
      this.minTemperatureForOpeningWindowLoading = this.minTemperatureForOpeningWindow === undefined;

      this.$APIManager.getMinTempInformation(response => {
        if (response.success) {
          this.minTemperatureForOpeningWindow = response.result.min_temp;
          this.minTemperatureForOpeningWindowLoading = false;
        } else {
          if (response.error.statusCode == 401) {
            this.didReceiveAuthenticationError();
            this.minTemperatureForOpeningWindowLoading = false;
          }
        }
      });
    },
    update: function () {
      this.getSystemInformation();
      this.getTempInformation();
      this.getMinTempInformation();
    }
  },
  created: function () {
    const token = this.$root.getToken();
    const user = this.$root.getUser();
    this.$cookie.set('refreshRate', 30);

    if (token) {
      this.$APIManager.verifyToken(token, response => {
        this.initializing = false;

        if (response.success) {
          this.didAuthenticate(token, user);
          let refreshRate = this.$cookie.get('refreshRate');
          if (refreshRate > 0) {
            this.intervalID = setInterval(this.update, refreshRate * 1000);
          }
        } else {
          this.didReceiveAuthenticationError();
        }
      });
    } else {
      this.initializing = false;
      this.didReceiveAuthenticationError();
    }
  },
  beforeDestroy: function() {
    console.log('before destro');
    if (this.intervalID != null) clearInterval(this.intervalID);
  },
});
