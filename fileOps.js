const  path = require("path");

console.log("Directory Name : "+__dirname);
console.log("File Name : "+__filename);
console.log("File Path Ext : "+path.extname(__filename));
console.log("File Path Parse : "+path.parse(__filename).base);

