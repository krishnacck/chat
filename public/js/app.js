var socket = io();
var form = jQuery('#messageForm');
var message = form.find("input[name=message]");
var messagesList = jQuery('#messagesList');

socket.on('connect',function(){
	
});

socket.on('message',function(message){
	var timestamp = moment.utc(message.timestamp);
	messagesList.append('<h4><small>'+timestamp.local().format('h:mm a')+'</small> '+message.text+'</h4>');
});

form.on('submit',function (event) {
	event.preventDefault();

	socket.emit('message',{
		text : message.val(),
	});
	message.val('');
});