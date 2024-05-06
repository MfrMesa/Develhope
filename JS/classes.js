//Ejercicios practica Classes:

//Clase Persona:

//Crea una clase llamada Persona que tenga propiedades como nombre, edad y método para imprimir los detalles de la persona.

// class Persona {
//     constructor(nombre, edad){
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     infoPersona(){
//         return `Detalles de: ${this.nombre}, ${this.edad} años`;
//     }
// }

// let student = new Persona ("Maria", 30);

// student.infoPersona();


//Clase Libro:

//Crea una clase llamada Libro con propiedades como título, autor y método para obtener la información del libro.

// class Libro{
//     constructor(titulo, autor){
//         this.titulo = titulo;
//         this.autor = autor;
//     }

//     infoLibro(){
//         return `Libro: ${this.titulo} de ${this.autor}`;
//     }
// } 

// let autores = new Libro("Harry Potter", "JK Rowling");

// autores.infoLibro();

//Clase Calculadora:

//Crea una clase llamada Calculadora con métodos para sumar, restar, multiplicar y dividir.

// class Calculadora{
//     constructor(numero1, numero2){
//         this.numero1 = numero1;
//         this.numero2 = numero2;
//     }

//     sumar(){
//         return this.numero1 + this.numero2;
//     };

//     restar(){
//         return this.numero1 - this.numero2;
//     };

//     dividir(){
//         return this.numero1 /  this.numero2;
//     };

// }

// let suma = new Calculadora(8, 9); 
// let resta = new Calculadora(8, 9); 
// let divide = new Calculadora(8, 9); 

// let resultadoSuma = suma.sumar();
// let resultadoResta = resta.restar();
// let resultadoDivide = divide.dividir();

// console.log(resultadoSuma);
// console.log(resultadoResta);
// console.log(resultadoDivide);


// Clase Estudiante:

// Crea una clase llamada Estudiante que tenga propiedades como nombre, edad y un array para almacenar las calificaciones del estudiante. 
// Agrega métodos para añadir una calificación y calcular el promedio de las calificaciones.

class Estudiante{
    constructor(nombre, edad, calificaciones){
        this.nombre = nombre;
        this.edad = edad;
        this.calificaciones = calificaciones;
    }

    notasInfo(){
        this.calificaciones.push(6);
    }

    suma(){
        const suma = this.calificaciones.reduce((total, calificacion) => total + calificacion, 0);
        return suma / this.calificaciones.length;
    }
}

let student = new Estudiante("Mario", 30, [10, 8, 7]);
let resultado = student.suma();


student.notasInfo();
console.log(student.calificaciones);
console.log(resultado);
