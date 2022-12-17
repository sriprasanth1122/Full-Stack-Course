// Alert____________________

alert("Hi, How are you")

var a = 50;
var b = 90;
if (a > b) {
    alert("B is greater")
}
else {
    alert("A is greater")
}

alert(`The sum of A and B is ${a + b}`)

// Confirm____________________

confirm("Sure, Do you want to LogOut")

var a1 = confirm("Do you want to continue ?")
console.log(a1)
if (a1) {
    console.log("Thanks")
} else {
    console.log("Sorry")
}

// Prompt__________________

var a2 = prompt("What is you name ?")
console.log(a2)

var c = prompt("Enter your age")
if (c >= 18) {
    alert("Yes, you are eligiable for vote.")
    console.log("Yes, you are eligiable for vote.")
} else {
    alert("No, you are not eligiable for vote.")
    console.log("No, you are not eligiable for vote.")
}

// Events__________________________

var button1 = document.getElementById('button1')           // Static Method
function newClick(event) {
    console.log("Static Method Button cilcked")
}

var button1 = document.getElementById('button2')            // Dynamic Method 
button1.addEventListener('click', function clickEvent(e) {
    console.log("Dynamic method Button cilcked")
    console.log(e)                                      // This is for to display the elemts present in e
    console.log(e.target.id)                       // This shows the id name of the button
})