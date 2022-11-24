// la condizione da controllare è sempre un boolean ( true, false )

// var condizione = true;

//le condizione derivano tutte da confronti
/**
 * vari operatori
 *  == è uguale a 
 *  === è strettamente uguale a (confronta anche il tipo)
 * <
 * >
 * <=
 * >= 
 */

var primoNum = 1;
var secondoNum = 3;

var condizione = primoNum > secondoNum; //bolean

// if(primoNum > secondoNum){
//    console.log( primoNum + " è maggiore di " + secondoNum);
// }
// else if(primoNum == secondoNum){
//     console.log("I due numeri sono uguali");
// }else{
//     console.log( secondoNum + " è maggiore di " + primoNum);
// }

//provo a fare la stessa cosa con una funzione 

function controlla(primoNum, secondoNum){
    if(primoNum > secondoNum){
       return primoNum + " è maggiore di " + secondoNum;

     }else if(secondoNum > primoNum){
       return  secondoNum + " è maggiore di " + primoNum;

    }else{
       return "I due numeri sono uguali e valgono: " + primoNum + ", " + secondoNum;

    }
}

// controlla(primoNum,secondoNum);
// controlla(122 , 7);
// controlla(5 , 5);

//prendo demo
var demo = document.getElementById('demo');
//prendo il pulsante
var btn = document.getElementById('btn')

function recuperaNumeri(){
    var primoNumero = Number( document.getElementById('primoNumero').value );
    var secondoNumero =Number( document.getElementById('secondoNumero').value);

    var risultatoDellaValutazione = controlla(primoNumero, secondoNumero);

    stampa(risultatoDellaValutazione);
}

function stampa(risultato){
    demo.innerHTML = risultato;
}
//aggancio la funzione al pulsante OSS: NON CI VOGLIONO LE PèARENTESI TONDE

btn.onclick = recuperaNumeri;






