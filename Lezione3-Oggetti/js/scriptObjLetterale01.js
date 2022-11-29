//notazione Letterale
//utile a descrivere un singolo oggetto di cui già conosciamo prop e metodi

var docenteJS = {
    //proprietà
    nome: "Dario",
    cognome: "Mennillo",
    eta: 33,
    materie: ['Javascript', 'Angular', 'Java', 'Html & Css', 'Jquery'],

    //metodi
    insegnaMateria: function(){
        if(this.materie.includes('Javascript')){
            console.log("Sei su un corso per Front-End Developer");
        }
    },

    presentaDocente: function(){
        console.log("Nome " + this.nome + " - Cognome: " + this.cognome);
    }
}


var demo = document.getElementById('demo');
//uso la notazione punto per richiamare propr e metodi

demo.innerHTML += '<p> Nome: ' + docenteJS.nome + '</p>';
demo.innerHTML += '<p> Cognome: ' + docenteJS.cognome + '<p>';

for(var i = 0; i < docenteJS.materie.length ; i++){
    demo.innerHTML += '<li>' + docenteJS.materie[i] + '</li>';
}

//richiamo il metodo insegnaMateria
docenteJS.insegnaMateria();
docenteJS.presentaDocente();

var docenteHTML = {
    nome: "Davide",
    cognome: "Ghione",
    eta: 35,
    materie: ["Html & CSS", "Wordpress", "Bootstrap", "Material"],

    presentaDocente: function(){
        var presentazione = "";
        presentazione += "Nome: " + this.nome + " " + this.cognome + "<br>";
        presentazione += "Materie Insegnate: ";
        for(var i = 0; i < this.materie.length; i++){
            presentazione += "<li> " + this.materie[i] + "</li>";
        }
        return presentazione;
    }
}

var feed = document.getElementById('feed');

feed.innerHTML = docenteHTML.presentaDocente();





