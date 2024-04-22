// Create a script that uses export default to export a function. Create another script that uses import to import the function and then calls it.

//saludo.js
function saludar(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}
export default saludar;


//imprimir.js

import saludar from "./saludo";
saludar("Maria");

