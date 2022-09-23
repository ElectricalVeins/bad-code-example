'use strict';

let globalCounter = 0;

let info = {1: 'Text To Switch 1', 0: 'Text To Switch 2'};

let display   = document.getElementById('display');
let control = document.getElementById('btn');

control.onclick = function () {
    if (globalCounter % 2 == 0 ){
        display.innerHTML = info[0];
    } else if( globalCounter % 2 == 1) {
        display.innerHTML  = info[1];
    }
    globalCounter = globalCounter + 1;
}
