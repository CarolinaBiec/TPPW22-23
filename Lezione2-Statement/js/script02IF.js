// var votoScritto = 20;
// var votoOrale = 15;
var votoScritto = Math.ceil(Math.random() * 30);
var votoOrale = Math.ceil(Math.random() * 30);

//professore integerrimo, usa AND logico
console.log("-----------Professore integerrimo--------------------");

if(votoScritto >= 18 && votoOrale >= 18){
    var media = (votoScritto + votoOrale)/2;
    console.log("Bravo, il voto finale è: " + media);
}else{
    console.log("Mi dispiace, uno dei due voti non è sufficiente");
}



console.log("-----------Professore accomodante--------------------");

//professo più accomodante usa OR logico, per cui basta che uno dei due voti sia sopra il 18
if(votoScritto > 30 || votoOrale > 30){

    console.log(votoScritto, votoOrale);
    console.log("Caro studente, c'è qualcosa che non va nei tuoi voti !");

}else if((votoScritto >= 18 || votoOrale >= 18)){
    //il professore tiene il voto più alto
    var votoFinale = 0;
    if(votoScritto > votoOrale){
        votoFinale = votoScritto;
    }else{
        votoFinale = votoOrale;
    }
    console.log(votoScritto, votoOrale);
    console.log("Caro studente, l'esame lo hai passato comunque e il tuo voto è " + votoFinale);
}else {
    console.log(votoScritto, votoOrale);
    console.log("Mi dispiace, entrambi i voti non sono sufficienti");
}


