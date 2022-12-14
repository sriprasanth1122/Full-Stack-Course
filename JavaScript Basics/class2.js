// Four steps in xml request
// step 1 : cereate a XHR object
// step 2 : initialize the connection
            // frst parameter : 'GET'
            // second parameter : 'api URL'
            // optional third parameter : true
// step 3 : to send a connecion through a virtual path
// step 4 : data from the server is in string format

// Question: 
// 1. write a code to print all the countries names in the API 


var request = new XMLHttpRequest();    

request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json','true');                  

request.send();    

request.onload = function(){
    var data = JSON.parse(request.response)
    console.log(data);
    
    for (var i in data){
        console.log(data[i].name)
    }

    for(i=0; i<5; i++){                 
        console.log(data[i].name, data[i].capital)
    }

}             
