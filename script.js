/* Ask for user's input on the number of boxes,
and makes boxes appear or disappear. */


let userInput = prompt('Select from 10x10 to 100x100');

/* Create and toggle grid boxes. Use loop?*/
let mouseDown = false;
const totalBoxes = userInput ** 2;
for(i = 0; i < totalBoxes; i++) { // Loop through the input and display the equal div boxes.
    const gridWrapper = document.getElementById("gridBox");
    const createdBox = document.createElement("div");
        createdBox.classList.add("box");
        gridWrapper.appendChild(createdBox)
            console.log('test ' + i);
            /* On hover effect when mouse passes over. */
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
    gridBoxSize.style.width = userInput * 10 + "px";



