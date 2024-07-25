// ++++++++++ OBJECT PART1

// Object define -> 2 Method  Constructor `and object litrels

/*
// Object Litrals
const mysymbol = Symbol("aaa")

const JsUser = {
    "name": "Alpha-Mind",
    age:20,
    isWorking: true,
    [mysymbol]:"key22"    //if we want touse as symbol we need to use as [ ]   ==Correct syntax==😶‍🌫️
}
console.log(JsUser.age)
console.log(JsUser.mysymbol)
console.log(JsUser[mysymbol])    //😶‍🌫️

JsUser.isWorking = false
// Object.freeze(JsUser)      //freeze the value of obj for do not change

JsUser.age = 21
console.log(JsUser)  

JsUser.greeting = function() {
    console.log("Hello JS Users")  
}
console.log(JsUser.greeting)  

JsUser.greetingTwo = function(){
    console.log(`Hello JsUsers:  ${this.name}`)  
}
console.log(JsUser.greetingTwo())  
console.log(JsUser)  

*/



/*

// +++++++++++OBJECT PART 2

// Singleton by help of constructor
const tinderUser = new Object()
tinderUser.id = "123$$3"
tinderUser.name = "Jhony dap"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const  regularUser = {
    email: "osman@gmail.com",
    fullname:{
        userFullname:{
            f_name: "Osman",
            l_name: "Gazdhi"
        }
    }
}
console.log("Hello   ", regularUser.fullname.userFullname.f_name )

const obj1 = {1:"a" ,2:"b"}
const obj2 = {3:"म" ,4:"्"}

// 1st way
const obj3 = {...obj1,...obj2}
console.log(obj3)

// 2nd way
const tarrgetObj = Object.assign(obj1,obj2)
console.log(tarrgetObj)
console.log(tarrgetObj == obj1) //true 🖐🏽🖐🏽

const Users = [
    {
        id:1,
        name:"akib"
    },
    {
        id:1,
        name:"akib"
    },
    {
        id:1,
        name:"akib"
    },
    {
        id:1,
        name:"akib"
    }
]

Object.keys(Users)   //return Array o/p
Object.values(Users)   //return Array o/p
Object.entries(Users)   //return Array o/p & converted all object in array

console.log(tinderUser.hasOwnProperty('isLoggedIn')) //checking  property is present or not


*/







// Object Part3 +++++++++

const cource =  {
    courceName: "JS",
    price: "999",
    cource_Instructure : "hitesh"
}

// Destructuring
const {cource_Instructure} = cource
console.log(cource_Instructure)


// //API data json
// {
//     name:"Akib",
//     cource_Name: "Entereprenurship"
//     price:"You can't Afford"
// }

// [
//     {},
//     {}
// [





// const user = {
//     userName : "Bot",
//     price: 999,
//     greet: function(){
//         console.log(`Welcome ${this.userName}`)
//         console.log(this)   //print current object context
//     }
// }
// user.greet()
// user.userName = "Akib-the-Warrior"
// user.greet()  
// console.log(this)   //{}  context object in browser context will be window



