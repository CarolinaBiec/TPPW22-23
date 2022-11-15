//dichiaro una variabile
var nome; 

//assegno il valore alla variabile
nome = "Dario";
console.log("Nome utente: " + nome);

var cognome = "Mennillo";
console.log("Cognome utente: " + cognome);

var eta = 33;

console.log("Età utente: " + eta + " anni");

var presenza = true;
//riassegno il valore della mia variabile
presenza = false;
presenza = true; 



var pausa = "Possiamo andare in pausa";

//provo a stampare queste variabili nella pagina html
// document.write("<p> Nome utente: " + nome + "</p>");
// //<p>Nome utente: Dario </p>
// document.write("<p> Cognome Utente: " + cognome + "</p>");
// document.write("<p> Età Utente: " + eta + "</p>");
// document.write("<p><strong> Presenza: " + presenza + "</strong></p>");
// document.write("<p><strong> " + pausa.toUpperCase() + "</strong></p>");

var stringaDaStampare= "<p> Nome utente: " + nome + "</p>"
    +"<p>Cognome Utente: " + cognome + "</p>"
    + "<p>Età Utente: "+ eta +"</p>" 
    + "<p><strong> Presenza: " + presenza + "</strong></p>"
    + "<p><strong> " + pausa.toUpperCase() + "</strong></p>";

document.write(stringaDaStampare);