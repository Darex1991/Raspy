'use strict'
const dashboard = require('../models/Dashboard.js');

exports.systemInformation = (req, res) => {
	dashboard.getSystemInformation().then(response => {
		res.json({success: true, result: response});
	}).catch(error => {
		res.status(500).json({success: false, error: error.message});
	});
};

exports.tempInformation = (req, res) => {
	dashboard.getTempInformation().then(response => {
		res.json({success: true, result: response});
	}).catch(error => {
		res.status(500).json({success: false, error: error.message});
	});
}

exports.minTempInformation = (req, res) => {
	dashboard.getMinTempInformation().then(response => {
		res.json({success: true, result: response});
	}).catch(error => {
		res.status(500).json({success: false, error: error.message});
	});
};

exports.updateMinTempInformation = (req, res) => {

	console.log(req.body.temp);
	dashboard.updateMinTempInformation(req.body.temp).then(response => {
		res.json({success: true, result: response});
	}).catch(error => {
		res.status(500).json({success: false, error: error.message});
	});
}
