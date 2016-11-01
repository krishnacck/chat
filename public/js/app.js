var socket = io();

socket.on('connect',function(){
	console.log('Front end started');
});

socket.on('message',function(message){
	console.log(message.text);
});

var form = jQuery('#messageForm');
var message = form.find("input[name=message]");

form.on('submit',function (event) {
	event.preventDefault();

	socket.emit('message',{
		text : message.val(),
	});
	message.val('');
});