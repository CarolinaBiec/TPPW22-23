 var demo = document.getElementById('demo');
 var feed = document.getElementById('feed');

function inviaDati(){

    demo.innerHTML = '';
    feed.innerHTML = '';
    
    var nomeCognome = document.getElementById('nomeUtente').value; 
    var eta = document.getElementById('eta').value;
    var genere = document.getElementById('genere').value;



    if(nomeCognome == ""){
        feed.innerHTML += "Hai dimenticato il campo nome<br>"
    }else{
        var cognNome = nomeCognome.split(" ").reverse().join(" ");
        demo.innerHTML += "<p>Nome Utente: " + cognNome + " </p>";
    }

    if(eta == ""){
        feed.innerHTML += "Hai dimenticato l'età <br>"
    }else{
        demo.innerHTML += "<p>Età: " + eta +"</p>";
    }

    if(genere == ""){
        feed.innerHTML += "Il genere non è stato inserito correttamente"
    }else{
        demo.innerHTML += "<p> Genere: " + genere + "</p>";
    }
   
}
