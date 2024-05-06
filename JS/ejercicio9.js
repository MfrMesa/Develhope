// # Object Methods
// Create an object `person`. Print its key/value pair in the console. Try to use the method `Object.kyes`:

const person = {
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
}

let key = Object.keys(person);
key.forEach (key => {
    console.log(`${key}: ${person[key]}`);
});

// En este caso, ${key} y ${person[key]} dentro del console.log son marcadores de posición en una cadena de texto que se 
// están utilizando para formatear la salida de la consola.

// ${key} se sustituirá por el valor de la variable key, que representa cada clave del objeto person.
// ${person[key]} se sustituirá por el valor correspondiente a esa clave dentro del objeto person.
// Esta sintaxis de ${} en este contexto permite construir dinámicamente una cadena de texto que combina la clave y 
// su valor asociado en el formato clave: valor para cada par clave/valor del objeto person. 
// Esto hace que la impresión en la consola sea más legible y clara.