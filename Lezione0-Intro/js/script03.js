
var imponibile = 4542;

//per inizializzare una costante utilizzo const al posto di var,
//solitamente il nome della costante è tutto maiusco
const IVA = 0.22;

var prezzoIvato = (imponibile * IVA) + imponibile;

var costoIVA = Math.trunc(prezzoIvato - imponibile);

console.log("Imponibile: " + imponibile + " €");
console.log("Iva: " + (IVA * 100) + " % " );
console.log("Prezzo con iva: " + prezzoIvato + " €");
console.log("Costo iva: " + costoIVA + " €");

document.write("<p> Imponibile: " + imponibile + " € </p>");
document.write("<p>Iva: " + (IVA * 100) + " %</p>" );
document.write("<p>Prezzo con iva: " + prezzoIvato + " €</p>");
document.write("<p>Costo iva: " + costoIVA + " €</p>");


