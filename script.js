// object declarations

let documentFragment = document.createDocumentFragment();
let createButton = document.querySelector('.createButton');
let containerDiv = document.querySelector('.gridCont');
let sizeSlider = document.querySelector("#dimension");
sizeSlider.value = 16;
let sliderLabel = document.querySelector('.label');
sliderLabel.textContent = `Size: ${sizeSlider.value} x ${sizeSlider.value}`;
let dimSize = containerDiv.offsetWidth / sizeSlider.value;
let gridAmount = sizeSlider.value * sizeSlider.value;
let colorPicker = document.querySelector('#colorPicker');
colorPicker.value = '#666666';

// event functions

function divMouseOver() {
    this.style.backgroundColor = '#363648';
}

function divMouseOut() {
    this.style.backgroundColor = '#121220';
}

function createGridDiv(dimSize) {
    let gridDiv = document.createElement('div');
    gridDiv.style.backgroundColor = '#121220'
    gridDiv.style.minWidth = `${dimSize}px`;
    gridDiv.style.minHeight = `${dimSize}px`;
    gridDiv.classList.add("unselectable");
    gridDiv.addEventListener('mouseover', divMouseOver);
    gridDiv.addEventListener('mouseout', divMouseOut);
    gridDiv.draggable = false;
    gridDiv.addEventListener('mousemove', (event) => {
        if (event.buttons == 1) {
            gridDiv.removeEventListener('mouseover', divMouseOver);
            gridDiv.removeEventListener('mouseout', divMouseOut);
            gridDiv.style.backgroundColor = colorPicker.value;
        }
    })
    return gridDiv;
}

// slider event

sizeSlider.addEventListener('input', (event) => {
    sizeSlider.value = event.target.value;
    gridAmount = sizeSlider.value * sizeSlider.value;
    dimSize = containerDiv.offsetWidth / sizeSlider.value;
    sliderLabel.textContent = `Size: ${sizeSlider.value} x ${sizeSlider.value}`;
})

// create grid event

createButton.addEventListener('click', () => {
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
    }
    for (i = 0; i < gridAmount; i++) {
        documentFragment.appendChild(createGridDiv(dimSize));
    }
    containerDiv.appendChild(documentFragment);
})

let startingEvent = new Event('click');
createButton.dispatchEvent(startingEvent);
