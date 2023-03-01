var carrello = document.querySelector("#carrello");

fetch("http://localhost:3000/carrello")
.then(data =>{return data.json()})
.then(response =>{


    response.forEach(prodotto => {
        carrello.innerHTML += "<li>" + prodotto.titolo + " - Prezzo: " + prodotto.prezzo + "</li>"
    });

})