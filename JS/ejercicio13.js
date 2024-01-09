// # Array Methods Advanced
// Create a function called `ageAverage` that takes in an array of people and returns the average age.

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

function calculateAverageAge(persons) {
    let totalAge = persons.reduce((accumulator, person) => accumulator + person.age, 0);
    let averageAge = totalAge / persons.length;
    console.log(Math.round(averageAge));
    return averageAge;
}

const average = calculateAverageAge(persons);
// console.log(persons);
// console.log(average);