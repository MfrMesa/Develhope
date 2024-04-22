import {createServer} from "node:http";

const server = createServer((request, response) => {
    console.log("request recibida");

    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.end("<html><body><h1>Buen día desde Madrid<h1><body><html>")
});

server.listen(3000, () => {
    console.log(`Servidor funcionando en http://localhost:3000`)
} );//este puerto tomara la funcion de arriba y la ejecutara