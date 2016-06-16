var mongoose = require('mongoose');

var ducksSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 2},
	type: {type: String, required: true, minlength: 2}
}, {timestamps: true});

var duck = mongoose.model('ducks', ducksSchema);