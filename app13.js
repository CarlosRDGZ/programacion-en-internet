'use strict'

// 28 de marzo

function greet(cb) {
    console.log('Hello!');
    var data = { name: 'John Doe' };
    cb(data);
}

greet(function(data) {
    console.log('The callback was invoked!');
    console.log(data);
});

greet(function(data) {
    console.log('A differenet callback was invoked!');
    console.log(data.name);
});

