// JavaScript for handling form submission and confirmation
const form = document.getElementById("cybercrime-form");
const confirmationMessage = document.getElementById("confirmation-message");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    // You should implement server-side validation and reporting logic here
    // For the example, we'll assume the form submission is successful.
    confirmationMessage.textContent = "Report submitted successfully!";
    confirmationMessage.style.color = "green";
    form.reset();
});
