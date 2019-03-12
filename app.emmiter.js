// var Emmiter = require('./emitter');
var Emmiter = require('events');

var emtr = new Emmiter();

emtr.on('greet', function() {
    console.log('Somewhere, someone said hello');
});

emtr.on('greet', function() {
    console.log('Somewhere, someone said hello');
});

emtr.on('greet', function() {
    console.log('A greet ocurred');
});

console.log('Hello');
emtr.emit('greet');