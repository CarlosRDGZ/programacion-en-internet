'use strict';

// 19 de marzo
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    
    greet() {
        console.log(`Hello, ${this.firstname} ${this.lastname}`);
    }
}

let john = new Person('John', 'Doe');
john.greet();

let jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);