//Ejercicios practica array metodos:


//Filtrado de Números Pares:

//Crea un array de números y utiliza el método de array para filtrar solo los números pares. Luego, imprime el resultado.

// const numeros = [6, 7 , 9 , 2, 4];

// let pares = numeros.filter((el) => el % 2 === 0);
// console.log(pares);




//Suma de Elementos:

// Crea un array de números y utiliza el método de array para sumar todos los elementos del array. Luego, imprime el resultado.

// const numeros = [6, 7 , 9 , 2, 4];

// let suma = numeros.reduce((a, b) => a + b);
// console.log(suma);




//Transformación de Texto:

//Crea un array de palabras y utiliza el método de array para transformar cada palabra a mayúsculas. Luego, imprime el resultado.

// const palabras = ["hola", "como", "estas"];

// function mayusculas(){
//     let transformado = palabras.map((el) => el.toUpperCase());
//     return transformado;
// }
// console.log(mayusculas());




//Filtrado de Palabras:

//Crea un array de palabras y utiliza el método de array para filtrar solo las palabras que tienen más de 3 letras. Luego, imprime el resultado.

// const palabras = ["queso", "manteca", "pan"];

// let maxlength = palabras.filter((el) => el.length > 3);
// console.log(maxlength);





//Suma de Números Pares:

//Crea un array de números y utiliza el método de array para sumar solo los números pares. Luego, imprime el resultado.

// const numeros = [6, 7 , 9, 4];

// let sumaPares = numeros.filter((el) => el % 2 === 0).reduce((a,b) => a + b);   
// let sumaImpares = numeros.filter((el) => el % 2 !== 0).reduce((a,b) => a + b);  

// console.log(sumaPares);
// console.log(sumaImpares);





//Transformación de Números:

//Crea un array de números y utiliza el método de array para transformar cada número multiplicándolo por 2. Luego, imprime el resultado.

// const numeros = [6, 7 , 9, 4];

// let timesTwo = numeros.map((el) => el * 2);
// console.log(timesTwo);






//Filtrado de Números Primos:

// Crea un array de números y utiliza el método de array para filtrar solo los números primos. Puedes implementar una 
// función auxiliar que determine si un número es primo o no y luego utilizar esa función con el método de array para 
// filtrar los números primos del array original. Luego, imprime el resultado.


// function esPrimo(numero) {
//     if (numero < 0) return false;
//     for (let i = 2; i <= Math.sqrt(numero); i++ ) {
//         if (numero % i === 0 ) {
//             return false;
//     }
//     return true;
// }
// }

// const numeroos = [6, 1 , 5, 4, 20, 35];

// let primo = numeroos.filter((numero) => esPrimo(numero));
// console.log(primo);




// Encontrar el número máximo
// Dado un array de números enteros, encuentra el número máximo en el array.

// const numeros = [6, 1 , 5, 4, 20, 35];

// let maximo = Math.max(...numeros);
// console.log(maximo)




// Buscar elemento en el array
// Dado un array de cadenas, pide al usuario que ingrese una cadena y verifica si esa cadena está presente en el array.

// const cadenas = ["hola", "adios", "bienvenido", "chau"];

// // Solicitar al usuario que ingrese una cadena
// const cadenaUsuario = prompt("Ingresa una cadena:");

// // Verificar si la cadena está presente en el array
// if (cadenas.includes(cadenaUsuario)) {
//   console.log(`La cadena "${cadenaUsuario}" está presente en el array.`);
// } else {
//   console.log(`La cadena "${cadenaUsuario}" no está presente en el array.`);
// }

// Rotación a la derecha
// Dado un array de números enteros, realiza una rotación a la derecha en el array.

// function rotarDerecha(array, k) {
//     const longitud = array.length;
//     const rotacion = k % longitud; // Manejar rotaciones mayores que la longitud del array

//     // Utilizar slice para obtener las partes del array y luego concatenarlas en el orden correcto
//     const parteFinal = array.slice(0, longitud - rotacion);
//     const parteInicio = array.slice(longitud - rotacion);

//     // Concatenar las partes en el nuevo array rotado
//     const arrayRotado = parteInicio.concat(parteFinal);

//     return arrayRotado;
//   }

//   const arrayOriginal = [1, 2, 3, 4, 5];
//   const k = 2;

