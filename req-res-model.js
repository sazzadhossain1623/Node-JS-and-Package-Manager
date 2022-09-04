// local module
const other = require('./other')

// const res = other.substract(5,4);
// console.log(res);

var http = require('http');
const { stringify } = require('querystring');

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(JSON.stringify({course: "ACC"}));
        res.end();
    }
    else if(req.url == '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<p>This is Contact Page.</p>');
        res.end();
    }
    else if(req.url == '/about-us'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<p>This is About US Page.</p>');
        res.end();
    }
})

const PORT = 5000;
server.listen(PORT);

console.log(`Server is Running at ${PORT}`);