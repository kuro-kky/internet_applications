const fields = [
    { txt: 1, row: 4, col: 1 },
    { txt: 2, row: 4, col: 2 },
    { txt: 3, row: 4, col: 3 },
    { txt: 4, row: 3, col: 1 },
    { txt: 5, row: 3, col: 2 },
    { txt: 6, row: 3, col: 3 },
    { txt: 7, row: 2, col: 1 },
    { txt: 8, row: 2, col: 2 },
    { txt: 9, row: 2, col: 3 },
    { txt: 0, row: 5, col: '1/3' },
    { txt: '.', row: 5, col: 3 },
    { txt: '-', row: 5, col: 4 },
    { txt: '+', row: 4, col: 4 },
    { txt: '=', row: 3, col: 4 },
    { txt: 'C', row: 2, col: 4 },
    { txt: 'DISPLAY', row: 1, col: '1/5' },
];


let mem = 0;
let op = 0;
let clearFlag = false;


const handleClick = ev => {
    const disp = document.getElementById('display');
    const key = ev.target.textContent;
    switch (key) {
        case 'C':
            disp.textContent = '0';
            clearFlag = false;
            mem = op = 0;
            break;
        case '+':
                op = 1;
                mem = parseFloat(disp.textContent);
                //op = key === '+' ? 1 : -1;
                disp.textContent = '+';
                break;
        case '-':
                op = -1;
                mem = parseFloat(disp.textContent);
                //op = key === '+' ? -1 : 1;
                disp.textContent = '-';
                break;
        case '=':
                if (op === 0) {
                    mem = parseFloat(disp.textContent);
                } else {
                    mem += op * parseFloat(disp.textContent);
                }
                op = 0;
                disp.textContent = mem;
                break;
        default:
                if (key === '.' && disp.textContent.includes ('.') || clearFlag) return;
                if (key === '0' && disp.textContent === '0') return;
                if ((disp.textContent === '0' && key !== '.') || clearFlag) {
                    disp.textContent = key;
                }
                else {
                    disp.textContent += key;
                 }
                break;
    }
}


const init = () => {
    const container = document.createElement('div');
    container.id = 'container';
    fields.forEach(el => {
        const div = document.createElement('div');
        div.textContent = el.txt;
        div.style.gridColumn = el.col;
        div.style.gridRow = el.row;
        if (el.txt == 'DISPLAY') {
            div.id = 'display';
            div.textContent = 0;
        } else {
            div.addEventListener('click', handleClick);
        }
        container.appendChild(div);
    });
    document.body.appendChild(container);
}

window.addEventListener('DOMContentLoaded', init);