'use strict'

exports.data = function() {
  return {
    ram: {},
    cpu: {},
    disk: 0,
    uptime: {},
    temperatureInGardenLoading: false,
    temperature: undefined,
    temperatureLoading: false,
    isOpenedWindow: undefined,
    temperatureInGarden: undefined,
    timeOfCheckedTemperature: undefined,
    intervalID: null,
    temperatureScale: undefined
  }
};

exports.created = function() {
  this.update();
  this.temperatureScale = this.$cookie.get('temperatureScale');

  let refreshRate = this.$cookie.get('refreshRate');
  if (refreshRate > 0) {
    this.intervalID = setInterval(this.update, refreshRate * 1000);
  }
};

exports.beforeDestroy = function() {
  if (this.intervalID != null) clearInterval(this.intervalID);
};

exports.methods = {
  /**
   * Updates the dashboard.
   */
  update: function () {
    this.temperatureInGardenLoading = this.temperatureInGarden === undefined;
    this.temperatureLoading = this.temperature === undefined;

    this.$APIManager.getSystemInformation(response => {
      if (response.success) {
        this.ram = response.result.ram;
        this.cpu = response.result.cpu;
        this.disk = response.result.disk;
        this.uptime = response.result.uptime;
        this.temperature = this.convertTemperature(response.result.temperature);
        this.temperatureLoading = false;
      } else {
        if (response.error.statusCode == 401) {
          this.$root.didReceiveAuthenticationError();
          this.temperatureLoading = false;
        }
      }
    });

    this.$APIManager.getTempInformation(response => {
      if (response.success) {
        this.temperatureInGarden = response.result.temperature;
        this.timeOfCheckedTemperature = response.result.time;
        this.isOpenedWindow = response.result.is_open;
        this.temperatureInGardenLoading = false;
      } else {
        if (response.error.statusCode == 401) {
          this.$root.didReceiveAuthenticationError();
          this.temperatureInGardenLoading = false;
        }
      }
    });
  },
  /**
   * Converts temperature from Celsius to Fahrenheit.
   *
   * @param  {Int} temperature The original temperature.
   * @return {Int}             The converted temperature.
   */
  convertTemperature: function (temperature) {
    if (temperature == null || temperature == 'NaN') return 'N/A';
    if (this.temperatureScale == 'f') {
      return (temperature * (9/5) + 32).toFixed(2) + '°F';
    }

    return temperature + '°C';
  },
  /**
   * Add temperature from Celsius to Fahrenheit.
   *
   * @param  {Int} temperature The original temperature.
   * @return {String}             The converted temperature.
   */
  addTemperatureUnit: function (temperature) {
    if (temperature == null || temperature == 'NaN') return 'N/A';
    if (this.temperatureScale == 'f') {
      return temperature + '°F';
    }

    return temperature + '°C';
  },

  /**
   * Convert flag about opened window.
   *
   * @return {String}             The converted text.
   */
  convertIsOpenedWindowText: function () {
    if (this.isOpenedWindow == null || this.isOpenedWindow == 'NaN') return 'N/A';

    return this.isOpenedWindow ? 'Otwarte' : 'Zamknięte';
  },

  /**
   * Converts the given bytes to a human readable format.
   *
   * This function uses the shared plugin function
   * `bytesToHumanReadable`.
   *
   * @param  {Int}    bytes   The bytes to convert.
   * @return {String}         The bytes converted.
   */
  convertSize: function (bytes) {
    return this.$shared.bytesToHumanReadable(bytes);
  },

  convertTime: function (seconds) {
    return this.$shared.timeSince(seconds);
  }
};
