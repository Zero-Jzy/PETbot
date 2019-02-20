var products = require('../models/model.product');

exports.create = function (req, res) {
    res.render('products/create.products.ejs');
};

exports.listProducts = function (req, res) {
    products.find().exec(function (err, products) {
        res.render('admin/list-products', {products: products});
    });
};

exports.postCreate = function (req, res) {
    products.create(req.body);
    console.log(req.body);
    res.redirect('/products')
};

exports.editProducts = function (req, res) {
    products.findById(req.params.id, function(err, result){
        res.render('admin/edits',{product: result});
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
    products.deleteOne(req.body, function (err, result) {
        if(err){
            console.log("Can't delete product !!");
            return
        }
        res.json(result);
        console.log(result)
    });
};


