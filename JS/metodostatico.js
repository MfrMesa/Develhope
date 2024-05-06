//Ejercicios metodo static:

// Conversión de Unidades
// Crea una clase llamada ConversorUnidades que tenga un método estático llamado metrosAKilometros que convierta metros a kilómetros.

// class ConversorUnidades{
//     static metrosAKilometros(a , b){
//         return a / b;
//     } 
// }

// let kilometros = ConversorUnidades.metrosAKilometros(1, 1000);

// console.log(kilometros);

//Validación de Contraseña
// Crea una clase llamada ValidadorContraseña que tenga un método estático llamado 
// esContraseñaSegura que valide si una contraseña es segura (cumple con ciertos 
// criterios como longitud mínima, uso de números, letras, etc.).

class ValidadorContraseña {
    static esContraseñaSegura(password) {
        if (/^[A-Za-z0-9]+$/.test(password)) {
            // Verificar la longitud de la contraseña de forma independiente
            if (password.length >= 11) {
                console.log("Contraseña válida");
            } else {
                console.log("La contraseña debe tener al menos 11 caracteres.");
            }
        } else {
            console.log("La contraseña debe contener solo caracteres alfanuméricos.");
        }
    }
}

// Ejemplo de uso
ValidadorContraseña.esContraseñaSegura("Susie8020202");
