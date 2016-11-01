var socket = io();
var form = jQuery('#messageForm');
var message = form.find("input[name=message]");
var messagesList = jQuery('#messagesList');

socket.on('connect',function(){
	console.log('Front end started');
});

socket.on('message',function(message){
	messagesList.append('<p>'+message.text+'</p>');
});



form.on('submit',function (event) {
	event.preventDefault();

	socket.emit('message',{
		text : message.val(),
	});
	message.val('');
});