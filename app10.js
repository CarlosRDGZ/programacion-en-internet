var EventEmmiter = require('events');
var util = require('util');

// Function constructor
function Greetr() {
    this.greeting = 'Hello World'
}

// Greetr extends EventEmmiter
util.inherits(Greetr, EventEmmiter);

Greetr.prototype.greet = function() {
    console.log(this.greeting);
    this.emit('greet');
}

var greeter1 = new Greetr();

greeter1.on('greet', function() {
    console.log('Someone greeted!');
});

greeter1.greet();