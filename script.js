/* Ask for user's input on the number of boxes horizontally.
 */
let userInput;
let input = document.getElementById("myInput");
    input.addEventListener('keyup', function(event) {
        if (event.key === "Enter") {
             userInput = this.value;
        }
/* Create grid boxes. Use loop?*/
let mouseDown = false;
const totalBoxes = parseInt(userInput) ** 2;
for(i = 0; i < totalBoxes; i++) { // Loop through the input and display the equal div boxes.
    const gridWrapper = document.getElementById("gridBox");
    const createdBox = document.createElement("div");
        createdBox.classList.add("box");
        gridWrapper.appendChild(createdBox)
            console.log('test ' + i);
            /* Click and hold for effect when mouse passes over. */
        createdBox.addEventListener("mousedown", function() {
            mouseDown = true;
        })
        createdBox.addEventListener("mouseup", function() {
            mouseDown = false;
        })
        createdBox.addEventListener("mousemove", function() {
            if (mouseDown) {
            createdBox.style.backgroundColor = 'rgb(189, 60, 56)';
            }
        })
}
/* Set width of the parent div box to always proportional to the user input */
let gridBoxSize = document.getElementById("gridBox");
    gridBoxSize.style.width = parseInt(userInput) * 10 + "px";
    gridBoxSize.style.height = parseInt(userInput) * 10 + "px";
    }) /* wrap the click button function around the loop and other listeners
        in order to wait for user's input parsed first before loading the grids */




