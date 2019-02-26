var products = require('../models/model.product');


exports.categories= function (req, res) {
    products.find().exec(function (err, products) {
        if (err) {
            console.log("Không lấy được dữ liệu products!!");
            return;
        }
        res.render('client/categories.ejs', {products: products});

    });
};

exports.detail = function (req, res) {
    products.findById(req.params.id, function(err, result){
        res.render('client/product',{product: result});
    });
};




