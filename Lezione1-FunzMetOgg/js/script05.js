var libri = [
    "Il vecchio e il mare",
    "Il piccolo principe",
    "IT",
    "La gabbienella e il gatto",
    "Solaris",
    "I demoni"
];

var elencoLibri = document.getElementById("elencoLibri"); //ul 

function stampaElenco(){
    elencoLibri.innerHTML = "";
    //per leggere l'array di libri uso un ciclo FOR
    for(var indice in libri){
        elencoLibri.innerHTML += "<li>" + libri[indice] + "</li>";
    }
}

function inserisciLibro(){
    
    //pulire il campo <p id="feed"></p>
    document.getElementById('feed').innerHTML = "";
    
    //con .value prendo il contenuto del campo INPUT
    var nuovoLibro = document.getElementById("inputNuovoLibro").value; 
    
    if(libri.indexOf(nuovoLibro) == -1){
        libri.push(nuovoLibro);
        stampaElenco();
        //pulisco il campo input
        document.getElementById('inputNuovoLibro').value = "";

    }else{
 
        var feed = document.getElementById('feed');
        document.getElementById('inputNuovoLibro').value = "";
        feed.innerHTML = "Hai già questo libro sullo scaffale";
    }
}

stampaElenco();





// function calcola(){
//     var somma = 2+6;
//     somma = 5+4;

//     return "Il risultato uscente è " + (somma/2)  ;
// }

// //per intercettare il risultato della funziona calcola()
// var numero = calcola();
// console.log(numero);

// console.log(calcola());
// elencoLibri.innerHTML += calcola();


