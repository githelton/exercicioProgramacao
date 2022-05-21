const express = require('express');
const app = express();
const calculadoraIMC = require('./calculadoraIMC');

app.get('/', (req, res) => {
    console.log(req.query);
    let peso = req.query.peso;
    let altura = req.query.altura;
    let imc = calculadoraIMC.calculadoraIMC(peso, altura);
    res.json({imc: imc});
});
app.listen(8080, () => {
    console.log('servidor ligado!');
})