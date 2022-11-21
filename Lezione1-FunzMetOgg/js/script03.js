function calcolaArea(base, altezza){
    var area = base * altezza;
    return area;
}

// console.log(area); //area non esiste all'esterno della funzione

var superficie = calcolaArea(4,5); //calcola area sta "emettendo" un valore, cioè il risultato del calcolo interno

console.log(superficie);  


//////////////////CALCOLO AREA RETTANGOLO   
var base = 6.34;
var altezza = 7.6;

var areaRettangolo = calcolaArea(base, altezza);

console.log(areaRettangolo);

////creo una funzione calcolcaVolume() che sfrutta calcola area
    function calcolaVolume( base, altezza, profondita){
    var area = calcolaArea(base, altezza); //utilizzo una funzione dentro un'altra funzione
    var volume = area * profondita; //LOCALE
    return volume;
}

var volume = calcolaVolume(4,5,6); //GLOBALE

console.log("Il volume del solido vale: " + volume);



