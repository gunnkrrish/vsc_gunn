// // this method is used to read file content synchronouslly
// // if encoding is not specified , it will return binary data from a file

// const fs= require('fs');
// var filename= 'writesample.txt';
// const data = fs.readFileSync(filename,{encoding: 'utf8'});
// console.log(data);


//toString se it convert the file binary data into string
const fs= require('fs');
var filename= 'writesample.txt';
const data = fs.readFileSync(filename);
console.log(data.toString());


