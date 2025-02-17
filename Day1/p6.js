const fs = require('fs');

const write=()=>{
    const data="I am new file"
    fs.writeFile("./data.txt",data,(err)=>{
        if(err)
            console.log("Error Writing File",err);
        else
        console.log("File Written Successfully");
    });
}
write("I am new data");



   