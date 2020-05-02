"use strict";

function tusciaFunkcija() {
//    console.log( 'tuscia funkcija buvo paleista...')
    return 'false';
}
console.log(tusciaFunkcija() );

function daugyba( pirmas, antras){
    // validuojame ieinancius duomenis
    if (typeof(pirmas) !== 'number'){
        return console.error('Error: pirma reiksme turi buti skaicius');
        
    }
    if (typeof (antras) !== 'number'){
        return console.error('Error: antra reiksme turi buti skaicius');
       
    }
    if (isNaN(pirmas) === true){
        return console.error('Error: pirma reiksme turi buti tikras skaicius');
    }
    if (''+antras === 'NaN'){
        return console.error('Error: antra reiksme turi buti tikras skaicius');
    }
    if (isFinite(pirmas) === true) {
       return console.error('Error: pirma reiksme turi buti ne begalybe');
    }
    if ( ''+antras === 'Infinity'){
        return console.error('Error: pirma reiksme turi buti ne begalybe');
    }
    // realizuojame funkcijos logika
    const result = pirmas * antras;
    
    // graziname rezultata
    return result;
}
console.log(daugyba('Laba', 'diena') );
console.log(daugyba(3.6, 'grazu') );
console.log(daugyba('grazu', 5515) );
console.log(daugyba(true, 5515) );
console.log(daugyba(false, 5515) );
console.log(daugyba([], 5515) );
console.log(daugyba([1], 5515) );
console.log(daugyba([1, 2], 5515) );
console.log(daugyba(['a'], 5515) );
console.log(daugyba(['a', 'b'], 5515) );
console.log(daugyba(['1'], 5515) );
console.log(daugyba(['1', '2'], 5515) );
console.log(daugyba(3.6, NaN) );
console.log(daugyba() );
console.log(daugyba(Infinity, -1.5) );
console.log(daugyba(48, Infinity) );
console.log(daugyba(Infinity, Infinity) );


console.log(daugyba(1, 2) );
console.log(daugyba(3, 2) );
console.log(daugyba(1, 3) );
console.log(daugyba(-3, 5) );
console.log(daugyba(3, -5) );
console.log(daugyba(-3, 0) );
console.log(daugyba(0, 51555) );
console.log(daugyba(0, 0) );
console.log(daugyba(4, 2.5) );
console.log(daugyba(3.6, -1.5) );



console.log('--------------------------');
console.log('SKAITMENU KIEKIS SKAICIUJE')
console.log('--------------------------');

function skaitmenuKiekisSkaiciuje(number){
    // validavimas
    if ( typeof(number) !== 'number' ||
         isFinite(number) === false ){
        return console.error('ERROR: reikalingas skaicius');
    }

    // logika
    
    const skaiciusTekstu = ''+number;
    let count = skaiciusTekstu.length;

    // jei tekstineje skaiciaus reprezentacijoje yra kablelis, tai count--
    // pavyzdys, kaip ieskoti su ciklu (siam kodui neverta naudoti)
    //for ( let i=0; i<skaiciusTekstu.length; i++ ){
    //    if ( skaiciusTekstu[i] === '.'){
    //        count--;
    //        break;
    //    }
    //}

    if (number % 1 !== 0 ){
        count--
    }
    //jei neigiamas skaicius, tai count--
    if (number < 0 ) {
        count--;
    }

    // rezultato grazinimas
    return count;
}
console.log( skaitmenuKiekisSkaiciuje(true) );
console.log( skaitmenuKiekisSkaiciuje(`asd`) );
console.log( skaitmenuKiekisSkaiciuje( NaN) );
console.log( skaitmenuKiekisSkaiciuje(Infinity) );

console.log( skaitmenuKiekisSkaiciuje(5), '->', 1 );
console.log( skaitmenuKiekisSkaiciuje(781), '->', 3 );
console.log( skaitmenuKiekisSkaiciuje(37060123456),'->', 11 );

console.log( skaitmenuKiekisSkaiciuje(3.1415), '->', 5 );
console.log( skaitmenuKiekisSkaiciuje(-12345), '->', 5 );
console.log( skaitmenuKiekisSkaiciuje(-12.345), '->', 5 );
console.log( skaitmenuKiekisSkaiciuje(1e+40), '->', 31 );


console.log('--------------------------');
console.log('SKAITMENU KIEKIS SKAICIUJE')
console.log('--------------------------');


function didziausiasSkaiciusSarase( list ){
    if ( Array.isArray(list) === false ) {
        return console.error('ERROR: turi buti arry tipo');
    }
    if (list.length === 0) {
        return console.error('ERROR: array negali buti tuscias')
    }
    // "biggest" = maziausias, bet ne tikras skaicius
    // einame per skaiciu sarasa
       // tikriname ar einamasis skaicius yra tikras skaicius
          // jei ne: einame prie sekancio saraso nario
     // tikriname ar einamasis skaicius yra "biggest"
               // jei taip tai "biggest" = einamas skaicius
     // po visko patikriname ar tai tikras skaicius


    let biggest = -Infinity;
    for ( let i=0; i< list.length; i++ ){
        const einamasisSkaicius = list[i];
        if ( isFinite(einamasisSkaicius) === false ){
            continue;
        }
        if ( einamasisSkaicius > biggest ){
            biggest = einamasisSkaicius;
        }
    }
    if ( biggest === -Infinity){
        return console.error('ERROR: sarase turi buti bent vienas tikras skaicius')
    }

    return biggest;
}

console.log( didziausiasSkaiciusSarase( 'pomidoras' ) );
console.log( didziausiasSkaiciusSarase( 1 ) );
console.log( didziausiasSkaiciusSarase( true ) );
console.log( didziausiasSkaiciusSarase( false ) );
console.log( didziausiasSkaiciusSarase( [] ) );
console.log( didziausiasSkaiciusSarase( [ Infinity, Infinity, Infinity ] ) );

console.log( didziausiasSkaiciusSarase( [ 1 ] ), '->', 1);
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ), '->', 3);
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ), '->', 78);
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ), '->', 69);
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ), '->', -1);
console.log( didziausiasSkaiciusSarase( [ 1, Infinity, 3 ] ), '->', 3);
console.log( didziausiasSkaiciusSarase( [ 1, 3, Infinity ] ), '->', 3);
console.log( didziausiasSkaiciusSarase( [ Infinity, 1, 3 ] ), '->', 3);
console.log( didziausiasSkaiciusSarase( [ 1, Infinity, Infinity ] ), '->', 1);
console.log( didziausiasSkaiciusSarase( [ Infinity, 1, Infinity ] ), '->', 1);
console.log( didziausiasSkaiciusSarase( [ Infinity, Infinity, 1 ] ), '->', 1);