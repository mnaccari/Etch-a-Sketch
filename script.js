const container = document.querySelector('#container');
const clearBtn = document.querySelector('#clear');
const sizeBtn = document.querySelector('#size');

let mouseDown = false;

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

for (i=0; i<256; i++){
    let square = document.createElement('div');
    square.addEventListener("mouseover", draw);
    container.appendChild(square);
}

function draw(e){
    if(e.type === "mouseover" && !mouseDown) return;
    e.target.style.backgroundColor = "black";
}

clearBtn.addEventListener("click", clear);

sizeBtn.addEventListener("click", resize);

function resize(){
    let size = prompt("Choose the size of the grid");
    if(size < 1 || size > 100 || isNaN(size)){
        alert("It's not a valid number");
        return;
    }
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (i=0; i<size*size; i++){
        let square = document.createElement('div');
        square.addEventListener("mouseover", draw);
        container.appendChild(square);
    }
}

function clear(){
    console.log('10');
    const squares = document.querySelectorAll("#container > div");
    squares.forEach(square => {
        square.style.backgroundColor = "white";        
    });
}