var mongoose = require('mongoose');

var products = new mongoose.Schema({
    name: String, // tên sản phẩm
    image: String, // ảnh demo
    images: String, // ảnh chi tiết
    description: String, // mô tả chung
    unitPrice: String, // đơn giá
    quantity: String, // số lượng
    material: String, //chất liệu
    color: String, // màu sắc
    capacity: String, // sức chứa
    status: String, // tình trạng hàng
    reviewProduct: String, // đánh giá sản phẩm
    shape: String, // hình dạng sản phẩm
    neckSize: String, // kích thước cổ chai
    height: String, // chiều cao sản phẩm
    diameter: String, // đường kính sản phẩm
    weight: String, // cân nặng sản phẩm
    case: String, // vỏ sản phẩm
    productCode: String, // mã sản phẩm
    productDetail: String //  chi tiết về sản phẩm
});

module.exports = mongoose.model('product', products);