//   const arrayRotado = rotarDerecha(arrayOriginal, k);

//   console.log(`Array original: ${arrayOriginal}`);
//   console.log(`Array rotado a la derecha (${k} posiciones): ${arrayRotado}`);





//Concatenar cadenas
//Dado un array de cadenas, crea una función que concatene todas las cadenas en una sola.

// const mensaje = ["buenos", "dias", "maria"];

// function concatenarCadenas(arrayDeCadenas) {
//     return arrayDeCadenas.join(' ');
// }

// const saludo = concatenarCadenas(mensaje);

// console.log(saludo);




// Ordenar alfabéticamente
// Dado un array de cadenas, crea una función que ordene las cadenas alfabéticamente.

// const frutas = ["banana", "manzana", "uva", "pera", "kiwi"];
// frutas.sort();
// console.log(frutas)




// Mayúsculas a minúsculas
// Dado un array de cadenas, crea una función que convierta todas las letras de las cadenas a minúsculas.

// const frutas = ["BANANA", "MANZANA", "UVA", "PERA", "KIWI"];

// let minuscula = frutas.map((el) => el.toLowerCase());
// console.log(minuscula)




//Eliminar elementos repetidos
//Dado un array de cadenas, crea una función que elimine los elementos duplicados y devuelva un nuevo array sin duplicados.

// const frutas = ["banana", "manzana", "uva", "pera", "kiwi", "banana", "kiwi"];

// let duplicados = frutas.filter((fruta, index) => frutas.indexOf(fruta) === index );
// console.log(duplicados)






//Contar ocurrencias
//Dado un array de números, cuenta cuántas veces aparece cada número.

// const numeros = [1, 2, 3, 4, 1, 2, 5, 6, 3, 4, 2, 1];

// let times = [];
// numeros.forEach(numero => {
// times[numero] = times[numero] ? times[numero] + 1 : 1}) //si el numero ya esta, se le suma uno a la ocurrencia y si no se le asigna el valor de 1

// let resultado = Object.values(times);

// console.log(resultado)




//Duplicar Elementos:
//Dado un array de números, crea una función que duplique cada elemento del array.

// const numeros = [2, 5, 8, 7, 9, 4, 6, 3, 15, 10];

// let duplicar = [];

// numeros.forEach((element) => {
//     duplicar.push(element * 2)
// }
// )
// console.log(duplicar)






//Filtrar Nombres:
//Dado un array de nombres, crea una función que filtre los nombres que tengan más de 5 caracteres.

// const nombres = ["Maria", "Luis", "Francesqa", "Jazmin", "Fernanda", "Chuo", "Anette"];

// let nombresLargos = nombres.filter((el) => el.length > 5)
// console.log(nombresLargos)






//Eliminar Duplicados:
//Dado un array, crea una función que elimine los elementos duplicados y devuelva un nuevo array sin duplicados.

// const nombres = ["Maria", "Luis", "Francesqa", "Jazmin", "Fernanda", "Chuo", "Anette", "Luis", "Francesqa", "Jazmin", "Fernanda"];

// let newArray = nombres.filter((nombre, index) => nombres.indexOf(nombre) === index);
// console.log(newArray)






//Crear una función que tome como parámetro un arreglo, retornar el último elemento del arreglo


// const numeros = [2, 5, 8, 7, 9, 4, 6, 3, 15, 10];

// function ultimoItem (arr){
//     return arr.at(-1)
// }

// const ultimoNumero = ultimoItem(numeros)
// console.log(ultimoNumero)






//Crear una función que tome como parámetro un arreglo y un número, retornar un nuevo arreglo con todos los elementos 
//y el número agregado al final del arreglo

//const numeros = [2, 5, 8, 7, 9, 4, 6, 3, 15, 10];

// function nuevoArray(array, numero) {
//     let arr = [...array, numero];
//     return arr;
// }

// const newArray = nuevoArray(numeros, 10)
// console.log(newArray)






//Crear una función que tome como parámetro un arreglo de números, retornar el promedio de todos los elementos del arreglo

// const numeros = [2, 5, 8, 7, 9, 4, 6, 3, 15, 10];

// function promedio(){
//     let suma = numeros.reduce((a, b) => a + b);
//     let cantidad = numeros.length;
//     return suma / cantidad;
// }

