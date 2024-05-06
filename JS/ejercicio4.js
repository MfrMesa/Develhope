// Create a function `sumUntil` that takes in a parameter and retunrs the sum of all numbers ranging from one to the value passed as parameter.
// Example:
//  function sumUntil(maxValue) {
//  ...
//  }
//  console.log(sumUntil(5)); // OUTPUT: 15

function sumUntil(maxValue) {
    let sum = 0;
    for (let i = 1; i <= maxValue ; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumUntil(5));

// ponemos <= maxValue en vez de un numero porque en console.log(sumUntil(5)); ya nos estan dando el numero a tomar como parametro.
// de lo contrario dejariamos vacio console.log(sumUntil()); y colocariamos <= 5
