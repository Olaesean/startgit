var opn = require('opn');
var http = require('http');

http.createServer(function (req, res) {
res.end('Hello World\n');
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');

opn('http://127.0.0.1:3000/');