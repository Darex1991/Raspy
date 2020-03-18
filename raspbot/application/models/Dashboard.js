'use strict'

exports.getSystemInformation = () => {
	return new Promise((resolve, reject) => {
		const pyshell = require('python-shell');
		const options = { mode: 'json', args: [], scriptPath: './application/.scripts' };
		pyshell.run('sysinfo.py', options, (error, response) => {
			if (error) {
				reject(error);
			} else {
				resolve(response[0]);
			}
		});
	});
}

exports.getTempInformation = () => {
	return new Promise((resolve, reject) => {
		const pyshell = require('python-shell');
		const options = { mode: 'json', args: [], scriptPath: '../../boot/programs' };
		pyshell.run('../../boot/programs/pokaz_temp.py', null, (error, response) => {
			if (error) {
				reject(error);
			} else {
				console.log('response', response);
				resolve(response[0]);
			}
		});
	});
}