// const promedioNumeros = promedio(numeros)
// console.log(promedioNumeros)






//Crear una función que tome como parámetro un arreglo de números, retornar nuevo arreglo invertido los elementos

// const numeros = [2, 5, 8, 7, 9, 4, 6, 3, 15, 10];

// function alreves(){
//     let arr = numeros.reverse();
//     return arr;
// }

// let nuevoArr = alreves(numeros);
// console.log(nuevoArr)






//Crear una programa que tome como parámetro un arreglo de números, retornar un dato de tipo número con la suma de todos los números pares

// const numeros = [2, 5, 8, 7, 9, 4, 6, 3, 15, 10];

// let pares = numeros.filter(el => el % 2 === 0).reduce((a, b) => a + b)
// console.log(pares)






//Crea un objeto Array con los días laborables de la semana (Lunes a Viernes) y utiliza un método del objeto para recorrer el array 
// y convertir cada elemento de ese array a mayúsculas. sa console.table para ver el resultado.

// const semana = ["lunes", "martes", "miercoles", "jueves", "viernes"];
// let semanaMayuscula  = semana.map((element) => element.toUpperCase()) 

// console.log(semanaMayuscula)







// Crea un array para albergar al menos 10 números enteros cualesquiera, luego rellena el array (o créalo ya con los valores). 
// El ejercicio trata de crear a partir de este array otros dos uno con los números pares y otro con los 
// impares. No debes usar bucles, usa el método del array qe creas más apropiado.

// const numeros = [2, 5, 8, 7, 9, 4, 6, 3, 15, 10];

// let pares = numeros.filter((numero) => numero % 2 === 0)
// let sumaPares =  pares.reduce((a, b) => a + b)

// let impares = numeros.filter((numero) => numero % 2 != 0)
// let sumaImpares = impares.reduce((a, b) => a + b)

// console.log(pares);
// console.log(impares);
// console.log(sumaPares);
// console.log(sumaImpares);





//Crea un array bidimensional para almacenar nombre y calificación de un grupo de asistentes a un curso. 
//Una vez creado rellénalo con al menos 4 elementos y luego ordénalos por orden crecientes de las calificaciones. 

// const alumnos = [ 
//     { name: 'Paul', age: 16 },
//     { name: 'George', age: 17 },
//     { name: 'Lucas', age: 21 },
//     { name: 'Marco', age: 32 },
//     { name: 'Peter', age: 18 },
//     { name: 'Carl', age: 13 },
//     { name: 'Simon', age: 24 },
//     { name: 'Mark', age: 15 },
//     { name: 'Sandra', age: 34 },
//     { name: 'Alice', age: 28 }
// ]

// let calificaciones = alumnos.sort((a, b) => a.age - b.age)

// console.log(calificaciones)





//En este ejercicio debes crear dos arrays para representar dos equipos de trabajo. Al primer array le llamaremos 
//ocupados y al segundo libres. Ambos están llenos con 5 nombres.
// Debes crear una función rotar(lst1, lst2) que pase el primer nombre de la lista lst1 a l final de lst2, y
// luego el primero de la lst2 al final de lst1.

// const ocupados = [ 
//         { name: 'Paul', age: 16 },
//         { name: 'George', age: 17 },
//         { name: 'Lucas', age: 21 },
//         { name: 'Marco', age: 32 },
//         { name: 'Peter', age: 18 },
//     ]

// const libres = [
//         { name: 'Carl', age: 13 },
//         { name: 'Simon', age: 24 },
//         { name: 'Mark', age: 15 },
//         { name: 'Sandra', age: 34 },
//         { name: 'Alice', age: 28 }
//     ]

//     function rotar(ocupados, libres){
//         let lst1 = ocupados.shift()
//         let lst2 = libres.shift()

//         ocupados.push(lst2);
//         libres.push(lst1)

//         return [ocupados, libres];
//     } 

//     console.log(rotar(ocupados, libres))



// En este ejercicio tienes que comprobar el array proporcionado (array) 
// en busca de ideas buenas 'good' e ideas malas 'bad'. 
// Si hay una o dos ideas buenas, devuelve 'Bien!', 
// si hay más de 2 devuelve 'Perfecto!'. 
// Si no hay buenas ideas, como suele ser el caso, devuelve "Mal!".


