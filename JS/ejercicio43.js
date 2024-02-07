// # Local Storage
// Starting with the previous exercise, write a method that recovers the data saved in `localStorage` and print them in the console


const user = {
    id: 1,
    name: "John",
    age: 25,
};

localStorage.setItem("user", JSON.stringify(user));


const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser);