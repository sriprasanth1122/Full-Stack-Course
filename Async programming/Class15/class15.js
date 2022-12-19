var p1 = new Promise((resolve, reject) => { })                                       // We cannot use res,rej at the same time, if used then ot wi'b 
console.log(p1)

var p2 = new Promise((resolve, reject) => resolve("This is a resolved function"))
console.log(p2)

var p3 = new Promise((resolve,reject) =>reject("This is a reject function") )       // When the result is got rejected it will always show a error msg with the result.
console.log(p3)

var age = parseInt(prompt("Enter your age"))
var p4 = new Promise((resolve, reject) => {
    if (age >= 18) {
        resolve("You are eligible for vote")
    }
    else {
        setTimeout(() => {
            reject("Sorry, You are not eligible for vote")                  // Here we have use SetTimeout just for practice.
        }, 2000)
    }
});
console.log(p4)

var p5 = new Promise((resolve,reject) =>resolve("This is a resolved function") )       // When the result is got rejected it will always show a error msg with the result.
console.log(p5)
p5.then((data)=>console.log(data)) .catch((error)=>console.log(error))               // This makes the error in visiable. (.then or .catch)

var p6 = new Promise((resolve,reject) =>reject("This is a reject function") )       // When the result is got rejected it will always show a error msg with the result.
console.log(p6)
p6.then((data)=>console.log(data)) .catch((error)=>console.log(error))

// .then .catch__________________________________

function foo() {
    return new Promise((resolve, reject) => setTimeout(() => resolve(["Guvi","Geek"]), 2000))       // Using Normal function
}
foo().then((data) => console.log(data)).catch((error) => console.log(error))
// console.log(foo());


var fo = new Promise ((resolve,reject) => setTimeout(() => resolve(["GuviGeek"]),2500))             //Same Using Arrow function
fo.then((data) => console.log(data)).catch((error) => console.log(error))
// console.log(fo)

// Dependent operation, Promise chain_________________________

function calculate1 (num) {
    return new Promise((resolve,reject) => setTimeout (() => resolve(2*num),1000))           // Using Normal function
}
calculate1(5).then((data) => console.log(data)) .catch((error) => console.log(error))

// Promise chain_______________________________

var calculate = (num1) => {
    return new Promise((resolve,reject) => setTimeout (() => resolve(2*num1),1500))          // Using Arror function.
} 
calculate(10).then((data) =>{console.log(data) 
    return calculate(data)}) .then((data1) => {console.log(data1)                    // This is promise chain
    return calculate(data1)}) .then((data2) => console.log(data2))

// ________________________

var p7 = new Promise((resolve, reject) => {
    if (true) {
        setTimeout(() => resolve("p7 is resolved"),2000)
    } else {
        setTimeout(()=> reject("p7 is rejected"),2000)
    }
});

var p8 = new Promise((resolve, reject) => {
    if (false) {
        setTimeout(() => resolve("p8 is resolved"),2500)
    } else {
        setTimeout(()=> reject("p8 is rejected"),2500)
    }
});

var p9 = new Promise((resolve, reject) => {
    if (true) {
        setTimeout(() => resolve("p9 is resolved"),3000)
    } else {
        setTimeout(()=> reject("p9 is rejected"),3000)
    }
});

// p7.then((data) => console.log(data)) .catch((error) => console.log(error))
// p8.then((data) => console.log(data)) .catch((error) => console.log(error))
// p9.then((data) => console.log(data)) .catch((error) => console.log(error))

// Promise.all([p7,p8,p9]).then((data) => console.log(data)) .catch((error) => console.log(error))

Promise.allSettled([p7,p8,p9]).then((data) => console.log(data)) .catch((error) => console.log(error))          // Returns in array of objecct
// We can handle Array of Object to Object by using forEach.
Promise.allSettled([p7,p8,p9]).then((data) => data.forEach((res) => console.log(res)))                       // Returns in Object