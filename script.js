var gridSize = 48;
var eraserFlag = 0;


function createBox() {
    let container = document.querySelector('#container');
    let box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
}


function createGrid(gSize) {
    let container = document.querySelector('#container');
    container.style.setProperty('grid-template-columns', "repeat(" + gSize + ", 1fr)");
    container.style.setProperty('grid-template-rows', "repeat(" + gSize + ", 1fr)");
    for (let i = 0; i < gSize*gSize; i++) {
        createBox();
    }
}


function draw() {
    let boxes = document.querySelectorAll('.box');

    boxes.forEach(function (div) {
        div.addEventListener('click', (e) => {
            if (eraserFlag==0) {
                div.style.cssText = 'background-color: darkgreen';
            }
            else {
                div.style.cssText = 'background-color: black';
            }
        });
    });

    boxes.forEach(function (div) {
        div.addEventListener('mousemove', (e) => {
            if (e.buttons == 1) {
                if (eraserFlag==0) {
                    div.style.cssText = 'background-color: darkgreen';
                }
                else {
                    div.style.cssText = 'background-color: black';
                }
            };
        });
    });
}


function eraserActive() {
    if (eraserFlag == 0) {
        document.querySelector("#eraser").style.cssText = "background-color: rgba(0,0,0,0.6); color: white;";
        eraserFlag += 1;
    }
    else {
        document.querySelector("#eraser").style.cssText = "background-color: white; color: black;";
        eraserFlag -= 1;
    }
}

function runOnStart() {
    createGrid(gridSize);
    draw();
}



function resetGrid() {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(function(div) {
        div.style.cssText = 'background-color: black';
    })
    draw();
}


function deleteGrid() {
    let container = document.querySelector('#container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


function createNewGrid() {
    do {
        gridSize = parseInt(prompt("Introduce the size of your grid (max 100x100):"));
    }
    while (gridSize>100);
    deleteGrid();    
    runOnStart();
}


runOnStart();