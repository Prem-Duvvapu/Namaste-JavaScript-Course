/*
Higher-order funtions are functions that either:
1. Take one or more functions as arguments or
2. Return a function as their result
*/

function x() {
    console.log("Namaste");
}

function y(x) {
    x();
}

y(x);


const radius=[3, 1, 2, 4];

// const calculateArea=function (radius) {
//     const output=[];

//     for (let i=0;i<radius.length;i++) {
//         output.push(Math.PI*radius[i]*radius[i]);
//     }

//     return output;
// }
// console.log(calculateArea(radius));

// const calculateCircumference=function (radius) {
//     const output=[];

//     for (let i=0;i<radius.length;i++) {
//         output.push(2*Math.PI*radius[i]);
//     }

//     return output;
// }
// console.log(calculateCircumference(radius));

// const calculateDiameter=function (radius) {
//     const output=[];

//     for (let i=0;i<radius.length;i++) {
//         output.push(2*radius[i]);
//     }

//     return output;
// }
// console.log(calculateDiameter(radius));

//DRY(Don't Repeat Yourself) principle
const area=function (radius) {
    return Math.PI*radius*radius;
}

const circumference=function (radius) {
    return 2*Math.PI*radius;
}

const diameter=function (radius) {
    return 2*radius;
}

const calculate=function (arr,logicFunctionName) {
    const output=[];

    for (let i=0;i<arr.length;i++) {
        output.push(logicFunctionName(arr[i]));
    }

    return output;
}

Array.prototype.calculate=function (logicFunctionName) {
    const output=[];

    for (let i=0;i<this.length;i++) {
        output.push(logicFunctionName(this[i]));
    }

    return output;
}

console.log(calculate(radius,area));
console.log(radius.map(area));
console.log(radius.calculate(area));

console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));