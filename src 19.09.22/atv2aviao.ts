export class Aviao{
    marca: string;
    cor: string;
    bancos: number;

    constructor(
        marca: string,
        cor: string,
        bancos: number,
    ){  
        this.marca = marca
        this.cor = cor
        this.bancos = bancos
    }  
        verInformacoes(){
            console.log(`Informações do Avião
            A marca do avião é ${this.marca}
            A cor do avião é ${this.cor}
            A quantidade de Bancos é ${this.bancos};`);
        }
    }