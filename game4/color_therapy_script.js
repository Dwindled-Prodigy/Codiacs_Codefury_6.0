// JavaScript for Color Therapy Art Page

// Get the canvas element and its 2d context
const canvas = document.getElementById("art-canvas");
const ctx = canvas.getContext("2d");

// Initialize selected color (default to black)
let selectedColor = "#000"; // Black

// Function to handle color selection
function selectColor(color) {
    selectedColor = color;
    ctx.fillStyle = selectedColor;
}

// Function to draw on the canvas
function draw(e) {
    if (e.buttons !== 1) return; // Only draw when the left mouse button is held down
    ctx.fillRect(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top, 5, 5);
}

// Event listeners
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", () => {
    canvas.addEventListener("mousemove", draw);
});
canvas.addEventListener("mouseup", () => {
    canvas.removeEventListener("mousemove", draw);
});

// Function to clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Function to save the art as a JPG image and trigger a download
function saveArt() {
    canvas.toBlob(function(blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "color_therapy_art.jpg";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, "image/jpeg", 0.9);
}

// Event listeners for color buttons
document.getElementById("color-black").addEventListener("click", () => selectColor("#000"));
document.getElementById("color-red").addEventListener("click", () => selectColor("#FF0000"));
document.getElementById("color-green").addEventListener("click", () => selectColor("#00FF00"));
document.getElementById("color-blue").addEventListener("click", () => selectColor("#0000FF"));

// Event listeners for buttons
document.getElementById("clear-button").addEventListener("click", clearCanvas);
document.getElementById("save-button").addEventListener("click", saveArt);
