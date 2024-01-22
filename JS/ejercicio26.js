// # Rest parameters and spread syntax
// The sum function has a high numbers of parameters. How can we improve the code in order to make it accept any amount of numbers to sum as its argument?


// function sum(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }

// console.log(sum(1, 2, 3, 4, 5));

// version 1
function sum(...sumas) {
    let resultado = 0;

    for (let suma of sumas) resultado += suma;
    return resultado;
}

console.log(sum(1, 2, 3, 4, 5));

//version 2
function sum(...sumas){
    return sumas.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));