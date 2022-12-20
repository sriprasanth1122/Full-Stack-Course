var res = fetch("https://restcountries.com/v3.1/all")
console.log(res)

// To get the data we need to use JSON, For this weneed to use .then
// Here we need to use 2 times .then to get the data.

// res.then((data) => data.json()).then((data1) => {
//     console.log(data1)
// })

// Exercise:
// Q1 & Q2
// Write a code to print the countries in asia region using fetch.
// For the above code print the total population of the countries in asian region

res.then((data2) => data2.json()).then((data3) => {
    console.log(data3)

    let asiaDetails = data3.filter((element) => {
        return element.region == "Asia"
    });

    console.log(asiaDetails)            // Q1 Ans

    var population = asiaDetails.reduce((previousVaule, currentValue) => previousVaule + currentValue.population,0)     // Here 0 is the initial value
    console.log(population)             // Q2 Ans

})


// Q3 : 
// For the given API: Print TN state's confirmed, deceased, recovered, tested by using fetch.
// API: https://data.covid19india.org/v4/min/data.min.json

var res1 = fetch("https://data.covid19india.org/v4/min/data.min.json")

res1.then((data) => data.json()).then((data1) => {                 // (1:31:16)
    console.log(data1)

    console.log(`TN DATA => Confirmed:${data1.TN.total.confirmed} Decresed:${data1.TN.total.deceased} Recovered:${data1.TN.total.recovered} Tested:${data1.TN.total.tested}`)
    console.log(`CHENNAI DATA => Confirmed:${data1.TN.districts.Chennai.total.confirmed}`)
   
})

// CRUD________MockAPI_________________________________________________
// Here We have created a mock api using mockAPI.io 
// MockApi Link: https://mockapi.io/projects/63a00c7324d74f9fe82cc691

var url = "https://63a00c7324d74f9fe82cc690.mockapi.io/:users"

var res2 = fetch("https://63a00c7324d74f9fe82cc690.mockapi.io/Users")

res2.then((data) => data.json()).then((data1) => console.log(data1))

// Update________

async function updatedata() {
    let data = {
        Name:"vidhya",                        // The camel casees should be like same in the api data.
        Email:"vidhya@gmail.com",
        Contact:"1234567890"
    }
    var res = await fetch("https://63a00c7324d74f9fe82cc690.mockapi.io/Users"+"/8",{         // Here 8 is the id place where it should be updated
        method: "PUT",
        body:JSON.stringify(data),
        headers: {
            "Content-type":"application/json;charset=UTF-8",     // To tell the browser where to return
        }
    })
    var resjson = await res.json()              // We need to use 2times await in the Async fu
    console.log(resjson)
}
updatedata();

// Create_________

async function createdata() {
    let data = {
        Name:"vidhya",                        // The camel casees should be same like in the api data.
        Email:"vidhya@gmail.com",
        Contact:"1234567890"
    }
    var res = await fetch("https://63a00c7324d74f9fe82cc690.mockapi.io/Users",{         // Create process starts here
        method: "POSt",
        body:JSON.stringify(data),
        headers: {
            "Content-type":"application/json;charset=UTF-8",     // To tell the browser where to return
        }
    })
    var resjson = await res.json()
    console.log(resjson)
}
createdata();

// Read__________

async function readData() {
    var res = await fetch("https://63a00c7324d74f9fe82cc690.mockapi.io/Users")
    var resjson = await res.json();
    console.log(resjson)
}
readData()

// Delete________

async function deletedata() {

    var res = await fetch("https://63a00c7324d74f9fe82cc690.mockapi.io/Users"+"/10",{         // Here 10 is the id need to be deleted
        method: "DELETE",
    })
    var resjson = await res.json()
    console.log(resjson)
}
deletedata();