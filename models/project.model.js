const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({

    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    projectName: {
        type: String,
        required: true,
    },
    projectDesc: {
        type: String,
        required: true,
    }
}, { timestamps: true});

module.exports = mongoose.model('Project', projectSchema);
