// Example: Understanding 'undefined' vs 'not defined'

// At this point, 'a' is hoisted (its declaration is moved to the top), 
// but its value is not assigned yet, so it's 'undefined'
console.log(a); // ✅ Outputs: undefined

// Now we assign a value to 'a'
var a = 3;

// 'a' now holds the value 3
console.log(a); // ✅ Outputs: 3

// 'x' has not been declared anywhere in the code
// Trying to access it will throw a ReferenceError
console.log(x); // ❌ ReferenceError: x is not defined
