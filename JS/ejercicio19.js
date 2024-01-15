// # Classes
// Define a class called `Person` that takes in three parameters in the constructor (`firstName`, `lastName` and `age`). 
// Create the getters and setters methods for each property and a getter method called `fullName` that returns the full name.

class Person {
    _firstName = "Mario";
    _lastName = "Rossi";
    _age = "";

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newPerson) {
        if (typeof newPerson === 'string') {
            this._firstName = newPerson;
        } else {
            console.log("Invalid: First name must be a string");
        }
    }

    set lastName(newPerson) {
        if (typeof newPerson === 'string') {
            this._lastName = newPerson;
        } else {
            console.log("Invalid: Last name must be a string");
        }
    }

    set age(newAge) {
        if (newAge >= 18) {
            this._age = newAge;
        } else {
            console.log("Invalid: You are too young");
        }
    }

    get fullName() {
        return this._firstName + " " + this._lastName;
    }

    get age() {
        return this._age;
    }
}

const person = new Person('Mario', 'Rossi', 16);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName); 
console.log(person.age);

