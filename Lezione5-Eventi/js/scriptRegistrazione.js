
let demo = document.querySelector('#demo');
let mioForm = document.querySelector("#mioForm");

// let inputs = document.querySelector('#mioForm').elements;

// [...inputs].forEach((singoloInput)=>{
//     singoloInput.addEventListener("keyup", function(){
//         if(event.key == "Enter"){
//             validate();
//         }
//     });
// })

function validate(){
    demo.innerHTML = "";

    let username = checkUsername(); 
    let password = checkPassword();
    let email = checkEmail();

    if(username != "" && password != "" && email != ""){
        registraUtente(username, email, password);
    }
}

function checkUsername(){
    console.log("Controllo Username");
    let username = document.querySelector('#username');
    if(username.value.length < 5){
        event.preventDefault();
        username.focus();
        demo.innerHTML += "Lo username non va bene <br>";
        return "";
    }else{
        return username.value;
    }
}

function checkPassword(){
    console.log("Controllo Password");
    let password = document.querySelector('#password');
    if(password.value.length < 5){
        event.preventDefault();
        password.focus();
        demo.innerHTML += "La password non va bene <br>";
        return "";
    }else{
        return password.value;
    }
}

function checkEmail(){
    console.log("Controllo Email");
    let email = document.querySelector('#email');
    if(email.value.length < 5){
        event.preventDefault();
        email.focus();
        demo.innerHTML += "L'email non va bene <br>";
        return "";
    }else{
        return email.value;
    }
}

function registraUtente(username, email, password){
    // console.log(username, email, password);
    let User = function(username, email, password){
        this.username = username;
        this.email  = email;
        this.password = password;
    }

    let utenteDaRegistrare = new User (username, email, password);
    
    //trasformo lo user in JSON per poterlo salvare in localStorage
    localStorage.setItem("user", JSON.stringify(utenteDaRegistrare));
}


function controllaUSER(){
    let utente = localStorage.getItem("user");
    
    if(utente != null){
        let username = JSON.parse(localStorage.getItem("user")).username;
       demo.innerHTML = "Caro " + username + " sei già loggato";
    }
}

controllaUSER();

mioForm.addEventListener('submit', validate);
