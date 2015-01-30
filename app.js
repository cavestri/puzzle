var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);



app.configure(function() {

  app.set('port', (process.env.PORT || 5000));
  app.use(express.static(__dirname + '/public'));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());

});

io.on('connection', function(socket){

  console.log('a user connected');

  socket.on('disconnect', function(){

    console.log('user disconnected');

  });

  socket.on('addUser', function (data) {

    socket.emit('userConects',data.user)

  });

});

http.listen(app.get('port'), function(){

  console.log('listening on http://localhost:3000');

});