// Fibonacci solution using recursion
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, so on
// base case: 1

function FibSolution(inputVal) {
    // base case
    if (inputVal == 1 || inputVal == 2) {
        return 1
    } else if (inputVal > 2) {
        return FibSolution(inputVal - 2) + FibSolution(inputVal - 1)
    } else {
        return `Please enter an integer starting from 1`
    }
}

console.log(FibSolution(6))
console.log(FibSolution(7))