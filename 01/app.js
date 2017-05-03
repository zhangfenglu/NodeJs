var http = require('http');
http.createServer(function(req,res){
   res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>Node.js 我们已经有服务器了</h1>');
    res.end('<p>视频出处:PCAI</p>');
}).listen(5858);