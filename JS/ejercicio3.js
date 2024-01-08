// Turn the variables functions into arrow functions and combine the functions so that the result of 
// the following mathematical operation is printed on the console: `((2 + 4) * (5 + 2) - 2) / 5`:

// const sum = function (a, b) {
//     return a + b;
//     }
// const subtract = function (a, b) {
//     return a - b;
// }
// const multiply = function (a, b) {
//     return a * b;
// }
// const divide = function (a, b) {
//     return a / b;
// }
// const log = function (value) {
//     console.log(value);
// }

const sum = (a, b) => {
    let plus = a + b;
    console.log(plus);
    return plus;
} ;

const subtract = (a, b) => {
    let minus = a - b;
    console.log(minus);
    return minus;
} ;

const multiply = (a, b) => {
    let mult = a * b;
    console.log(mult);
    return mult;
} ;

const divide = (a, b) => {
    let division = a / b;
    console.log(division);
    return division;
} ;

const log = (value) => console.log(value);


const result = divide(subtract(multiply(sum(2, 4), sum(5, 2)), 2), 5);
log (result);
