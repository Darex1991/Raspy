'use strict'

exports.methods = {
  logout: function() {
    this.$root.endSession();
  }
};
