const calculadoraIMC = (peso, altura) =>{
    let imc = peso / (altura * altura);
    return imc;
};

exports.calculadoraIMC = calculadoraIMC;