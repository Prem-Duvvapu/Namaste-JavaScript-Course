const arr=[5, 1, 4, 3];
//map
//Double - [10, 2, 8, 6]
//Binary - ["101", "1", "100" "11"]

function double(x) {
    return x*2;
}

// function binary(x) {
//     return x.toString(2);
// }

const doubleOutput=arr.map(double);
console.log(doubleOutput)

const binaryOutput=arr.map((x) => x.toString(2));
console.log(binaryOutput);

//filter
function isOdd(x) {
    return x%2;
}

const oddOutput=arr.filter(isOdd);
console.log(oddOutput);

const evenOutput=arr.filter((x) => x%2===0);
console.log(evenOutput);

//reduce

//sum
function findSum(arr) {
    let sum=0;

    for (let i=0;i<arr.length;i++) {
        sum=sum+arr[i];
    }

    return sum;
}

console.log(findSum(arr));

const sumOutput=arr.reduce(function (acc,curr) {
    acc=acc+curr;
    return acc;
},0);
console.log(sumOutput);

const maxOutput=arr.reduce(function (max,curr){
    if (curr>max)
        max=curr;
    return max;
},0);
console.log(maxOutput);

const users=[
    { firstName: "luffy", lastName: "monkey", age: 18},
    { firstName: "zoro", lastName: "roronoa", age: 21},
    { firstName: "sanji", lastName: "vinsmoke", age: 21},
];

//list of full names
const fullNamesOutput=users.map((x) => x.firstName+" "+x.lastName);
console.log(fullNamesOutput);

//Expected output: {18:1, 21:2}
const ageMapOutput=users.reduce(function (acc,curr) {
    if (acc[curr.age])
        acc[curr.age]+=1;
    else
        acc[curr.age]=1;

    return acc;
},{});
console.log(ageMapOutput);

//list of first name of all users whose age is less than 30
// const firstNamesOutput=users.filter((x) => x.age<20)
// .map((x) => x.firstName);
// console.log(firstNamesOutput);

const firstNamesOutput=users.reduce(function (acc,curr){
    if (curr.age<20)
        acc.push(curr.firstName);
    return acc;
},[]);
console.log(firstNamesOutput);