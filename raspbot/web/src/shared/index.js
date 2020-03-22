'use strict'

export default {

  install: (Vue) => {

    Vue.prototype.$shared = {

      /**
       *  Checks if a string starts with a specific character.
       *
       *  @param  {[type]} value     The string to check.
       *  @param  {[type]} character The character to check against.
       *  @return Boolean            True if value starts with character, otherwise false.
       */
      startsWith: (value, character) => {
        if (!value) return false;
        value = value.toString();
        return value.charAt(0) === character.toString();
      },
      /**
       *  Returns the icon name file corresponding to the specified
       *  file name.
       *
       *  @param  {String} filename The filename.
       *  @return {String}          The icon name.
       */
      iconForFile: (filename) => {
        let nameComponents = filename.split('.');
        let fileExtension  = nameComponents[nameComponents.length - 1];
        let imgExtensions = ['png', 'jpg', 'gif', 'svg', 'tif', 'bmp'];
        let txtExtensions = ['txt', 'odt', 'rtf', 'tex'];
        let docExtensions = ['doc', 'docx'];
        let pptExtensions = ['ppt', 'pptx'];
        let xclExtensions = ['xls', 'xlr', 'xlsx', 'ods'];
        let zipExtensions = ['zip', 'zipx', 'rar', 'bz2', 'gz', '7z', 'arj', 'jar', 'tgz'];
        let audExtensions = ['aif', 'cda', 'mid', 'mp3', 'mpa', 'ogg', 'wav', 'wma', 'midi'];
        let vidExtensions = ['avi', 'flv', 'h264', 'm4v', 'mkv', 'mov', 'mp4', 'mpg', 'mpeg', 'vob', 'wmv'];
        let prgExtensions = ['c', 'cpp', 'java', 'class', 'cs', 'h', 'sh', 'swift', 'vb', 'py', 'erl', 'php', 'htm', 'html', 'css', 'js', 'vue', 'vue', 'md'];

        if (fileExtension == 'pdf') {
          return 'file-pdf';
        } else if (imgExtensions.indexOf(fileExtension) > -1) {
          return 'file-image';
        } else if (txtExtensions.indexOf(fileExtension) > -1) {
          return 'file-alt'
        } else if (docExtensions.indexOf(fileExtension) > -1) {
          return 'file-word';
        } else if (pptExtensions.indexOf(fileExtension) > -1) {
          return 'file-powerpoint';
        } else if (xclExtensions.indexOf(fileExtension) > -1) {
          return 'file-excel';
        } else if (zipExtensions.indexOf(fileExtension) > -1) {
          return 'file-archive';
        } else if (audExtensions.indexOf(fileExtension) > -1) {
          return 'file-audio';
        } else if (vidExtensions.indexOf(fileExtension) > -1) {
          return 'file-video';
        } else if (prgExtensions.indexOf(fileExtension) > -1) {
          return 'file-code';
        }

        return 'file';
      },
      /**
       *  Navigates back to the previous page.
       */
      goBack: function(self) {
        self.$root._router.go(-1);
      },
      /**
       *  Prettifies the specified path.
       *
       *  @param  {String} path The path to pretify.
       *  @return {String}      The path, pretified.
       */
      prettyPath: path => {
        return decodeURIComponent(path);
      },
      /**
       *  Converts bytes to a human readable format.
       *
       *  @param  {int} 		 bytes  The number of bytes.
       *  @param  {boolean} binary  True if binary units, false if SI.
       *  @return {String}        	The number of bytes converted.
       */
      bytesToHumanReadable: (bytes, binary) => {
        const unit = (binary) ? 1024 : 1000;

        if (bytes < unit) {
          return bytes;
        }

        const symbols  = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
        const exponent = Math.floor(Math.log(bytes) / Math.log(unit));

        if (exponent <= symbols.length) {
          const size = bytes / Math.pow(unit, exponent);
          return size.toFixed(1) + symbols[exponent];
        }

        return bytes;
      },
      /**
       * Calculates the number of years, days, hours, minutes and seconds
       * passed since a specific date, specified in seconds.
       *
       * @param  {Int}    seconds   The total number of seconds since a date.
       * @return {Object}           The time passed in a human readable format.
       */
      timeSince: seconds => {
      	const units = {
      		years: 60 * 60 * 24 * 365,
      		days: 24 * 60 * 60,
      		hours: 60 * 60,
      		minutes: 60,
      		seconds: 1
      	};
        const translations = {
          years: 'lat',
          days: 'dni',
          hours: 'godzin',
          minutes: 'minut',
          seconds: 'seconds',
        }
      	let result = [];

      	for (let unit in units) {
      		if (seconds > units[unit]) {
            if (unit == 'seconds' && result.length > 1) {
              continue;
            }

            const str = Math.floor(seconds / units[unit]) + " " + translations[unit];
            result.push(str);
            seconds = seconds % units[unit];
      		}
      	}

      	return result.join(", ");
      }

    }

  }

};
