// //Convertir a JSON
// Dado el siguiente objeto JavaScript:
// Convierte el objeto persona a una cadena JSON utilizando el método JSON.stringify. Imprime la cadena JSON resultante.

// const persona = {
//     nombre: 'Alice',
//     edad: 28,
//     ciudad: 'Nueva York',
// };

// const json = JSON.stringify(persona);
// console.log(json);

// //Analizar JSON
// Dada la siguiente cadena JSON:
// Convierte la cadena JSON libroJSON a un objeto JavaScript utilizando el método JSON.parse. Imprime el objeto resultante.


// const libroJSON = '{"titulo": "El Principito", "autor": "Antoine de Saint-Exupéry", "anioPublicacion": 1943}';

// const libro = JSON.parse(libroJSON);

// console.log(libro);

// //Manejo de JSON anidado
// Dado el siguiente objeto JavaScript con estructura anidada:
// Convierte el objeto empresa a una cadena JSON utilizando el método JSON.stringify. Luego, analiza la cadena JSON resultante y 
// almacénala en una nueva variable llamada empresaNueva. Finalmente, imprime la propiedad nombre de la primera persona en la nueva empresa.

// const empresa = {
//     nombre: 'TechCorp',
//     empleados: [
//     { nombre: 'Alice', edad: 30 },
//     { nombre: 'Bob', edad: 25 },
//     { nombre: 'Charlie', edad: 35 },
//     ],
// };

// const json = JSON.stringify(empresa);
// console.log(json);

// const empresaNueva = JSON.parse(json);
// console.log(empresaNueva);

// console.log(empresaNueva.empleados[0].nombre);

// //Manejo de JSON con fechas
// Dado el siguiente objeto JavaScript con una propiedad de fecha:

// Convierte el objeto evento a una cadena JSON que incluya la fecha correctamente utilizando 
// una función de replacer en JSON.stringify. Imprime la cadena JSON resultante.

const evento = {
    nombre: 'Conferencia TechTalk',
    fecha: new Date('2023-02-15T14:00:00'),
    ubicacion: 'Centro de Convenciones',
};

// Convertir el objeto a una cadena JSON con manejo de fechas
const jsonConFecha = JSON.stringify(evento, (key, value) => {
    if (value instanceof Date) {
        return value.toISOString(); // Convertir la fecha a formato ISO
    }
    return value;
});

console.log(jsonConFecha);

// Analizar la cadena JSON con fechas
const eventoNuevo = JSON.parse(jsonConFecha, (key, value) => {
    if (key === 'fecha') {
        return new Date(value); // Convertir la cadena ISO a objeto Date
    }
    return value;
});

console.log(eventoNuevo);