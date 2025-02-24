const http=require('http');
const fs=require('fs/promises');

const server=http.createServer((req,res)=>{
    let data=[
        {
            "id":1,
            "username":"admin",
            "password":"1234"
        },
        {
            "id":2,
            "username":"user",
            "password":"5268"
        }
    ];
    res.writeHead(200,{'Content-Type':application/json});
    res.end(data);
})

server.listen(9000,(err)=>{
    if(err)
        console.log("Error ",err)
    else
    console.log("Server running")
});