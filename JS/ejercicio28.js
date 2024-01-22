// # Rest parameters and spread syntax
// Perform a code refactoring by using the Spread Operator. The output of the console.log must be the same.


// function sum(num1, num2, num3) {
//     return num1 + num2 + num3;
// }
// const numbers = [1, 2, 3];
// console.log(sum(numbers[0], numbers[1], numbers[2]));


const numbers = [1, 2, 3];
function sum(...suma){
    return suma.reduce((total, num) => total + num, 0);
}

console.log(sum(...numbers));