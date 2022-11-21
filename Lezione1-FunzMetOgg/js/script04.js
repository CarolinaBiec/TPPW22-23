function stampaBenvenuto(utente){
    var demo = document.getElementById("demo");

    demo.innerHTML = "Benvenuto " + utente;
}


function prendiNome(){    
    var nomeUtente = prompt("come ti chiami ? ");

    return nomeUtente;
}


var nomeUtente = prendiNome();
stampaBenvenuto(nomeUtente)

// //vera callback
// stampaBenvenuto(prendiNome());