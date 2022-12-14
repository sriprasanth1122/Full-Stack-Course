// Normal function

function name1() {
    return("Hello World")
} 
console.log(name1())

function name2() {
    console.log("hello world")
}
name2()

// if we use return in the function then we need to use console in te function
// if we use console in the function there is no need to use the return in the function

function add(a , b) {
    console.log(a + b);
}
add(2 , 3)

function multiply(a , b) {
    return (a * b)
}
console.log(multiply(2 , 3))

// Anonumos function

var add1 = function(a , b) {
    return (a + b)
} 
console.log(add1(2,3))

var add2 = function (a, b) {
    console.log(a + b)
}
add2(2,3)

// arrow function
// Using arrow symbol insted of function keyword

var add3 = (a , b) => {
    console.log(a + b)
}
add3(2,30)

var multiply3 = (a ,b) => {
    console.log(a*b)
}
multiply3(3,5)

