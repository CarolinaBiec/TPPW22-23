var num1 = Number( prompt("Inserisci il primo numero"));
var num2 = Number( prompt("Inserisci il secondo numero"));

var somma = num1 + num2;
var moltiplicazione = num1 * num2;
var sottrazione = num1 - num2;
var divisione = num1 / num2;

var stringaRisultati =  "<p> La somma vale: " + somma +"</p>"+
                        "<p>La differenza vale: " + sottrazione + "</p>"+  
                        "<p>Il prodotto vale: " + moltiplicazione + "</p>"+
                        "<p>La divisione vale: " + divisione + "</p>";

document.write(stringaRisultati);

