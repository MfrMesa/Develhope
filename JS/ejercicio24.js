// # Destructuring
// The destructuring returns undefined for the properties: name, surname and old. 
// Try fixing the code without changing the any of the object properties in the constant { id, name, surname, old }.


const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
};


const { id, firstName: name, lastName: surname, age: old } = person;


console.log(id, name, surname, old);