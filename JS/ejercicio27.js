// # Rest parameters and spread syntax
// Perform a code refactoring by using the Rest operator. The output of the console.log must not change.


const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
};

// const id = person.id;
// const personInfo = {
//     firstName: person.firstName,
//     lastName: person.lastName,
//     age: person.age
// }

const { id, ...personInfo } = person;

console.log(id, personInfo);

// En este código, he utilizado el operador rest (...personInfo) en la asignación por destructuración 
// para extraer todas las propiedades de person excepto id. 
// El resultado es que id se asigna directamente, y personInfo contendrá un objeto con las demás propiedades. 

