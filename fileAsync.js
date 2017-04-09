var fs = require('fs');

fs.readFile('file.txt','utf8', function(error, text){
            console.log(text);
});

console.log("After First Read\n");

fs.readFile('file2.txt','utf8', function(error, text){
            console.log(text);
});

console.log("After Second Read\n");
