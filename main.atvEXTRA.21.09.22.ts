/*Atividade 1 - Dia 21/09/22
Crie uma classe para representar uma pessoa, com os atributos privados de nome, data de
nascimento e altura. Crie os métodos necessários para imprimir todos dados de uma pessoa, 
um para calcular a idade da pessoa.*/

import { Pessoa } from "./src EXTRA21.09.22/Atv1-pessoa"


let pessoa1 = new Pessoa ("Sérgio",11,1,2001,1.80)

pessoa1.verNome()
pessoa1.verIdade()
pessoa1.verAltura()

/*Atividade 2:
Crie uma classe denominada Elevador para armazenar as informações de um elevador
dentro de um prédio. A classe deve armazenar o andar atual (térreo = 0), total de andares
no prédio (desconsiderando o térreo), capacidade do elevador e quantas pessoas estão
presentes nele. A classe deve também disponibilizar os seguintes métodos:
Inicializa : que deve receber como parâmetros a capacidade do elevador e o total de
andares no prédio (os elevadores sempre começam no térreo e vazio);
Entra : para acrescentar uma pessoa no elevador (só deve acrescentar se ainda houver
espaço);
Sai : para remover uma pessoa do elevador (só deve remover se houver alguém
dentro dele);
Sobe : para subir um andar (não deve subir se já estiver no último andar);
Desce : para descer um andar (não deve descer se já estiver no térreo);
Encapsular todos os atributos da classe*/
import { Elevador } from "./src EXTRA21.09.22/Atv2-elevador"

let elevador1 = new Elevador(0, 6, 6, 0)

elevador1.Inicializa();
elevador1.entra();
elevador1.sobe();
elevador1.sai();
elevador1.desce();


/*Atividade 3:
Crie uma classe Televisao e uma classe ControleRemoto que pode controlar o volume e
trocar os canais da televisão. O controle de volume permite:
 aumentar ou diminuir a potência do volume de som em uma unidade de cada vez;
 aumentar e diminuir o número do canal em uma unidade
 trocar para um canal indicado;
consultar o valor do volume de som e o canal selecionado.*/

import { ControleRemoto } from "./src EXTRA21.09.22/Atv3-ControleRemoto";

let controleUm = new ControleRemoto (16, 25, "100%");

controleUm.verEstado();
controleUm.proximoCanal();
controleUm.trocandoCanal();
controleUm.aumentandoVolume()

/*Atividade 4:
Crie uma classe chamada Ingresso que possua um atributo valor e um método que
retorne à informação do valor do ingresso. crie uma classe IngressoVIP, que herda de 
Ingresso e possui um atributo valor Adicional. O método toString da classe IngressoVIP
deve considerar que o valor do ingresso é o valor da superclasse somado ao valor 
Adicional do IngressoVIP*/

import { Ingresso } from "./src EXTRA21.09.22/Atv4-Ingresso";
import { IngressoVIP } from "./src EXTRA21.09.22/Atv4-IngressoVIP";

//let ingressoUm = new Ingresso (70);
let vipUm = new IngressoVIP (70, 30, 0);

vipUm.valorIngresso ();
vipUm.toString ();

/*Atividade 5:
Crie a classe Imovel, que possui um endereço e um preço.
a. crie uma classe Novo, que herda Imovel e possui um adicional no preço. Crie
métodos de acesso e impressão deste valor adicional.
b. crie uma classe Velho, que herda Imovel e possui um desconto no preço. Crie
métodos de acesso e impressão para este desconto*/

import { Novo } from "./src EXTRA21.09.22/Atv5-Imovel-Novo";
import { Velho } from "./src EXTRA21.09.22/Atv5-Imovel-Velho";

let novoUm = new Novo ("Avenida das Américas, 75", "120.000", "30.000");
let velhoUm = new Velho ("Avenida das Américas, 75", "120.000", "20.000");

novoUm.adicional ();
velhoUm.desconto ();