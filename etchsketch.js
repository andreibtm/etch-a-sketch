const container = document.querySelector("#container");

function createGrid(rows, cols) {
    let pixelSize = 960/ rows;

    container.innerHTML = ""; // Clear container before creating new grid
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < cols; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.cssText = `width: ${pixelSize}px; height: ${pixelSize}px`;
        // Add event listener for click on each cell
        cell.addEventListener('click', function() {
        this.style.backgroundColor = 'black'; // Change background color to black
        });
        cell.addEventListener('dblclick', function() {
        this.style.backgroundColor = 'antiquewhite'; // Change background color to black
        });
        row.appendChild(cell);
        }
        container.appendChild(row);
    }
}
  

const newGridBtn = document.querySelector("#newGridBtn");

newGridBtn.addEventListener("click", () => {
    let numSquares;
    do {
        numSquares = prompt("Enter the number of squares per side (Max: 100):");
        numSquares = parseInt(numSquares);
        // Validate if input is a number and within range (1-100)
      } while (isNaN(numSquares) || numSquares < 1 || numSquares > 100);
      
      if (!isNaN(numSquares)) {
        // Create grid using the valid numSquares
        createGrid(numSquares, numSquares);
      } else {
        // Handle invalid input (optional: display an error message)
        console.error("Invalid input. Please enter a number between 1 and 100.");
      }
});

createGrid(16, 16); // Create a 16x16 grid