const calculadoraIMC = (peso, altura) =>{
    let imc = peso / (altura * altura);
    return imc;
};
const statusIMC = (imc) => {
    let status;

    if (imc < 18){
        status = 'A baixo do Peso';
    }else if (imc >= 18 && imc < 24.9){
        status = 'Na medida do Peso';
    }else if (imc >= 24.9 && imc <= 27.9){
        status = 'Acima do Peso';
    }else{
        status = 'Obeso';
    }
    return status;
};

exports.calculadoraIMC = calculadoraIMC;
exports.statusIMC = statusIMC;