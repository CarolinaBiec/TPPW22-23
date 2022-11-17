//ARRAY
var animaliFattoria = ["cane", "gatto", "gallina", "maiale", "cavallo", "asino", "capretta", "scimmia"];

//stampo quanti animali ci sono 
var numAnimali = animaliFattoria.length;
console.log("Nella fattoria ci sono: " + numAnimali +  " animali");


//stampo la posizione degli animali
//sto richiamando i singoli valori nell'array

var posizione0 = animaliFattoria[0]; //in posizione0 sto salvando il valore dell'array nella posizione 0, cioè il primo elemento dell'array
console.log(posizione0);

console.log(animaliFattoria[1]); //gatto

//stampo direttamente tutto l'array
console.log(animaliFattoria);


var versiAnimali = ["bau", "miao", "coccodè", "oink", "iiiii", "ioio", "beh", "urla"];


var nuovoAnimale = "mucca";
var nuovoVerso = "muu";

animaliFattoria.push(nuovoAnimale);
versiAnimali.push(nuovoVerso);

/////////////////////////////////
// animaliFattoria.sort();
// versiAnimali.sort();
//
// animaliFattoria.reverse();
// versiAnimali.reverse();
/////////////////////////////////////

// document.write(animaliFattoria[0] + " fa " + versiAnimali[0] + "<br>" );
// document.write(animaliFattoria[1] + " fa " + versiAnimali[1] + "<br>" );
// document.write(animaliFattoria[2] + " fa " + versiAnimali[2] + "<br>" );
// document.write(animaliFattoria[3] + " fa " + versiAnimali[3] + "<br>" );
// document.write(animaliFattoria[4] + " fa " + versiAnimali[4] + "<br>" );
// document.write(animaliFattoria[5] + " fa " + versiAnimali[5] + "<br>" );
// document.write(animaliFattoria[6] + " fa " + versiAnimali[6] + "<br>" );



for(var indice in animaliFattoria){
    document.write(animaliFattoria[indice] + " fa " + versiAnimali[indice] + "<br>");
}




//fare degli array misti è una cafonata per quanto fattibile
var arrayMisto = ['Dario', "Mennillo", 33, true];
console.log(arrayMisto);






