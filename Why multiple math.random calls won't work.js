// E1
let greater = function() {
    console.log("Greater than zero")
}
let equal = function() {
    console.log("Equal to zero")
}
let less = function() {
    console.log("Less than zero")
}

function comparison(value) {
    if (value < 0) {
        less()
    } else if (value == 0) {
        equal()
    } else {
        greater()
    }
}

const SCALAR = 100

function randomNum() {
    if (Math.random() < .5) {
        return -1 * SCALAR * Math.random()
    }
    else {
        return SCALAR * Math.random()
    }
}

console.log(`the random number is ${Math.random()} and the scaled random number is ${randomNum()} and this number is `)
comparison(randomNum())



// function randomNum() {
//     if (Math.random() < .5) {
//         return -1 * SCALAR * Math.random()
//     }
//     else {
//         return SCALAR * Math.random()
//     }
// }


// Math.floor(Math.random() * 101);
// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

// This demonstrates the need to have one Math.random() call and store that value in a variable: each Math.random() generates a different random number
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())