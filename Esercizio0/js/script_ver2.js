 var demo = document.getElementById('demo');
 var feed = document.getElementById('feed');

function inviaDati(){

    demo.innerHTML = '';
    feed.innerHTML = '';
    
    var nomeCognome = document.getElementById('nomeUtente').value; 
    var eta = document.getElementById('eta').value;
    var genere = document.getElementById('genere').value;

    while(controllaNome(nomeCognome) && controllaEta(eta) && controllaGenere(genere)){
        demo.innerHTML="ciao"
    }do{
        controllaEta(eta);
        controllaGenere(genere);
        controllaNome(nomeCognome);
    }
    
       
}

function controllaNome(nomeUtente){
    if(nomeUtente == ""){
        feed.innerHTML += "Non hai inserito il nome";
        return false;
    }else{
        return true;
    }
}

function controllaEta(eta){
    if(eta == ""){
        feed.innerHTML += "<p>Non hai inserito l'età </p>"
        return false;
    }else{
        return true;
    }
}

function controllaGenere(genere){
    if(genere == ""){
        feed.innerHTML += "<p>Non hai inserito il genere</p>";
        return false;
    }else if(genere.length > 1){
        feed.innerHTML += "<p>Stai inserendo un genere non corretto, inserisci uno tra f,m,a</p>";
        return false;
    }else{
        return true;
    }

}