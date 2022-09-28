export class Elevador{
    Terreo: number;
    TotalDeAndares: number;
    CapacidadeDoElevador: number;
    QuantidadeDePessoas: number;

    constructor(
    Terreo: number,
    TotalDeAndares: number,
    CapacidadeDoElevador: number,
    QuantidadeDePessoas: number
    ){
        this.Terreo = Terreo
        this.TotalDeAndares = TotalDeAndares
        this.CapacidadeDoElevador = CapacidadeDoElevador
        this.QuantidadeDePessoas = QuantidadeDePessoas
    }

    Inicializa() { 
        console.log(`\nCapacidade: ${this.CapacidadeDoElevador}.\nTotal de andares: ${this.TotalDeAndares}.\nAndar: ${this.Terreo}`)
    }

    entra(){
        this.QuantidadeDePessoas = 1
        this.CapacidadeDoElevador = this.CapacidadeDoElevador - 1
        console.log(`Entrada de pessoas.\nQuantidade de pessoas no elevador: ${this.QuantidadeDePessoas}`)
        console.log(`Capacidade: ${this.CapacidadeDoElevador}.\nSubindo.`)
    }
    sobe(){
        this.Terreo = 1
        console.log(`Andar Atual: ${this.Terreo}.`)
    }
    sai(){
       this.QuantidadeDePessoas = this.QuantidadeDePessoas - 1
       this.QuantidadeDePessoas = this.QuantidadeDePessoas + 1
       console.log(`Saindo pessoas. \nQuantidade de pessoas no elevador: ${this.QuantidadeDePessoas}.\nCapacidade: ${this.CapacidadeDoElevador}.\nDescendo`)

    }
    desce(){
        this.Terreo=0
        console.log(`Andar Atual: ${this.Terreo}.`)
    }
}
