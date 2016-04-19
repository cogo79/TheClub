var express = require('express'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	db = require('./models/index');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/partials/:partialPath', function(req, res) {
	res.render('partials/' + req.params.partialPath);
});

app.get('*', function(req, res) {
	res.render('index', {
		
	});
});

var port = process.env.PORT || 3030;
app.listen(port);
console.log('Listening on port ' + port + '...');