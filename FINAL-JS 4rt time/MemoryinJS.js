// Stack (Primitive)   ,Heap (Non-Premitive)


// 1️⃣Stack
let myYoutubeName = "AlsoSmash"  
let anothername = myYoutubeName
anothername = "Quizlok"

console.log(anothername)  //copy will be passed ok



// 2️⃣Heap
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "user@yahooo.com"

console.log(userOne.email)  //because reference will be same reflect occurs in both users

