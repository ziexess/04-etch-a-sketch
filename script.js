const container = document.querySelector("#container");
const rgbPen = document.querySelector("#rgbPen");
const blackPen = document.querySelector("#blackPen");
// RGB hover effect when button clicked
rgbPen.addEventListener("click", () => rgbHover());
// black hover effect
blackPen.addEventListener("click", () => blackHover());
// Creating 16 x 16 grid
createGrid(16);
function createGrid(size) {
for (let i = 0; i < size; i++) {
    const row = document.createElement("div")
    row.classList.add("row")
    container.appendChild(row);
    for (let j = 0; j < size; j++) {
        const col = document.createElement("div");
        col.classList.add("col");
        row.appendChild(col);
    }
}
}
// Black hover function
blackHover();
function blackHover() {
const grid = document.querySelectorAll(".row, .col")
grid.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "black";
    })
})
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let newSize = prompt("Enter the new size of the grid")
    if (newSize === null) {return}
    else if (newSize < 2 || newSize > 100 && newSize !== null) {
        newSize = prompt("enter a number between 1 and 101")
    }
    // remove each previous div
    while (container.firstChild) container.removeChild(container.firstChild);
    createGrid(newSize);
    // add hovering effect in new grid
    blackHover();
})
// function to get random color instead of just black
function getRandomColor() {
    let r = Math.floor(Math.random() * 256); 
    let g = Math.floor(Math.random() * 256); 
    let b = Math.floor(Math.random() * 256); 
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
// RGB hover function
function rgbHover() {
    const grid = document.querySelectorAll(".row, .col")
    grid.forEach((div) => {
        div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = getRandomColor();
        })
    })
}
