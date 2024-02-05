// # Local Storage
// In the `exercise.js` file, we find a `user` object. Write a function that saves the user object in `localStorage` with its 'user' key.

const user = {
    id: 1,
    name: "John",
    age: 25,
  };

  localStorage.setItem("user", JSON.stringify(user));

  const storedUser = JSON.parse(localStorage.getItem("user"));
  console.log(storedUser);
