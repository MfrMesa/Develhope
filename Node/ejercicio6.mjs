const fs = require("fs");

const contenido = "hola hola hola hola hola";

const rutaArchivo = "hola.txt";

fs.writeFile(rutaArchivo, contenido, (error) => {
    if (error) {
        console.error("Hubo un error:", error);
    } else {
        console.log("Archivo escrito correctamente");
    }
});