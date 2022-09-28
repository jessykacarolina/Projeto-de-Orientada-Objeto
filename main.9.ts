/*Dia 20/09/22
Atividade1: Crie uma classe patinete e apresente os atributos e métodos referentes 
a esta classe, em seguida crie um objeto patinete, defina as instâncias deste objeto 
e apresente as informações deste objeto no console.*/
import { Patinete } from "./src 20.09.22/atv1patinete";

let patinete1 = new Patinete("Xiaomi", "R$10.000,00", "Preto")

patinete1.verDados();


/*Atividade2: Crie uma classe conta bancária e apresente os atributos e métodos referentes 
a esta classe, em seguida crie um objeto conta bancária, defina as instâncias deste objeto 
e apresente as informações deste objeto no console.*/

import { ContaBancaria } from "./src 20.09.22/atv2contabancaria";

let contabancaria1 = new ContaBancaria("Mariana", "004-1", "4112-42", 500)

contabancaria1.saldo;
console.log(contabancaria1.saldo);


/*Atividade 3: Crie uma classe paciente e apresente os atributos e métodos referentes a 
esta classe, em seguida crie um objeto paciente, defina as instâncias deste objeto e apresente 
as informações deste objeto no console.*/
import { Paciente } from "./src 20.09.22/atv3paciente";

let paciente1 = new Paciente("Eduardo", 22, "Aids", "O56J3")

paciente1.verDadosdoPaciente();