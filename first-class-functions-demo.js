a();

//Here b is undefined. We are trying to call undefined()
// b(); // gives TypeError: b is not a function. 

//Function statement aka Function Declaration
function a() {
    console.log("a called");
}

//Function Expression
var b=function() {
    console.log("b called");
}

b();

// //Anonymous Function
// gives SyntaxError: Function statements require a function name
// function() { 

// }

//Named Function Expression
var c=function xyz() {
    console.log("c called");
}
c();


//Difference between parameters and arguments?
//Parameters: Parameters are the variables listed in a function definition.
//Arguments: Arguments are the actual values passed to function when it is called.


//First Class Functions(also called First Class Citizens)
//The ability to use functions like any other variables
/*
We can do following with functions:
1. Assign them to variables
2. Pass them as arguments to other functions
3. Return them from other functions
4. Store them in data structures like arrays, objects, etc.
*/
var d=function(param1) {
    console.log(param1);
    param1();
    return function f() {
        console.log("f called");
    }
}

var g=d(function(){
    console.log("anonymous called");
});
console.log(g);

function e() {
    console.log("e called");
}

var h=d(e);
h();