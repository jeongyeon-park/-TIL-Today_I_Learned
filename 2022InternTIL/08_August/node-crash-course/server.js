const http = require('http');


const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    res.write('<head><link rel="styleseet" href="#"></head>')
    res.write(`<h1>hello jeongyeon</h1>`);
    res.write('<h1>hello again, jeongyeon</h1>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
})
