// Create web server
// Create a web server that listens to requests on port 3000 and serves a static file called comments.html. This file should be in the same directory as the server file. The file is a simple form that contains a textarea and a submit button.
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('comments.html', (err, data) => {
        res.write(data);
        res.end();
    });
});

server.listen(3000);