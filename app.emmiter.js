// var Emmiter = require('./emitter');
var Emmiter = require('events');
const eventConfig = require('./config').events;

var emtr = new Emmiter();

emtr.on(eventConfig.GREET, function() {
    console.log('Somewhere, someone said hello');
});

emtr.on(eventConfig.GREET, function() {
    console.log('Somewhere, someone said hello');
});

emtr.on(eventConfig.GREET, function() {
    console.log('A greet ocurred');
});

console.log('Hello');
emtr.emit(eventConfig.GREET);