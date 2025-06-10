console.log("Start");

setTimeout(function() {
    console.log("Callback 1");
},5000);

setTimeout(function() {
    console.log("Callback 2");
},0);

console.log("End");

//This code will execute for 10 seconds
const startTime=new Date().getTime()
let endTime=startTime;
while (endTime<startTime+10000) {
    endTime=new Date().getTime();
}

console.log("while loop is over");
