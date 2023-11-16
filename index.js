//kolla att servern körs
console.log("Kör serverskript med NodeJS!");


// starta en värdigt enkel webbserver med NodeJS
/* let http = require("http");
http
    .createServer(function(req, res {
     console.log("Någon laddade webbsidan.");
     res.end("Hello world!");
    })
    .listen(8080);
console.log("Servern körs på port 8080."); */


var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);