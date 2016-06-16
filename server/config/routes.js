var mongoose = require('mongoose');
var duck = mongoose.model('ducks');
var ducks = require('../controllers/conducks.js');

module.exports = function(app){
	app.get('/', function(request, response){
		ducks.showAll(request, response);
	})

	app.get('/ducks/new', function(request, response){
		response.render('newDuck');
	})

	app.get('/ducks/:id', function(request, response){
		ducks.showOne(request, response);
	})


	app.post('/ducks', function(request, response){
		ducks.create(request, response);
	})

	app.get('/ducks/:id/edit', function(request, response){
		ducks.edit(request, response);
	});

	app.post('/ducks/:id', function(request, response){
		ducks.update(request, response);
	});

	app.post('/ducks/:id/destroy', function(request, response){
		ducks.delete(request, response);
	});	
}