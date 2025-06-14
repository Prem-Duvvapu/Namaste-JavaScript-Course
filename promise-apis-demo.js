/*
Promise p1 -> 3s
Promise p2 -> 1s
Promise p3 -> 2s

case-1: All are resolved
case-2: p2 is rejected
case-3: All are rejected

1. Promise.all([p1,p2,p3]) - Fail fast
    1.1. all are resolved - wait for all of them to finish. case-1: [val1, val2, val3]
    1.2. one of them is rejected - will immediately throw an error if one promise is rejected. It will not wait for other promises to be finished. case-2: (err2)

2. Promise.allSettled([p1,p2,p3]) - Wait for all
    2.1. all are resolved - same as Promise.all case-1: [val1, val2, val3]
    2.2. one of them is rejected - wait for all the promises to be settled. case-2: [val1, err1, val3]

3. Promise.race([p1,p2,p3]) - who settles(resolve/reject) first will be the winner
    3.1. first promise is resolved - it will return the result. case-1: (val2)
    3.2. first promise is rejected - it will return the error. case-2: (err2)

4. Promise.any([p1,p2,p3]) - wait for first promise to get resolved
    4.1. At least one of them is resolved - it will return the first resolved promise. case-1: (val2)
    4.2. All are rejected - Aggregate Error(array of errors) is returned. case-3: [err1, err2, err3]
*/

const p1=new Promise((resolve,reject) => {
    // setTimeout(() => resolve("P1 Success"), 3000);
    setTimeout(() => reject("P1 Fail"), 3000);
});

const p2=new Promise((resolve,reject) => {
    // setTimeout(() => resolve("P2 Success"), 1000);
    setTimeout(() => reject("P2 Fail"), 1000);
});

const p3=new Promise((resolve,reject) => {
    // setTimeout(() => resolve("P3 Success"), 2000);
    setTimeout(() => reject("P3 Fail"), 2000)
});


//Promise.all
Promise.all([p1,p2,p3])
.then((res) => {
    console.log("Promise.all res : ",res);
})
.catch((err) => {
    console.error("Promise.all error : ",err)
});


//Promise.allSettled
Promise.allSettled([p1,p2,p3])
.then((res) => {
    console.log("Promise.allSettled res : ",res);
})
.catch((err) => {
    console.error("Promise.allSettled error : ",err)
});


//Promise.race
Promise.race([p1,p2,p3])
.then((res) => {
    console.log("Promise.race res : ",res);
})
.catch((err) => {
    console.error("Promise.reace error : ",err)
});


//Promise.any
Promise.any([p1,p2,p3])
.then((res) => {
    console.log("Promise.any res : ",res);
})
.catch((err) => {
    console.error("Promise.any error : ",err)
    console.error(err.errors);
});