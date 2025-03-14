var http = require('http')
var url  = require('url')
var fs = require('fs')
var path = require('path')
const server = http.createServer(function (req, res){
    let filePath = "." + req.url;
    if(filePath == "./"){
        filePath = './index.html';
    }
    const extname = path.extname(filePath);
    let contentType = 'text/html';
    if(extname == '.css'){
        contentType = "text/css";
    }
    fs.readFile(filePath, (err, content) =>{
        if(err){
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end("404 Not Found");
        }
        else{
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf-8');
        }
    })
    
});
server.listen(8080, ()=>{
    console.log('Server running at http://localhost:8080/');
});