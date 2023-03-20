//Declaration of DOMs
const container = document.getElementById('container');
let gridButton = document.getElementsByClassName('gridButton');
let ten = document.getElementById('ten');
let twentyFour = document.getElementById('twentyFour');
let fortyEight = document.getElementById('fortyEight');
let custom = document.getElementById('custom');
let monochromeButton = document.getElementById('monochrome');
let rougeButton = document.getElementById('rouge');
let backgroundColor;
let borderColor;
let monochromeBg = '#B9B9B9';
let monochromeBorder ='#AAAAAA'; 
let rougeBg = '#FFA8A8';
let rougeBorder ='#CE8282';



// Function to create a grid
backgroundColor = rougeBg;
borderColor = rougeBorder;
function createGrid (numberOfSquares) {
    let squareCountArea = Math.pow(numberOfSquares, 2);
    for (let i = 1; i <= squareCountArea; i++){
        let divTemplate = document.createElement('div');
        container.style.display = 'grid';
        container.style.gridTemplateColumns = `repeat(${numberOfSquares}, 1fr)`;
        container.gridTemplateRows = `repeat(${numberOfSquares}, 1fr)`;
        divTemplate.style.border = `0.1px solid ${borderColor}`;
        container.appendChild(divTemplate);
        divTemplate.addEventListener("mousemove", ()=>{
            divTemplate.style.backgroundColor = `${backgroundColor}`;
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
monochromeButton.addEventListener("click", ()=> {
    backgroundColor = monochromeBg;
    borderColor = monochromeBorder;
    let allCells = container.querySelectorAll('div');
    allCells.forEach(allCells => allCells.remove());
    numberOfSquares = 8;
    createGrid(numberOfSquares);
})

rougeButton.addEventListener("click", ()=> {
    backgroundColor = rougeBg;
    borderColor = rougeBorder;
    let allCells = container.querySelectorAll('div');
    allCells.forEach(allCells => allCells.remove());
    numberOfSquares = 8;
    createGrid(numberOfSquares);
})