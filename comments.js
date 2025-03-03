//create a web server
const http = require('http');
const fs = require('fs');
const port = 3000;

const requestHandler = (request, response) => {
    fs.readFile('index.html', (error, data) => {
        if (error) {
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.write('File not found');
            response.end();
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            response.end();
        }
    });
}

const server = http.createServer(requestHandler);

server.listen(port, (error) => {
    if (error) {
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening on port ' + port);
    }
});