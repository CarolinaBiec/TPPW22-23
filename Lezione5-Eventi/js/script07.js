////JSON - JavaScript Object Notation
///JSON, sono oggetti formato stringa
// let persona = {
//     nome: "Dario",
//     cognome: "Mennillo",
//     eta: 33,
//     presenza: true
// }
// console.log(persona);
// console.log(persona.nome);
// console.log(typeof persona);


//personaJSON è una stringa
let personaJSON = '{"nome": "Dario", "cognome": "Mennillo", "eta": 33, "presenza": "true"}';
console.log(personaJSON);
console.log(typeof personaJSON);
console.log(personaJSON.nome);

//trasformo personaJSON in un oggetto JS
let personaOBJ = JSON.parse(personaJSON);
console.log(personaOBJ);
console.log(personaOBJ.nome);
console.log(personaOBJ.cognome);

//aggiungere un metodo alla personaOBJ
function PersonaOGGETTO(nome, cognome, eta, presenza){
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.presenza = presenza;

    //il metodo lo inserisco all'interno del costruttore stesso
    this.mangia = function(){
        return "Sto mangiando una mela";
    }
}

personaOBJ = new PersonaOGGETTO(personaOBJ.nome, personaOBJ.cognome, personaOBJ.eta, personaOBJ.presenza);

console.log(personaOBJ.mangia());

//parto da un obj e lo trasformo in JSON
let docente = {
    nome: "Davide",
    cognome: "Ghione",
    materie: ["Html", "Css", "Bootstrap"] ,
    eta: 23,
    presenza: true,
    insegna: function(){
        console.log("Oggi spieghiamo Bootstrap");
    }
}

let docenteJSON = JSON.stringify(docente);
console.log(docenteJSON);

//salvo il dato docente in local o session storage. Negli storage posso inserire solo dati formatoJSON

localStorage.setItem("docentePreferito", docenteJSON);

//prendo uno studente scritto a mano nello storage
let studentePreferito = localStorage.getItem("studentePreferito");
console.log(studentePreferito);

let studentePreferitoOBJ = JSON.parse(studentePreferito);
console.log(studentePreferitoOBJ);