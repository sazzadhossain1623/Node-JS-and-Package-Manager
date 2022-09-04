const events = require('events');

const eventEmitter = new events.EventEmitter();

// creating an event handler

const willDoScream = () =>{
    console.log('Where the hell are you?? I am standing here for last 2 hours!!')
}

// assign the handler into an event
eventEmitter.on('scream', willDoScream).willDoScream

// firing the event

eventEmitter.emit('scream')