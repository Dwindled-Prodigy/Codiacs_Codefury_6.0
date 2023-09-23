const soundsContainer = document.getElementById("sounds-container");
const visualsContainer = document.getElementById("visuals-container");
const birdsImage = document.getElementById("birds-image");
const waterImage = document.getElementById("water-image");
const forestImage = document.getElementById("forest-image");

// Function to play nature sounds
function playNatureSound(event) {
    const sound = event.target.getAttribute("data-sound");
    if (sound) {
        const audio = new Audio(`{sound}.mp3`);
        audio.play();
        // Show the corresponding visual when sound is played
        showVisual(sound);
    }
}

// Function to show visuals
function showVisual(sound) {
    // Hide all visuals
    hideAllVisuals();

    // Show the corresponding visual
    if (sound === "birds") {
        birdsImage.style.display = "block";
    } else if (sound === "water") {
        waterImage.style.display = "block";
    } else if (sound === "forest") {
        forestImage.style.display = "block";
    }
}

// Function to hide all visuals
function hideAllVisuals() {
    visualsContainer.querySelectorAll(".visual-image").forEach((image) => {
        image.style.display = "none";
    });
}

// Event listener for sound buttons
soundsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("sound-button")) {
        // Show the visuals container when a sound button is clicked
        visualsContainer.style.display = "block";
        playNatureSound(event);
    }
});
