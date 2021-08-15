var http = require('http');

var nStatic = require('node-static');

var fileServer = new nStatic.Server('./static');

http.createServer(function (req, res) {
    console.log('Request: ' + req.url);
    fileServer.serve(req, res);
}).listen(5000);