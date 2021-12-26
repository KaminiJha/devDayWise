// real function
// console.log("started")
// isReal();
// //1
// function isReal()
// {
//     console.log("1  real one")
// }
// //2
// function isReal()
// {
//     console.log("2 real one")
// }
// isReal();
// //output
// // started
// // 2 real one
// // 2 real one
// one()-> error
// let one=function org()
// {
//     console.log("hbhc");
// }
// one()
//  IIFEE-> immediately Invoked function expression
(function drawBoard() {
    console.log("board is immediately drawn");
})();
console.log("After");
// // 4. Anonymous function 
(function () {
    console.log("board is immediately drawn");
})();
// console.log("After");

let secondName = function () {
    console.log("I am expression");
}
secondName();