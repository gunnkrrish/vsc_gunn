// flag is optional
// it overwrites

// const fs= require('fs');
// var filename='writesample.txt';
// let data = "this text is inserted";
// fs.writeFileSync(filename,data);
// console.log(`data written succesfully in ${filename}\n`);


const fs= require("fs");
var filename='writesample.txt';
const prompt = require('prompt-sync')();
let n = parseInt(prompt('enter number upto which u want : '));
let data = ' ';
for(var i=1;i<=n;i++){  
    fs.writeFileSync(filename,data+= "user"+i+"\n");
}
console.log(`data written succesfully in ${filename}\n`);