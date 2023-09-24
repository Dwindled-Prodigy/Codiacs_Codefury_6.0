// Add JavaScript functionality for the button
document.addEventListener("DOMContentLoaded", function () {
    const mainButton = document.getElementById("mainButton");
    
    mainButton.addEventListener("click", function () {
        // Replace 'main-webpage.html' with the actual URL of your main webpage
        window.location.href = "main.html";
    });
});