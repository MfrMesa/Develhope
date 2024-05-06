// # Promise errors
// Starting from the previous exercise, try to better handle all errors through the `Error` class and the `catch` method. Also add the `finally` method.

const isLogged = true;

function checkLoggedIn(userId) {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        if (isLogged && random > 0.5) {
            resolve(random);
        } else {
            reject(new Error(`${userId} is not logged in`));
        }
    });
}

function checkName(randomNumber) {
    return new Promise((resolve, reject) => {
        if (randomNumber > 0.5) {
            resolve(`{name: "John", age: 24 }`);
        } else {
            reject(new Error("error"));
        }
    });
}

checkLoggedIn(isLogged)
    .then(checkName)
    .then((usuario) => console.log(usuario))
    .catch((error) => console.error(error))
    .finally(() => console.log("Promise ready"));


