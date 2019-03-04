var mongoose = require('mongoose');

var messenger = new mongoose.Schema({
    nameContact: String,
    emailContact: String,
    numberPhoneContact: Number,
    messageContact: String,
    date: String,
    status: {
        type: Number,
        default: 1
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },


});

module.exports = mongoose.model('messenger', messenger);
