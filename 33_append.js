//append file must have 4 attributes : path/filename , data,[utf8],callback;   //utf8 not mandatory

// var fs= require('fs');
// var data= "\nadd this line to the file.";
// fs.appendFile('writesample.txt',data,'utf8',function(err){
//     if(err)
//         throw err;
//     else
//     console.log("data is appended to the file succesffully");

// });


//ask a number from user and appends its table into a new file

var fs= require("fs");
const prompt = require('prompt-sync')();
const name1 = parseInt(prompt('enter number : '));

for(var i=1;i<=10;i++){  
  var data1 = `${name1}* ${i} = ${i*name1}\n`;
  
  fs.appendFile('writesample.txt',data1,'utf8',function(err){
    if(err)
        throw err;
});

}
