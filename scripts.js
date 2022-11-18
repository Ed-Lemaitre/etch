const mainDiv = document.querySelector('.grid');
var divOutter = document.createElement('div');
var divInner = document.createElement('div');

for (i = 1; i <= 16; i++) {
    divOutter.appendChild(divInner);
    divInner = divInner.cloneNode(true);
}

for (i = 1; i <= 16; i++) {
    mainDiv.appendChild(divOutter);
    divOutter = divOutter.cloneNode(true);
}

const boxes = document.querySelectorAll('div.grid div div');

boxes.forEach((box) => {
    box.addEventListener('mouseover', addTransition);
});

boxes.forEach((box) => {
    box.addEventListener('transitionend', removeTransition);
});

// const classBoxes = document.querySelectorAll('div.transition');

// classBoxes.forEach((box) => {
//     console.log("hola")
//     box.addEventListener('transitionend', removeTransition);
// });

function addTransition(e) {
    this.classList.add('changeColor');
}

function removeTransition(e) {
    this.classList.remove('changeColor');
}
