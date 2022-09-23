export class Cliente{
    nome: string;
    idade: number;
    cpf: string;
    telefone: string;

    constructor(
        nome: string,
        idade: number,
        cpf: string,
        telefone: string,
    ){  
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
        this.telefone = telefone
    }  
        verDados(){
            console.log(`Dados do cliente
            O nome do cliente é ${this.nome}
            A idade do cliente é ${this.idade}
            O cpf do cliente é ${this.cpf}
            O telefone do cliente é ${this.telefone}`);

        }
}