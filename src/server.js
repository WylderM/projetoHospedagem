const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express().use(bodyParser.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
const http = require('http').Server(app)
//const cors = require('cors')

enableCors = (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Credentials', true)
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	next()
}
// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(enableCors)
PORT = 4500 
HOST = '0.0.0.0'

//Rotas
//app.use('/', require('./routes'))

//views rotas
app.get('/', function(req, res){
	res.render('formularioHospedagem/index')
})

//Server externo
http.listen(PORT, function () {
	console.log('API rodando na porta', PORT + '!')
})

module.exports = app
