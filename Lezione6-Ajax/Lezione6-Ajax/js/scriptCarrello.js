const listaCarrello = document.querySelector('#listaCarrello');
const titoloCarr = document.querySelector('#titoloCarr');
const btnSvuota = document.querySelector('#btnSvuota');

function stampaCarrello(){
    listaCarrello.innerHTML = "";
    let prodInCarrello = prendiTutti();
    if(prodInCarrello.length != 0){
        [...prodInCarrello].forEach(prodotto =>{
            listaCarrello.innerHTML += `<li> ${prodotto.title} - ${prodotto.price} € <button>Elimina</button></li>`
        });
    }else{
        titoloCarr.innerHTML = "Non hai nessun prodotto nel carrello"
    }  
}

function prendiTutti() {
    var values = [], 
        keys = Object.keys(localStorage),
        i = keys.length;
    while ( i-- ) {
        if(keys[i].startsWith("prod",0))
        values.push( JSON.parse(localStorage.getItem(keys[i])) );
    }
    return values;
}

btnSvuota.addEventListener('click', function() {
    this.setAttribute("class", "hide");
    localStorage.clear();
    stampaCarrello();
})


stampaCarrello();