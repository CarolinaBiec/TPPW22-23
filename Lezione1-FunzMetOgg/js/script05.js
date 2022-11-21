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
    var nuovoLibro = prompt("Che libro vuoi inserire ?");
    if(libri.indexOf(nuovoLibro) == -1){
        libri.push(nuovoLibro);
        stampaElenco();
    }else{
        console.log("Hai già questo libro sullo scaffale"); 
        // questo avviso andrà scritto sotto l'elenco. Crea un tag <p id="feed"></p>. Questo avviso sparisce con l'aggiunta di un nuovo libro
    }
}

stampaElenco();




function calcola(){
    var somma = 2+6;
    somma = 5+4;

    

    return "Il risultato uscente è " + (somma/2)  ;
}

//per intercettare il risultato della funziona calcola()
var numero = calcola();
console.log(numero);

console.log(calcola());
elencoLibri.innerHTML += calcola();


