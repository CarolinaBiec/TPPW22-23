//Impedire che con un campo vuoto venga lanciato il form
var feed = document.getElementById('feed');
var mioForm = document.getElementById('mioForm');

//REGEX 
const formatoCodFisc = /^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]*$/i;
const formatoPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/



function validate(event){
    
    var nomeCognome = document.getElementById('nomeCognome').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var codFis = document.getElementById('codFis').value;
    var termCond = document.getElementById('term&Cond');

    var avviso = "";

    if(nomeCognome.trim() == ""){
        avviso += "Caro utente, hai dimenticato di compilare il nome <br>";
        event.preventDefault(); //blocca l'invio del form  
    }

    if(email.trim() == "" ){
        avviso += "Caro utente, hai dimenticato di compilare la mail <br>";
        event.preventDefault(); //blocca l'invio del form  
    }

    if(password.trim() == ""  ){
        avviso += "Caro utente, hai dimenticato di compilare la password<br>";
        event.preventDefault(); //blocca l'invio del form  
    }else if(!password.match(formatoPassword)){
        avviso += "La tua password non è valida <br>";
        event.preventDefault();
    }else{

    }

    if(!codFis.match(formatoCodFisc)){
        avviso += "Caro utente, il tuo codice fiscale non è corretto <br>";
        event.preventDefault();
    }
    if(!termCond.checked){
        avviso += "Devi accettare termini e condizioni <br>";
        event.preventDefault();
    }

    feed.innerHTML = avviso;
}

mioForm.onsubmit = validate;