var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var users = [];

app.configure(function() {

  app.set('port', (process.env.PORT || 5000));
  app.use(express.static(__dirname + '/public'));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());

});

io.on('connection', function(socket){

  console.log('new user connected');

  socket.on('disconnect', function(){

    console.log('user disconnected');

    socket.broadcast.emit('disconectUser', socket.id);

    for(var key in users) {

      if(users[key].id === socket.id) {

        users.splice(key,1);

      }

    }

  });

  socket.on('addUser', function (data) {

    var user = {
      id: socket.id,
      name: data.user
    }

    users.push(user);

    socket.emit('userConects', users);
    socket.broadcast.emit('userConects', users);

  });

  socket.on('loadUsers', function () {

    if(users){

      socket.emit('userConects', users);

    }

  });

});

http.listen(app.get('port'), function(){

  console.log('listening on http://localhost:3000');

});