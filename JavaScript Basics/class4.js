// ES5 vs ES6              11Aug2022
// ES : ECMASCRIPT

// let and const are called block scope

let i = 10
if (true) {
    let i = 20
    console.log(i)
}
console.log(i)

// output : 20, 10

//_____________________________________________________________________________________
var topic1 = "Rest and spread operator --------->"
console.log (topic1)


// Spread operator and rest operator
// Syntax : ... (three dots)
// Do's the work of split and join

// Spread operator      (Spread operator will spread values)

// Print the character in a string sperated by the space
// input : "guvi"

var a = "guvi"
console.log(...a)

var arr = ['hello', 'guvi']
console.log(...arr)


// To join two arrays using spread operator
var arr1 = [1,2,3,4]
var arr2 = [5,6,7,8]
var arr3 = [...arr1, ...arr2]
console.log(arr3)

// Rest operator         (Rest operator will add values)
// can be only used in the array
// only used as the last operator in the function
// only one time the rest operator is used in the function

function sum(a,b) {
    return (a + b)          
}
console.log(sum(2,3))

 function sum1(...arg) {
     let total = 0
     for (var num of arg) {
         total = total + num
       //total += number
     }
     return total;
 }
 console.log(sum1(1,2,3,4,5,6,9))

 //________________________________________________________________________________________________________

 var topic2 = "Destructuring ------>"
 console.log (topic2)

// objec and array destructure
// if we need a particular value in a array or object of nested object we use destruture
 // object destructure 
 let student = {
     name : "Sri",
     age : "21",
     dept : "MECH",
     address : {                      // nested object
         No : "162",
         street : "manickampalayam",
         district : "Erode",
         pincode : "638011",
     },
 };

 const {name , dept} = student;  //Syntax of object destructure
console.log (name , dept)

// to take the values from the nested object using destructuring

// const {address} = student                            // destructure the address from the student object
// const {No , street , district , pincode} = address   // again destructure the address to take its values
// console.log ( No , street , district , pincode )  

// Array destruture

let subject = ["tamil" , "english" , "maths" , "science" , "social"]

const [q , p] = subject;           // Syntax
console.log(q , p);

// Exercise : how to take inner array value in a array using destructure

let subject1 = ["tamil" , "english" , ["maths","hindi"] , "science" , "social"]

const [m, n, o] = subject1
const [o1 , o2] = o             // for only taking the values in the array
console.log (o1 , o2)
console.log (o1)

//_______________________________________________________________________________
var topic3 = "Template litrals---------->"
console.log (topic3)

// Template litrals : used for concatenation insted of using + symbol

let yourName = "Sri"             
console.log ("Hello" + " " + yourName + " " +  "welcome to guvi")            // Normal way of concatenation

// Using template literals
// Syntax : ` $ { } `

let yourName1 = "Sri"             
console.log (` Hello ${yourName1} welcome to guvi `)

