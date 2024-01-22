// # Destructuring
// Use the destructuring to assign the values just with one code line.


const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
};

let {id, firstName, lastName, age} = person;
// const id = person.id;
// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;

console.log(id, firstName, lastName, age);