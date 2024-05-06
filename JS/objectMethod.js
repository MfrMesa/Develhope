// //Ejercicios de metodos de objetos:

// //Calculadora:

// // Crea un objeto llamado calculadora que tenga métodos para sumar, restar, 
// // multiplicar y dividir dos números. 
// // Luego, utiliza estos métodos para realizar varias operaciones aritméticas.

// const calculadora = {
//         //propiedad
//     resultado: 0,
//        // metodos
//     sumar: function(a, b){
//         this.resultado = a + b;
//         return this.resultado;
//     },
    
//     restar: function(a, b){
//         this.resultado = a - b;
//         return this.resultado;
//     },

//     multiplicar: function(a, b){
//         this.resultado = a*b;
//         return this.resultado;
//     } ,

//     dividir: function(a, b){
//         this.resultado = a / b;
//         return this.resultado;
//     },
// }


// console.log(calculadora.multiplicar(5,7));
// console.log(calculadora.sumar(5,7));
// console.log(calculadora.restar(5,7));
// console.log(calculadora.dividir(5,7));


// //Libro de Contactos:

// // Crea un objeto llamado contactos que represente un libro de contactos. 
// // Agrega métodos para añadir un nuevo contacto, eliminar un contacto existente 
// // y mostrar la lista de contactos.

// const contactos = {
//     contactosList: [ {
//         nombre: "Maria",
//         apellido: "Gomez",
//         numero: 667383572,
//     },
//     {
//         nombre: "Maria",
//         apellido: "Mesa",
//         numero: 667383572,
//     },
//     {
//         nombre: "Maria",
//         apellido: "Alarcia",
//         numero: 667383572,
//     },]
// }

// contactos.contactosList.push({nombre:"Luis", apellido:"Alarcia", numero: 555555});
// let eliminado = contactos.contactosList.pop();
// console.log(contactos);
// console.log("objeto eliminado:", eliminado)

// //Temporizador:

// // Crea un objeto llamado temporizador que tenga métodos para iniciar, detener y reiniciar un temporizador. 
// // Además, incluye un método para obtener el tiempo actual del temporizador.

// const temporizador = {
//     tiempo: 0, 
//     temporizadorID: null,

//     iniciar: function (){
//         this.temporizadorID = setTimeout(() => {
//                 console.log("inicio")
//             }, 1000)
//     },
    
//     detener: function (){
//         this.temporizadorID = clearTimeout (() => {
//             console.log("detenido")
//             })
//     },
    

//     reiniciar: function(){
//         this.iniciar,
//         this.detener,
//         console.log("reinicio")
//     }
// }

// temporizador.iniciar();
// temporizador.detener();
// temporizador.reiniciar();


//Agregar método:
//Agrega un método llamado saludar al objeto persona que imprima un saludo usando las propiedades del objeto.

// const persona = {
//     nombre: "Maria",
//     apellido: "Mesa",
//     saludar: function(){
//         console.log(`Hola, soy ${persona.nombre} ${persona.apellido}`)
//     }
// }

// persona.saludar()



//Lista de compras:
// Crea un objeto llamado listaCompras que represente una lista de compras.
// Agrega métodos para agregar un elemento a la lista, eliminar un elemento y mostrar la lista.


// const listaCompras = {
//     harina: "si",
//     azucar: "si",
//     agua: "si",
//     arroz: "no",
//     agregar(item){
//         this[item] = "si"
//         return this;
//     },
//     comprado(){
//         for (const item in this) {
//             if (this[item] === "si") {
//                 delete this[item];
//                 console.log(`${item} eliminado`);
//             }
//         }
//         return this;
//     },
// }
// const lista = Object.keys(listaCompras);

// console.log(lista)
// listaCompras.agregar("queso")
// listaCompras.comprado()
// console.log(listaCompras);


// //Estudiante:
// Crea un objeto llamado estudiante con propiedades como nombre, edad, materias (un array) y
//  calificaciones (un objeto donde las claves son nombres de materias y los valores son calificaciones).
// Agrega métodos para calcular el promedio de calificaciones y agregar una nueva materia con su calificación.

// const estudiante = {
//     nombre: "Luis",
//     edad: 30,
//     materias: [
//         {quimica: {calificacion: 20,}},
//         {matematica: {calificacion: 15,}},
//         {fisica: {calificacion: 14,}},
//         {deporte: {calificacion: 10,}},
//     ],

