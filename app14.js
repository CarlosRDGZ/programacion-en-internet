var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

// Pasar el encoding convierte automaticamente a string
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', (err, data) => {
    console.log(data);
});

console.log('Done!')