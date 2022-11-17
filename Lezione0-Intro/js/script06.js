//Le variabili booleane possono trattene solo ed esclusivamente 2 valori: true, false

var acceso = true;
console.log("Il condizionatore è acceso ? " + acceso);

//spegniamo il condizionatore
acceso = false;
console.log("Il condizionatore è acceso ? " + acceso);

//confrontiamo delle variabili per produrre un booleano
//OPERATORI DI CONFRONTO 
// ==     ===

var num1 = 2;
var num2 = 4;

//== è uguale a 
var verifica = (num1 == num2); //false

console.log(num1 + " e " + num2 + " sono uguali tra loro ? " + verifica);

var verifica2 = (3 == 3); //true;
console.log(verifica2);

var num3 = 26;
var num4 = "26";
var verifica3 = (num3 == num4)

console.log(num3 + " e " + num4 + " sono uguali tra loro ?" + verifica3);

// === controlla il contenuto e anche il tipo
var verifica3Forte = (num3 === num4);
console.log(num3 + " e " + num4 + " sono uguali tra loro ?" + verifica3Forte);


// !=  isNotEqual --- ! rappresenta la negazione

var num5 = 7;
var num6 = 9;

var verifica4 = (num5 != num6); //num5 è diverso da num6 ? True

console.log(num5 + " " +num6+" sono diversi ?" + verifica4);


//!== 
num7 = 26
num8 = "26";

var verificaSoloNumero = (num7 != num8);
console.log("Verificando solo i due numeri " + num7 + " e "+ num8+ " sono diversi tra loro ? " + verificaSoloNumero);

var verificaAncheTipo = (num7 !== num8);

console.log("Verificando anche i tipi, i due numeri " + num7 + " e "+ num8+ " sono diversi tra loro ? " + verificaAncheTipo);

//controllo due parole 
var nomeUser = "Francescomariagennaro";
var nomeUser2 = "Mario";

var controllo = (nomeUser == nomeUser2); // false
console.log("I due utenti hanno lo stesso nome ? " + controllo);

var controllo2 = (nomeUser.length == nomeUser2.length);
console.log("I due utenti hanno nel nome lo stesso numero di lettere ? " + controllo2);

var nomeUser3 = "Massimiliano";
var controllo3 = (nomeUser.length >= nomeUser3.length)

console.log(nomeUser + " ha più lettere di " + nomeUser3 + " ? " + controllo3);

console.log("Il nome "+ nomeUser3 + " è composto da " + nomeUser3.length + " lettere");

//Controllando una condizione 
if(nomeUser.length > nomeUser3.length){
    //fai qualcosa
    console.log("Il nome più lungo è : " + nomeUser);
}else{
    console.log("Il nome più lungo è : " + nomeUser3);
}
