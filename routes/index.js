var express = require('express');
var router = express.Router();
var Vehicle = require('../models/vehicle');

/*GET home page*/

router.get('/', function(req,res){
	res.render('index', {title: 'Express'});
});


router.get('/newVehicle', function(req, res){
	//Create a new vehicle object
	var newVehicle = new Vehicle({
		name: 'My Fun Car',
		color: 'Blue'
	});
	res.send(newVehicle);
	//store it in the DB
	//redirect back to homepage
});

module.exports = router;