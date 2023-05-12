var carrello = document.querySelector("#carrello");
var totaleCarrello = document.querySelector("#totaleCarrello");

var idRepliche = []

fetch("http://localhost:3000/carrello")
.then(data =>{return data.json()})
.then(response =>{

    let totale = 0;

    response.forEach(prodotto => {
        totale += prodotto.prezzo;
        idRepliche.push(prodotto.id);
      
        let li = document.createElement("li");
        li.textContent = `${prodotto.titolo} - Prezzo: ${prodotto.prezzo}`;

        let btn = document.createElement("button");
        btn.textContent= "Elimina";
        btn.setAttribute("class", "btn btn-primary")
        btn.addEventListener("click", function(){
            eliminaSingolo(prodotto.id);
        });

        li.appendChild(btn);

        carrello.appendChild(li);
    });

    if(totale != 0){
        totaleCarrello.innerHTML = "Totale: €" + totale;
    }else{
        totaleCarrello.innerHTML = "Non hai nulla da acquistare";
    }
   
});


function eliminaSingolo(id){
    fetch("http://localhost:3000/carrello/"+id,{
        method: "DELETE"
    })
    .then(res => {return res.json()})
    .then(res => console.log(res))
}

//pulsante PAGA
var btnPaga = document.querySelector("#btnPaga");

btnPaga.addEventListener("click", paga, true);

function paga(){
   
   idRepliche.forEach(idReplica => {
       fetch("http://localhost:3000/carrello/"+idReplica,{
           method: "DELETE"
        }).then(res => {return res.json()})
        .then(res => console.log(res))
    });

}

