import { Animal } from "./animal";
export class Cachorro extends Animal{
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
            console.log(`\nDados do cachorro:
            O nome do cachorro é ${this.nome}
            A idade do cachorro é ${this.idade}`);

        }
        correr():void{
        }
    
        cacar():void{
            console.log("Caçando como um cachorro")
    
        }
        dormir():void{
        }

        som(): void{
            console.log("Emitindo Som selvagem")
        }

        EscalarArvores(): void{}
}