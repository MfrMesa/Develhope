// # JSON methods
// In this exercise we need to filter the properties of the object person in order to convert just the id and age values into JSON.

const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25,
};

function replacer (key, value) {
    if (typeof value === "string") {
        return undefined;
    }
    return value;
}

const json = JSON.stringify(person, replacer);


    console.log(json); // Should return: { id: 1, age: 25 }