import colecao_signos from './dados/dados.js'
import retorna_signo from './funcoes/funcoes.js';
//const dados = require('./dados');
//const funcao = require('./funcoes');

let data_app = new Date();

const nome_signo = retorna_signo(colecao_signos, data_app);
console.log('O signo de hoje é: '+nome_signo);