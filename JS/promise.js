//Ejercicio practica promise: 

//Crear una Promesa
//Crea una función llamada crearPromesa que devuelve una promesa. La promesa debe resolverse después de 3 segundos con el mensaje "Promesa resuelta".

// function crearPromesa() {
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=> {
//             const exito = true;
//             if (exito){
//                 resolve("Promesa resuelta");
//             } else{
//                 reject("error");
//             }
//         }, 3000);
//     })
// }

// crearPromesa()
// .then(resultado => console.log(resultado))
// .catch(error => console.error(error))

//Manejar una Promesa
// Utiliza la función crearPromesa del ejercicio anterior. Llama a la función y maneja la promesa para imprimir 
// el mensaje "Promesa manejada correctamente" cuando se resuelva y "Hubo un error en la promesa" cuando sea rechazada.

// function crearPromesa() {
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=> {
//             const exito = true;
//             if (exito){
//                 resolve("Promesa resuelta");
//             } else{
//                 reject("error");
//             }
//         }, 3000);
//     })
// }

// crearPromesa()
//     .then((mensaje) => {
//         console.log("Promesa manejada correctamente:", mensaje);
//     })
//     .catch((error) => {
//         console.error(error);
//     });


// Encadenar Promesas
// Crea dos funciones, primeraPromesa y segundaPromesa. La primera promesa debe resolverse después de 2 segundos con el número 5.
//  La segunda promesa debe tomar el resultado de la primera promesa y duplicarlo 
// antes de resolver la propia promesa. Llama a ambas funciones y encadena las promesas para imprimir el resultado final.

// const exito = 5;

// function primeraPromesa(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             if (exito === 5 ) {
//                 resolve("Numero es 5")
//             } else {
//                 reject("Numero no es igual a 5")
//             }
//         }, 2000);
//     })
// }

// function segundaPromesa(resultado){
//     return new Promise((resolve, reject) => {
//         const duplicado = resultado * 2;
//         if (duplicado === 10 ) {
//             resolve("Numero duplicado")
//         } else {
//             reject("Numero no duplicado")
//         }
//     })
// }

// segundaPromesa(exito)
// .then(primeraPromesa) 
// .then((resultado) => console.log(resultado))
// .catch((error) => console.error(error))


//Promesa con Parámetro
// Crea una función llamada promesaConParametro que toma un parámetro y devuelve una promesa. 
// La promesa debe resolverse después de 1 segundo multiplicando el parámetro por 2.

// function promesaConParametro(numero){
//     return new Promise((resolve, reject) => {
//         const resultado = numero * 2;
//         setTimeout(() => {
//             if(resultado){
//                 resolve(`Duplicado, ${numero}`)
//             } else {
//                 reject("invalido")
//             }
//         }, 1000);
//     })
// }

// promesaConParametro(4)
// .then((resultado) => console.log(resultado))
// .catch((error) => console.error(error))


//Promesa con Tiempo de Espera
// Crea una función llamada esperarPromesa que toma un parámetro "tiempo" y devuelve una promesa. 
// La promesa debe resolverse después del tiempo especificado con el mensaje "Promesa esperada".

function esperarPromesa(tiempo){
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve("Promesa esperada")
        }, tiempo);
    })
}

esperarPromesa(3000)
.then((resultado) => console.log(resultado))
.catch((error) => console.error(error)) 