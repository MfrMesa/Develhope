// # Callback
// Write a function called repeatHello which takes a callback as it's parameter. The callback function will simply print "Hello". 
// The repeatHello function will have to execute the callback function with an interval of 1 second. The callback function must 
// be an arrow function, can you also explain why?

function repeatHello() {
    let saludo = "Hello";
    setInterval(() => {
        console.log(saludo);
    }, 1000);
}

repeatHello();

// El código establece un intervalo que imprime "Hello" en la consola cada segundo.
