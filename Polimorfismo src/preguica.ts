import { Animal } from "./animal";
export class Preguiça extends Animal{
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
            console.log(`\nDados da preguica:
            O nome da preguiça é ${this.nome}
            A idade da preguiça é ${this.idade}`);

        }
        correr():void{
        }
    
        cacar():void{
    
        }
        dormir():void{
        }

        som():void{
            console.log("Emitindo Som selvagem")
        }

        EscalarArvores(): void{
            console.log("Escalando a árvore que nem uma preguiça")

        }
}