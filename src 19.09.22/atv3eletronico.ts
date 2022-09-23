export class Eletronico{
    volt: string;
    cor: string;
    entradas: number;

    constructor(
        volt: string,
        cor: string,
        entradas: number,
    ){  
        this.volt = volt
        this.cor = cor
        this.entradas = entradas
    }  
        verInformacoes(){
            console.log(`Informações do Eletronico
            A quantidade de Volt é ${this.volt}
            A cor do eletrônico é ${this.cor}
            A quantidade de entradas é ${this.entradas};`);
        }
    }