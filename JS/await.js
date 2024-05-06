// //Ejercicios async/await de practica:

// //Obtener datos de una API
// // Crea una función obtenerUsuario que use async/await para obtener datos de un usuario de una API ficticia. 
// // Puedes usar la API JSONPlaceholder para simular la obtención de datos:

// async function obtenerUsuario(userId) {
//     try {
//         let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//         let usuario = await response.json();
//         return usuario;
//     } catch (error) {
//         throw new Error('Error al hacer fetch: ' + error.message);
//     }
// }

// obtenerUsuario(1)
//     .then((usuario) => console.log('Usuario obtenido:', usuario))
//     .catch((error) => console.error(error));


//Realizar múltiples peticiones en paralelo
//Crea una función obtenerInformacionUsuarios que use Promise.all y async/await para obtener información de varios usuarios en paralelo:

// async function obtenerInformacionUsuarios(userIds) {
//     try {
//         // Mapea los IDs de usuario a un array de promesas de usuarios
//         const promesasUsuarios = userIds.map(async (userId) => {
//             const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//             const usuario = await response.json();
//             return usuario;
//         });

//         // Espera a que todas las promesas se resuelvan
//         const usuarios = await Promise.all(promesasUsuarios);
//         return usuarios;
//     } catch (error) {
//         throw new Error('Error al obtener información de usuarios: ' + error.message);
//     }
// }

// // Ejemplo de uso
// obtenerInformacionUsuarios([1, 2, 3])
//     .then((usuarios) => console.log('Información de usuarios:', usuarios))
//     .catch((error) => console.error(error));


//Simular una operación asincrónica
//Crea una función simularOperacionAsincronica que use async/await para simular una operación asincrónica. 
//Esta operación debería tomar un tiempo y luego devolver un resultado:

function esperarTiempo(tiempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Operación asincrónica completada después de ${tiempo} milisegundos`);
        }, tiempo);
    });
}

async function simularOperacionAsincronica(tiempo) {
    try{
        const resultado = await esperarTiempo(tiempo);
        console.log(resultado);
        return resultado;
    } catch(error){
        console.error("error")
    }
}

simularOperacionAsincronica(2000)
    .then((resultado) => console.log(resultado))
    .catch((error) => console.error(error));