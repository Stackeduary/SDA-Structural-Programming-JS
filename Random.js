// E1

let randomNumber = Math.random()
const SCALAR = 100
const MIN = -100
const MAX = 100


function getRandomInteger(min, max) {
    return Math.floor(randomNumber * (max - min + 1)) + min;
}


let greater = function() {
    return "greater than zero"
}
let equal = function() {
    return "equal to zero"
}
let less = function() {
    return "less than zero"
}

function comparison(value) {
    if (value < 0) {
        return less()
    } else if (value == 0) {
        return equal()
    } else {
        return greater()
    }
}


// Math.random() produces a (pseudo)random number from [0, 1)
// assuming SCALAR = 100, randomNum() maps [0, .5) to (-50, 0) and 
// maps (.5, 1) to (50, 100) and 
// function randomNum() {
//     if (randomNumber < .5) {
//         return -1 * SCALAR * randomNumber
//     }
//     else {
//         return SCALAR * randomNumber
//     }
// }


console.log(`the random number is ${randomNumber} and the scaled random number is ${getRandomInteger(MIN, MAX)} and this number is ${comparison(randomNumber)}`)

console.log("console.log(Math.floor(Math.random() * (MAX - MIN + 1)))")
console.log(Math.floor(randomNumber * (MAX - MIN + 1)))

console.log("randomNumber * 201")
console.log(randomNumber * 201)

console.log("console.log(getRandomInteger(MIN, MAX))")
console.log(getRandomInteger(MIN, MAX))