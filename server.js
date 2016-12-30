// var http = require('http');

// function handleRequests(req, res){
// 	res.end('Hello World');
// }

// var server = http.createServer(handleRequests);

// server.listen(8080, function(){
// 	console.log('Listening on port 8080');
// });


/////// EXPRESS ////////

var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();
var port = 8080;

// use ejs and express layouts
app.set('view engine','ejs');
app.use(expressLayouts);

//user body-parser
app.use(bodyParser.urlencoded());

// route for our app
var router = require('./app/routes');
app.use('/',router);

// route for our static html/css files
app.use(express.static(__dirname + '/public'));

//start server
app.listen(port , function(){
	console.log('App started...');
});


