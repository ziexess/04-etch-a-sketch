const container = document.querySelector("#container")
// Creating 16 x 16 grid
for (let i = 0; i < 16; i++) {
    const row = document.createElement("div")
    row.classList.add("row")
    container.appendChild(row);
    for (let j = 0; j < 16; j++) {
        const col = document.createElement("div");
        col.classList.add("col");
        row.appendChild(col);
    }
}
// Hovering effect
const grid = document.querySelectorAll(".row, .col")
grid.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        // We can add class instead here
        div.style.backgroundColor = "black";
    })
})

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let newSize = prompt("Enter the new size of the grid")
    if (newSize === null) {return}
    else if (newSize < 2 || newSize > 100 && newSize !== null) {
        newSize = prompt("enter a number between 1 and 101")
    }
    // remove each previous div
    while (container.firstChild) container.removeChild(container.firstChild);
    // Create new grid
    for (let i = 0; i < newSize; i++) {
        const row = document.createElement("div")
        row.classList.add("row")
        container.appendChild(row);
        for (let j = 0; j < newSize; j++) {
            const col = document.createElement("div");
            col.classList.add("col");
            row.appendChild(col);
        }
    }
    // add hovering effect in new grid
    const grid = document.querySelectorAll(".row, .col")
    grid.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        // get random color instead of just black
        div.style.backgroundColor = 'black';
        })
    })
})
// function to get random color instead of just black
function getRandomColor() {
    var r = Math.floor(Math.random() * 256); 
    var g = Math.floor(Math.random() * 256); 
    var b = Math.floor(Math.random() * 256); 
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }