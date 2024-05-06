// # Array Methods Advanced
// Create a function called `adultFilter` that takes in an array of people and returns the ones who are of age.


const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
];

const adults = adultFilter(persons);

function adultFilter(persons) {
    let adultos = persons.filter ((el) => el.age >= 18);  //colocar el elemento a buscar dentro de los parentesis, sin dejar de usar el (el)
    console.log(adultos);
    return adultos;
}
    
console.log(persons);
