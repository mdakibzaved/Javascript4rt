// let a = 10;
// const b=20;
// var c =30
// //you are already study broh :)
// //globol in console are diffrent from code enviourment


// function one() {
//     const userName = "system"
//     function two() {
//         const website = "google"
//         console.log(userName)  //child func()  or if()  can accesed parent
//     }
//     two()
//     // console.log(website)  //you are big brother can't accessed child element:)
// }

// one()



console.log(addOne(5))   //can accessed
function addOne(num) {
    return num + 1
}

// addTwo(5)  can't accessed befor initilization
const addTwo = function addOne(num) {
    return num + 4
}


