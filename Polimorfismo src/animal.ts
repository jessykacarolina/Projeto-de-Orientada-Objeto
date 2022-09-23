export abstract class Animal {
    nome: string;
    idade: number;

    constructor(
        nome: string,
        idade: number,
    ){
        this.nome = nome
        this.idade = idade
        }

    correr():void{
    }

    cacar():void{

    }
    dormir():void{
    }

    EscalarArvores():void{
    }

    Som():void{
        
    }

}