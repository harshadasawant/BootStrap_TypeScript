// Importing events
const e1 = require('events');
   
// Initializing event emitter instances 
var eventEmitter = new e1();
  
// Registering to myEvent 
eventEmitter.on('myEvent', (msg) => {
   console.log(msg);
});

eventEmitter.on('myEvent1', (msg) => {
    console.log("======"+msg);
 });
  
// Triggering myEvent
eventEmitter.emit('myEvent', "First event");
eventEmitter.emit('myEvent', "First event different mesg");
eventEmitter.emit('myEvent1', "First event1");
