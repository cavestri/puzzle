var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.set('port', (process.env.PORT || 5000));

app.configure(function() {

	app.use(express.static(__dirname + '/public'));
	app.use(express.logger('dev'));
	app.use(express.bodyParser());

});

app.get('/', function (req, res) {

	res.render('index');

});

io.on('connection', function (socket) {

	socket.emit('news', { hello: 'world' });

	socket.on('my other event', function (data) {

			console.log(data);

	});

});

app.listen(app.get('port'), function() {
	console.log("App is running at localhost:" + app.get('port'));
});