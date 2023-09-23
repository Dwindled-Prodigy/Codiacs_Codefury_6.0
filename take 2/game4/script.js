const meditationContainer = document.getElementById("meditation-container");
const guideContainer = document.getElementById("guide-container");

// Function to display meditation guide content
function showMeditationGuide(event) {
    const guideId = event.target.getAttribute("data-guide");
    if (guideId) {
        // Hide all meditation guides
        hideAllMeditationGuides();

        // Display the selected meditation guide
        const selectedGuide = document.getElementById(guideId);
        selectedGuide.style.display = "block";
    }
}

// Function to hide all meditation guides
function hideAllMeditationGuides() {
    guideContainer.querySelectorAll(".meditation-guide").forEach((guide) => {
        guide.style.display = "none";
    });
}

// Event listener for guide buttons
meditationContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("guide-button")) {
        // Show the guide container when a guide button is clicked
        guideContainer.style.display = "block";
        showMeditationGuide(event);
    }
});
