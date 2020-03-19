'use strict'

exports.data = function() {
  return {
    password: '',
    message: '',
    isDisabled: false
  }
};

exports.methods = {
  updatePassword: function() {
    if (this.password.length < 3) {
      this.message = 'Password must be more than 3 characters long.'
      return;
    }

    if (this.isDisabled == false) {
      this.message = "Updating password..."
      this.isDisabled = true;
      this.$APIManager.updatePassword(this.password, response => {
        if (response.success) {
          this.message = 'Hasło zmienione!';
          this._router.push('/');
        } else {
          this.message = 'Hasło nie mogło zostać zmienione'
        }

        this.isDisabled = false;
      });
    }
  }
};