// const test1 = ["bad", "bad", "bad"];
// const test2 = ["good", "bad", "bad", "bad", "bad", "good"];
// const test3 = ["good", "bad", "bad", "good", "bad", "good"];

// function comprobarIdeas(array) {

//     let contador = array.filter((item) => item === "good").length;

//     if(contador >= 3){
//         return("Perfecto!")
//     } else if(contador >= 2) {
//         return("Bien!")
//     } else{
//         return("Mal!")
//     }
    
// }

// console.log(comprobarIdeas(test1)); // "Mal!"
// console.log(comprobarIdeas(test2)); // "Bien!"
// console.log(comprobarIdeas(test3)); // "Perfecto!"



/* 
Suzuki es un monje que sube una gran escalera hasta el monasterio como parte de un ritual. 
Algunos días sube más escaleras que otros, dependiendo del número de alumnos a los que deba 
entrenar por la mañana. 
Tiene curiosidad por saber cuántos escalones podría subir en los próximos 20 años 
y ha pasado un año anotando sus progresos diarios.

La suma de todas las escaleras registradas en un año le servirá para estimar 
el número que podría subir en 20.

estimación_20_años = total_un_año * 20

Recibirás la siguiente estructura de datos que representa las escaleras 
que Suzuki ha registrado en un año. 
Tendrás todos los datos de todo el año, así que independientemente 
de cómo se registren, el problema debería ser sencillo de resolver.

escaleras = [lunes, martes, miercoles, jueves, viernes, sabado, domingo]

lunes = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 
        8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 
        7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331,
        7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 
        8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]

La función debe devolver la estimación a 20 años de las escaleras subidas utilizando la fórmula anterior.
*/

// let lunes = [
//     6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148,
//     6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751,
//     9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934,
//     8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825,
// ];
// let martes = [
//     9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719, 6648,
//     8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932, 7360, 9221,
//     5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105, 9769, 9679, 7842,
//     7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098, 6099, 5828, 7217, 9387,
// ];
// let miercoles = [
//     8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292, 7552,
//     5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758, 8415, 7313,
//     7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684, 8793, 8116, 8493,
//     5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756, 5717, 7555, 9447, 7703,
// ];
// let jueves = [
//     6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 5047, 6601,
//     8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031, 8710, 5182,
//     9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652, 5783, 7698, 9492,
//     6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357, 7378, 9598, 5405, 9493,
// ];
// let viernes = [
//     6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197, 9866,
//     6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752, 8695, 8402,
//     9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063, 6083, 7383, 7548,
//     5066, 7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858, 5360, 6638, 8012, 8701,
// ];
// let sabado = [
//     5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589, 6362,
//     6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473, 5663, 9501,
//     9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072, 8942, 6859, 5617,
//     5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455, 8720, 5725, 6960, 5127,
// ];
// let domingo = [
//     5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354, 8943,
//     5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625, 7795, 7003,
//     5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242, 9585, 9649, 9838,
//     7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184, 7960, 9455, 5633, 9085,
// ];

// const escaleras = [lunes, martes, miercoles, jueves, viernes, sabado, domingo];

// function calcularEstimación(escaleras) {
//     let diaDomingo = domingo.reduce((a, b) => a + b)
//     let diaLunes = lunes.reduce((a, b) => a + b)
//     let diaMartes = martes.reduce((a, b) => a + b)
//     let diaMiercoles = miercoles.reduce((a, b) => a + b)
//     let diaJueves = jueves.reduce((a, b) => a + b)
//     let diaViernes = viernes.reduce((a, b) => a + b)
//     let diaSabado = sabado.reduce((a, b) => a + b)
    
//     return (diaDomingo + diaLunes + diaMartes + diaMiercoles + diaJueves + diaViernes + diaSabado) * 20;

// }

//   console.log(calcularEstimación(escaleras)); // 54636040



