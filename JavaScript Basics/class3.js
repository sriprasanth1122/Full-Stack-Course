// Functions : set of instruction to perform a specific task
// code reusuability, less weightage(less memory)

//anonymous : it should declar by a variable name
//arrow : it has return value, there is no function keyword


// syntax
// function funName(){
//     console.log() or return
// }

function funName(){
    console.log("hello world")
}
funName();

//or
// if console is used inside{} the function reture is not needed

// function funName(){
    
//     return("hello world")
// }
// console.log(funName())


// // Exercise >>>>>>
 
// function calculate(a , b) {
//     return(a + b);   
// }
// console.log(calculate(2 , 3))


// function multiply(x,y){
//     console.log(x*y);
// }
// multiply(20,30)

// function multiply2(x,y){
    
//     return(x*y);
// }
// console.log(multiply2(20,30))

// --------------------------------------------------------------------------

// Anonymous Function : function is declared in a variable [var, let, const => function()]
// Syntax
// var name = function(){
//     return
//   }

// var anoFun= function(a,b){
//     return(a+b);
// }
// console.log(anoFun(2,3))


// var multiply= function(x,y){
//     console.log(x*y);
// }
// multiply(2,3)


// var difference= function(a,b){
//     return (a+b);
// }
// console.log(difference(5,6))

// var difference= function(a,b){
//     console.log(a+b);
// }
// difference(5,6)

//--------------------------------------------------------------------

// IIFE Function : Memory used is very less, time less (Imediatly Invoked Function)
// No return keyword is needed and dont want call the function using funcion name 
// simply () is ok it is called IIFE function.

// Syntax :
// (function() {}) (funCall)

(function () {
   console.log("hello world")
})
();

(function (a,b) {
    console.log(a+b);
})
(2,3)

//---------------------------------------------------------------------

// Arrow Function : Latest version of function ES6
// Syntax :
// variable varName= () => {};

var varName = () => {
    return("hello world"); 
}
console.log(varName())

var add = (a,b) => {
    return(a+b);
}
console.log(add(2,3))

//---------------------------------------------------------------------

// Exercise
// find the average of the student markes

// This need to be put in a function

// sum = 0
// var marks = [50,50,50,0,50]
// for (let mark of marks) { 
//     sum = sum + mark
// }
// var avg = sum / marks.length
// console.log(avg)


// Normal function

function totalAvg(marks) {
        sum = 0
    for (let mark of marks){
        sum = sum + mark;
        
       }

       let avg = sum / marks.length
       return(avg)
       
         
}
console.log(totalAvg([40,50,0,90,10]))

// Anonymous Function

var totalAvg = function(marks) { 
    sum = 0
    for (let mark of marks) {
        sum = sum + mark
    }
    let avg = sum / marks.length
    return(avg)
}
console.log(totalAvg([50,50,50,50,50]))

// Arrow Function

var totalAvg = (marks) => { 
    sum = 0;
    for( let mark of marks) {
        sum = sum + mark
    }
    let avg = sum / marks.length
    console.log(avg);
}
totalAvg([50,50,50,50,50])












// var marks = [100,100,100,100,100]

// var sum = 0

// for (let mark of marks){
//     sum = sum + mark
// }
// var avg = sum / marks.length

// console.log(sum)

