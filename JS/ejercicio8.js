// # Closures
// Write a new `closure`: create a function called `multiplyByTwo` that takes in one parameter.
// Inside the `multiplyByTwo` function, create a function called `inner`. This function will take care of multiplying 
// the parameter passed as input and multiply it by the variable named `number`
// Print in the console the function output.
// Example: `multiplyByTwo(4)()`, result: `8`

function multiplyByTwo(value) {
    let number = 2;
    function inner () {
       let mult = value * number;
    return mult;
    }
    return inner;
}

console.log(multiplyByTwo(5)());
