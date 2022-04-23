import verificaPalindromo from './funcao.js'

let nome = 'Ana';
let resultado = verificaPalindromo(nome);

if(resultado == false){
    console.log('O resultado não é um Palindromo');
}else{
    console.log('O Palindromo é: ' + resultado.join(''));
}   