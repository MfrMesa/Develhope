// Exercise 2: Explore with the Node.js REPL
// Use the Node.js REPL to list the methods provided by the Node.js core crypto module. Use one of these methods to generate a random ID.

// > const crypto = require("crypto");
// undefined
// > function generarRandomId(longitud){
// ... return crypto.randomBytes(Math.ceil(longitud/2)).toString("hex").slice(0, longitud);}
// undefined
// > const randomId = generarRandomId(3);
// undefined
// > console.log(randomId);
// b6c
// undefined
// >