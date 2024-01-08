// Starting from the previous exercise, are you able to print the value of helloName, after 1 second?


function printName () {
    this.helloName = "Hello John";
    function inner (){
        setTimeout (() => {
            console.log(this.helloName);
        }, 1000)
    }
    return inner;
}

printName()();