const myArr = [1,23,6,7,9,"fonk"]
console.log(myArr[1])

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2)


// Array Methods
myArr.push(4)
console.log(myArr)

myArr.pop()
console.log(myArr)

myArr.unshift(0)
console.log(myArr)

console.log(myArr.shift())   //return 0 remove value

const newArrr = myArr.join()
console.log(newArrr)   //converted to String




//slice , splice    Interview😶‍🌫️
console.log("A",myArr)

const myn1 = myArr.slice(1,3)   //last will not include
console.log(myn1)
console.log("B: ",myArr)

const myn2 = myArr.splice(1,3) //last will includes
console.log(myn2)




//++++++++++++ More Advanced

const marvel_hero = ["thor" , "IronMan", "Spiderman"]
const dc = ["Superman" , "Flash", "batman"]

marvel_hero.concat(dc)
console.log(marvel_hero)   //inside theexisting array /array will be added


// If We Want indivisual Array Element in NewArray
const NewSpreadArr = [...marvel_hero, ...dc]  
console.log(NewSpreadArr)  

// In This Situation We Use flat
const Another_Arr = [1,2,3,[4,5,6],7,[8,9,[3,4,5]]]
console.log(Another_Arr.flat(2))    //OR U can write Infinity for depth

console.log("String:   ",Array.isArray("AkibZaved"))  
console.log(Array.from("AkibZaved"))  
console.log(Array.from({name:"Akib"}))     //return []  nedd to specify key or value jisse array banana hai    😶‍🌫️


let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
console.log(Array.of(score1,score2,score3,score4))  
