var socket = io.connect();

socket.emit('loadUsers');

socket.on('userConects', function (data) {
	$('#connectedUsers').empty();
	for (var i = 0; i < data.length; i++) {
		$('#connectedUsers').append('<li id="' + data[i].id + '"><p>' + data[i].name + '</p></li>');
	}
});

$('#puzzleBattle').on('click', function () {
	var newUser = window.prompt('Enter your name : ');
	socket.emit('addUser', { user : newUser });
});

socket.on('disconectUser', function (data) {
	$('#'+data).remove();
});

socket.on('progressBars', function (data) {
	console.log(data);
});
