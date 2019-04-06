const fields = [
    { txt: 1, row: 4, col:1 },
    { txt: 2, row: 4, col:2 },
    { txt: 3, row: 4, col:3 },
    { txt: 4, row: 3, col:1 },
    { txt: 5, row: 3, col:2 },
    { txt: 6, row: 3, col:3 },
    { txt: 7, row: 2, col:1 },
    { txt: 8, row: 2, col:2 },
    { txt: 9, row: 2, col:3 },
    { txt: 0, row: 5, col:'1/3' },
    { txt: '.', row: 5, col:3 },
    { txt: '-', row: 5, col:4 },
    { txt: '+', row: 4, col:4 },
    { txt: '=', row: 3, col:4 },
    { txt: 'C', row: 2, col:4 },
    { txt: 'DISPLAY', row: 1, col:'1/5' },
    /*
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '-', '+', '=', 'C', 'DISPLAY'
    */
];

const init = () => {
    const container = document.createElement('div');
    container.id = 'container';
    fields.forEach(el => {
        const div = document.createElement('div');
        div.textContent = el.txt;
        div.style.gridColumn = el.col;
        div.style.gridRow = el.row;
        if (el.txt == 'DISPLAY'){div.id='display';}else{
        div.addEventListener('click', ev => {
            const d = document.getElementById('display');
            d.textContent = ev.target.textContent;
            ev.target.textContent = '#';  
        })
    }
        container.appendChild(div);
//        console.log(div);
    });
    document.body.appendChild(container);

    for(let i=0; i<fields.length; i++) {
        console.log(fields[i]);
    }

}

window.addEventListener('DOMContentLoaded', init);