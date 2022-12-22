// Now we are going to fetch details from API and returns values in the browser page not in console.
// Previously we have done this in class16 but that was not in DOM here we have doing in DOM.

var div = document.createElement("div");
div.innerHTML =
`<input type="text" id="txt" placeholder="Enter the country name">
<button type="button" id="btn" onclick="foo()">Search</button>
<div id="active"></div>
<div id="recovered"></div>
<div id="confirmed"></div>
<div id="deaths"></div>`;
div.style.textAlign="center";
div.setAttribute('id','allContent')
document.body.append(div)

async function foo() {

    let cc = document.getElementById("txt").value            // It hold the country name in the input
    console.log(cc)

    let res = await fetch(`https://api.covid19api.com/dayone/country/${cc}`)      // It get the information of the country which is given to the input
    let result = await res.json()
    console.log(result)

    var index = result.length-1                             // This is for to return only the last value which is the current status 
    var active = result[index].Active
    console.log(active)

    var index1 = result.length-1                             
    var recovered = result[index1].Recovered
    console.log(recovered)

    var index2 = result.length-1                             
    var confirmed = result[index2].Confirmed
    console.log(confirmed)

    var index3 = result.length-1                             
    var deaths = result[index3].Deaths
    console.log(deaths)

    document.getElementById("active").innerText=`Total Active Cases: ${active}`;        // This shows the output in the browser page
    document.getElementById("recovered").innerText=`Total Recovered Cases: ${recovered}`;
    document.getElementById("confirmed").innerText=`Total Confirmed Cases: ${confirmed}`;
    document.getElementById("deaths").innerText=`Total deaths Cases: ${deaths}`;
}