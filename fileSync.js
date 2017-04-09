var fs = require('fs');
var text = fs.readFileSync('file.txt','utf8');

console.log(text);

console.log("After First Read\n");
text = fs.readFileSync('file2.txt','utf8');

console.log(text);
console.log("After Second Read\n");

