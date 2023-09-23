// script.js
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const menuOptions = document.getElementById("menu-options");
    let isMenuOpen = false; // Track if the menu is open
    
    // Define the distance threshold for menu appearance
    const distanceThreshold = 50; // Adjust as needed
    
    // Function to check if cursor is close to the button
    function isCursorClose(event) {
        const buttonRect = menuButton.getBoundingClientRect();
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        
        const isCloseX = mouseX >= buttonRect.left - distanceThreshold && mouseX <= buttonRect.right + distanceThreshold;
        const isCloseY = mouseY >= buttonRect.top - distanceThreshold && mouseY <= buttonRect.bottom + distanceThreshold;
        
        return isCloseX && isCloseY;
    }
    
    // Function to toggle the menu
    function toggleMenu() {
        if (isMenuOpen) {
            menuButton.classList.remove("active");
            menuOptions.style.left = "-100%";
        } else {
            menuButton.classList.add("active");
            menuOptions.style.left = "0";
        }
        isMenuOpen = !isMenuOpen;
    }
    
    // Show the menu when cursor is close to the button
    menuButton.addEventListener("mouseenter", function (event) {
        if (!isMenuOpen && isCursorClose(event)) {
            toggleMenu();
        }
    });
    
    // Hide the menu when cursor is not close to the button
    menuButton.addEventListener("mouseleave", function (event) {
        if (!isMenuOpen && !isCursorClose(event)) {
            toggleMenu();
        }
    });
    
    // Toggle the menu when the button is clicked
    menuButton.addEventListener("click", function () {
        toggleMenu();
    });
    
    // Close the menu when clicking anywhere else on the page
    document.addEventListener("click", function (event) {
        if (isMenuOpen && !menuButton.contains(event.target)) {
            toggleMenu();
        }
    });
});
