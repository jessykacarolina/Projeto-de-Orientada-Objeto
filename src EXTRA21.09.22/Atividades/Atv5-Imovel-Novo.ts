import { Imovel } from "./Atv5-Imovel";

export class Novo extends Imovel {
    valorAdicional: string;

constructor (
    endereço: string,
    preço: string,
    valorAdicional: string
) {
    super (endereço, preço)
    this.valorAdicional = valorAdicional
}
adicional(): void {
    console.log (`O valor adicional para um imóvel novo é de R$ ${this.valorAdicional}.`)
}
}