export class Ingresso {
    valor: number;

constructor (
    valor: number
) {
    this.valor = valor
}
valorIngresso () {
    console.log (`O valor do ingresso é ${this.valor} reais.`)
}
}