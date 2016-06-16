var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.set('views', path.join(__dirname, '/client/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname + '/client/static')));
app.use(bodyParser.urlencoded({extended: true}));

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(5050, function(){
	console.log('Now Connecting on Port 5050');
})