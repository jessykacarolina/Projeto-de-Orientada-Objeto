import { Ingresso } from "./Atv4-Ingresso";

export class IngressoVIP extends Ingresso {
    valorAdicional: number;
    valorIngressoVIP: number;

constructor (
    valor: number,
    valorAdicional: number,
    valorIngressoVIP: number
) {
    super (valor)
    this.valorAdicional = valorAdicional
    this.valorIngressoVIP = valorIngressoVIP
}
toString () {
    this.valorIngressoVIP = this.valor + this.valorAdicional
    console.log (`O valor do ingresso VIP é ${this.valorIngressoVIP} reais.`)
}
}