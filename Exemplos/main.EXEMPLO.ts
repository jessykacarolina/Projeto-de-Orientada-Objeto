/*Exemplo 1:*/

import { ContaBanco } from "./P.O.O/Exemplos/contabanco";

let conta1 = new ContaBanco("Liza", "005-4", "4002-52", 500);

conta1.verSaldo();

/*Exemplo 2:*/

import { PessoaDois } from "./P.O.O/Exemplos/PessoaDois";

let pessoaUm = new Pessoa();

pessoaUm.nome = "Debora / Pekky";
pessoaUm.cpf = "235.568.695-38";
pessoaUm.idade = 18;
pessoaUm.telefone = "(21) 98456-8147";

console.log(`O nome da pessoa é: ${pessoaUm.nome}`);

/*Exemplo 3:*/
import { Pessoa } from "./P.O.O/Exemplos/pessoa";

let pessoa1 = new Pessoa();

pessoa1.nome = "Debora";
pessoa1.cpf = "235.568.695-38";
pessoa1.idade = 18;
pessoa1.telefone = "(21)98456-8147";

console.log(`O nome da pessoa é: ${pessoa1.nome}`);