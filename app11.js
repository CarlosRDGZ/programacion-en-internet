// 19 de Marzo
// Call and Apply
var obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hello ${ this.name }`);
    }
}

obj.greet();
obj.greet.call({ name: 'Jane Doe' });
obj.greet.apply({ name: 'Jane Doe' });

// Inherits
var util = require('util');

function Person() {
    this.firstname = 'John';
    this.lastname = 'Doe';
}

// Concat prototypes.
Person.prototype.greet = function() {
    console.log(`Hello ${this.firstname} ${this.lastname}`);
}

function Policeman() {
    // call super;
    Person.call(this);
    this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();