/*
Scope - Scope means where you can access a specific variable or a function in the code.
Lexical environment - It is created whenever an execution context is created. It is local memory + reference to the lexical environment of parent.
Scope Chain - The whole chain of lexical environments is knows as the Scope Chain.
*/

function a() {
    var b=10;
    c();
    
    function c() {
        console.log(b);
    }
}

a();
console.log(b);
