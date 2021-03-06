const express = require('express');
const ejs = require('ejs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var productRouter = require('./routers/products.route');
var ad_productRouter = require('./routers/admin.products.route');
var otherRouter = require('./routers/other.route');
var products = require('./models/model.product');
const fileUpload = require('express-fileupload');
var cloudinary = require('cloudinary');

mongoose.connect('mongodb://chailo:chailo123@ds163014.mlab.com:63014/mydb', { useNewUrlParser: true });

const app = express();
var post = process.env.PORT || 3000;

cloudinary.config({
    cloud_name: 'aptechaaa',
    api_key: '526575171756629',
    api_secret: 'eZ2NHOdPR_pXU9rThNe1W6ewEfQ'
});

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/products', productRouter);
app.use('/admin/products', ad_productRouter);
app.use('/', otherRouter);

app.get('/',function (req, res) {
    products.find().exec(function (err, products) {
        res.render('client/home', {products: products});
    });
});


app.get('/admin',function (req, res) {
    res.render('admin/index.ejs');
});




app.listen(post, () => console.log("Chạy thành Công ở cổng " + post));