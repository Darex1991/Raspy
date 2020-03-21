<template>
  <section id="content">
    <nav class="options" v-if="this.$root.getUserType() === 'admin'">
      <router-link to="/dashboard/shutdown">
        <div class="noselect">
          <font-awesome-icon icon="power-off"/>
          <div class="title">Power off</div>
        </div>
      </router-link>
      <router-link to="/dashboard/reboot">
        <div class="noselect">
          <font-awesome-icon icon="redo"/>
          <div class="title">Reboot</div>
        </div>
      </router-link>
    </nav>

    <div class="column-view">

      <div class="icon">
        <font-awesome-icon icon="thermometer-three-quarters"/> <Loading v-bind:condition="this.$root.temperatureInGardenLoading">{{this.addTemperatureUnit(this.$root.temperatureInGarden)}}</Loading>
      </div>
      <div class="icon" v-if="this.$root.getUserType() === 'admin'">
        <font-awesome-icon :icon="['fab', 'raspberry-pi']"/>
        <font-awesome-icon icon="thermometer-three-quarters"/>
        <Loading v-bind:condition="this.$root.temperatureLoading"><div class="dashboard__small">{{this.convertTemperature()}}</div></Loading>
      </div>

      <div class="icon">
        <font-awesome-icon :icon="['fab', 'windows']" /> <Loading v-bind:condition="this.$root.temperatureInGardenLoading"><div class="dashboard__small">{{this.convertIsOpenedWindowText()}}</div></Loading>
      </div>

      <div class="box">
        <div class="title"><font-awesome-icon :icon="['fas', 'thermometer-quarter']" /> Temp minimalna:</div>
        <div class="description"><Loading v-bind:condition="this.$root.temperatureInGardenLoading" height="20px" width="3px">{{this.addTemperatureUnit(this.$root.minTemperatureForOpeningWindow)}}</Loading></div>
      </div>

      <div class="box">
        <div class="title"><font-awesome-icon icon="clock"/> Temp sprawdzona:</div>
        <div class="description"><Loading v-bind:condition="this.$root.temperatureInGardenLoading" height="20px" width="3px">{{this.$root.timeOfCheckedTemperature}}</Loading></div>
      </div>

      <div class="box">
        <div class="title"><font-awesome-icon :icon="['fab', 'raspberry-pi']"/> Włączony od:</div>
        <div class="description"><Loading v-bind:condition="this.$root.temperatureLoading" height="20px" width="3px">{{this.convertTime(this.$root.uptime.total_seconds)}}</Loading></div>
      </div>

        <div class="table-view">
          <div class="table-row-view">
            <div class="table-cell-view">CPU usage:</div>
            <div class="table-cell-view right">
              <Loading v-bind:condition="this.$root.temperatureLoading" height="8px" width="2px">{{this.$root.cpu}} %</Loading>
            </div>
          </div>
          <div class="table-row-view" v-if="this.$root.getUserType() === 'admin'">
            <div class="table-cell-view">RAM total: </div>
            <div class="table-cell-view right">
              <Loading v-bind:condition="this.$root.temperatureLoading" height="8px" width="2px">{{this.convertSize(this.$root.ram.total)}}
              </Loading>
            </div>
          </div>
          <div class="table-row-view" v-if="this.$root.getUserType() === 'admin'">
            <div class="table-cell-view">RAM used: </div>
            <div class="table-cell-view right">
              <Loading v-bind:condition="this.$root.temperatureLoading" height="8px" width="2px">{{this.convertSize(this.$root.ram.used)}}</Loading>
            </div>
          </div>
          <div class="table-row-view">
            <div class="table-cell-view">RAM available: </div>
            <div class="table-cell-view right">
              <Loading v-bind:condition="this.$root.temperatureLoading" height="8px" width="2px">{{this.convertSize(this.$root.ram.available)}}</Loading>
            </div>
          </div>
          <div class="table-row-view" v-if="this.$root.getUserType() === 'admin'">
            <div class="table-cell-view">HDD total:</div>
            <div class="table-cell-view right">
              <Loading v-bind:condition="this.$root.temperatureLoading" height="8px" width="2px">{{this.convertSize(this.$root.disk.total)}}</Loading>
            </div>
          </div>
          <div class="table-row-view" v-if="this.$root.getUserType() === 'admin'">
            <div class="table-cell-view">HDD used:</div>
            <div class="table-cell-view right">
              <Loading v-bind:condition="this.$root.temperatureLoading" height="8px" width="2px">{{this.convertSize(this.$root.disk.used)}}</Loading>
            </div>
          </div>
          <div class="table-row-view">
            <div class="table-cell-view">HDD free:</div>
            <div class="table-cell-view right">
              <Loading v-bind:condition="this.$root.temperatureLoading" height="8px" width="2px">{{this.convertSize(this.$root.disk.free)}}</Loading>
            </div>
          </div>
        </div>
    </div>

  </section>
</template>

<script>
import { data, created, methods, beforeDestroy } from '@/components/Dashboard/dashboard.js';
import Loader from 'vue-spinner/src/ScaleLoader.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWindows, faRaspberryPi } from '@fortawesome/free-brands-svg-icons';
import { faPowerOff, faRedo, faThermometerThreeQuarters, faClock, faThermometerQuarter } from '@fortawesome/free-solid-svg-icons';
import Loading from '@/components/Common/Loading/Loading.vue';
library.add(faPowerOff, faRedo, faThermometerThreeQuarters, faClock, faWindows, faRaspberryPi, faThermometerQuarter);

export default {
  name: 'Dashboard',
  data: data,
  created: created,
  methods: methods,
  beforeDestroy: beforeDestroy,
  components: { Loader, Loading }
}
</script>

<style scoped>
.column-view {
  display:          flex;
  font-size:        8vw;
  flex-direction:   column;
  justify-content:  space-around;
  padding:          50px;
  text-align: left;
}

.column-view .icon {
  font-size:  15vw;
  text-align: center;
}

.options a {
  width: 100%;
  color: #fff;
  text-decoration: none;
}

.box {
  font-size: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 10vw;
  align-items: center;
  width: 100%;
}

.box + .box {
  margin-top: 5vw;
}

.box > .title {
  font-size: 7vw;
}

.box > .description {
  text-align: center;
}

.dashboard__small {
    font-size: 11vw;
    top: -5px;
    position: relative;
}

</style>
