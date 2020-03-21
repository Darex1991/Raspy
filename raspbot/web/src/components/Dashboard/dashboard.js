'use strict'

exports.data = function() {
  return {
    temperatureScale: undefined
  }
};

exports.created = function() {
  this.temperatureScale = this.$cookie.get('temperatureScale');
};

exports.methods = {
  /**
   * Converts temperature from Celsius to Fahrenheit.
   *
   * @return {Int}             The converted temperature.
   */
  convertTemperature: function () {
    if (this.$root.temperature == null || this.$root.temperature == 'NaN') return 'N/A';
    if (this.temperatureScale == 'f') {
      return (this.$root.temperature * (9/5) + 32).toFixed(2) + '°F';
    }

    return this.$root.temperature + '°C';
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
    if (this.$root.isOpenedWindow == null || this.$root.isOpenedWindow == 'NaN') return 'N/A';

    return this.$root.isOpenedWindow ? 'Otwarte' : 'Zamknięte';
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
