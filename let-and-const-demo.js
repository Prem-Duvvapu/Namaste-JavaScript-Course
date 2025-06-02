/*
Temporal Dead Zone: Temporal Dead Zone is the time since when the let variable was hoisted and till it is initialized with some value.
Strictness order: const > let > var

Error types:
1. Type error
2. Syntax error
3. Reference error
*/


console.log(b); //gives 'undefined'

//this is in temporal dead zone
// console.log(a); //gives uncaught referenceerror: b is not initialized

let f;
console.log(f); //gives 'undefined'

let a=5;
var b=10;

console.log(a); //prints 5
console.log(b); //prints 10

var b=20; //this doesn't give any error
console.log(b);

// let a=15; //gives uncaught syntax error: Identifier 'a' has already been declared


let d;
d=25; // this will work

// const e; // gives syntax error: missing initializer in const declaration
// e=30;

const e=30; //cosnt must be initialized during declartion and can't be reassigned
console.log(e);

// e=35; //gives typeerror: assignment to constant variable