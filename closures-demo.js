/*
Closure : Function along with its lexical scope bundled together forms a closure.
*/

function x() {
    var a=3;

    function y() {
        console.log(a);
    }

    return y;
}

var z=x(); //function along with its lexical scope is returned
console.log(z);


z();