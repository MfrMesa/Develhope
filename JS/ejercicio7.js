// Starting from the previous exercise, are you able to print the value of helloName, after 1 second?


function printName(){
    let helloName = "Hello John"; 
    function inner(){
        setTimeout (() => {
            console.log(helloName)
        }, 1000)
    }
    return inner;
}

printName()();