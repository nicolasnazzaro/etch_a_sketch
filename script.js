var gridSize = 16;

function createBox() {
    let container = document.querySelector('#container');
    let box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
}



function createGrid(gSize) {
    for (let i = 0; i < gSize*gSize; i++) {
        createBox();
        console.log("work");
    }
}

function hover() {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(function (div) {
        div.addEventListener('mouseover', (e) => {
            div.style.cssText = 'background-color: darkgreen';
        });
    });
    }