class Auto{
    private  lunghezza: number;
    private motore: string;

    constructor(private isHybrid: boolean, private color: string){
        this.isHybrid = isHybrid;
        this.lunghezza;
        this.motore;
        this.color = color;

    }

    accendi(): void{
        
    }
}

var miaAuto = new Auto(true, "rossa");