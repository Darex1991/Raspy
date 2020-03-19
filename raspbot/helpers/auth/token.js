'use strict'
const Memory = require('lowdb/adapters/Memory');
const lowdb  = require('lowdb')(new Memory());

lowdb.defaults({ tokens: [] }).write();
// Clean up tokens older than 24 hours every day

exports.generate = callback => {
	require('crypto').randomBytes(24, (error, buffer) => {
		if (error) {
			callback(error, null);
		} else {
			callback(null, buffer.toString('hex'));
		}
	});
};

exports.save = (token, clientIP, username, userType) => {
	lowdb.get('tokens').push({
		token: token,
		clientIP: clientIP,
		username: username,
		userType: userType,
		loggedIn: new Date()
	}).write();
};

exports.check = (token, clientIP) => {
	const credentials = lowdb.get('tokens').find({ token: token }).value();
	if (credentials && credentials.clientIP == clientIP) {
		return true;
	}

	return false;
};

exports.getUsernameFromToken = token => {
	const credentials = lowdb.get('tokens').find({ token: token }).value();
	if (credentials && credentials.username) {
		return credentials.username;
	}

	return null;
};
