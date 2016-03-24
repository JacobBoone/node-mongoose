var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var indexController = require('./controllers/index.js');
var mongoose = require('mongoose');

var routes =require('./routes/index');

var app = express();
mongoose.connect('mongodb://localhost/node-mongoose');

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

//pages
app.use('/', routes);

var server = app.listen(3000, function() {
	console.log('Express server listening on port ' + server.address().port);
	//this below allows the server to stay on while 'catching' and logging the error
	process.on('uncaughtException', function (err) {
	    console.log(err);
	}); 


});

