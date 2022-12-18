// console.log("first")         // This is sync function
// console.log("second")
// console.log("third")

console.log("First")            
setTimeout(() => {                  // Here sync is changed to Async
    console.log("second")           
}, 3000);
console.log("third")

function f1() {
    f2();
    console.log("Hello f1");
}

function f2() {
    console.log("Hello f2");
}
f1();
f2();

// Even setTimeout is a callback function because setTimeout is a fn it is writtern with a fn (arrow fn)

// Callback hell___________________

function a1() {
    function a2() {
        function a3() {
            console.log("Hello World 1")
        }
        console.log("Hello World 2")
    }
    console.log("Hello World 3")
}
a3()
a2()
a1()

// If multiple fn are presented inside the fn, then callback cant handled the fn and cause error.