const 
    http = require('http'),
    port = Number(process.argv[2]),
    map = require('through2-map');

const server = http.createServer((req, res) => {
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(port);