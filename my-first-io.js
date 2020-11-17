const fs = require('fs');

let buffer = fs.readFileSync(process.argv[2]);
let fileContents = buffer.toString();
let splitOnNewLine = fileContents.split('\n');
console.log(splitOnNewLine.length -1);