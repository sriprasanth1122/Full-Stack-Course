// This is few min recap of class12
// Class 13 Topics starts here.

// Window utility function__________________________
// setTimeout
setTimeout(timer1, 2000)
function timer1() {
    console.log("This is setTimeout Test1")
}

setTimeout(timer2, 4000)
function timer2() {
    console.log("This is setTimeout Test2")
}

setTimeout(timer3, 6000)
function timer3() {
    console.log("This is setTimeout Test3")
}

// Using Arrow function (No need to use function Name in arrow function)

setTimeout(() => {
    console.log("This is setTimeout using => Arrow function")
}, 4000)

// Using Arithematic operation in setTimeout (Arith means add,sub,divi,mult,...)

setTimeout(add, 5000, 30, 40)       // (Here we pass the arugements)
function add(a, b) {
    console.log(a + b)
}

setTimeout((a, b) => {            // Arrowfunction
    console.log(a - b)
}, 2000, 150, 50)

setTimeout((a, b, c) => {         // Practice
    console.log(a + b - c)
}, 1000, 50, 40, 20)

// Exercise
// Q1. Print 1 to 10 and then show Happpy Indepandence Day

// Solution 1 : Using setTimeout

var conunter = document.getElementById('counter')
for (let i = 1; i <= 10; i++) {

    setTimeout(() => {
        console.log(i)
        conunter.innerText = i
        if (i == 10) {
            setTimeout(() => {
                console.log("Happy Independence Day ghvch")
                conunter.innerText = "Happy Independence Day"    // For output in the document page
            }, 1000)
        }

    }, 1000 * i)

}

//Solution 2 : Using if else 

var conunter = document.getElementById('counter')
for (let i = 1; i <= 11; i++) {

    setTimeout(() => {
        if (i <= 10) {
            console.log(i)
            conunter.innerText = i
        }
        else {
            console.log("Happy Independence Day")
            conunter.innerText = "Happy Independence Day"
        }

    }, 1000 * i)

}

// Q2. To change the div style of the div after 3sec (Aimation) 

var butt = document.getElementById('butt')                   // Button to stop the function (Dynamic way using DOM)
document.body.append(butt)

var id = setTimeout(anim, 3000)                               // This to change the style of the div after 3sec
function anim() {
    console.log("Animation")

    var divi = document.getElementById('animation')      // Here getting element by id and changing the style
    console.log("Divi")
    divi.style.width = "200px"
    divi.style.backgroundColor = "pink"
    divi.style.borderRadius = "15px"
}

function stopAnim() {                                   // This is to stop the setTimeout function
    clearTimeout(id)
    console.log("Stop Anim")
}
// Here what we done is, We have change the style of the div id="Animation" After 3sec, and also done that we can stop the style change by cilcking the stop button.

// SetInterval ______________________

setInterval(timer, 3000)
function timer() {
    console.log("hello")
}

// var conunter = document.getElementById('counter')
for (let i = 1; i <= 10; i++) {

    setTimeout(() => {
        console.log(i)
        conunter.innerText = i
        if (i == 10) {
            setTimeout(() => {
                console.log("Happy Independence Day")
                conunter.innerText = "Happy Independence Day"    // For output in the document page
            }, 1000)
        }

    }, 1000 * i)

}

// Exercise
// Q1. Print 1 to 10 and print Happy Independence Day using setInterval

var target = document.getElementById('counter1')         // DOM elements
var timer = setInterval(count, 1000)
let count1 = 0;
function count() {
    count1++;
    console.log(count1)
    target.innerHTML = count1
    if (count1 >= 10) {
        clearInterval(timer)
        setTimeout(() => {                             // This is for to display the 10 and HInDay seperately (This is 1 type of solution)
            console.log('Happy Independence Day')
            target.innerHTML = 'Happy Independence Day'
        }, 1000)

    }
}

// Q2. Create a animation using setInterval.

var divi = document.getElementById('animation1')

var target1 = setInterval(anim, 1000)
var a = 0;
function anim() {
    a = a + 10;
    if (a == 200) {
        clearInterval(target1)
        // console.log(a)
    }
    else {
        divi.style.marginLeft = a + "px"
        console.log(a)
    }
}