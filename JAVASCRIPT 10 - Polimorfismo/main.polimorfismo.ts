import { Animal } from "./P.O.O/Polimorfismo src/animal"
import { Cachorro } from "./P.O.O/Polimorfismo src/cachorro";
let amigo = new Cachorro("Amarelo",4)

amigo.verInformacoes();
amigo.cacar();
amigo.som();

import { Cavalo } from "./P.O.O/Polimorfismo src/cavalo";

let cavalu = new Cavalo("Trovão", 10)

cavalu.verInformacoes();
cavalu.correr();
cavalu.som();

import { Preguiça } from "./P.O.O/Polimorfismo src/preguica";

let preguicaa = new Preguiça("Meggie", 6)

preguicaa.verInformacoes();
preguicaa.EscalarArvores();
preguicaa.som();