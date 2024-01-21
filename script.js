let documentFragment = document.createDocumentFragment();

function divMouseOver() {
    this.style.backgroundColor = '#363648';
}

function divMouseOut() {
    this.style.backgroundColor = '#121220';
}

function createGridDiv(divSize) {
    let gridDiv = document.createElement('div');
    gridDiv.style.backgroundColor = '#121220'
    gridDiv.style.minWidth = `${divSize}px`;
    gridDiv.style.minHeight = `${divSize}px`;
    // gridDiv.style.minWidth = '' + divSize + ' px';
    gridDiv.style.minHeight = '' + divSize + ' px';
    gridDiv.classList.add("unselectable");
    gridDiv.addEventListener('mouseover', divMouseOver);
    gridDiv.addEventListener('mouseout', divMouseOut);
    gridDiv.draggable = false;
    gridDiv.addEventListener('mousemove', (event) => {
        if (event.buttons == 1) {
            gridDiv.removeEventListener('mouseover', divMouseOver);
            gridDiv.removeEventListener('mouseout', divMouseOut);
            gridDiv.style.backgroundColor = '#666666';
        }

    })
    return gridDiv;
}

let dimValue = 16;
let dimSize = 300/16;
let constAmount = dimValue * dimValue;
let sizeSlider = document.querySelector("#dimension");
let sliderLabel = document.querySelector('.label');
sliderLabel.textContent = `Size: ${dimValue} x ${dimValue}`;
sizeSlider.addEventListener('input', (event) => {
    dimValue = event.target.value;
    constAmount = dimValue * dimValue;
    divSize = 300 / Math.sqrt(constAmount);
    sliderLabel.textContent = `Size: ${dimValue} x ${dimValue}`;
})


let createButton = document.querySelector('.createButton');
createButton.addEventListener('click', () => {
    let containerDiv = document.querySelector('.gridCont');
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
    }
    for (i = 0; i < constAmount; i++) {
        documentFragment.appendChild(createGridDiv(dimSize));
    }

    containerDiv.appendChild(documentFragment);
})