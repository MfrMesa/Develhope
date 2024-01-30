// # Promise
// Write a `promise`. If the variable called `number` is greater than 10, then it returns a resolve, otherwise it returns a reject.
// Then manage the promise with `then` and `catch` in case of any reject.


const number = 15;

let myPromise = new Promise (function (resolve, reject) {
    if (number > 10) {
        resolve(number);
    } else {
        reject(`${number} is less than 10`); 
    }
});

myPromise
    .then((resolvedNumber) => console.log(resolvedNumber))
    .catch((error) => console.error(error));