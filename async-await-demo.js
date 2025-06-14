/*
1. What is async?
2. What is await?
3. How async await works behind the scenes?
4. Examples of using async/await
5. Error Handling
6. Interviews
7. Async await vs Promise,then,catch

async and await are used to handle promises
await can only be used inside async function

async is a keyword used to define an asynchronous function, and await is a keyword that can be used only inside an async function.
*/

// const p=new Promise((resolve,reject) => {
//     resolve("Promise resolved value !!!");
// });

//always returns a promise. 
//If returning object is a promise it will directly return it.
//else it will wrap the return object in the promise and then return it.
// async function getData() {
//     // return "Namaste";
//     return p;
// }

// const dataPromise=getData();
// console.log(dataPromise);
// dataPromise.then((res) => console.log(res));


// function printData() {
//     p.then((res) => console.log(res));
// }
// printData();

// async function handlePromise() {
//     const val=await p;
//     console.log(val);
// }
// handlePromise();





// const p1=new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("Promise Resolved value!");
//     },10000);
// })

// console.log(p1);
// p1.then((res) => console.log(res));

// function getData() {
//     //JS engine will not wait for promise to be resolved
//     p1.then((res) => console.log(res));
//     console.log("Namaste JS");
// }

// getData();

// const p2=new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("Promise Resolved Value 2!");
//     },5000);
// });

// async function handlePromise() {
//     console.log("Hello World!");

//     const val=await p1;
//     console.log("Namaste JS");
//     console.log(val);

//     const val2=await p2;
//     console.log("Namaste JS 2");
//     console.log(val2);
// }

// handlePromise();



const API_URL="https://api.github.com/users/Prem-Duvvapu";

async function handlePromise() {
    //fetch() -> returns a Response object which is a readable stream
    //To read the actual data, we must await response.json()

    try {
        const response=await fetch(API_URL);
        const data=await response.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

handlePromise();
// handlePromise().catch((err) => console.log(err)); //another way of handling errors
