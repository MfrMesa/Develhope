// # instanceof Operator
// Define a class called `AreaCalculator`. Inside it, create a static method that let you calculate the area of the geometric figure passed as parameter. 
// The method will let you calculate the square, the rectangle and the circle area.


class Square {
    constructor(side) {
    this.side = side;
    }
}

class Rectangle {
    constructor(width, height) {
    this.width = width;
    this.height = height;
    }
}

class Circle {
    constructor(radius) {
    this.radius = radius;
    }
}

// Para que funcione, necesitas agregar un método estático llamado calculate dentro de la clase AreaCalculator. 
// Este método debe tomar una instancia de una figura geométrica 
// (ya sea Square, Rectangle o Circle) como parámetro y calcular su área en función de sus propiedades específicas.
//Figure seria una variable(parametro) sin ningun valor 

class AreaCalculator {
    static calculate(figure) {
        if (figure instanceof Square) {
            return figure.side ** 2;
        } else if (figure instanceof Rectangle) {
            return figure.width * figure.height;
        } else if (figure instanceof Circle) {
            return Math.PI * figure.radius ** 2;
        } else {
            throw new Error("Figure not found");
        }
    }
}

// La creación de nuevas variables (como cuadrado, rectangulo, y circulo en tu código) es necesaria para almacenar instancias específicas de las clases Square, 
// Rectangle, y Circle. 
// Estas variables representan objetos con propiedades específicas, como el lado para un cuadrado, el ancho y el alto para un rectángulo, 
// o el radio para un círculo.
// Cuando creas una nueva variable y le asignas un objeto instanciado a partir de una clase, estás creando un "ejemplar" o "instancia" 
// única de esa clase. Esta instancia tiene sus propias propiedades específicas, que pueden diferir de otras instancias de la misma clase.

// Sí, exactamente. En el contexto del método calculate de la clase AreaCalculator, figure es un parámetro de función que actúa como una variable local. 
// Cuando llamas a este método, debes proporcionar un valor para figure, que será el objeto del que deseas calcular el área. 
// Aquí tienes un ejemplo de cómo se utiliza:

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

// En cada línea, figure toma el valor de uno de los objetos (square, rectangle, circle), 
// y el método calculate utiliza la verificación instanceof para determinar el tipo de figura geométrica y 
// realizar los cálculos de área correspondientes.

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));