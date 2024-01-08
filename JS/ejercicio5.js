// In this exercise we have created two objects: `person1` and `person2`. The object `person2` has been assigned to the object `person1`. 
// You should modify the property `firstName` of the object `person2` in "Simon".
// Write a comment explaining why, by modifying the object `person2`, also the object `person1` would be modified.

const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
};

const person2 = person1;

person2.firstName = "Simon";

console.log(person1);
console.log(person2);

//person2 hace referencia al mismo objeto que person1, compartiendo los dos los mismos datos en la memoria, por eso al modificar uno se modifica el otro. 