const mainDiv = document.querySelector('.grid');

function drawGrid(userInput) {

    if (userInput > 100) {
        alert("Max size is 100 squares. Drawing with max value.")
        userInput = 100;
    }

    var divOutter = document.createElement('div');
    var divInner = document.createElement('div');

    for (i = 1; i <= userInput; i++) {
        divOutter.appendChild(divInner);
        divInner = divInner.cloneNode(true);
    }

    for (j = 1; j <= userInput; j++) {
        mainDiv.appendChild(divOutter);
        divOutter = divOutter.cloneNode(true);
    }
    const boxes = document.querySelectorAll('div.grid div div');

    boxes.forEach((box) => {
        box.addEventListener('mouseover', addTransition);
    });
}

function removeDivs() {

    var selec = document.querySelectorAll('div.grid div');
    selec.forEach((d) => { d.remove() });

}

function addTransition(e) {
    this.classList.add('changeColor');
}

const button = document.querySelector('button');
button.addEventListener('click', gridSize);

function gridSize() {
    userInput = prompt();
    removeDivs();
    drawGrid(userInput);
}