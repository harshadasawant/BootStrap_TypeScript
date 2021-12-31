var http = require('http');
var url = require('url');

//create a server object:
http.createServer(function (req, res) {
  
 if(req.url === '/'){
     res.write('Hello');
   
 } if(req.url === '/api/course'){
     var obj = {"c1":"java","c2":"c++"};
     res.write(JSON.stringify(obj));
 }
  
 res.end(); //end the response
  
}).listen(8085); //the server object listens on port 8080
