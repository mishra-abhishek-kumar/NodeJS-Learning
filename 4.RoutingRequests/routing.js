const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/node') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>NodeJS</title></head>');
        res.write('<body><h1>Welcome to my NodeJS project</h1></body>');
        res.write('</html>');
        res.end();
    } else if (url === '/home') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body><h1>Welcome Home !!</h1></body>');
        res.write('</html>');
        res.end();
    } else if (url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>About US</title></head>');
        res.write('<body><h1>Welcome to About US Page</h1></body>');
        res.write('</html>');
        res.end();
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Hello from myside</h1></body>');
        res.write('</html>');
        res.end();
    }
})

server.listen(4000);