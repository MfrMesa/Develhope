// # Network Requests - Todo List
// Using async and await, implement the necessary code to recover the Todos list present in the 
// following URL through an http request: [link](https://jsonplaceholder.typicode.com/todos).



async function recover() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos");
        let todos = await response.json(); //Si la respuesta es exitosa, se utiliza response.json() para extraer y parsear los datos JSON de la respuesta. Luego, se imprime la lista de Todos en la consola.
        console.log("Lista de To dos:", todos);
    } catch(err) {
        console.error(err); // TypeError: failed to fetch
    }
}
recover();