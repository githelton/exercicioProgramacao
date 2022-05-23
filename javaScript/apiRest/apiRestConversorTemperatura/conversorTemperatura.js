const converteTemperatura = (temperatura, conversor) => {
    let resultado;

    if(conversor == 'C'){
        resultado = converteParaCelsius(temperatura)+'°C';
        return resultado;
    }else if (conversor == 'F'){
        resultado = conveteParaFahrenheit(temperatura)+'°F';
        return resultado;
    }
};
const converteParaCelsius = (fahrenheit) => {
    let celsius = (fahrenheit - 32) / 1.8;
    return celsius;
}
const conveteParaFahrenheit = (celsius) => {
    let fahrenheit = (celsius * 1.8) / 32;
    return fahrenheit;
}

exports.converteTemperatura = converteTemperatura;