//06aug2022
// Arrayy of object
var array= [{
    "id" : "1",
    "name" : "sri",
    "email" : "sri@gmail.com"

} ,
  {
    id : "2",
    name : "sri2",
    email : "sri2@gmail.com"

} ]

// console.log(array[0].email)

// //JSON format object value
var student = {
    "id" : "1",
    "name" : "sri",
    "email" : "sri@gmail.com"

}

//console.log(student["id"]) //format of taking values in JSON format

// Syntax of [for in loop]
// for(variable in objectname){}
// for(var i in array){console.log(i)} 

var array= [
 {
    "id" : "1",
    "name" : "sri",
    "email" : "sri@gmail.com"

 } ,   
  {
    id : "2",
    name : "sri2",
    email : "sri2@gmail.com"

  } ]

// for(var i in array){
//     console.log(array[i]["name"])
// }
// //or
// for(var i in array){
//     console.log(array[i].name)
// }

var array = [
  {
    "id": "1",
    "name": "Lura Senger",
    "email": "Xander_Collier@yahoo.com"
  },
  {
    "id": "2",
    "name": "Wilburn Weber",
    "email": "Bennett_Kreiger11@yahoo.com"
  },
  {
    "id": "3",
    "name": "Tyrique Hahn",
    "email": "Juston.Altenwerth@yahoo.com"
  },
  {
    "id": "4",
    "name": "Lenny Bailey",
    "email": "Guiseppe_Hegmann@yahoo.com"
  },
  {
    "id": "5",
    "name": "Vladimir Keeling",
    "email": "Louisa_Walsh18@hotmail.com"
  },
  {
    "id": "6",
    "name": "Kellie Crona",
    "email": "Chandler_Abernathy@yahoo.com"
  },
  {
    "id": "7",
    "name": "Carolina White",
    "email": "Royal50@hotmail.com"
  },
  {
    "id": "8",
    "name": "Alfredo Conn",
    "email": "Clarabelle34@hotmail.com"
  },
  {
    "id": "9",
    "name": "Stan Shanahan",
    "email": "Lamar.McClure@hotmail.com"
  },
  {
    "id": "10",
    "name": "Marvin Fay",
    "email": "Osbaldo58@hotmail.com"
  },
  
]

//to print all elements in the array
for(var i in array){
    console.log(array[i])
}

//to print all the values in the array
for(var i in array){
    console.log(array[i].id, array[i].name, array[i].email)
}

//print 1st 5 values in the array
for(i=0; i<5; i++){
    console.log(array[i].id, array[i].name, array[i].email)
}


var arr = [1,2,3]
//for in starts with the index value of 0
for (let i in arr){
    console.log(arr[i])
}
//for of starts with the index value of 1
for (let i of arr){
    console.log(arr[i])
}

