var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname+'/public'));

io.on('connection',function(socket){
	console.log('connection established on socket.io');
	
	socket.on('message',function(message){
		socket.broadcast.emit('message',message);
		console.log(message.text);
	});
	socket.emit('message',{
		text: 'Connected to the Server',
	});
});

http.listen(PORT,function(){
	console.log('Server Started at port '+PORT);
});