export class Funcionario{
    nome: string;
    idade: number;
    email: string;

    constructor(
        nome: string,
        idade: number,
        email: string,
    ){  
        this.nome = nome
        this.idade = idade
        this.email = email
    }  
        verFuncionario(){
            console.log(`Informações do Funcionário
            O nome do funcionário é ${this.nome}
            A idade do funcionário é ${this.idade}
            O email do funcionário é ${this.email};`);
        }
    }