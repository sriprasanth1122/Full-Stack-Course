
// To create a Element
var divElement = document.createElement("div")
divElement.innerHTML="Hello world"
document.body.append(divElement)

// InnerHtml
var divElement1 = document.createElement("div")
divElement1.innerHTML="<div>Hello world<div>"
document.body.append(divElement1)

//InnerText
var divElement2 = document.createElement("div")
divElement2.innerText="<div>Hello world<div>"
document.body.append(divElement2)

// Practics______________________________________

let pTag = document.createElement("p")
pTag.innerHTML="This is p tag using DOM"
document.body.append(pTag)

let h3Tag = document.createElement("h3")
h3Tag.innerHTML="This is h3 tag using DOM"
document.body.append(h3Tag)

let spanTag = document.createElement("span")
spanTag.innerHTML="This is span tag using DOM"
document.body.append(spanTag)

// Inline CSS along with DOM_________________________________________
// In the output the background colour is given in the internal CSS.

let heading = document.createElement("h1")
heading.innerHTML="Inline CSS with DOM" 
heading.style.color="purple"          // Inline styling
heading.style.textAlign="center"      // Inline styling
document.body.append(heading)

// Bootsrtap using DOM (For this we need to link cnd in the html file)____________________________________
// (Note the below codes are copied from the bootstrap website)

let bootstrapStyle = document.createElement("div")
bootstrapStyle.innerHTML=`<form>
<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Password</label>
  <input type="password" class="form-control" id="exampleInputPassword1">
</div>
<div class="mb-3 form-check">
  <input type="checkbox" class="form-check-input" id="exampleCheck1">
  <label class="form-check-label" for="exampleCheck1">Check me out</label>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>`
document.body.appendChild(bootstrapStyle)

// Example for Append (Append multiple elements at a same time)____________________________________________________________________________

const children = document.createElement("h5")
const child1 = document.createElement("p")
const child2 = document.createElement("p")
children.innerHTML="This is the example for Append (Append multiple elements at a same time)"
child1.innerText=" This is child1 "
child2.innerText=" This is child2"
document.body.append(children, child1, child2)

//SetAttribute__________________________________________________________

var set = document.createElement("div")
set.innerHTML="SetAttribute"
set.style.color="orange"
set.style.width="150px"
set.setAttribute('class','classname')
set.setAttribute('id','idname')
document.body.append(set)

// <br> tag using DOM.
var divElement1 = document.createElement("div")
divElement1.innerHTML="<br>"
document.body.append(divElement1)


// ClassList________________________________________
// Usimg multiple no of classes in a single line.

var clslist = document.createElement("div")
clslist.innerHTML="Class List (Adding list of classes in a single line)"
clslist.classList.add('main','main1','main2','main3')
document.body.append(clslist)

// getElementById and getElementByClassname and getElementByTagname_________________________


var getid = document.getElementById('test1')
getid.innerHTML="This is the getelementbyid function in DOM"
document.body.append(getid)

var getclass = document.getElementsByClassName('test2')
getclass.innerHTML="This is the getelemntbyclass function in DOM"
document.body.append(getclass)

var divi1 = document.getElementsByTagName('div')
console.log(divi1)

// (Note : JS is a synchronus fn so verify that js file is linked at the end of the html body tag)

// querySelector & querySelectorAll (2:19:00)_______________________________

var navhead = document.querySelector('.navheading')
console.log(navhead)

// note : Some fn in this file will not get expected output, but the fn is a correct fn, So for the correct fn cut copy the fn in the another empty file.

