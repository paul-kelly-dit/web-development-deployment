const EventEmitter = require('events');

const myEmitter = new EventEmitter();

let n = 0;
someFunction = function (){
    n++
    console.log(`Value of n is: ${n}`);
}

myEmitter.on('event-a', someFunction);

myEmitter.emit('event-a');
myEmitter.emit('event-b');
myEmitter.emit('event-c');