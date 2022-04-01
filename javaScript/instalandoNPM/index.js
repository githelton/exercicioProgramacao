//npm init -y
//comando para utilizar pacotes e usar import
//npm install readline-sync
//comando para uso do input, deve ser instalando junto com init na mesma pasta de projeto
import dadosEntrada from "readline-sync";

let quantidade = dadosEntrada.question('Qual a quantidade?: ');
console.log('A quantidade é de: ' +quantidade);
