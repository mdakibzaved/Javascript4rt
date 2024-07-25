const name = "semow"
const repoCount = 90

console.log(`Name:${name} ,  Count: ${repoCount}`)   //string interpolation
console.log(name[4])



// 2nd ways
const gameName = new String("GTaTHEGAME")
console.log(gameName)
console.log(gameName[2])


// String Methods
console.log(gameName.length)
console.log(gameName.toLocaleUpperCase())
console.log(gameName.charAt(1))
console.log(gameName.indexOf('T'))
console.log(gameName.indexOf('T'))

const newString = gameName.substring(0,2)   //1 char kam
console.log(newString);    //-value ignored & start with 0

const anotherString = gameName.slice(-3,2)
console.log(anotherString)

const greet = "   helloji "
console.log(greet.trim())


const url = "https://akib.com/akib30aboutus"
console.log(url.replace('30','-'))

console.log(url.includes('code-5'))

console.log(gameName.split('~'))
 