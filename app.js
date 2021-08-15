var http = require('http');

var nStatic = require('node-static');

var fileServer = new nStatic.Server('./static');

console.log("[+] Server Starting");
console.log(process.env.PORT||5000);

http.createServer(function (req, res) {
    console.log('Request: ' + req.url);
    fileServer.serve(req, res);
}).listen(process.env.PORT||5000);
