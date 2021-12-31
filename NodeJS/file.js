var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('demo1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(err) throw err;
    res.write(data);
    res.end();
  });
  
}).listen(8085);
