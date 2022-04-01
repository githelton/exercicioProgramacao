const convertCelsiuparaFahreinheit = (celsius) => (celsius * 1.8) + 32;
const statusFahreinheit = (fahrenheit) => fahrenheit >= 99 ? 'Temperatura Alta' : 'Temperatura Baixa';

export {convertCelsiuparaFahreinheit, statusFahreinheit};