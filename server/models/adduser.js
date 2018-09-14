const mongoose = require('mongoose');
const _ = require('lodash');

// User Schema
var adduserSchema = mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
    },
    email: {
        type: String,
        required: true
    },
    paasword: {
        type: String,
        required: true
    },
	dateOfBirth: {
		type: String,
		required: true,
	},
	gender: {
		type: Boolean,
		required: true,
		default: true
	},
	lastUpdate: {
		type: Number,
		required: true
	}
});

module.exports = mongoose.model('User', adduserSchema);