//require express
var express = require('express');
var path = require('path');

// create our router object
var router = express.Router();

module.exports = router;

//route for our homepage
router.get('/' , function(req,res){
	res.render('pages/index');
});

//route for about
router.get('/about' , function(req,res){
	var users = [
	{ name: 'darkguyy', email: 'darkguyy@techengers.com', avatar: 'http://placekitten.com/g/700/700'},
	{ name: 'kaiserkumars', email: 'kaiserkumars@techengers.com', avatar: 'http://placekitten.com/g/500/500'},
	{ name: 'rk47', email: 'rk47@techengers.com', avatar: 'http://placekitten.com/g/300/300'},
	{ name: 'warrior-king', email: 'warrior-king@techengers.com', avatar: 'http://placekitten.com/g/400/400'}
	];
	res.render('pages/about' , {users : users});
});

// route for contact page
router.get('/contact',function(req,res){
	res.render('pages/contact');
});
router.post('/contact',function(req,res){
	res.send('Thanks for contacting us, ' + req.body.name + "! We will respond you shortly !");
});