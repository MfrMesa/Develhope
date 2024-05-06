//Ejercicios practicos de getters y setters:

//Temperatura Celsius y Fahrenheit
// Crea una clase llamada Temperatura que tenga propiedades para almacenar la temperatura en grados Celsius y Fahrenheit. 
// Utiliza getters y setters para asegurarte de que ambas propiedades estén sincronizadas. Proporciona métodos para establecer
//  la temperatura en una escala y obtenerla en la otra.

class Temperatura {
    constructor() {
        this.celsius = 0;
        this.fahrenheit = 32;
    }

    set temp(datosTemperatura) { //para tomar dos parametros primero los guardamos en una variable
        const {temperaturaDiaria, locacion} = datosTemperatura;
        if (locacion === "America Latina") {
            this.celsius = temperaturaDiaria;
        } else if (locacion === "USA") {
            this.fahrenheit = temperaturaDiaria;
        } else {
            console.log("Locacion no reconocida");
        }
    }

    get getcelsius() {
        return this.celsius;
    }

    get getfahrenheit() {
        return this.fahrenheit;
    }
}

// const miami = new Temperatura();
// miami.temp =  { temperaturaDiaria: 90, locacion: "USA" }; // Proporciona los datos como un objeto

// console.log(miami.getfahrenheit);


//Cuenta Bancaria
// Crea una clase llamada CuentaBancaria que tenga una propiedad para el saldo. Utiliza un setter para permitir 
// establecer el saldo solo si la cantidad es un número positivo. Crea un getter para obtener el saldo actual.

class CuentaBancaria{
    constructor(){
        this.saldo = 0;
    }

    set saldoEnCuenta(cuenta){
        if(cuenta >= 0){
            this.saldo = cuenta; //para actualizar el saldo.
            console.log("Saldo actual:" + this.saldo);
        } else {
            console.log("Saldo negativo:");
        } 
    }

    get getsaldo() {
        return this.saldo;
    }
}

// const cliente = new CuentaBancaria();
// cliente.saldoEnCuenta = 500;

// console.log(cliente.getsaldo);

//Usuario con Nombre Completo
// Crea una clase llamada Usuario con propiedades para el nombre y apellido. 
// Utiliza un getter para obtener el nombre completo y un setter para permitir establecer tanto el nombre como el apellido a la vez.

class Usuario{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    set name(newName){
        if(typeof newName === "string"){
            this.fullName = this.nombre + " " +this.apellido;
        console.log(`Nombre completo: ${this.fullName}`);
    } else {
        console.log("Name invalid");
        }
    } 

    get getFullName(){
        return this.fullName;
    }
}

// const user = new Usuario("Luis", "Alarcia");

// user.name = "Nuevo nombre";

// console.log(user.getFullName);

//Rectángulo
// Crea una clase llamada Rectangulo con propiedades para la longitud y el ancho. 
// Utiliza getters y setters para asegurarte de que ambas propiedades sean números positivos. 
// Proporciona un método para calcular el área del rectángulo.

class Rectangulo{
    constructor(longitud, ancho){
        this.longitud = longitud;
        this.ancho = ancho;
    }

    set Positivo(numero){
        if(numero >= 0){
            this.longitud = numero;
            console.log("Longitud actualizada:", this.longitud);
        } else {
            console.log("numero invalido");
        }
    }

    get getRectangulo(){
        return this.longitud * this.ancho;
    }
}

// const figura = new Rectangulo(8,6);

// figura.Positivo = 10;

// console.log("Nuevas medidas:", figura.getRectangulo );


//Coche con Velocidad
// Crea una clase llamada Coche con una propiedad para la velocidad. Utiliza un 
// setter para asegurarte de que la velocidad no sea negativa. Proporciona un método para acelerar y otro para frenar.

class Coche {
    constructor(velocidad) {
        this.velocidad = velocidad;
    }

    set chequeo(numero) {
        if (numero >= 0) {
            this.velocidad = numero;
            console.log("Acelera");
        } else {
            console.log("Frena");
        }
    }

    get getVelocidad() {
        return this.velocidad;
    }
}

const audi = new Coche();

audi.chequeo = -5; // Intenta establecer una velocidad negativa

console.log(audi.getVelocidad);














