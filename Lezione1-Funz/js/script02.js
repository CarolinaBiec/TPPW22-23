// var username = prompt("Come ti chiami ?");

var demo = document.getElementById('demo');

function saluta(nomeUtente){

    demo.innerHTML = "<h2>Ciao " + nomeUtente.toUpperCase() + "</h2>";
}

saluta("Dario");

var feed = document.getElementById('feed'); //prende un HTMLElement

// console.log(feed);
// console.log(typeof feed);
// console.log(document);

function calcola( num1, num2){
    var prodotto = num1 * num2; //variabile LOCALE
    var sottrazione = num1 - num2;
    var somma = num1 + num2;
    var divisione = num1 / num2;

    //innerHTML modifica la prop dell'elemento, nello specifico ciò che è al suo interno
    feed.innerHTML = "Il prodotto tra " + num1 + " e " + num2 + " vale: " + prodotto + "<br>";
    feed.innerHTML += "La differenza tra " + num1 + " e " + num2 + " vale: " + sottrazione + "<br>"; 
    feed.innerHTML += "La somma tra " + num1 + " e " + num2 + " vale: " + somma + "<br>";
    feed.innerHTML += "Il quoziente tra "+ num1 + " e " + num2 + " vale: " + divisione + "<br>";

}

calcola(5, 2);


// += operatore self-increment

var mioNum = 3;

// mioNum = mioNum + 2;
mioNum += 2;
mioNum += 5;

console.log(mioNum);