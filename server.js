const { createServer } = require('http');
const { readFile } = require('fs');

const PORT = 8800;

const server = createServer((req, res)=> {
    res.setHeader('Content-Type', 'text/html');

    let folder = './html/';
    if(req.url == '/') {
        res.statusCode = 201;
        folder += 'index.html';
    } else {
        res.statusCode = 404;
        folder += '404.html';
    }
    readFile(folder, (err, data)=> {
        if(err) throw err;
        res.end(data);
    })
});

server.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));