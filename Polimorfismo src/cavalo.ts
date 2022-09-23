import { Animal } from "./animal";
export class Cavalo extends Animal{
    nome: string;
    idade: number;

    constructor(
        nome: string,
        idade: number,

    ){  
        super(nome, idade)
        this.nome = nome
        this.idade = idade
    }  
        verInformacoes(){
            console.log(`\nDados do cavalo:
            O nome do cavalo é ${this.nome}
            A idade do cavalo é ${this.idade}`);

        }
        correr():void{
            console.log("Correndo que nem um cavalo")
        }
    
        cacar():void{
    
        }
        dormir():void{
        }

        som():void{
            console.log("Emitindo som selvagem")
        }

        EscalarArvores(): void{}
}