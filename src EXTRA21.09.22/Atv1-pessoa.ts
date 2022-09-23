export class Pessoa{
    Nome:string;
    Dia:number;
    Mês:number;
    Ano:number;
    Altura:number;

    constructor(
        Nome:string,
        DiaNascimento:number,
        MêsNascimento:number,
        AnoNascimento:number,
        Altura:number
    ){
        this.Nome = Nome
        this.Dia = DiaNascimento
        this.Mês = MêsNascimento
        this.Ano = AnoNascimento
        this.Altura = Altura
    }

    verNome(){
        console.log(`Nome: ${this.Nome}`)
    }

    verIdade(){
        console.log(`Idade: ${2022 - this.Ano}`)
    }

    verAltura(){
        console.log(`Altura: ${this.Altura}`)
    }

}