var mongoose = require('mongoose');


var vehicleSchema = mongoose.Schema({
	name: String,
	color: String
});


var Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;