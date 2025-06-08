/*
Web APIs

1. setTimeout()
2. DOM APIs
3. fetch()
4. localStorage
5. console
6. location
*/


// console.log("Start");

// setTimeout(function cb() {
//     console.log("Callback");
// },5000);

// console.log("End");



// console.log("Start");

// document.getElementById("btn")
// .addEventListener("click", function cb(){
//     console.log("Callback");
// });

// console.log("End");



// console.log("Start")

// setTimeout(function cbT() {
//     console.log("CB SetTimeout");
// }, 5000);

// fetch("https://api.nextflix.com")
// .then(function cbF() {
//     console.log("CB Netflix");
// })

// console.log("End")

/*
1. Promises and Mutation observers goes into the Microtask Queue
2. All the other callback functions goes into the callback Queue(Task Queue)
3. Event loop keeps on checking if call stack is empty. IF it is empty 
    it gives priority to events in Microtask Queue and then the events in Callback Queue.
*/
