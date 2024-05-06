// # JSON methods
// In this exercises something goes wrong. Even though we have created a copy of person1, modifying the property city
// of person2 also changes the value for person1. This happens because we have created a shallow copy. 
// How can we fix the code in order to be able modify the values of person2 without changing the values of person1?


const person1 = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25,
    address: {
        state: 'Italy',
        city: 'Rome',
        street: 'Via Romano, 12'
    }
};

//Crear una copia profunda de person1 usando JSON.parse y JSON.stringify
const person2 = JSON.parse(JSON.stringify(person1));


// Modificar la ciudad en person2 sin afectar a person1
person2.address.city = 'Milan';

console.log(person1);
console.log(person2);