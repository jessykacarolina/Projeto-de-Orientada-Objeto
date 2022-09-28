export abstract class Imovel {
    endereço: string;
    preço: string;

constructor (
    endereço: string,
    preço: string
) {
    this.endereço = endereço
    this.preço = preço
}
adicional (): void {}
desconto (): void {}
}