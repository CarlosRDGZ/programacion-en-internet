var http = require('http');
var fs = require('fs')

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var html = fs.readFileSync(`${__dirname}/index.htm`, 'utf8');
    var message = 'Hello World!...';
    res.end(html.replace('{Message}', message));
}).listen(1337, '127.0.0.1');