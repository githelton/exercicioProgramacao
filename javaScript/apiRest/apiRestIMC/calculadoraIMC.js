const calculadoraIMC = (peso, altura) =>{
    let imc = peso / (altura * altura);
    return imc;
};
const statusIMC = (imc) => {
    let status = '';

    if (imc <= 20){
        status = {status: 'A baixo do Peso'};
    }else if (imc > 21 && imc <= 24){
        status = {status = 'Na medida do Peso'};
    }else if (imc > 24 && imc <= 26){
        status = {status: 'Acima do Peso'};
    }else{
        status = {status: 'Obeso'};
    }
};

exports.calculadoraIMC = calculadoraIMC;
exports.statusIMC = statusIMC;