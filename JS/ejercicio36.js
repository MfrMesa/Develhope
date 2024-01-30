// # Callback
// Starting from the previous exercise, we want to add to our function `repeatHello`, a `clearInterval` after 5 seconds, could you do that?


function repeatHello() {
    let saludo = "Hello";
    let intervalId = setInterval(() => {
        console.log(saludo);
    }, 1000);

    setTimeout(() => {
        clearInterval(intervalId);
    }, 5000);
}

repeatHello();