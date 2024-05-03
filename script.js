const container = document.querySelector("#container");
const rgbPen = document.querySelector("#rgbPen");
const blackPen = document.querySelector("#blackPen");
const brushEffect = document.querySelector("#brush")
// RGB hover effect when button clicked
rgbPen.addEventListener("click", () => rgbHover());
// black hover effect
blackPen.addEventListener("click", () => blackHover());
// brush effect
brushEffect.addEventListener("click", () => brush());
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
const grid = document.querySelectorAll(".col")
grid.forEach((div) => {
    div.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "black";
        // adjusting opacity in case it was changed by brush function
        if (Number(window.getComputedStyle(e.target).opacity) < 1) {
            e.target.style.opacity = "1"
        }
    })
})
}
// New size function
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
    const grid = document.querySelectorAll(".col")
    grid.forEach((div) => {
        div.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = getRandomColor();
        // adjusting opacity in case it was changed by brush function
        if (Number(window.getComputedStyle(e.target).opacity) < 1) {
            e.target.style.opacity = "1"
        }
        })
    })
}
// Brush hover function
function brush() {
    const grid = document.querySelectorAll(".col")
    grid.forEach((div) => {
        // https://stackoverflow.com/questions/9251837/how-to-remove-all-listeners-in-an-element
        var new_element = div.cloneNode(true);
        div.parentNode.replaceChild(new_element, div);
        new_element.addEventListener("mouseenter", (e) => {
        let opacityValue = e.target.style.opacity;
        e.target.style.backgroundColor = "black";
        // adjusting opacity
        if (+opacityValue > 1) { return}
        if (opacityValue === "") {
            e.target.style.opacity = "0.1"
        }
         else { 
        opacityValue = +opacityValue + 0.1;
        e.target.style.opacity = opacityValue.toString();
        }
    })
    })
}