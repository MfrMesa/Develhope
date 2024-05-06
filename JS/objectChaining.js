// //Ejercicios de Object Chaining:

// //Lista de Tareas:

// // Crea un objeto llamado listaTareas que represente una lista de tareas. Agrega métodos para agregar una tarea, 
// // marcar una tarea como completada y obtener la lista de tareas completadas.

const listaTareas = {
    tareas: [],
    tareasCompletadas: [],

    agregarTarea: function(nombreTarea) {
        this.tareas.push({nombre: nombreTarea, completada: false,});
    },

    marcarComoCompletada: function(indice) {
        const tarea = this.tareas[indice];
        if (tarea) {
            tarea.completada = true;
            this.tareasCompletadas.push(tarea);
            this.tareas.splice(indice, 1);
        } else {
            console.log("Índice de tarea no válido");
        }
    },

    obtenerTareasCompletadas: function() {
        return this.tareasCompletadas;
    },
};

listaTareas.agregarTarea("Lavar los platos");
listaTareas.agregarTarea("Hacer la compra");
listaTareas.agregarTarea("Estudiar JavaScript");

console.log("Lista de tareas inicial:", listaTareas.tareas);

listaTareas.marcarComoCompletada(0);
listaTareas.marcarComoCompletada(1);

console.log("Lista de tareas después de marcar como completadas:", listaTareas.tareas);
console.log("Lista de tareas completadas:", listaTareas.obtenerTareasCompletadas());


//Calculadora Avanzada:

//Crea un objeto llamado calculadoraAvanzada que tenga métodos para realizar operaciones matemáticas avanzadas, 
//como potencia, raíz cuadrada y logaritmo. Encadena estos métodos para realizar una serie de operaciones en una sola línea.

const calculadoraAvanzada = {
    resultado: 0,

    potencia: function(base, exponente) {
        this.resultado = Math.pow(base, exponente);
        return this; // Retornar el objeto para permitir el encadenamiento
    },

    raizCuadrada: function(numero) {
        this.resultado = Math.sqrt(numero);
        return this; 
    },

    logaritmo: function(numero, base) {
        this.resultado = Math.log(numero) / Math.log(base);
        return this; 
    },

    obtenerResultado: function() {
        return this.resultado;
    },
};

const resultadoFinal = calculadoraAvanzada.potencia(2, 3).raizCuadrada(64).logaritmo(16, 2).obtenerResultado();

console.log("Resultado final:", resultadoFinal);



//Cadena de Texto:

// Crea un objeto llamado cadenaTexto que represente una cadena de texto. Agrega métodos para convertir la cadena a mayúsculas, luego a minúsculas, y 
// finalmente a un arreglo de caracteres. Encadena estos métodos para realizar todas las transformaciones en una sola línea.

const cadenaTexto = {
    texto: "",

    establecerTexto: function(nuevoTexto) {
        this.texto = nuevoTexto;
        return this; // Retornar el objeto para permitir el encadenamiento
    },

    convertirAMayusculas: function() {
        this.texto = this.texto.toUpperCase();
        return this; // Retornar el objeto para permitir el encadenamiento
    },

    convertirAMinusculas: function() {
        this.texto = this.texto.toLowerCase();
        return this; 
    },

    convertirAArreglo: function() {
        this.texto = this.texto.split("");
        return this;
    },

    resultadoObtenido: function() {
        return this.texto;
    },
};


const resultado = cadenaTexto.establecerTexto("Hola Mundo").convertirAMayusculas().convertirAMinusculas().convertirAArreglo().resultadoObtenido();

console.log("Resultado final:", resultado);
