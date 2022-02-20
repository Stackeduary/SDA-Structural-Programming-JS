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

console.log("this is the comparison")
comparison(50)



// randomNumber = Math.random()
// const SCALAR = 100

// function randomNum() {
//     if (randomNumber < .5) {
//         return -1 * SCALAR * randomNumber
//     }
//     else {
//         return SCALAR * randomNumber
//     }
// }

// // console.log("This is the scaled random number:")
// // console.log(randomNum())

// console.log(`the random number is ${randomNumber} and the scaled random number is ${randomNum()} and this number is `)
// comparison(randomNum())



// // function randomNum() {
// //     if (Math.random() < .5) {
// //         return -1 * SCALAR * Math.random()
// //     }
// //     else {
// //         return SCALAR * Math.random()
// //     }
// // }


// // Math.floor(Math.random() * 101);
// // function getRndInteger(min, max) {
// //   return Math.floor(Math.random() * (max - min + 1) ) + min;
// // }


function Student(name, surname, age, courses) {
    this.name = name
    this.surname = surname
    this.age = age
    this.courses = courses
}

function Course(name, numOfHours, description) {
    this.name = name
    this.numOfHours = numOfHours
    this.description = description
}

let Java = new Course("Intermediate Java", 126, "intermediate level OOP in Java")
console.log(Java)
let Statistics = new Course("Bayesian Statistics", 126, "Bayesian Statistics, boyee")
let Physics = new Course("Particle Physics", 126, "This course'll be HARD")

let Bill = new Student("Bill", "S", 21, [Java, Physics, Statistics])
console.log(Bill)

function copy(inputObj) {
    let coursesArray = []
    for (let crs of inputObj.courses) {
        course = new Course(crs.name, crs.numOfHours, crs.description)
        coursesArray.push(inputObj.courses[course])
    }
    let newStudent = new Student(inputObj.name, inputObj.surname, inputObj.age, inputObj.courses)
    return newStudent
}

let newStudent = copy(Bill)
console.log("let's try this again.............")
console.log(`This is the new student object: ${newStudent.toString()}`)
console.log(`This is the new student object: ${JSON.stringify(newStudent)}`)
console.log("did it work????????")
console.log(`This is the new student object`)
console.log(Bill)

newStudent.name = "Barry"
console.log(newStudent)
console.log("now let's look at the original Bill object:")
console.log(Bill)

let randomArray = ["Earth", "Mars", "Mercury"]

console.log(`Can I print out a random array? ${randomArray}`)
console.log(`Can I print out a random array? ${JSON.stringify(randomArray)}`)




//1.
item = "test";
console.log(item);
var item;

//2.
console.log(item);
item = "test";
var item;

//3.
item3 = "test";
console.log(item3);
// let item3;
var item3

//4.
console.log(item4);
// let item4 = "test";
var item4 = "test";

//5.
myFunc(2, 3);
function myFunc(a, b){
    console.log(a + b);
}

//6.
myFunc6(20, 3);
// var myFunc6 = function(a, b){
//     console.log(a + b);
// }
function myFunc6(a, b){
    console.log(a + b);
}

// x(); //error - JS does not hoist ANONYMOUS functions
// var x = function(){
//     console.log("works");
// }


function factorial(n) {
    if (n > 1) {
        return n*factorial(n - 1)
    } 
    else if (n == 1 || n == 0) {
        return 1
    }
    else {
        return "please choose a positive integer and try again"
    }
}

console.log(factorial(5))
console.log(factorial(6))
console.log(factorial(-6))


function factorialForLoop(n) {
    let answer = 1
    for (let i = 1; i <= n; i++) {
        answer *= i
    }
    return answer
}

console.log(factorialForLoop(5))
console.log(factorialForLoop(6))