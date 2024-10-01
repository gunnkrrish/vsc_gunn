const fs= require("fs");
var filename='writesample.txt';
const prompt = require('prompt-sync')();
let n = parseInt(prompt('enter number upto which u want : '));
let data = ' ';
for(var i=1;i<=n;i++){  
    fs.writeFileSync(filename,data+= "user"+i+"\n",{flag: "a"});
}
console.log(`data written succesfully in ${filename}\n`);