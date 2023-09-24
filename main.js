document.addEventListener("DOMContentLoaded", function () {
    const contactLink = document.getElementById("contact-link");
    const contactOptions = document.getElementById("contact-options");
    const emailOptions = document.getElementById("email-options");
    let isContactOptionsOpen = false; // Track if the contact options menu is open
    let isEmailOptionsOpen = false; // Track if the email options submenu is open

    // Function to toggle the contact options menu
    function toggleContactOptions() {
        if (isContactOptionsOpen) {
            contactOptions.style.display = "none";
        } else {
            contactOptions.style.display = "flex";
        }
        isContactOptionsOpen = !isContactOptionsOpen;
        
        // Close the email options submenu if it's open
        if (isEmailOptionsOpen) {
            toggleEmailOptions();
        }
    }

    // Function to toggle the email options submenu
    function toggleEmailOptions() {
        if (isEmailOptionsOpen) {
            emailOptions.style.display = "none";
        } else {
            emailOptions.style.display = "flex";
        }
        isEmailOptionsOpen = !isEmailOptionsOpen;
    }

    // Toggle the contact options menu when "Contact Us" is clicked
    contactLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the link from navigating
        toggleContactOptions();
    });

    // Close the email options menu when clicking anywhere else on the page
    document.addEventListener("click", function (event) {
        if (isEmailOptionsOpen && event.target !== contactLink) {
            toggleEmailOptions();
        }
    });
});

