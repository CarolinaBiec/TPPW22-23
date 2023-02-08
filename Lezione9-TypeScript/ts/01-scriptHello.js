// Hello World in Typescript
var saluto = "Hello, World !";
console.log(saluto);
var numero = 10;
numero = 18;
var miaEta = 33;
var acceso = true;
//tipi dinamici
var qualcosa;
qualcosa = "dieci";
qualcosa = 12;
qualcosa = true;
qualcosa = ["ciao", 34, "come", "stai?"];
var mioAnimale = "Scimmia";
var user = "Dario Mennillo";
var docenteJS = {
    nome: "Dario",
    cognome: "Mennillo",
    presenza: true
};
var contenitoreNumeri = [
    12,
    10,
    55,
];
//Anche nelle funzioni va specificato il tipo di ritorno
//void è per le funzioni senza ritorno
function test() {
    var n = 10;
    var p = 23;
    var somma = n + p;
    console.log("La somma è " + somma);
}
test();
function saluta() {
    return "Ciao, Dario!";
}
function salutaUser(nome) {
    var nomeUser = nome;
    return "Ciao ".concat(nomeUser);
}
var benvenuto = document.getElementById("benvenuto");
benvenuto.innerHTML = salutaUser("Dario");
//utilizzo il ? quando il parametro è opzionale, da inserire alla fine della firma
function salutamiAS(nome, cognome) {
    if (!cognome) {
        return "Ciao " + nome;
    }
    else {
        return "Ciao " + nome + " " + cognome;
    }
}
console.log(salutamiAS("Anna"));
console.log(salutamiAS("Paolo", "Rossi"));
function somma(a, b) {
    return a + b;
}
console.log(somma("ciao", "Dario"));
console.log(somma(8, 11));
///ARROW
var raddopia = function (x) { return x * 2; };
console.log(raddopia(2));
var addiziona = function (x, y) { return x + y; };
console.log(addiziona(4, 6));
var addizionaERadd = function (x, y) {
    var somma = x + y;
    return somma * 2;
};
console.log(addizionaERadd(3, 4));
//saluta un utente a tempo
function salutaDopo(nome) {
    this.nome = nome;
    this.salutaConRitardo = function () {
        var _this = this;
        setTimeout(function () {
            console.log("Ciao " + _this.nome);
        }, 5000);
    };
}
var provaSaluta = new salutaDopo("Pasquale");
provaSaluta.salutaConRitardo();
