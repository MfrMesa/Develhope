// # Promise errors
// Starting from the previous exercise, try to better handle all errors through the `Error` class and the `catch` method. Also add the `finally` method.

const isLogged = true;

function checkLoggedIn(userId) {
    return new Promise((resolve, reject) => {
        if (isLogged) {
            resolve(userId);
        } else {
            reject(new Error(`${userId} is not logged in`));
        }
    });
}

function checkName(userId) {
    return new Promise((resolve, reject) => {
        if (userId > 0.5) {
            resolve(`{name: "John", age: 24 }`);
        } else {
            reject(new Error("error"));
        }
    });
}

checkLoggedIn(5)
    .then(checkName)
    .then((user) => console.log(user))
    .catch((error) => console.error(error))
    .finally(() => console.log("Promise ready"));