const double = x => 2+x;

const init = (ev, a) => {
    console.log('Container:', document.getElementById('container'));
    console.log(ev);
    console.log(double(a));
}

window.addEventListener('DOMContentLoaded', x => {
    init(x, 5);
});
