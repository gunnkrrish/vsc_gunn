// setinterval is global timer function 
// executes callback function after every specified seconds

// //example -1
// setInterval(function(){
//     console.log("hello ! after every one second..");
// },1000);

//example-2
var i=0;
console.log(i);
setInterval(function(){
    i++;
    console.log(i);
},1000);



//to exit use ctrl+c;