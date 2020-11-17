const 
    http = require('http'),
    port = Number(process.argv[2]),
    url = require('url');

function formatDate(date) {
    return {
        hour : date.getHours(),
        minute : date.getMinutes(),
        second : date.getSeconds()
    };
}

function formatUnix(date) {
    return {
        unixtime : date.getTime()
    };
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'application/json'});

    let urlObj = url.parse(req.url, true);

    let route = urlObj.pathname;
    let date = new Date(urlObj.query.iso);
    let data = '';

    if(route == '/api/parsetime') {
        data = formatDate(date);
    } else if(route == '/api/unixtime') {
        data = formatUnix(date);
    }
    res.end(JSON.stringify(data));
});

server.listen(port);