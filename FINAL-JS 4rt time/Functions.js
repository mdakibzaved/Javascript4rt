// // ▶
// function CartPrice(...items){   //rest
//     storeCartPrice = 0
//     items.map((p)=>{
//         storeCartPrice+=p
//     })   
//     return storeCartPrice
// }
// console.log("total Cart Prices: ",CartPrice(1,2,3,4,5))


// ▶
// myArray = [1,2,3,4,5,6]
// function AcceptArray(anyArr){
//     anyArr.forEach((elem)=>{
//         console.log(elem)
//     })
// }
// AcceptArray(myArray)



// ▶
// function AcceptObject(anyObj) {
//     console.log(Object.values(anyObj).forEach((objIndValues)=>{
//         console.log(objIndValues)
//     }))
//     return `Hello Ji ${anyObj}`    //doub😶‍🌫️  
// }
// AcceptObject({
//     name:"Akib",
//     DeviceUser: "Window",
//     Hobbies: "SitAtPark🫵🏽"
// })




// // ⇉
// function isLoggedIn(user = "Demouser"){     
//    if(!user){
//     console.log(`Please Loggin first`);
//     return 
//    } 
//    return `Welcome dear ${user}`
// }

// const lrv = isLoggedIn("anas")   //"" or blank passes then return undefined  || if pass then overwrite
// console.log(lrv)









// ++++++++ Arrow Function ++++++++++

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


// function chai() {
//     let userName = "TheMonk"
//     console.log(this.userName)  //this keyword can't accesed var in function
// }


// const chai = ()=>{
//     let userName = "TheMonk"
//     console.log(this)   //cannot accessed in arrow func also
// }



// const addone = (num1,num2) => num1+num2
// console.log(addone(9,0))


// 🫵🏽
// const addtwo = (n1,n2) => ({1:"Akib,2:Shehbaz"})    //should  be wrapped in () prentheses
// returnvalue = addtwo()
// console.log(returnvalue)











// ⇨  IIFE Immediately Invooked Function Expression

//Sometimes we have face problem due to pollution of Global scope 🖐🏽

// Named IIFE
(function coff(){
    console.log(`DB CONNECTED`)
})();   //need to end    //dont know where to stop  


// Simple IIFE
((name)=>{
    console.log(`Hello Ji ${name}`)
})('champion');













