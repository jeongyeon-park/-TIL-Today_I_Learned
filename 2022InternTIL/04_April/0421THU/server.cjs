const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 3000

const server = http.createServer((req,res)=>{
    console.log(req.url, req.method);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    let path = './';
    switch(req.url){
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        
        default:
            res.setHeader('Location', "/")
            res.statusCode = 301;
            break;
    }

    fs.readFile(path, (err,data)=>{
        if(err){
            console.error(err);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    });
})

server.listen(3000, ()=>console.log(`Server listening on port ${PORT}...`));