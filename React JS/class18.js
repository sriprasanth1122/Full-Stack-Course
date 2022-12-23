// React Day1 => Recap basics that are need to start React.

for (let index = 0; index < 20; index++) {
    var box = document.createElement("div")
    box.innerHTML = "Hello World"
    document.body.append(box)
}

var a = "Hello world" // String
var b = "5" // String
var c = 5 // Number
var d = true // boolean    
var e = null // Null
var f = undefined // Undefined

var mykey = "age"
var g = {
    name: "John",
    age: 30
}
console.log(g.age)      // 30
console.log(g[mykey])   // 30       // All the returns the age
console.log(g["age"])   // 30


var h = [1, 2, 3, 4, 5, "Hello World", true]
console.log(h[5])

// forEach vs .map___________________________________________
// Eample 1_______________
let newArray2 = h.forEach((item) => {
    return item * 2
})
console.log(newArray2)          // forEach used in array, The loop runs and returns Undefined

let newArray = h.map((item) => {
    return item * 2;
    console.log(item * 2)
})
console.log(newArray)           // .map used in a array, The loop runs and gives a new Array value

// Example 2_______________
var arr = [, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let newArr = []
let res = arr.forEach((item) => {
    let a = item * 2
    newArr.push(a)              // Here we need to manualy push into the array for output in the array
})

let newArr1 = arr.map((item) => {
    return item * 2
})
console.log(newArr1)            //  Here .map will always return array

// Spread Operator___________________________________________

let aArr = [3, 4, 5]
let resl = [1, 2, ...aArr, 6, 7, 8];

// Rest Operator______(51.00min)_______________________

function foo(a, b, ...c) {
    console.log(a)
    console.log(b)
    console.log(c)      // here a=3, b=2, c=[5,6]
}
foo(3, 2, 5, 6)

function sum({ a, b }) {
    console.log(a)
    console.log(b)
}
sum({ a: 1, b: 2 })
// Both returns the same value
function sum1({ a, b }) {
    console.log(a)
    console.log(b)
}
sum1(1, 2);

// Callback______________________________
// (1:14:00)

function execute(val1, val2, cb) {
    var result = val1 + val2;
    cb(result);
}
execute(10, 5, function (resultdata) {
    console.log(resultdata)
});

// _____________________

function calAge(year) {
    setTimeout(() => {
        return new date.getFullYear() - year;       // for age calculation
    }, 2000)
}
var age = calAge(1987)
if (age > 18) {
    console.log("Allow")
} else {
    console.log("Reject")      // Here the function is rejected because the if condition executed before the age is calculated
}

// To execute the function this is the way whiche is usind 10years before Callback
// (1:10:00)

function calAge(year, cb) {
    setTimeout(() => {
        cb(new Date().getFullYear() - year)
    }, 2000)
}
var age = calAge(1987, function (age) {
    if (age > 18) {
        console.log("Allow")
    } else {
        console.log("Reject")
    }
})                                  // This is CallBack Hell

// To overcome the callback hell promise hasbeen introduced
// (1:25:00)

function calAge2(year) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2022 - year)
        })
    })
}
function checkElig(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve("Allowed")
            } else {
                reject("Rejected")
            }
        }, 2000);
    })
}
// calAge2(1987)       // Promise Chain // (1:28:00)
//     .then((age) => {
//         return checkElig(age)
//     })
//     .then((res) => {
//         console.log(res)
//     })
//     .catch(() => {});

// To Avoid Promise chain we can use async/await

async function cal() {                      // (1:29:00)
    try {
        let age = await calAge2(year);         // await means, it wait untill the work finish and then nxt executes.
        let res = await checkElig(age);
        console.log(res);
    } catch (error) {                       // Try catch is called Execption Handling
        let age = await calAge2(year);
        let res = await checkElig(age);
        console.log(error);
    }
}
cal()

// How React Works (1:44:20)