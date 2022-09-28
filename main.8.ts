/*Dia 19.09.22
Atividade1: Crie uma classe cliente e apresente os atributos e métodos referentes a esta classe, 
em seguida crie um objeto cliente, defina as instâncias deste objeto e apresente as informações deste 
objeto no console.*/
import { Cliente } from "./src 19.09.22/atv1cliente";

let cliente1 = new Cliente("Edgar", 20, "549.448.595-18", "(21)99678-8987");

cliente1.verDados();

/*Atividade2:
Crie uma classe avião e apresente os atributos e métodos referentes a esta classe, 
em seguida crie um objeto avião, defina as instâncias deste objeto e apresente as 
informações deste objeto no console.*/
import { Aviao } from "./src 19.09.22/atv2aviao";

let aviao1 = new Aviao("TAM", "Branco", 250)

aviao1.verInformacoes();


/*ATIVIDADE 3
Crie uma classe produto eletrônico e apresente os atributos e métodos 
referentes a esta classe, em seguida crie um objeto produto eletrônico, 
defina as instâncias deste objeto e apresente as informações deste objeto no console.*/
import { Eletronico } from "./src 19.09.22/atv3eletronico";

let eletronico1 = new Eletronico("200V", "preto", 3)

eletronico1.verInformacoes();

/*ATIVIDADE 4
Crie uma classe funcionário e apresente os atributos e métodos referentes esta classe, 
em seguida crie um objeto funcionário, defina as instâncias deste objeto e apresente as 
informações deste objeto no console.*/
import { Funcionario } from "./src 19.09.22/atv4funcionario";

let funcionario1 = new Funcionario("Wagner", 33, "wagner.electros@gmail.com")

funcionario1.verFuncionario();