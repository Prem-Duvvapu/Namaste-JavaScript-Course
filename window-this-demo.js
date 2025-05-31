var a=5;

function b() {
    var x=10;
}

console.log(a);

/*
This works in browser environment but not in node.js environment

console.log(window.a); //in browser global object is window
console.log(this.a); //this is pointing to window

console.log(x); //this will give an error because it is trying to get window.x and x is not in global level, it is in func
*/