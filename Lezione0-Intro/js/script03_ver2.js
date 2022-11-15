
//chiedo all'utente il suo nome
//prompt "tira giù" un pop-up nel quale è possibile scrivere.
//Quello che l'utnte digita verrà salvato nella variabile nomeUtente

var nomeUtente = prompt("come ti chiami ?");

//tutto ciò che elabora il prompt è una stringa
//wrappando il prompt con l'interfaccia Number sto "castando" il dato, 
//sto forzando il dato ad essere del tipo che dico io (CAST)

if( nomeUtente.trim() == "Dario" || nomeUtente.trim() == "Anna"){
    var imponibile = Number( prompt("Quanto hai guadagnato questo mese ? ") );
    
    const IVA = 0.22;
    
    var prezzoIvato = ((imponibile * IVA) + imponibile);
    
    var costoIVA = (prezzoIvato - imponibile);
    
    console.log("Imponibile: " + imponibile + " €");
    console.log("Iva: " + (IVA * 100) + " % " );
    console.log("Prezzo con iva: " + prezzoIvato + " €");
    console.log("Costo iva: " + costoIVA + " €");
    
    var etatraUnAnno = 33+1;
    console.log("tra un annno avrò " + 33 + 1 + " anni");
    
    
    document.write("<h2> Benvenuto utente: " + nomeUtente + "</h2>");
    document.write("<p> Imponibile: " + imponibile + " € </p>");
    document.write("<p>Iva: " + (IVA * 100) + " %</p>" );
    document.write("<p>Prezzo con iva: " + prezzoIvato + " €</p>");
    document.write("<p>Costo iva: " + costoIVA + " €</p>");
}else{
    document.write("<h2>Mi spiace, non sei nei nostri database </h2>");
}
    

