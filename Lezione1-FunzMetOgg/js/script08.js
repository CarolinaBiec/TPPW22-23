//L'interfaccia Math permette di lavorare con la matematica
var mioNumero = 81;
var radice = Math.sqrt(mioNumero);

console.log(radice);

var potenza = Math.pow(8,2);
console.log(potenza);

var numNeg = -254;
console.log( Math.abs(numNeg) );

//Math round, arrotonda all'intero più vicino
var numeretto = 24.000000001; 
console.log(Math.round(numeretto));

//Math.floor, arrotonda all'intero inferiore
console.log(Math.floor(numeretto));

//Math.ceil, arrotonda all'intero superiore
console.log(Math.ceil(numeretto));

//Numero random ---da 0.0 a 1.0
var numeroRandom = Math.ceil( Math.random() * 100 ); //da 0.0 a 99.999999999
console.log(numeroRandom);

