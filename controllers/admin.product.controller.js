var products = require('../models/model.product');
var cloudinary = require('cloudinary');

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
    products.findById(req.params.id, function (err, result) {
        res.render('admin/edits', {product: result});
    });
};

exports.postEditProducts = function (req, res) {

    var product = {
        productCode: req.body.productCode,
        name: req.body.name,
        description: req.body.description,
        images: [],
        price: req.body.price,
        material: req.body.material,
        color: req.body.color,
        capacity: req.body.capacity,
        category: req.body.loaisanpham + "/" + req.body.congDung,
        shape: req.body.shape,
        neckSize: req.body.neckSize,
        height: req.body.height,
        diameter: req.body.diameter,
        weight: req.body.weight,
        case: req.body.case,
        status: req.body.status,
    };


    if (req.files && req.files.images !== undefined) {
        for (const img of req.files.images) {
            var fileGettingUploaded = img.data;
            cloudinary.uploader
                .upload_stream(function (result, error) {
                    product.images.push(result.url);
                    console.log(product.images.length);
                    if (product.images.length >= 4) {
                        products.create(product);
                        res.redirect('/admin/products/list-products')
                    }
                }).end(fileGettingUploaded);
        }

    } else {
        console.log("Have no file");
        product.images.i = "https://www.touchtaiwan.com/images/default.jpg";
    }


    // products.findById(req.params.id, function(err, result){
    //     res.render('admin/edits',{product: result});
    // });
};


exports.update = function (req, res) {
    console.log(req.body);
    products.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, result) {
        if (err) {
            console.log("Can't update product !!");
            return
        }
        res.redirect('/products')
    });
};

exports.delete = function (req, res) {
    products.deleteOne(req.body, function (err, result) {
        if (err) {
            console.log("Can't delete product !!");
            return
        }
        res.json(result);
        console.log(result)
    });
};


