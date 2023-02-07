/* wrap the click button function around the loop and other listeners
    in order to wait for user's input parsed first before loading the grids */
    let userInput = 0; // global scope
    let input = document.getElementById("myInput"); // input box
    input.addEventListener('keyup', function(event) {
        if (event.key === "Enter") {
            var inputValue = Number(this.value); // assign and convert input into number
            if (inputValue >= 10 && inputValue <= 100) {
                userInput = inputValue; // if both ifs are true assign value to global scope as number to be used elsewhere
            }
        

/* Remove grids upon user's next input using while loop. */
const removeGrids = document.getElementById("gridBox");
while (removeGrids.firstChild) {
    removeGrids.removeChild(removeGrids.firstChild);
}
createGrids(); // create grids when user enter input
        }
}); // end of Enter keyup eventlistener function.


function createGrids () { /* Create grid boxes and fill color with mouse events */
    let mouseDown = false;
    const totalBoxes = parseInt(userInput) ** 2;
    for(i = 0; i < totalBoxes; i++) { // Loop through the input and display the equal div boxes.
        const gridWrapper = document.getElementById("gridBox");
        let createdBox = document.createElement("div");
            createdBox.classList.add("box");
                console.log('Total boxes: ' + totalBoxes);
            gridWrapper.appendChild(createdBox);
            createdBox.style.width = parseInt(gridWrapper.offsetWidth / userInput) + "px";
            createdBox.style.heigth = parseInt(gridWrapper.offsetHeight / userInput) + "px";

/* Click and hold for effect when mouse passes over. */
            createdBox.addEventListener("mousedown", function() {
                mouseDown = true;
                createdBox.style.backgroundColor = 'rgb(189, 60, 56)';
            });
            createdBox.addEventListener("mouseup", function() {
                mouseDown = false;
            });
            createdBox.addEventListener("mousemove", function() {
                if (mouseDown) {
                    createdBox.style.backgroundColor = 'rgb(189, 60, 56)';
                }
            });
    }
}
/* function for reset button */
let reset = document.getElementById("resetBtn"); // get reset button
    reset.addEventListener('click', () => {
    const resetButton = document.getElementById("gridBox");
    while (resetButton.firstChild) {
    resetButton.removeChild(resetButton.firstChild);
    }
    createGrids(); // create grids when user click reset
});