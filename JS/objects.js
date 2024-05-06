// //Ejercicios de objetos:

// // Manejo de Objetos Anidados:
// // Crea un objeto que represente a una tienda en línea con productos, categorías y detalles de inventario. 
// // Accede a diferentes propiedades y métodos anidados para obtener información específica.

// const tiendaEnLinea = {
//     nombre: "Mi Tienda",
//     ubicacion: "Ciudad Ejemplo",
//     productos: [
//         {
//             id: 1,
//             nombre: "Producto 1",
//             categoria: "Electrónicos",
//             precio: 499.99,
//             inventario: {
//             disponible: 50,
//             agotado: false,
//             },
//         },
//         {
//             id: 2,
//             nombre: "Producto 2",
//             categoria: "Ropa",
//             precio: 29.99,
//             inventario: {
//             disponible: 30,
//             agotado: false,
//             },
//         },
//         ],
//     };


//     tiendaEnLinea.productos.forEach(productos => {
//         console.log(productos.inventario)
//     })



// // Prototipos y Herencia:
// // Define una clase Animal con propiedades y métodos. Luego, crea subclases como Mamífero, 
// // Ave y Reptil que hereden de la clase Animal y añadan propiedades específicas.

// class Animal{
//     constructor(nombre, raza, edad){
//         this.nombre = nombre;
//         this.raza = raza;
//         this.edad = edad;
//     }

//     estanCastrados(){
//         return "esta castrado";
//     }
// }

// class Ave extends Animal{
//     constructor(nombre, raza, edad, volar, pico){
//         super(nombre, raza, edad);
//         this.volar = volar;
//         this.pico = pico;
//     }

//     estanCastrados(){
//         return "no";
//     }
// }

// class Mamifero extends Animal{
//     constructor(nombre, raza, edad, lactancia){
//         super(nombre, raza, edad);
//         this.lactancia = lactancia;
//     }

//     estanCastrados(){
//         return "no";
//     }
// }

// class Reptil extends Animal{
//     constructor(nombre, raza, edad, escamas){
//         super(nombre, raza, edad);
//         this.escamas = escamas;
//     }

//     estanCastrados(){
//         return "no";
//     }
// }

// let iguana = new Reptil("Lola");
// console.log(iguana.nombre + " : " + iguana.estanCastrados())

//Iteración y Transformación:
// Dado un objeto con datos de estudiantes, realiza operaciones de iteración y transformación 
// para calcular el promedio de sus calificaciones, encontrar al estudiante con la calificación más alta.

// const estudiantes = [
//         {id: 1, name: "Luis", done: 20},
//         {id: 2, name: "Marco", done: 15},
//         {id: 3, name: "Leo", done: 16},
//         {id: 1, name: "Fran", done: 14},
//         {id: 2, name: "Camilo", done: 11},
//         {id: 3, name: "Alhue", done: 19},
//         {id: 4, name: "Maria", done: 20},
//     ];

//     function promedioNotas(estudiantes){
//         let promedio = estudiantes.reduce((a, nota) => a + nota.done, 0);
//         let notapromedio = promedio / estudiantes.length;
//         console.log(Math.round(notapromedio));
//         return notapromedio;
//     }

//     const note = promedioNotas(estudiantes);


//Desestructuración y Spread:
// Utiliza la desestructuración y el operador spread para manejar objetos complejos. Por ejemplo, 
// extrae propiedades específicas de un objeto y crea uno nuevo combinando varias propiedades de diferentes objetos.

// const persona = {
//     nombre: "Juan",
//     edad: 30,
// };

// const direccion = {
//     ciudad: "Ciudad Ejemplo",
//     codigoPostal: "12345",
// };

// const contacto = {
//     email: "juan@example.com",
//     telefono: "123-456-7890",
// };

// const empleado = {
//     ...persona, 
//     ...direccion,
//     ...contacto,
// }

// console.log(empleado)


//Manejo de Contexto:
// Crea una función constructora que represente un "Contexto" y 
// objetos que lo utilicen para almacenar y recuperar valores específicos. Asegúrate de entender cómo funciona el this en diferentes contextos.

// function Caja (ropa, zapatos){
//     this.ropa = ropa;
//     this.zapatos = zapatos;
// }

// let temporada = new Caja("chaqueta", "botas")
// console.log(temporada.ropa);
// console.log(temporada.zapatos)

// Sí, has cumplido con la solicitud del ejercicio. Has creado una función constructora llamada Caja que representa un "Contexto" y
//  has utilizado esa función constructora para crear objetos (temporada) que almacenan y recuperan valores específicos (ropa y zapatos). 
// Luego, has impreso esos valores en la consola, mostrando así cómo funciona la creación de instancias y el acceso a las propiedades en JavaScript.


