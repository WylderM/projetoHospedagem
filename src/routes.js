const express = require('express')
const route = express.Router()
const hospedagem = require('./controllers/hospedagem.controller')
const relatorio = require('./controllers/relatorio.controller')

route.post('/cadastro-funcionario', hospedagem.Funcionario)
route.post('/cadastro-reserva', hospedagem.Reserva)

module.exports = route