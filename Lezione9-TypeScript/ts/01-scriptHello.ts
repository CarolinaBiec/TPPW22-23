// Hello World in Typescript
let saluto: string = "Hello, World !";

console.log(saluto);


let numero: number = 10;
numero = 18;


let miaEta: number = 33;

const acceso: boolean = true;

//tipi dinamici
var qualcosa:any;
qualcosa = "dieci";
qualcosa = 12;
qualcosa = true;
qualcosa = ["ciao", 34, "come", "stai?"];

//tipi CUSTOM
type Animale = "Leone" | "Elefante" | "Scimmia" ;

let mioAnimale: Animale = "Scimmia";


type Persona = string;

let user: Persona = "Dario Mennillo";


type Docente = Object;

let docenteJS: Docente = {
    nome: "Dario",
    cognome: "Mennillo",
    presenza: true
}


type Contenitore = object;

let contenitoreNumeri: Contenitore = [
    12,
    10,
    55,
];

//Anche nelle funzioni va specificato il tipo di ritorno
//void è per le funzioni senza ritorno
function test(): void{
    let n: number = 10;
    let p: number = 23;
    let somma = n + p;
    console.log("La somma è " + somma);
}
test();

function saluta(): string{
    return "Ciao, Dario!";
}

function salutaUser(nome: string): string{
    let nomeUser = nome;
    return `Ciao ${nomeUser}`;
}

let benvenuto = document.getElementById("benvenuto")!;
benvenuto.innerHTML = salutaUser("Dario");


//utilizzo il ? quando il parametro è opzionale, da inserire alla fine della firma
function salutamiAS(nome: string, cognome?: string): string{

    if(!cognome){
        return "Ciao " + nome;
    }else{
        
        return "Ciao " + nome + " " + cognome;
    }

}


console.log(salutamiAS("Anna"));

console.log(salutamiAS("Paolo", "Rossi"));

//Overload 
//utile per avere un metodo con lo stesso nome ma parametri di tipo differente
//nelle varie implementazioni non ho il corpo della funzione

function somma(a: string, b:string): string;

function somma(a: number, b: number): number;

function somma(a:any, b: any):any{
    return a + b;
}


console.log( somma("ciao", "Dario") );
console.log( somma(8, 11) );


///ARROW
let raddopia = (x) => x*2;

console.log(raddopia(2));

//variabile funzionale
let addiziona = (x:number,y:number):number => x + y;

console.log(addiziona(4,6));

let addizionaERadd = (x, y) =>{
    const somma = x + y;
    return somma * 2;
}

console.log(addizionaERadd(3,4));

//saluta un utente a tempo
function salutaDopo(nome: string): void{
    this.nome = nome;
    this.salutaConRitardo = function(){
        setTimeout( () => {
            console.log("Ciao " + this.nome);
        }, 5000);
    }
}

let provaSaluta = new salutaDopo("Pasquale");
provaSaluta.salutaConRitardo();