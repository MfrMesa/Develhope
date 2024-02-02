// # Promise chaining
// Write a first `promise` that takes as parameter the variable `isLogged` found in the `exercise.js` file.
// If the variable is true, then we return a random number from the resolve, otherwise we dispatch an error.
// We write a second `promise` that takes a variable of type number as a parameter. If the input parameter is greater than 0.5, 
// in the resolve we must return the following data: `{name: "John", age: 24}`, otherwise we must dispatch an `error`.
// Once this is done, try to chain the promises to eventually return the final object `{name: "John", age: 24}`

const isLogged = true;

function checkLoggedIn(isLogged) {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        if (isLogged && random > 0.5) {
            resolve(random);
        } else {
            reject(`${isLogged} no ha iniciado sesión`);
        }
    });
}

function checkName(randomNumber) {
    return new Promise((resolve, reject) => {
        if (randomNumber > 0.5) {
            resolve({ nombre: "John", edad: 24 });
        } else {
            reject(`error`);
        }
    });
}

checkLoggedIn(isLogged)
    .then(checkName)
    .then((usuario) => console.log(usuario))
    .catch((error) => console.error(error));