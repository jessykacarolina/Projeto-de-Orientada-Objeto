export abstract class Ingresso {
    valor: string;

    constructor (
        valor: string,
    ){
        this.valor=valor
    }
    verValor (): void{}
    verVip(): void{}
}