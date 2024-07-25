// ++++++++++ Number ++++++++++

const score = 400

const balance = new Number(999)
console.log(balance)    //[Number: 999]

console.log(balance.toFixed(2))  //precision value 999.00
console.log(balance.toString().length) 

const otherNumber = 1234.8988
console.log(otherNumber.toPrecision(3))   //be careful if u use 4 and ur value is 1234 only 3 value will consider extra will treat as exponantial

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In')) 

console.log(Number.MAX_VALUE) 
console.log(Number.MIN_VALUE) 



// ++++++++++++++++ Maths  ++++++++++++++++
console.log(Math) 
console.log(Math.abs(-5)) 
console.log(Math.round(4.6)) 
console.log(Math.ceil(4.6))    //ceil at roof
console.log(Math.floor(4.6)) 
console.log(Math.min(3,5,1,7)) 
console.log(Math.max(3,5,1,7)) 

console.log(Math.random()) ;   //0-1 blw
console.log(Math.random()*10) ;

// value b/w 10-20
const min = 10
const max = 20
console.log(Math.floor(Math.random()  * (max-min))+1) //1-10
console.log(Math.floor(Math.random()  * (max-min))+min) //10-20
