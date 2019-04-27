const fields = [
    { txt: 'Q', row: 1, col:1 },
    { txt: 'S', row: 1, col:2 },
    { txt: 'E', row: 1, col:3 },
    { txt: 'F', row: 1, col:4 },
    { txt: 'T', row: 1, col:5 },
    { txt: 'A', row: 1, col:6 },
    { txt: 'W', row: 2, col:1 },
    { txt: 'D', row: 2, col:2 },
    { txt: 'R', row: 2, col:3 },
    { txt: 'G', row: 2, col:4 },
    { txt: 'H', row: 2, col:5 },
    { txt: 'R', row: 2, col:6 },
    { txt: 'D', row: 3, col:1 },
    { txt: 'W', row: 3, col:2 },
    { txt: 'R', row: 3, col:3 },
    { txt: 'E', row: 3, col:4 },
    { txt: 'S', row: 3, col:5 },
    { txt: 'F', row: 3, col:6 },
    { txt: 'G', row: 4, col:1 },
    { txt: 'A', row: 4, col:2 },
    { txt: 'H', row: 4, col:3 },
    { txt: 'Q', row: 4, col:4 },
    { txt: 'Y', row: 4, col:5 },
    { txt: 'T', row: 4, col:6 },
];


//let mem = "";
let field = document.getElementsByClassName("field");

const oClick = ev => {
    const key = ev.target.textContent;
    //const c = key;
    function ChangeClass(div) {
        var className = ev.target.getAttribute("class");
        if(div.className=="closed"){
            div.className = "open";
        } else {
            div.className = "closed";
        }
    }
    ChangeClass();
}

var displayField = function(){
    this.classList.toggle("open");
    this.classList.toggle("closed");
}

const init = () => {
    const container = document.createElement('div');
    container.id = 'container';
    fields.forEach(el => {
        const div = document.createElement('div');
        div.textContent = el.txt;
        div.style.gridColumn = el.col;
        div.style.gridRow = el.row;
        div.addEventListener("click", displayField);
        container.appendChild(div).className = "closed";
    })
    document.body.appendChild(container);
}
/*
for(let i=0; i<fields.length; i++) {
    console.log(fields[i]);
}
*/
window.addEventListener('DOMContentLoaded', init);