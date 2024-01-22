// # JSON methods
// In this exercise we need to filter the properties of the object person in order to convert just the id and age values into JSON.

const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25,
};


const filtro = {
    id: person.id,
    age: person.age
}

const json = JSON.stringify(filtro);

    console.log(json); // Should return: { id: 1, age: 25 }