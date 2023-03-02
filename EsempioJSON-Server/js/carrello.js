var carrello = document.querySelector("#carrello");
var totaleCarrello = document.querySelector("#totaleCarrello");

fetch("http://localhost:3000/carrello")
.then(data =>{return data.json()})
.then(response =>{

    let totale = 0;

    response.forEach(prodotto => {
        totale += prodotto.prezzo;
        carrello.innerHTML += "<li>" + prodotto.titolo + " - Prezzo: " + prodotto.prezzo + "</li>"
    });

    totaleCarrello.innerHTML = "Totale: €" + totale;

})