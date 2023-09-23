// JavaScript for handling form submission and confirmation
const form = document.getElementById("cyberpolice-form");
const confirmationMessage = document.getElementById("confirmation-message");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Simulate form submission success (replace with actual submission logic)
    setTimeout(function () {
        confirmationMessage.textContent = "Report submitted successfully!";
        confirmationMessage.style.color = "#28a745"; // Green color for success message
        form.reset();
    }, 1000); // Simulate a 1-second delay
});
