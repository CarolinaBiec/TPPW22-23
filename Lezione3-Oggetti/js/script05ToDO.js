var btn = document.getElementById('btn');

function prendiData(){
    var data = document.getElementById('data').value;
    var dataSeparata = data.split('-');
    console.log(dataSeparata);
}

btn.onclick = prendiData;

//componi una todolist nel seguente modo
//descrizione - data

//la singola cosa da fare con la data è un oggetto e dovrà essere inserita in un array chiamato todolist. Alla fine devo ottenere un array di oggetti.
//consiglio: utilizzate un costruttore per la singola TODO
