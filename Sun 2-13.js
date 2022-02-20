// function definition
// this is a NAMED function
function myFunction(a, b) {
    return a + b
}

// syntax to define a function:
// 1. function keyword
// 2. function name: 'myFunction'
// 3. (parameters): a, b
// 4. some function logic: a + b
// 5. return statement that outputs what is produced inside the function

// function call, or "invoking" the function
console.log(myFunction(104, 62)) // adding two numbers in myFunction

console.log(myFunction("Tartu ", "Estonia")) // concatenating two strings in myFunction

// Two ways to define a function in JS:
// 1. named function
// 2. anonymous function



// Anonymous function:

// var/let/const variableName = function(parameter list) {
//     some functionality goes here
//     return some value (but alternatively, I could console.log(), or perform some other action instead of returning a value)
// }

let generateRandomNumber = function() {
    return Math.random()
}

console.log(generateRandomNumber())



// Named function
function addNamed(a, b) {
    return a + b
}

// Anonymous function
let addAnonymous = function(a, b) {
    return a + b
}

console.log(addNamed(42, 420))

console.log(addAnonymous(42, 420))



// Task
// write a function that takes in an array as an argument and prints every item in the array individually
// you can choose to define the function as a named function or as an anonymous function

students = ["Elvis", "Prince", "Michael", "Rod Stewart", "Mick Jagger", "Ghostface"]

console.log("this is students.length")
console.log(students.length) // 

let printFnc = function(inputVar) {
    console.log(inputVar)
}

students.forEach(printFnc) 
// objectName.property

// people who vote that forEach is the callback function: Kait, Joosep, Lauri, Ats, Trung, Isabella, Karin
// people who vote that printFnc is the callback function: Bea, Priit


// objectName.method()
// what is a method? it is function that is "attached" or "belongs to" an object

// contrast a method with a "user-defined function": we don't need to call the function using 
// objectName.userDefinedFunction()
// we just call it using userDefinedFunction()

// printFnc is a variable?


let myArray = ["Joosep", "Kait", "Isabella", "Lauri", "Karin", "Indrek", "Trung", "Priit", "Ats", "Bea", "Priit",]

myArray.forEach(element => console.log(element))


// Solution using a for-loop
function printOutEveryItem(inputArray) {
    for (let i = 0; i < inputArray.length; i++) { // i is our counter variable
        console.log(inputArray[i]) // inputArray[i] will select the ith element in the array; inputArray[0] select the first element in the array; inputArray[1] will select the second item in the array, and so on
    }
}

printOutEveryItem(myArray)
console.log("====== break ======")
printOutEveryItem(students)


// types of blocks in JS:
// 1. function blocks
// 2. for-loop blocks
// 3. while loop blocks
// 4. do-while blocks
// 5. switch blocks
// 6. if blocks

let i = 0
if (i < 5) {
    let favFood = "cheeseburger" // the favFood variable is local to this block only IF YOU USE 'LET'; it cannot be accessed outside the block
    console.log(favFood)
}

// console.log(favFood)



// Let's turn this into an anonymous function:
let printOutEveryItemAnonymous = function(inputArray) {
    for (let i = 0; i < inputArray.length; i++) { // i is our counter variable
        console.log(inputArray[i]) // inputArray[i] will select the ith element in the array; inputArray[0] select the first element in the array; inputArray[1] will select the second item in the array, and so on
    }
}

printOutEveryItemAnonymous(students)




// let's try passing in a named function as a callback to another function
// named function
function concat(string1, string2) {
    return string1 + " " + string2 // string1 + string2
}

// "outer" function
function displayOnScreen(displayString) {
    console.log(displayString)
}

displayOnScreen(concat("Tartu", "Tartulinn")) // takeaway: the callback function (the function being passed in as an argument to another function) can be EITHER a named function or an anonymous function


//anonymous function, doing something
var f = function(a){
    return a * 5;
}

//function, accepting callback as argument
function go(n, func){
    return func(n);
}

//calling the function
go(10, f);

go(10, function(a){
    return a * 5;
}
);

let myName = "Bill" // in this case, myName is global because is defined outside of any block

function addLastName(surname) {
    let myName = "Nancy" // override the global version of "myName" inside the function block
    var title = "The Honorable"
    return title + " " + myName + " " + surname
}

console.log(addLastName("Withers"))
console.log(addLastName("Kerrigan"))
console.log(addLastName("Reagan"))

// console.log(title)


var title = "The Honorable"
var title = "The One and Only" // var allows us to overwrite a variable
console.log(title)

let honorific = "The Greatest of All Time"
// let honorific = "GOAT" // let does not allow us to overwrite or modify an existing variable
console.log(honorific)



// To demonstrate that copying and then modifying a primitive value does not change the original ('age')
let age = 25
let newAge = age // creating a copy of age and assigning that value of the copy to the new variable 'newAge'

// age *= 2

newAge++ // newAge is modified because it has been incremented by one
console.log(`newAge: ${newAge}`)
console.log(`age: ${age}`)

// to demonstrate that copying and then modifying a reference variable in fact DOES change the original

let BillObj = {
    sweaterGame: "tight",
    hairstyle: "chromedomus"
}

let offspring = BillObj // copy the original object

offspring.hairstyle = "George Clooney-esque" // then modify the COPY of the object

console.log(offspring)
console.log(BillObj) // whaaaaat?! I'm gonna get George Clooney hair?!




let person = {
    name: 'John',
    age: 25,
  };
  
  let member = person;
  
  member.age = 26;
  
  console.log(person);
  console.log(member);



console.log("This is the hoisting part of the lesson")
console.log(num); // outputs: undefined; 
//declaration is hoisted, initialization isn't
var num;
num = 6;


// behind the scenes
// var num;
console.log(numbah); // outputs: undefined; 
//declaration is hoisted, initialization isn't
var numbah = 6;

