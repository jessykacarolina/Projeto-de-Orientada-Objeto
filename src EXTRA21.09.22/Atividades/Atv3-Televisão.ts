export abstract class Televisão {
    canal: number;
    qualVolume: number;

    constructor (
        canal: number,
        qualVolume: number
    ){
        this.canal=canal
        this.qualVolume=qualVolume
    }
    verEstado (): void{}
    proximoCanal(): void{}
    trocandoCanal(): void{}
    aumentandoVolume(): void{}
}