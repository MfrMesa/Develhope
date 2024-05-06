// Ejercicio 1:
// Dado un array de números, escribe una función llamada obtenerPares que devuelva un nuevo array con solo los números pares del array original.

const numeros = [6, 10, 8, 5, 7, 46, 58, 75];

function obtenerPares(){
    let pares = numeros.filter((el) => el % 2 === 0);
    console.log(pares)
}
obtenerPares()


// Ejercicio 2:
// Dado un array de palabras, escribe una función llamada encontrarPalabraMasLarga que devuelva la palabra más larga del array.

const palabras = ["cama", "ropa", "camisa", "agujero"];

function encontrarPalabraMasLarga(){
    let palabraLarga = palabras.filter((el) => el.length === Math.max(...palabras.map((palabra) => palabra.length)));
    console.log(palabraLarga)
}
encontrarPalabraMasLarga()


// Ejercicio 3:
// Dado un array de números, escribe una función llamada calcularPromedio que devuelva el promedio de todos los números en el array.

const numero = [6, 10, 8, 5, 7, 46, 58, 75];

function calcularPromedio(){
    let promedio = numero.reduce((a, b) => a + b, 0) 
    let notaPromedio = promedio / numero.length;
    console.log(Math.round(notaPromedio));
    return notaPromedio;
}

calcularPromedio()



// Ejercicio 4:
// Dado un array de strings, escribe una función llamada invertirPalabras que devuelva un nuevo array con las palabras del array original invertidas.

const palabra = ["cama", "ropa", "camisa", "agujero"];

function invertirPalabras(){
    let invertido = palabras.map((el) => el.split('').reverse().join(''));
    console.log(invertido)
}

invertirPalabras()


// Ejercicio 5:
// Dado un array de números, escribe una función llamada eliminarDuplicados que devuelva un nuevo array sin elementos duplicados.

const number = [6, 10, 8, 5, 7, 46, 58, 75, 8, 5, 7, 46];

function eliminarDuplicados(){
    let duplicados = number.filter((numero, index) => number.indexOf(numero) === index)
    console.log(duplicados)
}

eliminarDuplicados()




// Ejercicio 6:
// Dado un array de strings, escribe una función llamada convertirMayusculas que devuelva un nuevo array con todas las palabras en mayúsculas.

const words = ["cama", "ropa", "camisa", "agujero"];

function convertirMayusculas(){
    let mayuscula = words.map((palabra) => palabra.toUpperCase())
    console.log(mayuscula)
}
convertirMayusculas()



// Ejercicio 7:
// Dado un array de números, escribe una función llamada ordenarNumeros que devuelva un nuevo array con los números ordenados de menor a mayor.

const numerosGrandes = [6, 10, 8, 5, 7, 46, 58, 75, 8, 5, 7, 46];

function ordenarNumeros(){
    let ordenar = numerosGrandes.sort((a, b) => a - b);
    console.log(ordenar)
}
ordenarNumeros()


// Ejercicio 8:
// Dado un array de objetos con propiedades "nombre" y "edad", escribe una función llamada filtrarMayoresDeEdad que devuelva un nuevo array con 
// solo los objetos que tienen una edad mayor o igual a 18.

const persona = [
    {nombre: "Luis", edad: 30},
    {nombre: "Maria", edad: 35},
    {nombre: "Alberto", edad: 14},
    {nombre: "Karina", edad: 20},
    {nombre: "Luisa", edad: 25},
]

function filtrarMayoresDeEdad(){
    let mayores = persona.filter((el) => el.edad > 18)
    console.log(mayores)
}
filtrarMayoresDeEdad()




// Ejercicio 9:
// Dado un array de números, escribe una función llamada encontrarNumeroMayor que devuelva el número más grande del array.

const numeroGrande = [6, 10, 8, 5, 7, 46, 58, 75, 8, 5, 7, 46];

function encontrarNumeroMayor(){
    let mayor = Math.max(...numeroGrande)
    console.log(mayor)
}
encontrarNumeroMayor()


// Ejercicio 10:
// Dado un array de strings, escribe una función llamada contarLetras que devuelva un objeto con la cantidad de veces que aparece cada letra en el array.

const word = ["cama", "ropa", "camisa", "agujero"];

function contarLetras() {
    let contador = {};

    word.forEach((palabra) => {
        let letras = palabra.split('');
        letras.forEach((letra) => {
            if (/[a-zA-Z]/.test(letra)) {
                letra = letra.toLowerCase(); // Convertir a minúsculas para hacer el conteo insensible a mayúsculas y minúsculas
                contador[letra] = (contador[letra] || 0) + 1;
            }
        });
    });

    console.log(contador);
}

contarLetras();



// Modificar Propiedades:
// Modifica la edad de la persona creada en el ejercicio anterior.

const person = {
    nombre: "Luis",
    edad: 30,
    ciudad: "Madrid",
}

person.edad = 35;
console.log(person)

// Agregar Propiedades:
// Agrega una propiedad de profesión al objeto persona.

const perso = {
    nombre: "Luis",
    edad: 30,
    ciudad: "Madrid",
}

perso.profesion = "Camarero";
console.log(perso)



// Acceder a Propiedades:
// Accede al nombre de la persona e imprímelo en la consola.

const pers = {
    nombre: "Luis",
    edad: 30,
    ciudad: "Madrid",
}

console.log(pers.nombre);


// Eliminar Propiedades:
// Elimina la propiedad de ciudad del objeto persona.

const hombre = {
    nombre: "Luis",
    edad: 30,
    ciudad: "Madrid",
}
delete hombre.ciudad;
console.log(hombre)


// Iterar sobre Propiedades:
// Itera sobre todas las propiedades del objeto persona e imprímelas en la consola.

const hombres = {
    nombre: "Luis",
    edad: 30,
    ciudad: "Madrid",
}

for(keys in hombres){
    console.log(keys)
}


// Objeto Anidado:
// Crea un objeto llamado casa con propiedades como dirección y número de habitaciones. Luego, agrega este objeto como una propiedad al objeto persona.

const casa = {
    direccion: "Calle Boyaca",
    habitaciones: 5,
}

hombres.casa = {
    direccion: "Calle Boyaca",
    habitaciones: 5,
}

console.log(hombres)



// Métodos en Objetos:
// Agrega un método llamado saludar al objeto persona que imprima en la consola un saludo usando su nombre.

const man = {
    nombre: "Luis",
    edad: 30,
    ciudad: "Madrid",
    
    saludar(){
        console.log("Hola, soy Luis")
    }
}

man.saludar()


// Comparar Objetos:
// Crea dos objetos objeto1 y objeto2 con propiedades y valores diferentes. Compara si ambos objetos son iguales.

const woman = {
    nombre: "Maria",
    edad: 35,
    ciudad: "Madrid",
};

const men = {
    nombre: "Luis",
    edad: 30,
    ciudad: "Madrid",
};

const sonIguales = JSON.stringify(woman) === JSON.stringify(men);

if (sonIguales) {
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}



// Agregar Métodos Dinámicamente:
// Añade un nuevo método llamado cambiarEdad al objeto persona que permita cambiar la edad.

const women = {
    nombre: "Maria",
    edad: 35,
    ciudad: "Madrid",

    cambiarEdad(){
        this.edad = 40;
        console.log(this)
    }


};

women.cambiarEdad()