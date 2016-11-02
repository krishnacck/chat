var socket = io();
var form = jQuery('#messageForm');
var message = form.find("input[name=message]");
var messagesList = jQuery('#messagesList');

socket.on('connect',function(){
	
});

socket.on('message',function(message){
	messagesList.append('<p>'+message.text+'</p>');
});

form.on('submit',function (event) {
	event.preventDefault();

	socket.emit('message',{
		text : message.val(),
	});
	messagesList.append('<p>'+message.val()+'</p>')
	message.val('');
});