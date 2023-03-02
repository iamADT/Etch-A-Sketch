const container = document.getElementById("container");

//Determine Viewport size
let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;
let squareSize = 16;
let squareHorizontal = Math.floor(viewportWidth / squareSize);
let squareVertical = Math.floor(viewportHeight / squareSize);
let squareCount = squareHorizontal* squareVertical;

//Create Container box
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = viewportWidth + 'px';
container.style.height = viewportHeight + 'px';
container.style.overflow = 'hidden';

// Create a pattern of squares that fits the window
for (let i = 0; i < squareCount; i++){
    let divTemplate = document.createElement('div');
    divTemplate.style.borderColor = 'red';
    divTemplate.style.width = '16px';
    divTemplate.style.height = '16px';
    divTemplate.style.margin = '0.5px';
    divTemplate.style.borderStyle = 'solid';
    container.appendChild(divTemplate);
}