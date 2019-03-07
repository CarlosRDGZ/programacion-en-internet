function Person(fn, ln) {
  this.firstname = fn;
  this.lastname = ln;
}

Person.prototype.greet = function() {
  console.log(`Hello, ${this.firstname} ${this.lastname}`);
}

let john = new Person('John', 'Doe');
// console.log(john);
john.greet();

let jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);

// Pramaters by value and by reference
function change(b) {
  b = 2;
}

var a = 1;
change(a);
console.log(a);


function changeObj(d) {
  d.prop1 = function () {};
  d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);
