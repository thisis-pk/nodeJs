var http = require('http');
http.createServer(function(request , response){
    response.writeHead(200 , {'content-type':'text/plain'});
    response.write('Welcome Guys');
    response.end('thank you');
}).listen(8080);