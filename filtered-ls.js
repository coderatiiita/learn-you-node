const 
	fs = require('fs'),
	path = require('path'),
	dirName = process.argv[2];
let
	ext = '.' + process.argv[3];

//console.log(dirName + ' ' + ext);
fs.readdir(dirName, cb);

function cb(err, listOfFiles) {
	if(err) return console.log('error');
	//console.log(listOfFiles);
	for(file of listOfFiles) {
		//console.log(path.extname(file));
		if(path.extname(file) === ext) {
			console.log(file);
		}
	}
}