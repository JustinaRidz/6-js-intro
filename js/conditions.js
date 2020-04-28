"use strict";

const a = 7;
const b = 9;

if (a > b) {
    console.log('taip, a yra daugiau uz b');
} else {
    console.log('ne, a yra ne daugiau uz b');
}

if ( a > b) {
    console.log('taip, a yra daugiau uz b');
} else 
if ( a === b) {
    console.log('a yra lygu b');
} else {
    console.log('ne, a yra maziau uz b');
}

let diena = 55;
if (diena === 0) {
    console.log('pirmadienis');
} else
if (diena === 1) {
    console.log('antradienis');
} else
if (diena === 2) {
    console.log('treciadienis');
} else
if (diena === 3) {
    console.log('ketvirtadienis');
} else
if (diena === 4) {
    console.log('penktadienis');
} else
if (diena === 5) {
    console.log('sestadienis');
} else
if (diena === 6) {
    console.log('sekmadienis');
} else {
    console.log('tokia diena neegzistuoja');
}

const vardas = 17;

if (vardas === '17') {
    console.log('All good!');
} else {
    console.log('Not fun...');
}

console.log('----------------------------------------') 

if (1 == false) {
    console.log('All good!');
} else {
    console.log('Not fun...');
}

console.log('----------------------------------------') 

const akys = 'ruda';
switch (akys) {
    case 'ruda':
        console.log('melagis');
        break;
    case 'raudona':
        console.log('vampyras');
        break;
    case 'melyna':
        console.log('mldc');
        break;
    case 'zalia':
        console.log('dar nevirti');
        break;
    default:
        console.log('ta dam');
        break;            
}

if (akys === 'rudos') {
    console.log('melagis');
} else {
    if (akys === 'melyna') {
        console.log('mldc');
    } else {
        if (akys === 'raudonos') {
            console.log('vampyras');
        } else {
            if (akys === 'zalia') {
                console.log('dar nevirtos');
            } else {
                console.log('ar tu turi akis?');
            }
        }
    }
}