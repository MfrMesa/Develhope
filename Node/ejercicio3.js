// There should be a script that:
// Defines a function
// Exports that function with module.exports
// There should be another script that:
// Uses require() to import the function from the other script
// Calls the imported function


// saludo.js
function saludar(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}
module.exports = saludar;


//imprimir.js
const saludar = require("./saludo");
saludar("Maria");