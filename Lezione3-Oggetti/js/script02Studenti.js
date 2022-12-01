//creo il costruttore dello studente, il prototipo, lo schema, il blueprint
//creo la funzione costruttore
function Studente(nome, cognome, eta, matricola){
    //inizializzando e valorizzando le proprietà dello studente
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.matricola = matricola;
    this.voto = 0;
    
    this.presentati = function(){
        var stud = "Nome: " + this.nome + " " + this.cognome + " età " + this.eta + " - Matricola: " + this.matricola;

        if(this.voto != 0){
            stud += " - Voto : " + this.voto;
        }

        return stud;
    }

    this.setVoto = function(voto){
        this.voto = voto;
        return voto;
    }
}


//la classe sarà un array di oggetti di tipo studente
var classe = [
    new Studente("Filippo", "Aimo", 31, 1),
    new Studente("Giovanni", "Alessi", 22, 2),
    new Studente("Karolina", "Biec", 22, 3),
    new Studente("Dylan", "Bonferraro", 24, 4),
    new Studente("Manuel", "Cadeddu", 22, 5),
    new Studente("Eleonora", "Carone", 22, 6),
    new Studente("Mihaela", "Cipriano", 28, 7),
    new Studente("Luigi", "Cortese", 23, 8),
    new Studente("Alice", "Falvo", 19, 9),
    new Studente("Raja", "Karroui", 23, 10),
    new Studente("Jordan", "Ntamack", 25, 11),
    new Studente("Michele", "Putrino", 33, 12),
    new Studente("Jacopo", "Quattrocolo", 27, 13),
    new Studente("Simone", "Sandonini", 24, 14),
    new Studente("Joyce", "Silva", 21, 15),
    new Studente("Homa", "Ipakchi", 32, 16)    
];


var elencoStudenti = document.getElementById("elencoStudenti");

//voglio settare il voto ad uno studente
// classe[4].setVoto(100);
// classe[10].setVoto(80);

var btn = document.getElementById('btn');
var feed = document.getElementById("feed");

function registraVoto(){
    feed.innerHTML = "";

    var matricola =Number( document.getElementById('matricola').value );
    var voto = Number( document.getElementById('voto').value );

    var rispostaSistema = "";
  

    if(matricola > classe.length || matricola <= 0){
      rispostaSistema += "Non hai nessuno studente con la seguente matricola <br>"
    }
    
    if(voto > 100 || voto < 0){
       rispostaSistema += "Non puoi inserire questo voto <br>"
    }
    
    if(rispostaSistema != ""){
        feed.innerHTML = rispostaSistema;
    }
    else{
        classe[matricola - 1].setVoto(voto);
        stampa();
    }


}

btn.onclick = registraVoto;

// classe.forEach( studente => {
    //     elencoStudenti.innerHTML += studente.presentati() + "<br>"; 
    // });

function stampa() {
    elencoStudenti.innerHTML = "";
    for(var i = 0; i < classe.length; i++){
        elencoStudenti.innerHTML += classe[i].presentati() + "<br>";
    }
}
//questa stampa() qui sotto mi serve al caricamento iniziale, altrimenti non vedo nulla quando la carico per la prima volta 
stampa();

var formRegistraStudente = document.getElementById('formRegistraStudente');

var btnInsert = document.getElementById("btnInsert");

document.getElementById("matricolaNew").value = classe.length + 1; //setto in automatico la matricola

function registraStudente(){
    //controllare che i campi siano pieni prima di inserire qualcosa altrimenti stampa un avviso
    //opz: controllare che venga inserita una matricola non esistente
    //https://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript

    
    var nome = document.getElementById('nome').value;
    var cognome = document.getElementById('cognome').value;
    var eta = document.getElementById('eta').value;
    var matricolaNew = document.getElementById('matricolaNew').value; //prendo il valore della matricola
    
    var nuovoStudente = new Studente(nome, cognome, eta, matricolaNew);

    classe.push(nuovoStudente);

    formRegistraStudente.reset(); //il metodo reset serve ad azzerare i campi input del form
    stampa();
}

btnInsert.onclick = registraStudente;


function checkMatricola(matricola, array){
    for (let i=0; i < array.length; i++) {
        if (array[i].matricola === matricola) {
            return array[i];
        }
    }
}

console.log( checkMatricola(2, classe) );