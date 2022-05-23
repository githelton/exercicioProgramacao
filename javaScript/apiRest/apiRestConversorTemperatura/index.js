const express = require('express');
const app = express();

const converteTemperatura = require('./conversorTemperatura');

app.get('/', (req, res) => {
    let temperatura = req.query.temperatura;
    let conversor = req.query.conversor;

    let temperaturaGraus = converteTemperatura.converteTemperatura(temperatura, conversor);
    let json = {temperatura: temperaturaGraus};
    res.json(json);
})
app.listen(8080, () => {
    let data = new Date;
    console.log('Servidor node iniciado em: '+data);
})