var events = require('events');
var eventEmitter = new events.EventEmitter();

var eh = function() {
    console.log('WHY HAVE I BEEN SUMMONED???!!!')
}

eventEmitter.on('invoke', eh);

eventEmitter.emit('invoke');