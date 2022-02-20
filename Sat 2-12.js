// function definition
function myFunction(a, b) {
    return a + b
}

// function call, or "invoking" the function
console.log(myFunction(104, 62))

console.log(myFunction("Tartu", "Estonia"))


let anonymousFunction = function(a, b) {
    return a ** b
}

console.log(anonymousFunction(3, 4))


let callbackFnc = function(z) {
    return z*5
}

function go(n, func) {
    return func(n)
}

console.log(go(5, callbackFnc))

console.log(go(10, function(z) {
    return z*5
}))


let myName = "Bill"
var Saturday = "Feb. 12, 2022"

function today() {
    var tomorrow = "Super Bowl Sunday"
    let myName = "Bea" 
    console.log(`Hi, my is ${myName}, and I just wanted to let you know that the variable called Saturday has the value ${Saturday} and has global scope.`)
}

today()
console.log(myName)
// console.log(tomorrow) // ReferenceError: tomorrow is not defined because it is only available inside the function today()



// closure
// immediately invoked function expression, aka, IIFE
var closureExample = (function () {
    var counter = 0
    return function () {
        return counter++
    }
})()

console.log(closureExample())
console.log(closureExample())
console.log(closureExample())
// console.log(counter)



let person = {
    name: 'John',
    age: 25,
  };
  
  // add the ssn property
  person.ssn = '123-45-6789';

  console.log(person)
  
  // change the name
  person.name = 'John Doe';
  
  // delete the age property
  delete person.age;
  
  
  console.log(person);


let name = 'John';
name.alias = 'Knight';

console.log(name.alias); // undefined


let person2 = {
    name: 'John',
    age: 25,
};
  
let member = person2;
  
member.age = 26;
  
console.log(person2);
console.log(member);

// pass by value makes a copy of the variable and passes that copy into the function, so if that copy is changed, it does not affect the original variable

// passing in a variable by reference into a function, if the variable is changed inside the function, then the value of the variable is also changed outside the function
// Passing by reference means that the memory address of the variable (a pointer to the memory location) is passed to the function. This is unlike passing by value, where the value of a variable is passed in. 

let pencilObj = {
    name: "pencil",
    price: 10,
    currency: "euro"
}

let newPrice = 1500 // thanks, inflation

function changePrice(product, newPrice) {
    // newPrice = 0
    product.price = newPrice
    newPrice = 0 // free!
    // newPrice is a copy of the global variable newPrice that has global scope defined outside the function changePrice()
    return product
}

changePrice(pencilObj, newPrice)
console.log(pencilObj)
console.log(newPrice) // a copy of newPrice is made and passed into the function changePrice() but the original value of newPrice is not modified; all that's modified is the copy

console.log(changePrice)

let pencil1 = changePrice(pencilObj, newPrice)
console.log(pencil1)


// assign pencil1 = change()
// console.log(pencil1)
// will it show newPrice = 0?


for (let i = 0; i < 10; i++) {
    console.log(i);
}

// console.log(i); // ReferenceError, because i is only defined inside of the block (the for-loop)

for (var j = 0; j < 10; j++) {
    console.log(j)
}

console.log(j) // does not cause a reference error because j is defined using the 'var' keyword, which has global scope



var X = 7;
if(X == 7){
    console.log(`the variable X has the value ${X}`)
    X = "I'm redefining the global variable X since it was defined with the 'var' keyword"; //error: invalid assignment to constant
}
console.log(X)


var XX = 7;
// const XX = 7;
if(XX == 7){
    console.log(`the variable XX has the value ${XX}`)
    XX = "I'm redefining the global variable X since it was defined with the 'var' keyword"; //error: invalid assignment to constant
}
// console.log(XX) TypeError: Assignment to constant variable.


num = 6;
console.log(`since the variable declaration for num was hoisted, this console.log works: ${num}`); // outputs: 6
var num


console.log(number) // outputs: undefined; 
//declaration is hoisted, initialization isn't
var number // only this declaration is hoisted
number = 6 // this is not hoisted


// numbah = 6
// console.log(numbah) // outputs: error - does not work for let
// let numbah

// function hoisting example
oversleep()
function oversleep() {
    console.log("you all show up on time bright and early at 9 AM, but I show up whenever I want...")
}


// hoisting does not work with anonymous functions
// myFunc(); //error - JS does not hoist ANONYMOUS functions

// var myFunc = function(){
//     console.log("works");
// }


console.log(counter); // undefined
var counter = 1;


// console.log(countah);
// let countah = 1; // must initialize a variable declared with the 'let' keyword before attempting to use it


function add(a, b){
    return a + b;
}

let x = 20,
    y = 10;

let result = add(x,y);
console.log(result);


// recursion

function recursionFunc(startingVal) {
    console.log(startingVal)
    if (startingVal > 0) {
        recursionFunc(startingVal - 1)
    }
}

recursionFunc(13)


// objects
// object literal (it has the braces and properties separated by commas)
let books = {
    author: "Ernest Hemingway",
    title: "Old Man and the Sea",
    publicationYear: 1952,
    mainCharacter: "Santiago",
    secondaryCharacter: "Manolin",
    genre: "novella",
    printInfo: function() {
        return `${this.title} was written by ${this.author} in ${this.publicationYear}. It is a ${this.genre} about the story of ${this.mainCharacter} and ${this.secondaryCharacter}, and it's really, really awesome!`
    }
}

console.log(books.author)
// books.title = "The Sun Also Rises" // we can modify a property or properties of the object
console.log(books.title)
console.log(books.printInfo())


function HemingwayBook(title, author, publicationYear, genre, mainCharacter, secondaryCharacter, goodBook) {
    this.title = title
    this.author = author
    this.publicationYear = publicationYear
    this.genre = genre
    this.mainCharacter = mainCharacter
    this.secondaryCharacter = secondaryCharacter
    this.goodBook = goodBook
    this.printInfo = function() {
        return `${this.title} was written by ${this.author} in ${this.publicationYear}. It is a ${this.genre} about the story of ${this.mainCharacter} and ${this.secondaryCharacter}, and it's really, really awesome!`
    }
}

let oldManSea = new HemingwayBook("Old Man and the Sea", "Ernest Hemingway", 1952, "novella", "Santiago", "Manolin", true)
console.log(oldManSea.printInfo())

let sunAlsoRises = new HemingwayBook("The Sun Also Rises", "Ernest Hemingway", 1926, "novel", "Jake Barnes", "Lady Brett Ashley", true)
console.log(sunAlsoRises.printInfo())

console.log(sunAlsoRises)

let sunAlsoRisesJSON = JSON.stringify(sunAlsoRises)
console.log(`this is the JavaScript object: ${sunAlsoRises}`)
console.log(sunAlsoRises)
console.log(`this is the JSON object: ${sunAlsoRisesJSON}`)


let parsedSunRises = JSON.parse(sunAlsoRisesJSON) // parse takes a JSON object and converts it into a JS object (destringifies it)
console.log(parsedSunRises)
console.log(`this is the JavaScript object: ${parsedSunRises}`)