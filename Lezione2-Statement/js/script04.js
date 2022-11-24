//il for serve a creare dei cicli, delle ripetizioni

var emails = [
    'dario@mail.it',
    'chicco84@mail.it',
    'paola@mail.it',
    'gennarino@tin.it',
    'luisa@mail.com'
];

//devo inviare la mail dei calzini in offerta con babbo natale con gli occhiali da sole

//per leggere, scalare, attraversare l'array : prendere le email dei singoli utenti uso un ciclo for
var demo = document.getElementById('demo');

for(var indice = 0; indice < emails.length; indice++){
    console.log( emails[indice] + " inviata");
    demo.innerHTML += emails[indice] + " inviata <br>"; //utilizzo += per aggiungere pezzi
}

//Versione Umpla Lumpa

// console.log( emails[0] + " inviata ");
// console.log( emails[1] + " inviata ");
// console.log( emails[2] + " inviata ");
// console.log( emails[3] + " inviata ");
// console.log( emails[4] + " inviata ");
// console.log( emails[5] + " inviata ");
// console.log( emails[6] + " inviata ");
// console.log( emails[7] + " inviata ");
