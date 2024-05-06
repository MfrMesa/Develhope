// Ejercicios practica closure:


// Contador Privado:
// Crea una función que devuelva un objeto con dos métodos: 
// increment e imprimir. El método increment incrementa un contador interno, y 
// imprimir imprime el valor actual del contador.

function increment(suma) {
    let contador = 2;
    return function imprimir() {
        let interno = contador + suma;
        return interno;
    };
}

console.log(increment(4)());


// Generador de Números Únicos:

// Crea una función llamada generarGenerador que toma un número como parámetro y devuelve una función. 
// La función devuelta, incrementa el número original y devuelve el nuevo valor.


function generarGenerador(numero){
    let sum = 1;
    return function devuelta(){
        sum += numero;
        return sum; 
    };
}
console.log(generarGenerador(6)());


// Calculadora con Memoria:

// Crea una función crearCalculadora que devuelve un objeto con métodos sumar, restar, 
// multiplicar y imprimir. Cada método toma un número como parámetro y realiza la operación correspondiente. 
// El método imprimir imprime el resultado acumulado de todas las operaciones.

function crearCalculadora(sumar, restar, multiplicar){
    let number = 6;
        function inner1(){
        let suma = number + sumar;
        return suma;
    };
        function inner2() {
        let resta = number - restar; 
        return resta;
    };
    function inner3() {
        let mult = number * multiplicar; 
        return mult;
    };
    
    function imprimir(){
        let resultado = inner1() + inner2() + inner3();
        return resultado;
    }

    return {
        inner1,
        inner2,
        inner3,
        imprimir, 
};

}

const calculadora = crearCalculadora(5, 9, 8);
console.log(calculadora.inner1());   // Resultado de sumar 2 a 6
console.log(calculadora.inner2());   // Resultado de restar 3 a 6
console.log(calculadora.inner3());   // Resultado de multiplicar 4 por 6
console.log(calculadora.imprimir()); 