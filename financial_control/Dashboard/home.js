
import eventController from "../logic/eventController";

// This code is part of a financial control dashboard application.
// It handles the display of user information and logout functionality.
document.getElementById("out").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "../Login/index.html";
});

// Check if a user is logged in by checking localStorage
if (localStorage.getItem("user") === null) {
    window.location.href = "../Login/index.html";
}

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;

    if (title && amount && category) {
        // Reset form fields after submission
        document.getElementById("description").value = '';        
        document.getElementById("amount").value = '';
        document.getElementById("type").value = 'expense';
        document.getElementById("category").value = '';
        document.getElementById("date").value = '';


        //show the information in the page but first the information must be saved in the DB.json file
        const li = document.createElement("li");
        li.textContent = `Description: ${description}, Amount: ${amount}, type: ${type}, Category: ${
            category}, Date: ${date}, `;
        document.getElementById("list").appendChild(li);
        // Create a new event object and add it to the user's events

        //This funtion download the information from the DB.json file
        eventController.postEvent()

    } else {
        alert("Please fill in all fields.");
    }
});

