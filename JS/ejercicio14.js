// # Array Methods Advanced
// Create a function called `uncompletedNotes` that returns only not completed todos.
// **Suggestion**
// Use the forEach and filter arrays methods.

const notes = [
    {id: 1, description: "Workout program", todos: [
        {id: 1, name: "Push ups - 10 x 3", done: false},
        {id: 2, name: "Abdominals - 20 x 3", done: true},
        {id: 3, name: "Tapis Roulant - 15min", done: true},
    ],},
    {id: 2, description: "Front-end Roadmap", todos: [
        {id: 1, name: "Learn HTML", done: true},
        {id: 2, name: "Learn CSS", done: true},
        {id: 3, name: "Learn JavaScript", done: true},
        {id: 4, name: "Learn Angular", done: false},
    ],},
];

function uncompletedNotes(notes) {
    const uncompletedTodos = [];

    notes.forEach(note => {
        const uncompletedNoteTodos = note.todos.filter(todo => !todo.done);
        uncompletedTodos.push({
            ...note,
            todos: uncompletedNoteTodos
        });
        
    });
    return uncompletedTodos;   
}    
const incompleto = uncompletedNotes(notes);
// Llama a la función con una variable 'notes' y almacena el resultado en 'incompleto'.
console.log(incompleto);

// creamos una nueva array para guardar el resultado
// el foreach recorre el array guardandolos en la nueva array
// el filter filtra todos los que son distintos a true de la nueva array
// y los guarda en la nueva array
// ...note : Propaga las propiedades de la nota actual.
// todos: uncompletedNoteTodos    :  reemplaza la propiedad todos con los nuevos todos no completados