let documentFragment = document.createDocumentFragment();
let constAmount = 256;
let constSize = 300/(256/16);
console.log(constSize);

function createGridDiv() {
    let gridDiv = document.createElement('div');
    gridDiv.style.backgroundColor = '#121220'
    gridDiv.style.minWidth = `${constSize}px`;
    gridDiv.style.minHeight = `${constSize}px`;
    // gridDiv.style.minWidth = '' + constSize + ' px';
    gridDiv.style.minHeight = '' + constSize + ' px';
    gridDiv.addEventListener('mouseover', () => gridDiv.style.backgroundColor = '#363648');
    gridDiv.addEventListener('mouseout', () => gridDiv.style.backgroundColor = '#121220');
    return gridDiv;
}

for (i = 0; i < constAmount; i++) {
    documentFragment.appendChild(createGridDiv());
}

let containerDiv = document.querySelector('.gridCont');
containerDiv.appendChild(documentFragment);