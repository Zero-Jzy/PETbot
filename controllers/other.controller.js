var messengers = require('../models/model.messenger');

exports.contact = function (req, res) {
    res.render('client/contact.ejs')
};

exports.about_us = function (req, res) {
    res.render('client/about-us.ejs')

};

exports.mailbox = function (req, res) {
    messengers.find().exec(function (err, messengers) {
        res.render('admin/mailbox.ejs', {messengers: messengers});
    });
};

exports.postContact = function (req, res) {
    function formatDate(date) {
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        return day + '/' + (monthIndex + 1) + '/' + year;
    }

    var messenger = {
        nameContact: req.body.nameContact,
        emailContact: req.body.emailContact,
        numberPhoneContact: req.body.numberPhoneContact,
        messageContact: req.body.messageContact,
        date: formatDate(new Date())
    };

    messengers.create(messenger, function () {
        res.redirect('/contact');
    });
};