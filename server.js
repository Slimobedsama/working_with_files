const { Console } = require('console');
const { createServer } = require('http');

const PORT = 8800;

const server = createServer((req, res)=> {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end();
});

server.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));