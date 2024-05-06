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

const sum = (a, b) => {  // es igual a const sum = (a, b) => a + b
    let plus = a + b;
    console.log(plus);
    return plus;
} ;

const subtract = (a, b) => { // es igual a const substract = (a, b) => a - b
    let minus = a - b;
    console.log(minus);
    return minus;
} ;

const multiply = (a, b) => { // es igual a const multiply = (a, b) => a * b
    let mult = a * b;
    console.log(mult);
    return mult;
} ;

const divide = (a, b) => { // es igual a const divide = (a, b) => a / b
    let division = a / b;
    console.log(division);
    return division;
} ;

const log = (value) => console.log(value);


const result = divide(subtract(multiply(sum(2, 4), sum(5, 2)), 2), 5);
log (result);

//es una forma de realizar operaciones matemáticas anidadas en JavaScript, aplicando funciones definidas previamente.
// sum(2, 4) calcula la suma de 2 y 4, resultando en 6.
// sum(5, 2) calcula la suma de 5 y 2, resultando en 7.
// multiply(sum(2, 4), sum(5, 2)) multiplica los resultados anteriores, es decir, 6 y 7, resultando en 42.
// subtract(multiply(sum(2, 4), sum(5, 2)), 2) resta 2 al resultado anterior (42), resultando en 40.
// divide(subtract(multiply(sum(2, 4), sum(5, 2)), 2), 5) divide el resultado (40) entre 5, resultando en 8.
// Finalmente, log(result); imprime el valor de result, que es 8, en la consola. 
// En resumen, esta línea de código realiza operaciones matemáticas anidadas utilizando funciones previamente definidas para obtener el resultado final de 8.