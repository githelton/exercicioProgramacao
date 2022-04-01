import {Somar,Subtrair,Multiplicar} from './funcoes.js';
let num1 = 10;
let num2 = 3;

let somaValores = Somar(num1,num2);
let subtrairValores = Subtrair(num1,num2);
let multValores = Multiplicar(num1,num2);
console.log("Soma: "+ somaValores);
console.log("\nSubtração: "+ subtrairValores);
console.log("\nMultiplicaçao: "+ multValores);
