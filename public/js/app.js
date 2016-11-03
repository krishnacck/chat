var socket = io();
var form = jQuery('#messageForm');
var message = form.find("input[name=message]");
var messagesList = jQuery('#messagesList');
var nickname = getQueryVariable('nickname');

socket.on('connect',function(){
	
});

socket.on('message',function(message){
	var timestamp = moment.utc(message.timestamp);
	messagesList.append('<h5><small>'+timestamp.local().format('h:mm a')+'</small> <b>'+message.name+'</b> :- '+message.text+'</h5>');
});

form.on('submit',function (event) {
	event.preventDefault();

	socket.emit('message',{
		text : message.val(),
		name : nickname,
	});
	message.val('');
});

window.onbeforeunload = function(){
	alert('you cannot refresh');
}