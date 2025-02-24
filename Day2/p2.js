const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1 style="background-color:green"textcolor:white;">Welcome to Backend</h1>');

});

server.listen(9000,(err)=>{
    if(err)
        console.log("Error starting server",err)
    else
        console.log("Server started on port 9000")
});