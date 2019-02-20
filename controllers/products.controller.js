var products = require('../models/model.product');

exports.categories= function (req, res) {
    products.find().exec(function (err, products) {
        if(err){
            console.log("Không lấy được dữ liệu products!!")
            return;
        }
        res.render('client/categories.ejs', {products: products});

    });
};

exports.details = function (req, res) {
    res.render('client/product');
};

exports.detail = function (req, res) {
    products.findById(req.params.id, function(err, result){
        res.render('products/details',{product: result});
    });
};


exports.update = function (req, res) {
    console.log(req.body);
    products.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, result) {
        if (err) {
            console.log("Can't update product !!");
            return
        }
        res.redirect('/products')
    });
};

exports.delete = function (req, res) {
    products.deleteOne(req.body, function (err, rusult) {
        if(err){
            console.log("Can't delete product !!");
            return
        }
        res.json('ok');
});
};