/*
Los lobos han sido reintroducidos en Gran Bretaña. Eres un granjero de ovejas y ahora estás plagado por lobos que pretenden ser ovejas.
Afortunadamente, eres bueno detectándolos.
Advierte a la oveja frente al lobo que está a punto de ser comida. Recuerda que estás parado al frente de la fila que está al final del array:
[oveja, oveja, oveja, oveja, oveja, lobo, oveja, oveja] (ESTÁS AQUÍ AL FRENTE DE LA FILA)
    7      6      5      4      3            2      1
Si el lobo es el animal más cercano a ti, devuelve "Por favor, ¡vete y deja de comer mis ovejas!". 
De lo contrario, devuelve "¡Oye! ¡Oveja número N! ¡Estás a punto de ser comida por un lobo!" donde N es la posición de la oveja en la fila.
Nota: siempre habrá exactamente un lobo en el array.
Ejemplos
Input: ["oveja", "oveja", "oveja", "lobo", "oveja"]
Output: "Oveja número 1! ¡Estás a punto de ser comida por un lobo!"

Input: ["oveja", "oveja", "lobo"]
Output: "Vete y deja de comer mis ovejas!"
*/

// const test1 = ["oveja", "oveja", "lobo"];
// const test2 = ["oveja", "oveja", "oveja", "oveja", "oveja", "lobo", "oveja", "oveja"];
// const test3 = ["oveja", "lobo", "oveja", "oveja", "oveja", "oveja", "oveja"];

// function encontrarLobo(fila) {
//     if (fila[fila.length - 1] === "lobo") { //ultimo en el array
//         return "Vete y deja de comer mis ovejas!";
//     }

//     const indiceLobo = fila.findIndex(animal => animal === "lobo");

//     return indiceLobo !== -1 //si no esta en la posicion -1
//         ? `Oveja número ${fila.length - (indiceLobo) + 1}! ¡Estás a punto de ser comida por un lobo!`
//         : "No hay lobo";
// }


// console.log(encontrarLobo(test1)); 
// console.log(encontrarLobo(test2)); 
// console.log(encontrarLobo(test3)); 



///*
// Escribe una función que tome un string de una o más palabras y devuelva la misma string, 
// pero con todas las palabras que tengan cinco letras o más invertidas. 
// Las strings proporcionadas consistirán únicamente de letras y espacios. 
// Los espacios estarán presentes solo cuando haya más de una palabra.

// Ejemplos

// "Hey fellow warriors" --> "Hey wollef sroirraw"
// "This is a test" --> "This is a test"
// "This is another test" --> "This is rehtona test"


// function reverseWord(string) {
//     let palabras = string.split(' ');

//     let alreves = palabras.map((el) => {
//         if(el.length > 5) {
//             return el.split('').reverse().join('');
//     } else{
//         return el;
//     }
// })
//     return alreves.join(' ');
// }

// console.log(reverseWord("Hey fellow Warriors")); 
// console.log(reverseWord("This is a test")); 
// console.log(reverseWord("This is another test")); 







//Escribe una función que devuelva true si todas las edades son mayores de 18 años y false en caso contrario.

// const edades = [25, 16, 30, 18, 21];

// let edadesMayores = edades.every((edad) => edad > 18)


//     if(edadesMayores){
//         console.log("True")
//     } else{
//         console.log("False")
//     }




//Escribe una función que devuelva un array con los nombres de los estudiantes que tienen más de 20 años.

// const estudiantes = [
//     { nombre: "Juan", edad: 22 },
//     { nombre: "Ana", edad: 18 },
//     { nombre: "Pedro", edad: 25 },
//     { nombre: "María", edad: 20 }
// ];

//     let mayoresDeVeinte = estudiantes.filter((el) => el.edad >= 20)
//     console.log(mayoresDeVeinte)




//Escribe una función que devuelva la suma de los números negativos.

// const numerosNegativos = [-3, -7, -2, -8, -1];

//     let suma = numerosNegativos.reduce((a, b) => a - b, 0)
//     console.log(suma)




//Escribe una función que devuelva la suma de los cuadrados de cada número.

// const numeros = [10, 5, 8, 14, 2];

// let alCuadradoSuma = 0;
// let alCuadrado = numeros.forEach((el) => alCuadradoSuma += el *el) 

// console.log(alCuadradoSuma)




//Escribe una función que devuelva un nuevo array con la longitud de cada nombre.

// const nombres = ["Juan", "Ana", "Pedro", "María", "Carlos"];

//     let longitud = nombres.map((nombre) =>{
//         let name = nombre.split(' ');
//         if(name.length > 0){
//             return name.join('').length;
//         }else{
//             console.log("ERROR");
//             return 0;
//         }
        
//     })
//     console.log(longitud)




