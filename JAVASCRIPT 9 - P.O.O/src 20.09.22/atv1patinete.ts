export class Patinete{
    marca: string;
    valor: string;
    cor: string;

    constructor(
        marca: string,
        valor: string,
        cor: string,
    ){  
        this.marca = marca
        this.valor = valor
        this.cor = cor
    }  
        verDados(){
            console.log(`Informações do Patinete
            A marca do patinete é ${this.marca}
            O valor do patinete é ${this.valor}
            A cor do patinete é ${this.cor}`);

        }
}