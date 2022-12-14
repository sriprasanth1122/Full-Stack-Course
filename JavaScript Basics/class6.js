// Map , Reduce , Filter

// Map()    For multiply
// filter() To the elements like odd or Even
// Reduce() TO sum the elements



// map() :
 //  map always take function as an argument
 //  this method is used for creating new array (old array to new array)
 //  it always return a new array
 //  map does not change the array lenth
 //  it works on each and every index

// Sum of array
 var arr = [1,2,3,4,5]

 let sum = 0
 for (i = 0; i<arr.length; i++) {    // using normal for loop
     sum = sum + arr[i]
 }
 console.log(sum)    // here we cannot use map() bec sum value is number hence map only give values in array


// Syntax : 
// var name = varname.map(function) { (return) }

 // multiply array by 2
 // normal method________________

 var arr1 = [1,2,3,4,5]

let result = []    // for (var i in arr1)
 for (i = 0; i<arr1.length; i++) {   // using normal for loop
     let mul = 2 * arr1[i]
     result.push(mul)
 }
 console.log(result) 

 // using map()__________________

 let result1 = arr1.map((element) => {
    return element * 2
 })
 console.log(result1)

 // Exercise 
 // Add 20marks in the students array of object

let students = [{name : "sri", mark : 410},
    {name : "sai", mark : 358},
    {name : "saran", mark : 450},
    {name : "sathish", mark : 368},
    {name : "vijay", mark : 420}] 

let studentarr = students.map ((data) => {
        return  data.mark + 20;
})
console.log(studentarr)
// or
let studentarr1 = students.map ((data) => {
        data.mark = data.mark + 20
        return data;
})
console.log(studentarr1)

// Filter __________________________________________________________________________

// If we need a particular data from an array or array of object, we can use filter
// This also returns the array where elements from the original array
// Filter will change the lenth of the array
// It also works on each and every index or ellement of the array

var arr = [1,2,3,4,5,6,7,8,9]
// Print the odd numbers and Even numbers

let oddResult = arr.filter((element) => { 
    return element%2 != 0
})
console.log(oddResult)                      // ODD

let evenResult = arr.filter((element) => { 
    return element %2 == 0
})
console.log(evenResult)                    // EVEN

// Exercise
 
// Add 20marks and Print the students got above 400

let students1 = [{name : "sri", mark : 410},
    {name : "sai", mark : 388},
    {name : "saran", mark : 450},
    {name : "sathish", mark : 368},
    {name : "vijay", mark : 420}]

let result2 = students1.filter((data) => { 
    data.mark = data.mark + 20
    return data.mark >= 400
})
console.log(result2)

// 1.Use XMLHttp request and get the countries in the Africa continent using filter method.
// 2.Print the countries with less then 5Lakhs population.

var request = new XMLHttpRequest();    

request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json','true');                  

request.send();    

request.onload = function(){
    var data = JSON.parse(request.response)
    console.log(data);                            // XMLHttp requset done
                              
    let africaDetails = data.filter((element) => {        // No.1 Ans            
    return element.region==="Africa"
    });

    let population = data.filter((element) => {          // No.2 Ans
        return element.population > 500000
    });
    // or
    let population1 = data.filter((element) => {         // No.2 Ans using if statment
        if (element.population < 500000) {
            console.log (element)
        }
        })

console.log(africaDetails)
console.log(population)
console.log(population1)
    
}

// Reduce_________________________________Timing: 01.49.00hr_______________________________________

// It helps to reduce the array into single element.
// It also take function as a parameter
// Inside the funtion we have 2 parameter 1.Accumulator 2.CurrentValue or InitialValue


var arrr = [1,2,3,4,5];

var sum1 = arrr.reduce((acc,cur) => {     //acc & cur is Accumulator and current value
    return acc+cur                          
})
// Initial acc value is 0 and cur value is 1, Steps: 0+1=1, 1+2=3, 3+3=6, .... 
console.log(sum1);     //OutPut: 15


