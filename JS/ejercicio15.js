// # Array Methods Advanced
// Create a function called `sortPeopleByAge` that returns the people in ascending order by age.


const people = [
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

function sortPeopleByAge(people) {
    let sorted = people.sort ((a, b) => a.age - b.age);
    console.log(sorted);
    return sorted;
}

const sortingByAge = sortPeopleByAge(people)
// console.log(sortingByAge)