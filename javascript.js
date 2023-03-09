//Declaration of DOMs
const container = document.getElementById('container');
let divTemplate = document.createElement('div');
let gridButton = document.getElementById('gridButton');
let numberOfSquares;


//Determine Viewport size
let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;
let squareSize = 16;
let squareHorizontal = Math.floor(viewportWidth / squareSize);
let squareVertical = Math.floor(viewportHeight / squareSize);
let squareCount;

//Create Container box
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = viewportWidth + 'px';
container.style.height = viewportHeight + 'px';
container.style.overflow = 'hidden';
container.style.margin = 'auto';

// Create a pattern of squares that fits the window
function initialGrid (squareCount) {
    squareCount = squareHorizontal* squareVertical;
    for (let i = 0; i < squareCount; i++){
        let divTemplate = document.createElement('div');
        divTemplate.style.borderColor = 'red';
        divTemplate.style.width = '16px';
        divTemplate.style.height = '16px';
        divTemplate.style.margin = '0.5px';
        divTemplate.style.borderStyle = 'solid';
        container.appendChild(divTemplate);
        
        //grid changes colour when you mouse over it
        divTemplate.addEventListener("mouseover", () => {
            divTemplate.style.backgroundColor = 'red'
        })
    }
}

window.onload = initialGrid();

function userInput () {
    numberOfSquares = prompt("number of squares per side? (max number = 100)", 20);
    console.log(numberOfSquares);
    if (numberOfSquares > 100 || numberOfSquares < 1){
        if (numberOfSquares === null){
            return alert("You cancelled the action")
        }
        else {
        while (numberOfSquares > 100 || numberOfSquares < 1){
            numberOfSquares = prompt("please enter another number", 20);
        }
    }
    }
    return numberOfSquares;  
}

function removeGrid () {
    while (container.lastElementChild){
        container.removeChild(container.lastChild);
    }
    // container.replaceChildren();
}



gridButton.addEventListener("click", () => {
    userInput();
    removeGrid();
    
    //Create new grid;
    squareHorizontal = Math.floor(numberOfSquares);
    squareVertical = Math.floor(numberOfSquares);
    squareCount = squareHorizontal* squareVertical;
    if (numberOfSquares < 20){
        container.style.minWidth = 'auto';
        container.style.maxWidth = '256px';
    }
    else {
        container.style.minWidth = 'auto';
        container.style.maxWidth = squareCount + 'px';
    }
    container.style.height = 'auto'
    container.style.margin = 'auto';
    initialGrid(squareCount);

})