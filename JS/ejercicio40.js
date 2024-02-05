// # Network Requests - Todo List
// Using async and await, implement the necessary code to recover the Todos list present in the 
// following URL through an http request: [link](https://jsonplaceholder.typicode.com/todos).



async function recover() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos");
        let todos = await response.json(); 
        console.log("Lista de Todos:", todos);
    } catch(err) {
        console.error(err); 
    }
}
recover();