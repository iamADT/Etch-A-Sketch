//Declaration of DOMs
const container = document.getElementById('container');
let gridButton = document.getElementsByClassName('gridButton');
let ten = document.getElementById('ten');
let twentyFour = document.getElementById('twentyFour');
let fortyEight = document.getElementById('fortyEight');
let custom = document.getElementById('custom');

// Function to create a grid
function createGrid (numberOfSquares) {
    let squareCountArea = Math.pow(numberOfSquares, 2);
    for (let i = 1; i <= squareCountArea; i++){
        let divTemplate = document.createElement('div');
        container.style.display = 'grid';
        container.style.gridTemplateColumns = `repeat(${numberOfSquares}, 1fr)`;
        container.gridTemplateRows = `repeat(${numberOfSquares}, 1fr)`;
        divTemplate.style.border = '0.1px solid #CE8282';
        container.appendChild(divTemplate);
        divTemplate.addEventListener("mousemove", ()=>{
            divTemplate.style.backgroundColor = '#FFA8A8';
        })
    }
}

window.onload = createGrid(8);

//Change Grid Size functions
ten.addEventListener("click", ()=> {
    let allCells = container.querySelectorAll('div');
    allCells.forEach(allCells => allCells.remove());
    createGrid(10);
})

twentyFour.addEventListener("click", ()=> {
    let allCells = container.querySelectorAll('div');
    allCells.forEach(allCells => allCells.remove());
    createGrid(24);
})

fortyEight.addEventListener("click", ()=> {
    let allCells = container.querySelectorAll('div');
    allCells.forEach(allCells => allCells.remove());
    createGrid(48);
})

custom.addEventListener("click", ()=> {
    let allCells = container.querySelectorAll('div');
    allCells.forEach(allCells => allCells.remove());
    createGrid(userInput());
})


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


//change colour functions