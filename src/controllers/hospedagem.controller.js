const cadastro = require('../database/models/cadastro').Cadastro


// module.exports.Cliente = async function(req, res, next){
//    let cpf = req.body.cpf
//    let nome = req.body.nome
//    let telefone = req.body.telefone
   
//    await cadastro.cadastrarClientes(cpf, nome, telefone)
// }

module.exports.Funcionario = async function(req, res, next){
   let cpf = req.body.cpf
   let cargo = req.body.cargo
   let nome = req.body.nome
   await cadastro.cadastrarFuncionarios(cpf, cargo, nome)
   res.json({"mensagem":"Funcionário cadastrado com sucesso!"})
}

module.exports.Reserva = async function(req, res, next){
   try{
      let checkin = req.body.checkin 
   let checkout = req.body.checkout 
   //CLIENTE
   let cpf_cliente = req.body.cpf_cliente 
   let nome_cliente = req.body.nome_cliente
   let telefone_cliente = req.body.telefone_cliente
   //FUNCIONARIO
   //let funcionario = await cadastro.getFuncionarioByCPF()
   let cpf_funcionario = '1321564654'//req.body.cpf_funcionario
   let nome_funcionario = 'joao'//req.body.nome_funcionario 
   //QUARTO
   let num_quarto = req.body.num_quarto
   let tipo_quarto = req.body.tipo_quarto
   let valor_quarto = req.body.valor_quarto
   let status_quarto = req.body.staus_quarto
   //SERVICO
   let valor_servico = req.body.valor_servico
   let data_servico = req.body.data_servico


   await cadastro.createReserva(checkin, checkout, cpf_cliente, nome_cliente, cpf_funcionario, nome_funcionario, num_quarto, telefone_cliente)
   await cadastro.cadastrarClientes(cpf_cliente, nome_cliente, telefone_cliente)
   await cadastro.createQuarto(num_quarto, tipo_quarto, valor_quarto, status_quarto)
   await cadastro.createServico(num_quarto, valor_servico, data_servico, cpf_funcionario)
   
   async function createHospedagem(){
      //Servico
      let reserva = await cadastro.getReservaByCPF(cpf_cliente)
      let quarto = await cadastro.getQuartoByNumero(num_quarto)
      let id_reserva = reserva[0].id_reserva
      let id_quarto = quarto[0].id_quarto
      setTimeout(function(){
         return cadastro.createHospedagem(num_quarto, cpf_cliente, id_reserva, id_quarto)
      }, 3000)
   }
   createHospedagem()
      res.json({"mensagem":"Reserva efetuada com sucesso!"})
   }catch(error){
      res.json({"ERRO":"não foi possível efetuar reserva"})
      console.error("ERROR NA RESERVA: ", error)
   }  
   
   
}