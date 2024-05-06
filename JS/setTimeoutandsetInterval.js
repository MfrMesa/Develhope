//Ejercicios de practica temporizadores:

// setTimeout con Función
// Crea una función llamada saludo que imprima "Hola, mundo!" después de 3 segundos utilizando setTimeout.

// function saludo(callback){
//     console.log("Hola, mundo!");

//     setTimeout(() => {
//         return callback;
//     },3000);
// }
// saludo();


// //setInterval con Contador
// Crea una función llamada contador que inicie un contador desde 1 y lo imprima en la consola cada 
// segundo utilizando setInterval. Detén el intervalo después de 5 segundos.

// let contador = 1;

// function Contador(){
//     let intervalo = setInterval (() => {
//         console.log("Segundo" + contador)
//         contador++;

//         if(contador === 6) {
//             clearInterval(intervalo);
//             console.log("Intervalo detenido")
//         }
//     },1000);
// }

// Contador();

//setTimeout Encadenado
//Crea una cadena de tres setTimeout que imprima "Uno", "Dos" y "Tres" respectivamente, cada uno después de 2 segundos.

// function cadena(callback){
//     setTimeout(() => {
//         console.log("Uno");
//         setTimeout(() => {
//             console.log("Dos");
//             setTimeout(() => {
//                 console.log("Tres");
//                 if (callback && typeof callback === 'function') {
//                     callback();
//                 }
//         }, 2000);
//         }, 2000);
//         }, 2000);
// }

// cadena();

// setInterval con Función Anidada
// Crea una función llamada intervaloAnidado que utilice setInterval para imprimir "Hola" 
// cada segundo. Después de 5 segundos, detén el intervalo y muestra "Fin del intervalo".

// let contador = 1;

// function intervaloAnidado(callback){
//     let interval = setInterval(() =>{
//         console.log("Hola")
//         contador++;

//         if (contador === 6){
//             clearInterval(interval);
//             console.log("Fin del intervalo")
//         }
//     },1000);
// }

// intervaloAnidado();


//setTimeout en Bucle
// Crea un bucle que utilice setTimeout para imprimir los números del 1 al 5, con un retraso de 2 segundos entre cada número.

function imprimirNumeros(i) {
    setTimeout(() => {
        console.log(i + 1);  // Sumamos 1 porque queremos imprimir del 1 al 5
        if (i < 4) {
            imprimirNumeros(i + 1);
        }
    }, 2000);
}

imprimirNumeros(0);