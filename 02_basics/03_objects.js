// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

 const JsUser = {
     name: "Hiren",
     "full name" : "Hiren Hirani",
     age : 18,
     [mySym]: "mykey1",
     location: "jaipur",
     email: "hiren@google.com",
     isLoggedIn: false
 }

//  console.log(JsUser.email)
//  console.log(JsUser["email"])
//  console.log(JsUser["full name"])
//  console.log(JsUser[mySym])

JsUser.email = "hiren@chat.com"
// Object.freeze(JsUser)
JsUser.email = "hiren@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingtwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());