//Registro de Estudiantes
// Crea un programa que gestione el registro de estudiantes. Cada estudiante tiene un nombre, 
// una edad y una lista de materias que está cursando. Implementa las siguientes funcionalidades:
// Crea una función constructora Estudiante que reciba el nombre y la edad del estudiante y tenga una propiedad materias inicializada como un array vacío.
// Agrega un método agregarMateria a la función constructora Estudiante que permita agregar una materia a la lista de materias del estudiante.
// Crea un objeto estudiante1 usando la función constructora Estudiante con el nombre "Juan" y la edad 20.
// Agrega las materias "Matemáticas" y "Historia" al estudiante1 utilizando el método agregarMateria.
// Imprime en la consola el nombre, edad y materias del estudiante1.


// Función constructora Estudiante
// function Estudiante(nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.materias = [];

//     this.agregarMateria = function(materia) {
//         this.materias.push(materia);
//     };
// }

// // Crear un estudiante
// let estudiante1 = new Estudiante("Juan", 20);

// // Agregar materias al estudiante1
// estudiante1.agregarMateria("Matemáticas");
// estudiante1.agregarMateria("Historia");

// // Imprimir información del estudiante1
// console.log(`Nombre: ${estudiante1.nombre}`);
// console.log(`Edad: ${estudiante1.edad}`);
// console.log(`Materias: ${estudiante1.materias.join(', ')}`);



//Representación de Libros
// Crea un programa que maneje información sobre libros. Cada libro tiene un título, un autor y 
// un año de publicación. Implementa las siguientes funcionalidades:
// Crea una función constructora Libro que acepte título, autor y año de publicación como parámetros y 
// cree un objeto libro con esas propiedades.
// Crea dos instancias de libros llamadas libro1 y libro2 con información ficticia.
// Imprime en la consola la información de ambos libros.

// function Libro(titulo, autor, año){
//     this.titulo = titulo;
//     this.autor = autor;
//     this.año = año;
// }

// let libro1 = new Libro("Harry", "JK", 2001);
// let libro2 = new Libro("Harry", "JK", 2013);

// console.log(libro1);
// console.log(libro2)



//Gestión de Empleados
// Crea un programa que gestione información sobre empleados. Cada empleado tiene un nombre, un salario y un método para calcular un aumento de sueldo. 
// Implementa las siguientes funcionalidades:
// Crea una función constructora Empleado que acepte nombre y salario como parámetros y cree un objeto empleado con esas propiedades.
// Agrega un método calcularAumento al prototipo de Empleado que incremente el salario en un 10%.
// Crea dos instancias de empleados llamadas empleado1 y empleado2 con información ficticia.
// Aplica el método calcularAumento a ambos empleados y luego imprime en la consola la información de cada empleado.

function Empleado(nombre, salario){
    this.nombre = nombre;
    this.salario = salario;
}

class Desarrollador extends Empleado{
    constructor(nombre, salario){
    super(nombre, salario);
}
    aumento(){
        return this.salario * 0.10;
    }
}

let empleado1 = new Empleado("Maria", 25000);
let empleado2 = new Desarrollador("Luis", 24000);

let aumento1 = empleado1.salario * 0.10;
let aumento2 = empleado2.aumento();

console.log(aumento1);
console.log(aumento2);


//Lista de Tareas
// Crea un programa que gestione una lista de tareas pendientes. Cada tarea tiene un título y un estado (pendiente o completada). 
// Implementa las siguientes funcionalidades:
// Crea una función constructora Tarea que acepte un título como parámetro y cree un objeto tarea con ese título y un estado inicial de "pendiente".
// Agrega un método completar al prototipo de Tarea que cambie el estado de la tarea a "completada".
// Crea tres instancias de tareas llamadas tarea1, tarea2 y tarea3 con títulos ficticios.
// Completa la tarea2 utilizando el método completar y luego imprime en la consola la información de cada tarea.


// Función constructora Tarea
function Tarea(titulo) {
    this.titulo = titulo;    //el objeto
    this.estado = "pendiente"; //el objeto
}

// Agregar método completar al prototipo de Tarea
Tarea.prototype.completar = function() {
    this.estado = "completada";
};

// Crear tres instancias de tareas
let tarea1 = new Tarea("Hacer compras");
let tarea2 = new Tarea("Estudiar JavaScript");
let tarea3 = new Tarea("Ir al gimnasio");

// Completar la tarea2 utilizando el método completar
tarea2.completar();

// Imprimir información de cada tarea en la consola
console.log("Tarea 1:", tarea1.titulo, "Estado:", tarea1.estado);
console.log("Tarea 2:", tarea2.titulo, "Estado:", tarea2.estado);
console.log("Tarea 3:", tarea3.titulo, "Estado:", tarea3.estado);










