// JavaScript for Virtual Aquarium Page

// Function to create and append a fish element to the aquarium
function createFish(className) {
    const aquarium = document.querySelector(".aquarium");
    const fish = document.createElement("div");
    fish.className = "fish " + className;
    aquarium.appendChild(fish);
}

// Function to start the animation
function startAnimation() {
    createFish("fish1");
    createFish("fish2");
    createFish("fish3");
}

// Event listener for the Start button
document.getElementById("start-button").addEventListener("click", startAnimation);

// Event listener for the Stop button
document.getElementById("stop-button").addEventListener("click", function () {
    const aquarium = document.querySelector(".aquarium");
    aquarium.innerHTML = ""; // Clear all fish elements to stop the animation
});