//Escribe una función que devuelva la edad promedio de los estudiantes.

// const estudiantes = [
//     { nombre: "Juan", edad: 22 },
//     { nombre: "Ana", edad: 18 },
//     { nombre: "Pedro", edad: 25 },
//     { nombre: "María", edad: 20 }
// ];

//     let edadPromedio = estudiantes.reduce((a, b) => a + b.edad, 0) 
//     let promedio = edadPromedio / estudiantes.length;
//     console.log(Math.round(promedio))
//     return promedio;






//Escribe una función que devuelva un nuevo array con las palabras que contienen más de 8 letras.

// const palabras = ["programación", "javascript", "desarrollo", "web", "código"];


//     let palabrasLargas = palabras.filter((el) => el.length > 8)
//     console.log(palabrasLargas)





//Escribe una función que devuelva true si todos los números son pares y false en caso contrario.


// const numerosPares = [2, 4, 5, 8, 15];


//     let soloPares = numerosPares.every((el) => el % 2 === 0)

//         if(soloPares){
//             console.log("True")
//         }else{
//             console.log("False")
//         }



// Contar Vocales:
// Dado un array de palabras, debes escribir una función llamada contarVocales que cuente la cantidad total de vocales en todas las palabras del array. 
// La función debe devolver:

// "Pocas vocales" si el total de vocales es menor o igual a 5.
// "Bastantes vocales" si el total de vocales está entre 6 y 10 (inclusive).
// "¡Muchas vocales!" si el total de vocales es mayor a 10.

// const palabras1 = ["hola", "adiós", "programación"];
// const palabras2 = ["javascript", "react", "node", "api", "frontend"];


// function esVocal(letra) {
//     return letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u";
// }

// function contarVocales(array) {
//     let totalVocales = 0;

//     array.forEach((palabra) => {
//         palabra.split('').forEach((letra) => {
//             if (esVocal(letra)) {
//                 totalVocales++;
//             }
//         });
//     });

//     if (totalVocales <= 5) {
//         return "Pocas vocales";
//     } else if (totalVocales >= 6 && totalVocales <= 10) {
//         return "Bastantes vocales";
//     } else {
//         return "¡Muchas vocales!";
//     }
// }


// console.log(contarVocales(palabras1)); // "Bastantes vocales"
// console.log(contarVocales(palabras2)); // "¡Muchas vocales!"




// Contar Palabras Específicas
// Dado un array de oraciones y una palabra específica, debes escribir una función llamada contarPalabra que cuente la 
// cantidad total de veces que aparece esa palabra en todas las oraciones del array. La función debe devolver:
// "No aparece" si la palabra no aparece en ninguna oración.
// "Una vez" si la palabra aparece exactamente una vez.
// "Varias veces" si la palabra aparece más de una vez.


// const oraciones1 = ["Hola, cómo estás?", "Adiós, hasta luego.", "Programación es divertida."];
// const oraciones2 = ["JavaScript es poderoso. React es popular. Node.js es versátil."];

// function contarPalabra(array, palabra) {
//     let contador = 0;

//     array.forEach((oracion) => {
//         const palabras = oracion.toLowerCase().match(/\b\w+\b/g) || [];
//         palabras.forEach((palabraEnOracion) => {
//             if(palabraEnOracion === palabra.toLowerCase())
//             contador++; 
//         })
//     });

//     if(contador > 1){
//         return "Varias veces";
//     } else if(contador === 1){
//         return "Una vez";
//     }else{
//         return "No aparece";
//     }
// }

// console.log(contarPalabra(oraciones1, 'programación')); // "Una vez"
// console.log(contarPalabra(oraciones2, 'es')); // "Varias veces"
// console.log(contarPalabra(oraciones2, 'python')); // "No aparece"



// Dado un array de objetos que representan personas, filtra las personas que son mayores de 30 años y viven en Madrid.

const personas = [
    { nombre: "Juan", edad: 25, ciudad: "Madrid" },
    { nombre: "Ana", edad: 35, ciudad: "Barcelona" },
    { nombre: "Pedro", edad: 40, ciudad: "Madrid" },
    { nombre: "María", edad: 28, ciudad: "Valencia" },
];


    let mayores = personas.filter((personas) => personas.edad > 30 && personas.ciudad === "Madrid");
    console.log(mayores)