const 
	http = require('http'),
	urls = process.argv.slice(2);

let output = [];

function printData(output) {
	for(let i=0; i<output.length; i++) {
		console.log(output[i]);
	}
}

function makeRequest(url, index) {
	http.get(url, (res) => {
	  res.setEncoding('utf8');
	  let data = '';
	  res.on('data', (chunk) => {
	  	data += chunk;
	  });
	  res.on('end', () => {
	  	output[index] = data;
	  	if(output.length == urls.length) {
	  		printData(output);
	  	}
	  });
	  res.on('error', (e) => console.error(err));
	});
}

for(let i=0; i<urls.length; i++) {
	makeRequest(urls[i], i);
}