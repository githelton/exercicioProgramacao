import entradasDados from 'readline-sync';
import {verificaPalindromo, imprimeResultado} from './funcao.js'

let nome = entradasDados.question('Digite sua Palavra: ');
let resultado = verificaPalindromo(nome);
imprimeResultado(resultado);