// // Importing events
// const EventEmitter = require('events');
   
// // Initializing event emitter instances 
// var eventEmitter = new EventEmitter();
  
// // Registering to myEvent 
// eventEmitter.on('myEvent', (msg) => {
//    console.log(msg);
// });
  
// // Triggering myEvent
// eventEmitter.emit('myEvent', "First event");

// Importing events
const EventEmitter = require('events');
  
// Initializing event emitter instances 
var eventEmitter = new EventEmitter();
   
var fun1 = (msg) => {
    console.log("Message from fun1: " + msg);
};
   
var fun2 = (msg) => {
    console.log("Message from fun2: " + msg);
};
  
// Registering fun1 and fun2
eventEmitter.addListener('myEvent', fun1);
eventEmitter.addListener('myEvent', fun1);
eventEmitter.addListener('myEvent', fun2);
   
// Removing listener fun1 


eventEmitter.removeListener('myEvent');
   
// Triggering myEvent
eventEmitter.emit('myEvent', "Event occurred");
  
// Removing all the listeners to myEvent
eventEmitter.removeAllListeners('myEvent');
  
// Triggering myEvent
eventEmitter.emit('myEvent', "Event occurred");