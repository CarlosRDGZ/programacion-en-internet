var EventEmmiter = require('events');
class Greetr extends EventEmmiter {
    constructor() {
        super();
        this.greeting = 'Hello World';
    }

    greet() {
        console.log(this.greeting);
        this.emit('greet');
    }
}

var greeter1 = new Greetr();
greeter1.on('greet', function() {
    console.log('Someone greeted!');
});

greeter1.greet();