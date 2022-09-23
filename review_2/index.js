'use strict';

let btns = [...document.getElementsByTagName('button')];
let [closebtn] = btns.filter((btn)=>btn['id'] ==='close-menu-button');
let [openBtn] = btns.filter((btn)=>btn['id'] ==='open-menu-button');

function getSideMenu(){
    let div = document.querySelector('.side-menu');
    return div;
}

const body = document.querySelector('body');

function createOverlay(){
    const overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.zIndex = '10';
    overlay.style.left = '0';
    overlay.style.right = '0';
    overlay.style.top = '0';
    overlay.style.bottom = '0';
    overlay.style.backgroundColor = 'rgb(0,0,0,0.5)';
    return overlay;   
}
const overlay = createOverlay();

function additionalCloseFunction(event){
    if(event.target !== getSideMenu() && event.target === overlay){
        const div = getSideMenu();
        div.classList.remove('open');
        overlay.remove();
    } else {
        return;
    }
}

openBtn.onclick = (e) => {
    e.stopImmediatePropagation();
    const div = getSideMenu();
    div.classList.add('open');
    body.onclick = additionalCloseFunction;
    body.append(overlay);
}
closebtn.addEventListener('click', () => {
    const div = getSideMenu();
    div.classList.remove('open');
    body.onclick = null;
    overlay.remove();
})