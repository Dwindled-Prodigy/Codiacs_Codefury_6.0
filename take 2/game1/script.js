const puzzleContainer = document.getElementById("puzzle-container");
const shuffleButton = document.getElementById("shuffle-button");

// Function to create puzzle pieces
function createPuzzlePieces() {
    for (let i = 0; i < 9; i++) {
        const piece = document.createElement("div");
        piece.className = "puzzle-piece";
        piece.draggable = true;
        piece.textContent = i + 1;
        piece.setAttribute("data-index", i + 1);
        puzzleContainer.appendChild(piece);
    }
}

// Function to shuffle puzzle pieces
function shufflePuzzlePieces() {
    const pieces = Array.from(puzzleContainer.children);
    pieces.sort(() => Math.random() - 0.5);
    pieces.forEach((piece, index) => {
        piece.style.order = index;
    });
}

// Function to check if the puzzle is solved
function isPuzzleSolved() {
    const pieces = Array.from(puzzleContainer.children);
    return pieces.every((piece, index) => Number(piece.textContent) === index + 1);
}

// Function to highlight correct piece placement
function highlightCorrectPieces() {
    const pieces = Array.from(puzzleContainer.children);
    pieces.forEach((piece, index) => {
        if (Number(piece.textContent) === index + 1) {
            piece.classList.add("correct");
        } else {
            piece.classList.remove("correct");
        }
    });
}

// Event listeners for puzzle piece drag and drop
puzzleContainer.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.textContent);
});

puzzleContainer.addEventListener("dragover", (event) => {
    event.preventDefault();
});

puzzleContainer.addEventListener("drop", (event) => {
    const from = event.dataTransfer.getData("text/plain");
    const to = event.target.textContent;
    event.target.textContent = from;
    event.dataTransfer.clearData();

    if (isPuzzleSolved()) {
        setTimeout(() => {
            alert("Congratulations! You solved the puzzle.");
        }, 100);
    }

    highlightCorrectPieces();
});

// Event listener for the shuffle button
shuffleButton.addEventListener("click", () => {
    shufflePuzzlePieces();
    highlightCorrectPieces();
});

// Initialize the puzzle
createPuzzlePieces();
shufflePuzzlePieces();
highlightCorrectPieces();
