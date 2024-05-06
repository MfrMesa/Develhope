// # Optional Chaining and Nullish Coalescing- Estos operadores ayudan a manejar propiedades profundamente anidadas en un objeto y 
// proporcionan valores predeterminados para valores indefinidos o nulos.
// In this example we are trying to check if a value for the `city` property is defined. However, the code can be simplified. How can we do that?

const order = {};

// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//     console.log('City is required');
// }


if (!order?.customer?.address?.city) {
    console.log('City is required');
}

// Este código verifica si order, order.customer, order.customer.address, y order.customer.address.city están definidos y, 
// si no lo están, muestra 'La ciudad es requerida'. El operador de Encadenamiento Opcional (?.) ayuda a prevenir errores que 
// pueden ocurrir al acceder a propiedades de objetos anidados que podrían ser indefinidas o nulas.

// De esta manera, si alguna de las propiedades a lo largo de la cadena (order, customer, address, o city) está ausente o es 
// indefinida, se ejecutará el console.log. De lo contrario, no se ejecutará, lo que simplifica la lógica y mejora la legibilidad.