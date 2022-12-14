// This , OOP : Object Oriented Programing
// 4 Features : Object, Classes, Encapsulation(Instance), Inheritance

// The most popular OOP model is a class based,
// If it is class based object,
// The object variables (names) it has only two variables : FirstName , LastName

// But JavaScript is a prototype object based language.
// To make JavaScript a class based object we can use two types

// 1. Object Litals
// 2. object constructor 

// Object Litral

let bike = {
    name : "yamaha",
    make : "2022",
    price : "150000",
    getBikeDetails : function () {
        return (`The name of the bike is ${bike.name} and with the price of RS: ${bike.price} /-`)
    },

}
// bike.name = "suzuki"     // to change the values in the object
console.log(bike.getBikeDetails())  // THis is the traditional way of calling an object


// Object Constructor

function person (firstName , lastName) { 
    this.firstName = firstName
    this.lastName = lastName
}

person1Details = new person ("Sri", "Prasanth")       // Creating Instance
person2Details = new person ("Sri" , "Gowtham")
person3Details = new person ("Prasanth", "Prasanth")
person4Details = new person ("Gowtham" , "Gowtham")

console.log(person1Details.firstName)

// Classes
// Syntax : 
// className { constructor () { } }
                          // class constructor
class people {
    constructor(firstName , lastName , age , place) { 
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
        this.place = place
    }
    getDetails () { 
        return (`The name of the person is ${this.firstName} ${this.lastName} and his age is ${this.age} and from ${this.place}`)
    }
}
// Creating Instance
let person1 = new people ("sri" , "prasnth" , "21" , "Erode")
let person2 = new people ("Sai" , "prasnth" , "22" , "Coimbatore")

console.log(person1 , person2)
console.log(person1.getDetails())
console.log(person2.getDetails())
console.log(person1["age"])


// Exercises
// Create a class Uber

class uber {
    constructor (distance , rate , waitingPeriod) {
    this.distance = distance,
    this.rate = rate,
    this.waitingPeriod = waitingPeriod
    }

    distanceCorrection (distance) {     //This function is to update the distance
        this.distance = distance
    }
    getRideDetails () { 
        return (`The distance of the journey is ${this.distance}Km and the rate of ${this.rate} and with waitind period of ${this.waitingPeriod} `
        )
    }
    getPrice () { 
      let price = (this.rate * this.distace) + (this.waithingPeriod * 5); 
      return price;
    }
}
// Creation Instance

let journey1 = new uber (350 , 20 , 15)

console.log(journey1.getPrice())
console.log(journey1.getRideDetails())

journey1.distanceCorrection(150);   // Distance update

console.log(journey1.getRideDetails())

