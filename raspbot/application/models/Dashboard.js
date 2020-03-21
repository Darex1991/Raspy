'use strict'

exports.getSystemInformation = () => {
	return new Promise((resolve, reject) => {
		if (process.env.NODE_ENV != 'production') {
			setTimeout( () => {
				resolve({
					disk: {
						total: "3763929088",
						free: "1692561408",
						used: "1887916032",
						percentage_used: "52.7"
					},
					uptime: {
						total_seconds: "13613.325036"
					},
					ram: {
						available: "301355008",
						total: "453718016",
						percent: "33.6",
						used: "101683200"
					},
					temperature: "43.3",
					cpu: "100.0"
				})
			}
					, 5000
			)
		}

	else {
			const pyshell = require('python-shell');
			const options = { mode: 'json', args: [], scriptPath: './application/.scripts' };
			pyshell.run('sysinfo.py', options, (error, response) => {
				if (error) {
					reject(error);
				} else {
					resolve(response[0]);
				}
			});
		}
	});
};

exports.getTempInformation = () => {
	return new Promise((resolve, reject) => {
		if (process.env.NODE_ENV != 'production') {
			setTimeout(() => { resolve({ temperature: 22, time: '18/03/2020, 19:27:59', is_open: false })}, 5000);
		}
		else {
			const pyshell = require('python-shell');
			const options = { mode: 'json', args: [], scriptPath: '../../boot/programs' };
			pyshell.run('pokaz_temp.py', options, (error, response) => {
				if (error) {
					reject(error);
				} else {
					resolve(response[0]);
				}
			});
		}
	});
};

exports.getMinTempInformation = () => {
	return new Promise((resolve, reject) => {
		if (process.env.NODE_ENV != 'production') {
			setTimeout(() => { resolve({ min_temp: 22 })}, 5000);
		}
		else {
			const pyshell = require('python-shell');
			const options = { mode: 'json', args: [], scriptPath: '../../boot/programs' };
			pyshell.run('pokaz_min_temp.py', options, (error, response) => {
				if (error) {
					reject(error);
				} else {
					resolve(response[0]);
				}
			});
		}
	});
};

exports.updateMinTempInformation = (minTemp) => {
	return new Promise((resolve, reject) => {
		if (process.env.NODE_ENV == 'production') {
			const pyshell = require('python-shell');
			const options = { mode: 'json', args: [minTemp], scriptPath: '../../boot/programs' };
			pyshell.run('update_temp.py', options, (error, response) => {
				if (error) {
					reject(error);
				} else {
					resolve(response[0]);
				}
			});
		}
	});
};
