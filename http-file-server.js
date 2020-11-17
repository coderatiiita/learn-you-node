const 
    http = require('http'),
    fs = require('fs'),
    port = Number(process.argv[2]),
    fileName = process.argv[3];
const server = http.createServer(function (req, res) {
    let stream = fs.createReadStream(fileName);
    stream.pipe(res);
});

server.listen(port);