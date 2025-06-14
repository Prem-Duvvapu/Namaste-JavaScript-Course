//this keyword behaves differently in strict mode and non-strict mode
"use strict"; //enables strict mode

//this in global space
console.log(this); //globalObject - window, global


// this inside a function
function x() {
    //the value depends on strict mode and non-strict mode
    console.log(this); //undefined in strict mode and window in non-strict mode
}
x();


//this in strict mode - (this substitution)
//If the value of this keyword is undefined or null, this will be replaced with globalObject in non-strict mode


//this keyword value depends on how this is called (window)
window.x();


//this inside a object's method
const obj = {
    a: 3,
    x: function () {
        console.log(this); //the value of this keyword is obj
    }
};
obj.x(); 


//call(), apply(), bind() methods (sharing methods)
const student={
    name: "Prem",
    printName: function() {
        console.log(this.name);
    }
};
student.printName();

const student2={
    name: "Sai",
};
student.printName.call(student2); //value of this keyword is student2


//this inside arrow function
const obj2={
    a: 10,
    x: () => {
        console.log(this); //this inside an arrow function is lexically scoped
    },
};
obj2.x();

const obj3={
    a: 20,
    x: function () {
        //enclosing lexical context
        const y=() => {
            console.log(this);
        }
        y();

    },
};
obj3.x();


//this inside DOM elements => reference to HTMLelement