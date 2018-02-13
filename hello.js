var http = require('http');
var datetime = new Date();
    console.log(datetime);
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello World</h1>\n<h2>'+datetime+'</h2>\n');
}).listen(8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');
