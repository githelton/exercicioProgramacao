const verificaPalindromo = (string) => {
    let tamanhoString = string.length;
    const quebraString = string.split('');
    const inverteString = string.split('').reverse();
    //const arrayStringQuebrada = quebraString;
    //arrayStringQuebrada = [quebraString];
    for (let str of quebraString){
        let letra = str;
        console.log(letra);
    }
    //console.log(arrayStringQuebrada);
    //let frente = [];
    //console.log(quebraString);
    //console.log(palavraInvertida);
    const verificaPalavra = (quebraString == inverteString) ? console.log(`É palindromo: ${quebraString}`) : console.log(`Não é palindromo: ${inverteString} é diferente de ${quebraString}`); 
    return verificaPalavra;
}

export default verificaPalindromo;