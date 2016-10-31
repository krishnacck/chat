var socket = io();

socket.on('connect',function(){
	console.log('Front end started');
});

socket.on('message',function(message){
	console.log(message.text);
});