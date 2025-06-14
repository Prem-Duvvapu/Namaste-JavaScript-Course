const cart=["shoes","pants","kurta"];

createOrder(cart)
.then(function (orderId) {
    console.log(orderId);
    return orderId;
})
.catch(function (err){
    console.log("The error is ",err.message);
})
.then(function (orderId){
    return proceedToPayment(orderId);
})
.then(function (paymentInfo){
    console.log(paymentInfo);
})
.then(function (){
    console.log("No matters what happens I'll definitely be called.");
});



//Producer
function createOrder(cart) {

    const pr=new Promise(function(resolve,reject) {
        //createOrder
        //validateCart)
        //orderId

        if (!validateCart(cart)) {
            const err=new Error("Cart is not valid");
            reject(err);
        }

        //logic for createOrder
        const orderId="12345"; //assume logic returned the orderId
        if (orderId) {
            setTimeout(function (){
                resolve(orderId);
            },3000);
        }
    });

    return pr;
}

function validateCart(cart) {
    return true;
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve,reject){
        resolve("Payment successful");
    });
}