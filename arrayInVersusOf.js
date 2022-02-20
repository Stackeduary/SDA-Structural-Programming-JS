testArr = ["q", "w", "e", "r", "t", "y"]

console.log("This is the OF example")
for (let loopVar of testArr) { // using 'of' returns the actual values inside the array
    console.log(loopVar)
}

console.log("Trung really wants a separation here!")

console.log("in")
for (let loopVar in testArr) { // using 'in' returns the INDEX OF THE VALUES inside the array
    console.log(loopVar)
}

// mnemonic: in <==> index
// mnemonic: "ov" = of <==> values