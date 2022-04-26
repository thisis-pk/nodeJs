// const  path = require("path");

// console.log("Directory Name : "+__dirname);
// console.log("File Name : "+__filename);
// console.log("File Path Ext : "+path.extname(__filename));
// console.log("File Path Parse : "+path.parse(__filename).base);

const fs = require('fs');
const readFiles = (path) => {
    fs.readdir(path , (error , data) => {
        if(error){
            console.log("Error Message Displays");
        }else{
            console.log(data);
            data.forEach((__filename) => {
                console.log("FileName :"+__filename);

                fs.readFile(`${path}/${__filename}`, 'utf8' , (err , content) => {
                    if(err){
                        console.log("Err Message");
                    }else{
                        console.log(content);
                    }
                })
            })
        }
    })
}

module.exports = {readFiles}