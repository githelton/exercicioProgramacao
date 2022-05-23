const express = require('express');
const app = express();
const calculadoraIMC = require('./calculadoraIMC');
//const statusIMC = require('./calculadoraIMC');

app.get('/', (req, res) => {
    console.log(req.query);
    let peso = req.query.peso;
    let altura = req.query.altura;
    let imc = calculadoraIMC.calculadoraIMC(peso, altura);
    let status = calculadoraIMC.statusIMC(imc);
    res.json({imc: imc, status: status});
});
app.listen(8080, () => {
    console.log('servidor ligado!');
})