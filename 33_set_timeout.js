// global timer function
// executes after specified seconds

//executes only once
// setTimeout(function(){
//     console.log("hey! appears after 3 seconds!..");
// },3000);

//recursive call after evry 1 second
// var recursive = function(){
//     console.log("hey ! recursively printing..");
//     setTimeout(recursive,1000);    //1000 is in milliseconds
// }
// recursive();


//display table after 1 second

// const prompt = require('prompt-sync')();
// const name1 = prompt('enter number : ');
// const printtable = function(){
// for(let i=1;i<=10;i++){
// setTimeout(function(){  
// console.log(`${name1}* ${i} = ${i*name1}`);
// },i*1000);
// }
// };
// printtable(name1);



//display random names

const names = ["keshav", "Krish", "gunn", "divya", "adwita"];
var time=setInterval(timer,1000);
function timer() {
  var nameslen = names.length - 1;
  var i = Math.floor(Math.random() * (nameslen - 0 + 1) + 0);
  process.stdout.write(`${names[i]}        \r`);
}