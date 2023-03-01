var url = "http://localhost:3000/repliche"
var contCard = document.querySelector("#contCard");

fetch(url)
    .then(data => {
        return data.json()
    })
    .then(response => {
        console.log(response);
        showCards(response);
        
        let pulsanti = document.querySelectorAll(".btn");
        
        pulsanti.forEach(pulsante =>{
            pulsante.addEventListener("click", function(){
                aggiungiAlCarrello(this.getAttribute("data-prodotto"))
                // console.log(this.getAttribute("data-prodotto"));
            })
        })
    })

function showCards(lista) {
    lista.forEach(card => {
        let cardSingola = `  
        <div class="card col-md-3 mt-2 mb-2">
        <img class="card-img-top" src="${card.copertina}" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">${card.titolo}</h4>
            <p class="card-text">Autore: ${card.autore}</p>
            <p class="card-text">Durata: ${card.durata} min</p>
            <button id="btn${card.id}" data-prodotto="${card.id}" 
            class="btn btn-primary">Acquista Biglietto </button>
        </div>
    </div>`;
    
    contCard.innerHTML += cardSingola;
    });
}

function aggiungiAlCarrello(idProdotto){

    let urlCarrello = "http://localhost:3000/carrello"

    let urlSingolo = "http://localhost:3000/repliche/"+idProdotto
    
    //mi faccio restituire 1 prodotto
    fetch(urlSingolo)
        .then(data =>{return data.json()})
        .then(response =>{
            console.log(response);
            
            let myObj = {
                id: response.id,
                titolo: response.titolo,
                prezzo: response.prezzo
            }

            //Post
            fetch(urlCarrello, {
                method: "post",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(myObj)
            })
            .then(mydata =>{return mydata.json()})
            .then(miaresponse => {
                console.log(miaresponse);
            })
        })
    
}

