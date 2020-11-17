const fs = require('fs');
const fileName = process.argv[2];

fs.readFile(fileName, 'utf-8', cb);

function cb(err, data) {
	if(err) {
		console.log('failed to read file');
		return;
	}
	const breakOnNewLine = data.split('\n');
	console.log(breakOnNewLine.length-1);
}