import { Ingresso } from "./Atv4-Ingresso";

export class IngressoVip extends Ingresso{
    valor: string;

    constructor (
        valor: string,
    ){
        super(valor)
        this.valor = valor
    }
    verValor(): void{
        console.log("VALORES DOS INGRESSOS")
        this.valor = this.valor + 10
        console.log(`O valor do Ingresso VIP é: ${this.valor}.`)
    }
}