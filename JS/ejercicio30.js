// # JSON methods
// Create the `fromJson` method that takes in a json as parameter and returns an object of type `Person`.


class Person {
    constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    }

    toJson() {
    return JSON.stringify(this);
    }
    // Este método toma una instancia de Person y devuelve una cadena JSON que representa el objeto. 
    // Utiliza JSON.stringify para convertir el objeto JavaScript a una cadena JSON.

    static fromJson(json) {
        const info = JSON.parse(json);
        return new Person(info.id, info.firstName, info.lastName, info.age);
    }
    // Este es un nuevo método estático que hemos agregado. Es estático porque puede ser llamado en la propia clase (Person.fromJson). 
    // Toma una cadena JSON como parámetro, la convierte a un objeto JavaScript utilizando JSON.parse, y 
    // luego crea una nueva instancia de Person utilizando los datos obtenidos del objeto parseado.
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);

