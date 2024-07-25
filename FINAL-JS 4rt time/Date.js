let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

// let myNewDate = new Date(2023, 0, 23)
// console.log(myNewDate.toDateString())

// let myNewDate = new Date("2024-05-25")
let myNewDate = new Date("05-25-2024")   //mm-dd-yy
console.log(myNewDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myNewDate.getTime())  
// console.log(myTimeStamp)   //mili-s
// console.log(Math.floor(Date.now()/1000))  //seconds

let nnewDate = new Date()
console.log(nnewDate.getMonth()) //start with 0




//----🖐🏽
nnewDate.toLocaleString('default',{
    weekday:"long",
})