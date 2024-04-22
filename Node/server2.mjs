import {createServer} from "node:http";

const server = createServer((request, response) => {
    console.log("request recibida");

    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");

    const jsonResponseBody = JSON.stringify({
        "id": 195,
        "name": "Kristen Stewart",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "origin": {
          "name": "Mars (C-500A)",
          "url": "https://rickandmortyapi.com/api/location/23"
        },
        "location": {
          "name": "Mars (C-500A)",
          "url": "https://rickandmortyapi.com/api/location/23"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/195.jpeg",
        "episode": ["https://rickandmortyapi.com/api/episode/8"],
        "url": "https://rickandmortyapi.com/api/character/195",
        "created": "2017-12-30T12:19:16.042Z"
      });

    response.end(jsonResponseBody);
});

server.listen(3001, () => {
    console.log(`Servidor funcionando en http://localhost:3001`)
} );//este puerto tomara la funcion de arriba y la ejecutara

// < Content-Length: 487