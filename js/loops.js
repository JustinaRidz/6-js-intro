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