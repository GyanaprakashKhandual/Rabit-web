const mongoose = require('mongoose');

const apiData = new mongoose.Schema({

    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    apiName: {
        type: String,
        required: true
    },
    networkType: {
        type: String,
        required: true,
        enum: ['1KB - 1MB', '1MB - 10MB', '10MB - 20MB', '20MB - 40MB', '40MB - 60MB', '60MB - 80MB', 'Above 80MB']
    },
    apiLink: {
        type: String,
        required: true
    },
    testResult: {
        type: mongoose.Types.ObjectId,
        ref: "K6Result",
        required: true
    }
}, { timestamps: true});

module.exports = mongoose.model('ApiData', apiData);