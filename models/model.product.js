var mongoose = require('mongoose');

var products = new mongoose.Schema({
    productCode: String, // mã sản phẩm
    name: String, // tên sản phẩm
    images: {            // ảnh
        imgage1: String,
        imgage2: String,
        imgage3: String,
        imgage4: String
    },
    description: String, // mô tả chung
    price: String, // giá
    material: String, //chất liệu
    color: String, // màu sắc
    capacity: String, // sức chứa
    reviewProduct: String, // đánh giá sản phẩm
    shape: String, // hình dạng sản phẩm
    neckSize: String, // kích thước cổ chai
    height: String, // chiều cao sản phẩm
    diameter: String, // đường kính sản phẩm
    weight: String, // cân nặng sản phẩm
    case: String, // vỏ sản phẩm
    status: String, // tình trạng hàng

});

module.exports = mongoose.model('product', products);
