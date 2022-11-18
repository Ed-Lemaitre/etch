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

