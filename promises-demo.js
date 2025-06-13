/*
What is Promise?
Promise object is a placeholder which will be filled later with a value.
or
Promise object is a container for a future value.
or
A promise is an object representing the eventual completion or failure of an asynchronous operation.
*/

// const cart=["shoes","pants","kurta"]

// createOrder(cart, function (orderId) {
//     proceedToPayment(orderId);
// });

// const promise=createOrder(cart);

// // promise : undefined to filled with some data after createOrder is executed

// promise.then(function (orderId){
//     proceedToPayment(orderId);
// });

// const GITHUB_API="https://api.github.com/users/Prem-Duvvapu";

// const user=fetch(GITHUB_API);

// console.log(user);

// user.then(function (data){
//     console.log(data);
// });


// createOrder(cart, function (orderId){
//     proceedToPayment(orderId, function (paymentInfo){
//         showOrderSummary(paymentInfo, function(paymentInfo){
//             updateWalletBalance(paymentInfo);
//         });
//     });
// });

// createOrder(cart)
// .then(function (orderId) {
//     return proceedToPayment(orderId);
// })
// .then(function (paymentInfo){
//     return showOrderSummary(paymentInfo);
// })
// .then(function (paymentInfo){
//     return updateWalletBalance(paymentInfo);
// })

// createOrder(cart)
// .then(orderId => proceedToPayment(orderId))
// .then(paymentInfo => showOrderSummary(paymentInfo))
// .then(paymentInfo => updateWalletBalance(paymentInfo))