var person = {
  firstname: 'John',
  lastname: 'Doe',
  'foo bar': 1,
  greet: function() {
    console.log(`Hello!, ${this.firstname} ${this.lastname}`);
  }
}

person.greet();
console.log(person['foo bar']);
console.log(person['firstname']);
