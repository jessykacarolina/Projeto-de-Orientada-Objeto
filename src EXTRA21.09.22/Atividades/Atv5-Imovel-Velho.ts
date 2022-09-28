import { Imovel } from "./Atv5-Imovel";

export class Velho extends Imovel {
    descontoPreço: string;

constructor (
    endereço: string,
    preço: string,
    descontoPreço: string
) {
    super (endereço, preço)
    this.descontoPreço = descontoPreço
}
desconto(): void {
    console.log (`O desconto para a compra de um imóvel velho é de R$ ${this.descontoPreço}.`)
}
}