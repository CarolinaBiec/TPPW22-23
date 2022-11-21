var zaino = ['pc', 'libro', 'manuale JS', 'Smartphone', 'Penne', 'Quaderno', 'Occhiali'];

var paroleVietate = ['asino', 'cavallo', 'mucca'];


if(zaino.length >= 8){
    alert("Mi dispiace non puoi inserire altre cose");
    
    //richiamo la funzione
    stampa();

}else{
    
    var nuovoEl = prompt('cosa vuoi inserire ?');
    
    if(nuovoEl == paroleVietate[0] || nuovoEl == paroleVietate[1] || nuovoEl==paroleVietate[2]){

        alert('Caro utente, ti serve un trattore non lo zaino!');
        stampa();
        
    }else{
        zaino.push(nuovoEl);
        stampa(); 
    }

}

//dichiaro una funzione: racchiudo sotto lo stesso nome più operazioni
function stampa(){
    document.write("<h2>Num cose nello zaino: "  + zaino.length + "</h2>");
    
    for(var indice in zaino){
        document.write("<li>"+zaino[indice]+"</li>");
    }

}



