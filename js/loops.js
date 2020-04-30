"user strict";


for (let i=0; i<5; i++) {
    console.log('Skaicius:', i);
}

console.log('---------------------------');
console.log('SUMAVIMAS INTERVALE');
console.log('---------------------------');
// 0 - 0
// 0 - 4
// 0 - 100
// 574 - 815
// -50 - 50
// -70 - 30

const nuo = 0;
const iki = 4;
let suma = 0;

for ( let i=nuo; i<=iki; i++ ) {
    suma = suma + i;
    console.log('Suma:', suma);
}

console.log('---------------------------');
console.log('ATBULAS TEKSTAS');
console.log('---------------------------');

const tekstas = 'Justina';
const tekstoIlgis = tekstas.length - 1;
let atbulas = ''; 

for ( let i=tekstoIlgis; i>=0; i--) {
    atbulas = atbulas + tekstas[i];
}
 // for (let i=0; i<tekstoIlgis; i++) {
 //    atbulas = atbulas + tekstas[takstoIlgis - i - 1];
 // }


console.log(`Tekstas "${tekstas}" atbulai yra "${atbulas}".`);

console.log('---------------------------');
console.log('DALYBA BE LIEKANOS');
console.log('---------------------------');

const from = -11;
const till = 12;
const divider = 3;
let count = 0;

for (let i=from; i<=till; i++) {
    if (i % divider === 0) {
        count++;
    }
}
// count = (till- from) / divider; NETEISIGA

const answer = `Skaičių intervale tarp ${from} ir ${till}, besidalinančių be liekanos iš ${divider} yra ${count} vienetai.`;

console.log(answer);
 
