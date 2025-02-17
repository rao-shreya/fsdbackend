const fs = require('fs');
const { FormData } = require('undici-types');

const read=()=>{
    // const data=fs.readFileSync("./data.txt","utf-8")
    // console.log(data)
fs.readFile("./data.txt","utf8",(err,data)=>{
    if(err)
        console.log(err)
    else
    console.log(data)
})
}
console.log("Before Reading")
read();
console.log("After Reading")
