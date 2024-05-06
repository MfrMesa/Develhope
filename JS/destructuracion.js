//Ejercicios destructuracion de array:

//Destructuración básica
// Dado el siguiente array:
// Usa la destructuración de arrays para extraer los valores individuales.


// const colores = ['Rojo', 'Verde', 'Azul'];

// let [colorRojo, colorVerde, colorAzul] = colores;

// console.log(colorRojo, colorVerde, colorAzul);


// Intercambio de valores
// Dado el siguiente array:
// Usa la destructuración de arrays para intercambiar los valores de a y b de manera que a tenga el valor original de b y viceversa.


// let a = 5;
// let b = 10;

// a = 10;
// b = 5;

// console.log(a, b);


//Extraer elementos específicos
// Dado el siguiente array:
// Usa la destructuración de arrays para extraer solo los elementos 'Banana' y 'Kiwi' y asígnalos a las variables fruta1 y fruta2.

// const frutas = ['Manzana', 'Banana', 'Uva', 'Kiwi', 'Naranja'];

// let [fruta, fruta1, fruta4, fruta2, fruta3] = frutas;


// console.log(fruta1, fruta2);

//Ignorar elementos
// Dado el siguiente array:
// Usa la destructuración de arrays para asignar solo los valores 1, 3 y 5 a las variables numero1, numero2 y numero3.

// const numeros = [1, 2, 3, 4, 5];

// let [numero1, , numero2, , numero3] = numeros;

// console.log(numero1, numero2, numero3);


// Desestructuración anidada
// Dado el siguiente array anidado:

// Usa la destructuración de arrays para extraer el nombre, la edad y la habilidad 'React' y asígnalos a las variables nombre, edad y habilidad.


// const datos = ['Alice', 30, ['JavaScript', 'React']];

// let [nombre, edad, [, habilidad]] = datos;

// console.log(nombre, edad, habilidad);

//Desestructuración con Rest
// Dado el siguiente array de datos de una persona:
// Usa la destructuración de arrays para realizar lo siguiente:

// Asigna los valores 'John' y 'Doe' a las variables nombre y apellido.
// Asigna el resto de los valores a la variable informacionAdicional usando la sintaxis de rest.
// Imprime un mensaje que diga "Hola, John Doe. Tienes 30 años y eres un Developer de USA." usando las variables asignadas.

// const persona = ['John', 'Doe', 30, 'Developer', 'USA'];

// let [nombre, apellido, ...informacionAdicional] = persona;

// console.log(`Hola, ${nombre} ${apellido}. Tienes ${informacionAdicional[0]} años y eres un ${informacionAdicional[1]} de ${informacionAdicional[2]}.`);

//Desestructuración Anidada y Asignación por Defecto
// Dado el siguiente array de datos de empleados:

// Usa la desestructuración anidada y la asignación por defecto para realizar lo siguiente:

// Asigna el nombre, cargo y la primera habilidad del primer empleado a las variables nombreEmpleado, cargoEmpleado y primeraHabilidad.
// Si el segundo empleado no tiene una segunda habilidad, asigna 'No especificado' a la variable segundaHabilidad.
// Imprime un mensaje que diga "El empleado [nombre] es [cargo]. Sus habilidades son [primeraHabilidad] y [segundaHabilidad]." utilizando las variables asignadas.

const empleados = [
    { nombre: 'Alice', cargo: 'Desarrollador', habilidades: ['JavaScript', 'React'] },
    { nombre: 'Bob', cargo: 'Diseñador', habilidades: ['UI/UX', 'Ilustración'] },
    { nombre: 'Charlie', cargo: 'Tester', habilidades: ['Pruebas automatizadas', 'Depuración'] },
];

let [ 
    { nombre: nombreEmpleado, cargo: cargoEmpleado, habilidades: [primeraHabilidad = 'No especificado', segundaHabilidad = 'No especificado'] },
    { nombre: nombreEmpleado1, cargo: cargoEmpleado1, habilidades: [primeraHabilidad1 = 'No especificado', segundaHabilidad1 = 'No especificado'] },
    { nombre: nombreEmpleado2, cargo: cargoEmpleado2, habilidades: [primeraHabilidad2 = 'No especificado', segundaHabilidad2 = 'No especificado'] },
] = empleados;


console.log(`El empleado ${nombreEmpleado} es ${cargoEmpleado}. Sus habilidades son ${primeraHabilidad} y ${segundaHabilidad}`);
console.log(`El empleado ${nombreEmpleado1} es ${cargoEmpleado1}. Sus habilidades son ${primeraHabilidad1} y ${segundaHabilidad1}`);
console.log(`El empleado ${nombreEmpleado2} es ${cargoEmpleado2}. Sus habilidades son ${primeraHabilidad2} y ${segundaHabilidad2}`);