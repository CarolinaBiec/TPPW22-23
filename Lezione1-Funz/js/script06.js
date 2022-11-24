var colori = ["bianco", "blu", "rosso", "arancione", "verde"];

//dimensione array
var numColori = colori.length;


console.log(numColori);
console.log(colori);
//aggiungo un nuovo elemento
colori.push("giallo");
console.log(colori);

//ordino alfabeticamente
colori.sort();
console.log(colori);

//invertire l'ordine
colori.reverse();
console.log(colori);

console.log(colori[0], colori[1], colori[colori.length-1]);

var indiceUltimoElemento = colori.length - 1;
console.log("L'ultimo elemento si trova all'indice : " + indiceUltimoElemento); 

//rimuovo l'ultimo elemento
colori.pop();
console.log(colori);

//metodi per ricerca
//indexOf restituisce -1 se l'elemento non c'è 
var ricerca1 = colori.indexOf('magenta');
console.log("il colore che sto cercando si trova all'indice: " + ricerca1);

var arrayDiChar = ['c','i','a','o'];

//metodo per unire gli elementi di un array
var parola = arrayDiChar.join(""); // "" sono il sepratore

console.log(arrayDiChar);
console.log(parola);

var miaParola = "Filippo";
console.log(miaParola);
//trasformo la parola in un array di caratteri
var arrayDiChar2 = miaParola.split("");//"" sono il separatore
console.log(arrayDiChar2);

//invertire una parola
var mioNome = "Dario";
var emoNoim = mioNome.split("").reverse().join("")

console.log(mioNome.split("").reverse().join(""));


///
var frase = "Nel mezzo del cammin di nostra vita";
//scomporre la frase in un array di parole
var arrayParole = frase.split(" ");
console.log(arrayParole);

//voglio ricomporre la frase
var fraseRicomposta = arrayParole.join(" ");
console.log(fraseRicomposta);


//data la seguente parola estrai l'estensione del file

var mioFile = "appunti.pdf";

var fileSplittato = mioFile.split("."); //questo produce un array e l'enstensione è all'ultimo posto dell'array stesso
console.log(fileSplittato);

var nomeFile = fileSplittato[0];
var estensione = fileSplittato[1];
console.log("Il file si chiama " + nomeFile + ". L'estensione è: " + estensione);

var pausa = "andiamo in pausa"

var asuap = pausa.toUpperCase().split("").reverse().join("");
console.log(asuap);