//     promedio() {

//         let suma = this.materias.reduce((total, materia) => {
//             for(calificacion in materia) {
//                 total += materia[calificacion].calificacion; 
//             }
//             return total;
//         }, 0);
//         return suma / this.materias.length;
//     },
// }
// estudiante.materias.push({religion: {calificacion: 10}})
// console.log(estudiante.promedio())
// console.log(estudiante.materias)



//Tienda en Línea:
// Crea un objeto tiendaOnline que represente una tienda en línea. Debe tener propiedades para el inventario de productos y 
// métodos para agregar productos al carrito, calcular el total de la compra y realizar el proceso de pago.

// const tiendaOnline = {
//     carrito: [],
//     productos: [
//         {camisa: {color: "verde", precio: 20}},
//         {pantalon:  {color: "rojo", precio: 50}},
//         {short:  {color: "amarillo", precio: 80}},
//         {sueter:  {color: "gris", precio: 30}},
//     ],

//     agregarCarrito(i){
//         tiendaOnline.carrito.push(tiendaOnline.productos[i])
//     },

//     total() {
//         return tiendaOnline.carrito.reduce((total, producto) =>{
//         let precio = producto[Object.keys(producto)].precio; 
//         return total + precio;
//     }, 0)
// }
// }


// tiendaOnline.agregarCarrito(2)
// tiendaOnline.agregarCarrito(0)
// tiendaOnline.agregarCarrito(3)

// console.log(tiendaOnline.carrito)
// console.log(tiendaOnline.total())





//// Crea un objeto llamado "frutas" con un array de nombres de frutas.
// Agrega un método llamado "mostrarFrutas" que itere sobre el array e imprima cada nombre de fruta.

// const frutas = {
//     fruta: ["naranja", "manzana", "banana", "melon"],

//     mostrarFruta(){
//         this.fruta.forEach(element => console.log(element))
//     }
// }

// frutas.mostrarFruta()





//// Crea un objeto llamado "usuario" con propiedades como nombre, edad y una bandera booleana llamada "esMayorDeEdad".
// Agrega un método llamado "verificarEdad" que imprima un mensaje diferente dependiendo de si el usuario es mayor de edad o no.
// Llama al método "verificarEdad" para comprobar su funcionamiento.

// const usuario = {
//     nombre: "Mario",
//     edad: 30,
//     esMayorDeEdad: true,

//     verificarEdad(){
//         usuario.esMayorDeEdad? console.log("Es mayor de edad") : console.log("No es mayor de edad");
//     }
// }

// usuario.verificarEdad()




//// Crea un objeto llamado "cadena" con una propiedad llamada "texto" que sea una cadena de caracteres.
// Agrega dos métodos: uno para convertir el texto a mayúsculas y otro para invertir la cadena.
// Encadena ambos métodos y muestra el resultado.

// const cadena = {
//     texto: "m a r i a   e s   m u y   b o n i t a",

//     aMayusculas() {
//         this.texto = this.texto.toUpperCase();
//         return this;  // Devuelve el objeto completo para encadenar
//     },

//     invertirCadena() {
//         this.texto = this.texto.split('').reverse().join('');
//         return this;  // Devuelve el objeto completo para encadenar
//     },
// }

// let resultado = cadena.aMayusculas().invertirCadena();
// console.log(resultado.texto);





//Lista de Compras
// Crea un objeto llamado compras con una propiedad items que sea un array. Agrega métodos llamados agregarItem, 
// eliminarItem y vaciarLista que modifiquen la propiedad items y permitan encadenar estas operaciones.


// const compras = {
//     items: [],

//     agregarItem(producto){
//         this.items.push(producto);
//         return this;
//     },

//     eliminarItem(producto){
//         const index = this.items.indexOf(producto);//esto devuelve -1
//         if(index !== -1){// si el item aparece, se elimina
//             this.items.splice(index, 1); //a partir del index va a eliminar 1 elemento
//         }
//         return this;
//     },

//     vaciarLista(){
//         this.items = [];
//         return this;
//     },
// }


// let carritoCompras = compras.agregarItem("vaso").eliminarItem("pollo").vaciarLista();
// console.log(carritoCompras.items)