// Importamos el módulo fs (sistema de archivos) de Node.js
const fs = require("fs");

// Contenido que queremos escribir en el archivo
const contenido = "hola hola hola hola hola";

// Ruta y nombre del archivo donde escribiremos el contenido
const rutaArchivo = "hola.txt";

// Usamos fs.writeFile() para escribir en el archivo
fs.writeFile(rutaArchivo, contenido, (error) => {
    if (error) {
        // Manejamos el error si ocurre
        console.error("Hubo un error:", error);
    } else {
        // Si no hay error, mostramos un mensaje de éxito
        console.log("Archivo escrito correctamente");
    }
});