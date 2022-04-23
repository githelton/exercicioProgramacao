const verificaPalindromo = (string) => {
    const tamanhoString = string.length;
    const quebraString = string.toLowerCase().split('');
    const inverteString = string.toLowerCase().split('').reverse();
    const result = [];
    for (let i = 0 ; i < tamanhoString; i++){
        if(quebraString[i] === inverteString[i]){
            return result[i] = quebraString;
        }else{
            return false;
        }
    }
}

export default verificaPalindromo;