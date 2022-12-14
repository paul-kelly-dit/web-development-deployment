const http = require('http');

const hostname = '0.0.0.0';
const port = 3500;

const server = http.createServer((req, res) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});