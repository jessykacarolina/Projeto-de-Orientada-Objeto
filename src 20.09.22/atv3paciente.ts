export class Paciente{
    nome: string;
    idade: number;
    doença: string;
    codigo: string;

    constructor(
        nome: string,
        idade: number,
        doença: string,
        codigo: string,
    ){  
        this.nome = nome
        this.idade = idade
        this.doença = doença
        this.codigo = codigo
    }  
        verDadosdoPaciente(){
            console.log(`Dados do Paciente
            O nome do paciente é ${this.nome}
            A idade do paciente é ${this.idade}
            A doença do paciente é ${this.doença}
            O código do paciente é ${this.codigo}`);

        }
}