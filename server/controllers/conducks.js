var mongoose = require('mongoose');
var duck = mongoose.model('ducks');

module.exports = {
	showAll: function(request, response){
		duck.find({}, function(err, ducks){
			if(err){
				response.json(err);
			}
			else{
				response.render('index', {ducks: ducks});
			}
		})
	},
	showOne: function(request, response){
		duck.findOne({_id: request.params.id}, function(err, oneduck){
			if(err){
				response.json(err);
			}
			else{
				response.render('oneDuck', {oneduck: oneduck});
			}
		})
	},	
	create: function(request, response){
		var newDuck = new duck(request.body);

		newDuck.save(function(err){
			if(err){
				response.json(err);
			}
			else{
				response.redirect('/');
			}
		})
	},
	edit: function(request, response){
		duck.findOne({_id: request.params.id}, function(err, oneduck){
			if(err){
				response.json(err);
			}
			else{
				response.render('editDuck', {oneduck: oneduck});
			}
		})
	},	
	update: function(request, response){
		duck.update({_id: request.params.id}, request.body, function(err, oneduck){
			if(err){
				response.json(err);
			}
			else{
				response.redirect('/');
			}
		})
	},
	delete: function(request, response){
		duck.remove({_id: request.params.id}, function(err){
			if(err){
				response.json(err);
			}
			else{
				response.redirect('/');
			}
		})
	}
}