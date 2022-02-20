// recursion example from slides
function recursionCounter(startingVal) {
    console.log(startingVal)

    if (startingVal > 0) {
        recursionCounter(startingVal - 1)
    } else {
        0
    }
}

recursionCounter(6)

// creates a stack overflow
// function doNotRun() {
//     doNotRun()
// }

// factorial exercise:
// factorial(n) definition: n*(n-1)*(n-2)*...*2*1

function recursionEx(integer) {
    // base case
    if (integer == 1) {
        return 1
    }
    // recursion
    else if (integer > 1) {
        return integer*recursionEx(integer - 1)
    }
    // error-handling case for integers < 0
    else {
        return `Please retry with an integer greater than 0`
    }
}

console.log(recursionEx(5))


// Recursion task: Fibonacci sequence
function Fib(inputVal) {
    if (inputVal <= 0) {
        return 0
    }
    else if (inputVal == 1) {
        return 1
    }
    else {
        return Fib(inputVal - 1) + Fib(inputVal - 2)
    }
}

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, so on
console.log("Fibonacci sequence starts here:")
console.log(`Fib(0): ${Fib(0)}`)
console.log(`Fib(1): ${Fib(1)}`)
console.log(`Fib(2): ${Fib(2)}`)
console.log(`Fib(3): ${Fib(3)}`)
console.log(`Fib(4): ${Fib(4)}`)
console.log(`Fib(5): ${Fib(5)}`)
console.log(`Fib(6): ${Fib(6)}`)
console.log(`Fib(7): ${Fib(7)}`)
console.log(`Fib(8): ${Fib(8)}`)

// console.log(`Fib(48): ${Fib(48)}`)


// Copying an object Exercise 2
// There are many steps in this exercise, so break it into small, easy-to-implement chunks
// step 1: create a JS object representing a student who has a name, surname, age and a courses array

// step 2: Each course has a name, number of hours and a short description
let JavaScript = {
    name: "JavaScript",
    numberOfHours: 126,
    description: "This course is for all the cool kids who want to become JS masters!"
}

let homeEconomics = {
    name: "Home Ec",
    numberOfHours: 39,
    description: "Women, men, young and old should learn Home Ec"
} // an example of an object literal

let studentObject = {
    name: "Mary",
    surname: "MaryQuiteContrary",
    age: 25,
    courses: [JavaScript, homeEconomics] //, "Introduction", "Quantum Mechanics III"]
}

console.log(studentObject)

// Write a function that will create a sample Student object and fill it with some data.
function Student(name, surname, age, courses) {
    this.name = name
    this.surname = surname
    this.age = age
    this.courses = courses
}

// 'new' is a keyword and is needed to instantiate or create a new instance object from the class constructor

let JimJohn = new Student("Jim", "John", 45, ["Statistics IV", "Real Analysis", "Astronomy"])

console.log(`the JimJohn object: ${JimJohn}`)
console.log(JimJohn)
console.log(`the JimJohn object: ${JSON.stringify(JimJohn)}`)

// Write a function that will create a sample Courses object and fill it with some data.
function Course(name, numberOfHours, description) {
    this.name = name
    this.numberOfHours = numberOfHours
    this.description = description
}

let Vietnamese = new Course("Tieng Viet cho muy nguoi", 30, "Ngon ngu de nhat")
let Estonian = new Course("Eesti Keel algajatele", 500, "kõige raskem keel")
let calculus = new Course("Calculus I", 99, "Learn how to differentiate and integrate to impress your girlfriend")

console.log("Print each course to the screen")
console.log(Vietnamese)
console.log(Estonian)

let TrungKrosenkranius = new Student("Trung", "Krosenkranius", 7, [Vietnamese, Estonian, calculus, homeEconomics])

console.log("this is the original TrungKrosenkranius object:")
console.log(TrungKrosenkranius)

// note: this function wasn't fully completed; the completed version is at the bottom of this program
function copyObject(inputStudentObj, newName) {
    let newCoursesArray = [] // create an entirely new courses array
    // create an entirely new Student object

    let copiedStudentObject = inputStudentObj // this statement creates a shallow copy of 'inputObj'
    copiedStudentObject.name = newName // trying to modify the copy only, which change the original name to the new name I pass in the copyObject() function
    return copiedStudentObject
}

console.log("This is the COPIED object, yoooo:")
console.log(copyObject(TrungKrosenkranius, "Alar"))
console.log("This is the original object:")
console.log(TrungKrosenkranius)


// copying and modifying the copied array will also modify the original array
let testArray = ["a", "b", "c"]
console.log(`This is the original testArray BEFORE: ${testArray}`)
console.log(testArray)
let newArray = testArray // create a copy of 'testArray' called 'newArray'; newArray <==> copy
newArray.push("a fourth item INTO NEW ARRAY ONLY") // try to modify 'newArray'
console.log(`This is the original testArray: ${testArray}`) // the original array was also modified :(
console.log(testArray)    
console.log(`This is the new newArray: ${newArray}`)

// create a copy of 'testArray' such that modifying the copy does not modify the original
let thisIsReallyANewArray = [] // first, create a new empty array
for (let item of testArray) { // manually loop through the original array 
    thisIsReallyANewArray.push(item) // and push each item onto the new array
}

thisIsReallyANewArray.pop() // modify the copied array only; pop() method removes the last item from the end of the array
thisIsReallyANewArray.pop() // modify the copied array only; pop() method removes the last item from the end of the array
console.log(`This is the new thisIsReallyANewArray: ${thisIsReallyANewArray}`)
console.log(thisIsReallyANewArray)
console.log(`This is the original testArray: ${testArray}`)
console.log(testArray)


// solution to Exercise 2
function deepCopyObject(originalStudentObj) {
    let coursesArrayNew = [] // create a new blank array
    for (let courseAliasVar of originalStudentObj.courses) {
        coursesArrayNew.push(courseAliasVar)
    } // loop through the array and manually add each item from the original array to the new array
    let newStudent = new Student(originalStudentObj.name, originalStudentObj.surname, originalStudentObj.age, coursesArrayNew) // create a new Student object using the Student constructor and initialize the new Student object using the original (passed-in) object as the initial values
    return newStudent
}

// demonstration that the solution to Exercise 2 works as we expect it should
let Bill = deepCopyObject(TrungKrosenkranius)
console.log("This is the new Bill object that is a deep copy of the TrungKrosenkranius object:")
console.log(Bill)

Bill.name = "Bill"
Bill.surname = "S"
Bill.age = "young"
console.log("This is the MODIFIED Bill object:")
console.log(Bill)

console.log("Let's double check that our original TrungKrosenkranius object:")
console.log(TrungKrosenkranius)