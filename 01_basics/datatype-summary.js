// primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, Bigint

//****Symbol****//
const Id  = Symbol('123')
const anotherId = Symbol('123')
// console.log(Id === anotherId);

//*****bigInt*****//
const bigNumber = 45734985956967568n
// console.log(bigNumber);

// referance (non primitive)

// Arrey, objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hiren",
    age: 27,

}
const myFunction = function(){
    console.log("hello world")
}

console.log(typeof heros);