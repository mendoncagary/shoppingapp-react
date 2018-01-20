
//server.js
'use strict'
//first we import our dependencies…
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//and create our instances
var app = express();
var router = express.Router();
//set our port to either a predetermined port number if you have set 
//it up, or 3001
var port = process.env.API_PORT || 3001;

//db config
mongoose.connect('mongodb://garylm:asdfg@ds263137.mlab.com:63137/shopping-app')

var Login = require('./model/logins');
var Product = require('./model/products');
//now we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});
//now we can set the route path & initialize the API
router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});


router.route('/login')
 
 .post(function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
 
 Login.findOne({username: username, password: password},function(err, user) {
 if (err)
 res.send(err);
 console.log(user)
 if(user)
 {//responds with a json object of our database comments.
 res.json({ message: 'Login Successful' })
 }
 else{
    res.status(204);
    res.json({ message: 'Login Failed' })

 }
 });
 })




router.route('/products')
 
.get(function(req, res) {
 Product.find(function(err, products) {
 if (err)
 res.send(err);
 res.json(products)
 });
 })
 
 .post(function(req, res) {
 var product = new Product();

 product.name = req.body.name;
 product.description = req.body.description;
 product.price = req.body.price;
 product.variants = req.body.variants;
product.save(function(err) {
 if (err)
 res.send(err);
 res.json({ message: 'Product successfully added!' });
 });
 });

 router.route('/products/:product_id')
//The put method gives us the chance to update our product based on 
//the ID passed to the route
 .put(function(req, res) {
 Product.findById(req.params.product_id, function(err, product) {
 if (err)
 res.send(err);
 //setting the new name and description to whatever was changed. If 
//nothing was changed we will not alter the field.
 (req.body.name) ? product.name = req.body.name : null;
 (req.body.description) ? product.description = req.body.description : null;
 (req.body.price) ? product.price = req.body.price : null;
 //save product
 product.save(function(err) {
 if (err)
 res.send(err);
 res.json({ message: 'Product has been updated' });
 });
 });
 })
 //delete method for removing a product from our database
 .delete(function(req, res) {
 //selects the product by its ID, then removes it.
 Product.remove({ _id: req.params.product_id }, function(err, product) {
 if (err)
 res.send(err);
 res.json({ message: 'Product has been deleted' })
 })
 });

//Use our router configuration when we call /api
app.use('/api', router);
//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});