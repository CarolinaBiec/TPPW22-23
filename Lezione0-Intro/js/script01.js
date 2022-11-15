//keyword per idetificare una variabili var

//TIPO NUMBER
//var --> keyword
//numero --> identificatore
// 18 --> valore della varibile

//sto dichiarando e valorizzando una variabile
var numero = 18; //la mia variabile numero è di tipo Number

//stampo la var numero in console
console.log("Sono le ore: " + numero);

//cambio il valore della variabile: riassegno il valore

//ATT: javascript è case-sensitive, cioè fa differenza tra maiusc e minusc
numero = 19;
numero = 20;
numero = 22;
numero = 21;

console.log("sono le ore: " + numero );

//TIPO STRING, identificato dalle virgolette
var nomeDocente = "Dario Mennillo";

//cambio il valore della var
nomeDocente = "Davide Ghione che farà HTML";

console.log("In classe c'è " + nomeDocente); //+ come concatenatore di stringhe


var docenteJS = "Dario Mennillo";
var docenteHTML = "Davide Ghione";

//concateno le due stringhe
console.log("In questa settimana di corso conosceremo: " + docenteJS + " e " + docenteHTML);
