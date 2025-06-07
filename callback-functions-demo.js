//What is a Callback Function in JavaScript
//A callback function is a just a function that is passed as an argument

setTimeout(function (){
    console.log("timer");
},5000);

function x(y) {
    console.log("x");
    y();
}

x(function() {
    console.log("y");
});


//Deep about Event listeners
// document.getElementById("clickMe").addEventListener("click", function xyz() {
//     console.log("Button Clicked");
// })


//Closures Demo with Event Listeners

//Scope Demo with Event Listeners

function attachEventListeners() {
    let count=0;
    document.getElementById("clickMe").addEventListener("click", function xyz() {
        console.log("Button Clicked", ++count);
    })
}
attachEventListeners();


//Garbage Collection and remove EventListeners