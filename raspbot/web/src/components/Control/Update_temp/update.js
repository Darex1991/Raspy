'use strict'

export const data = function() {
  return {
    component: 'ConfirmPage',
    contentMessage: '',
    heading: 'tets',
    timeoutId: undefined,
    value: {
      type: Number,
    },
  }
};

export const watch =  {
  $errors: function (val) {
    this.value = val;
  },
};

export const created = function() {
  this.value = this.$root.minTemperatureForOpeningWindow;
};

export const methods = {
  _loading: function () {
    if (this.$root.minTemperatureForOpeningWindow === undefined) {
      return true
    }
    else if (this.$root.minTemperatureForOpeningWindow && this.value === undefined) {
      this.value = this.$root.minTemperatureForOpeningWindow;
      return false;
    }
    return false;

  },
  _decrease: function () {
    this.value = this.value - 1
  },
  _increase: function () {
    this.value = this.value + 1
  },
  _displayActions: function () {
    return this.value !== this.$root.minTemperatureForOpeningWindow;
  },
  _updateTemp: function() {
    this.contentMessage = 'Updating';

    this.$APIManager.updateMinTempInformation(this.value, response => {
      if (response.success) {
        this.contentMessage = "Zaktualizowana temperatura";
        console.log(response);
        this.$root.minTemperatureForOpeningWindow = response.result;
        this._router.push('/dashboard');
      } else {
        this.contentMessage = "Nie udało się zmienić temp"
      }
    });
  },
  _reverTemp: function () {
    this.value = this.$root.minTemperatureForOpeningWindow;
  }
};

export const beforeDestroy = function() {
  if (this.timeoutId != null) clearTimeout(this.timeoutId);
};
