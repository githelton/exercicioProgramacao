import {convertCelsiuparaFahreinheit, statusFahreinheit} from './funcoes.js';

let celsius = 50;

let fahrenheit = convertCelsiuparaFahreinheit(celsius);
let status = statusFahreinheit(fahrenheit);

console.log(fahrenheit+"Fº - ", status);