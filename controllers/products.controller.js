var products = require('../models/model.product');


exports.categories = function (req, res) {
    var perPage = 9;
    var page = (req.params.page).split('-')[1] || 1;

    products
        .find()
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec(function (err, product) {
            products.countDocuments().exec(function (err, count) {
                if (err) throw err;

                res.render('client/categories.ejs', {
                    products: product,
                    current: page,
                    pages: Math.ceil(count / perPage)
                })

            })
        })

};

exports.detail = function (req, res) {
    products.findById(req.params.id, function (err, result) {
        if (err) throw err;
        products.find({"category": {$regex: result.category + '.*'},"_id": { $ne: result._id } })
            .limit(4)
            .exec(function (err, data) {
            res.render('client/product', {
                product: result,
                relateProducts: data
            });
            console.log({
                product: result,
                relateProducts: data
            })
        });

    });

};




