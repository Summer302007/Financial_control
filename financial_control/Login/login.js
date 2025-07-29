// This code is part of a login system for a financial control application.
import validateEmail from "../logic/validateEmail.js";
import Empty from "../logic/Empty.js";
import userController from "../logic/userController.js";

// Check if a user is already logged in by checking localStorage
if (localStorage.getItem("user") !== null) {
    window.location.href = "../Dashboard/HOME.html";
}

// Add an event listener to the form submission
document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === null) {
        alert ("Send a null value");
        return;
    }

    if (password === null) {
        alert ("Send a null value");
        return;
    } 
    
    if (Empty({email, password})) {
        alert("You can't send empty values");
        return;
    } 

    if (!validateEmail(email)) {
        alert("You need to send a valid email");
        return;
    }

    // search for the user in the database
    const users = await userController.getUsers();

    // comparing the email and password with the users in the database
    const foundUser = users.find(user => user.email === email && user.Password === password);

    if (foundUser === undefined) {
        alert("User not found, please check your email and password.");
        return;
    } else {
        localStorage.setItem("user", foundUser.fullName);
        alert(`Welcome ${foundUser.fullName} to the system, click ok to continue.`);
        window.location.href = "../Dashboard/HOME.html";
        return;
    }
});
