const express = require('express')
const bodyParser = require('body-parser')
const app = express()


//const cors = require('cors')
enableCors = (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Credentials', true)
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	next()
}

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(enableCors)
PORT = 4500 
HOST = '0.0.0.0'

//Rotas
app.use('/', require('./routes'))

//views rotas
app.get('/', function(req, res){
	res.sendFile(__dirname + '/views/formularioHospedagem/teste.html')
})

//Server externo
app.listen(PORT, function () {
	console.log('API rodando na porta', PORT + '!')
})

module.exports = app
