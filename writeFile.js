const fs = require('fs');

const write = (path , content) => {
    fs.writeFile(path , content , (error) => {
        if(error){
            console.log('Eroor message');
        }else{
            console.log("Write content to the file");
        }
    })
}

module.exports = {write};