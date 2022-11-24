var numeroIniziale = 12.4567;

console.log(numeroIniziale);

//arrotondamento .toFixed( numero di cifre decimali da mostrare )
var numeroArrotondato = numeroIniziale.toFixed(2);
console.log(numeroArrotondato);

//num cifre significative
console.log(numeroIniziale.toPrecision(3));

//CAST - forzare una variabile ad un determinato tipo

var num = "34";
var numeroVero = Number(num); //forzo questa variabile ad essere un numero
console.log(numeroVero);

var numVirgola = 42.99;
var numIntero = parseInt(numVirgola);
console.log(numIntero);

var numInt = 55.10;
var numFloat = parseFloat(numInt);
console.log(numFloat);


///isNan

var parola = "ciao";
console.log( isNaN(parola) ); //is not a number

var ore = 24;
console.log( isNaN(ore) );

var eta = "33";
console.log( isNaN(eta));


