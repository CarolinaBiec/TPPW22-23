var listaVoti = document.getElementById('listaVoti')

var voti =[15,18,29,13,27,30,28,25,22,14,19,18,26,25];

var nonSuperati = 0;
var superati = 0;

for(var i = 0; i < voti.length; i++){
    if(voti[i] < 18){
        listaVoti.innerHTML += "<li>" + voti[i] + " esame NON superato </li>";
        nonSuperati++;
    }
    else{
        listaVoti.innerHTML += '<li>' + voti[i] + " esame superato</li>"
        superati++
    }
}
var resoconto = document.getElementById('resoconto');
resoconto.innerHTML+= "<p>Numero esami superati: " + superati + "</p>";
resoconto.innerHTML+= "<p>Numero esami NON superati: " + nonSuperati + "</p>";