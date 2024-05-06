//Ejercicio instanceof:

//Sistema de Empleados
// Crea una clase base llamada Empleado con propiedades como nombre, edad y puesto.

// Deriva dos clases llamadas Desarrollador y Gerente que extiendan la clase Empleado. Agrega propiedades específicas para cada uno, 
// como lenguaje para Desarrollador y departamento para Gerente.

// Crea una función llamada imprimirDetalles que tome un objeto como argumento y determine si es una instancia de la clase Desarrollador,
//  la clase Gerente o simplemente la clase base Empleado. Imprime los detalles correspondientes para cada tipo de empleado.

// Crea instancias de las clases y llama a la función imprimirDetalles para imprimir los detalles de cada empleado.

class Empleado {
    constructor(nombre, edad, puesto) {
        this.nombre = nombre;
        this.edad = edad;
        this.puesto = puesto;
    }
}

class Desarrollador extends Empleado {
    constructor(lenguaje) {
        super(...arguments);
        this.lenguaje = lenguaje;
    }
}

class Gerente extends Empleado {
    constructor(departamento) {
        super(...arguments);
        this.departamento = departamento;
    }
}

function imprimirDetalles(empleado) {
    if (empleado instanceof Desarrollador) {
        console.log(`Detalles del Desarrollador: ${empleado.nombre}, ${empleado.edad}, ${empleado.puesto}, ${empleado.lenguaje}`);
    } else if (empleado instanceof Gerente) {
        console.log(`Detalles del Gerente: ${empleado.nombre}, ${empleado.edad}, ${empleado.puesto}, ${empleado.departamento}`);
    } else if (empleado instanceof Empleado) {
        console.log(`Detalles del Empleado: ${empleado.nombre}, ${empleado.edad}, ${empleado.puesto}`);
    } else {
        console.log("No son instancias");
    }
}

const desarrollador = new Desarrollador("Luis", 33, "Frontend", "JS");
const gerente = new Gerente("Luis", 33, "Frontend", "IT");

const empleado1 = new Empleado("Luis", 33, "Frontend");

imprimirDetalles(gerente);
imprimirDetalles(desarrollador);
imprimirDetalles(empleado1);
