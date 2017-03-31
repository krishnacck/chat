var socket = io();
var form = jQuery('#messageForm');
var message = form.find("input[name=message]");
var messagesList = jQuery('#messagesList');
var nickname = getQueryVariable('nickname');

socket.on('connect',function(){
	
});

socket.on('message',function(message){
	var timestamp = moment.utc(message.timestamp);
	messagesList.append('<li><b class="badge">'+message.name+'</b> '+message.text+'<small>'+timestamp.local().format('h:mm a')+'</small></li>');

	/* scroll automatically*/
	var msgDiv = document.getElementById('messages-container');
	msgDiv.scrollTop = msgDiv.scrollHeight;
	/*scroll automatically*/

	});

form.on('submit',function (event) {
	event.preventDefault();

	socket.emit('message',{
		text : message.val(),
		name : nickname,
	});
	message.val('');
});