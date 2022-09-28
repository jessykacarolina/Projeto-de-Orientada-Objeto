import { Televisão } from "./Atv3-Televisão";

export class ControleRemoto extends Televisão{
    bateria: string;

    constructor (
        canal: number,
        qualVolume: number,
        bateria: string
    ){
        super(canal, qualVolume)
        this.bateria = bateria
    }
    verEstado(): void{
        console.log("LIGANDO A TV")
        console.log(`Verificando volume atual: ${this.qualVolume}.`)
        console.log(`Verificando canal atual: ${this.canal}.`)
        console.log(`Verificando bateria do controle: ${this.bateria}.`)
    }
    proximoCanal(): void{
        console.log("TROCANDO PARA O PRÓXIMO CANAL")
        this.canal = this.canal +1
        console.log(`Canal atual: ${this.canal}.`)
        console.log(`TROCANDO PARA O PRÓXIMO CANAL`)
        this.canal = this.canal -1
        console.log(`Canal atual: ${this.canal}.`)        
    }
    trocandoCanal(): void {
        console.log(`TROCANDO PARA O PRÓXIMO CANAL`)
        this.canal = this.canal +10
        console.log(`CANAL ATUAL: ${this.canal}`)
    }
    aumentandoVolume(): void {
        console.log(`AUMENTANDO VOLUME`)
        this.qualVolume = this.qualVolume +1
        console.log(`Volume atual: ${this.qualVolume}.`)
        this.qualVolume = this.qualVolume +1
        console.log(`Volume atual: ${this.qualVolume}.`)
        this.qualVolume = this.qualVolume +1
        console.log(`Volume atual: ${this.qualVolume}.`)
    }
}