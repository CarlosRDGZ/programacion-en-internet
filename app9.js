var person = {
    firstaname: '',
    lastname: '',
    greet: function() {
        return `${this.firstaname} ${this.lastname}`;
    }
}

var john = Object.create(person);
john.firstaname = 'John';
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstaname = 'Jane';
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());