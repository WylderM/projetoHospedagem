const knex = require('../config/knex');

module.exports.Cadastro = {

   async cadastrarClientes(cpf, nome, telefone){
      return await knex('cliente').insert({cpf:cpf, nome:nome, telefone:telefone})
   },

    async cadastrarFuncionarios(cpf, cargo, nome){
      return await knex('funcionario').insert({cpf:cpf, cargo:cargo, nome:nome})
   },

   async getClientes(){
      return await knex.select('*').from('cliente')
   },

   async getClientesByCPF(cpf){
      return await knex.select('*').from('cliente').where('cpf', cpf)
   },

   async getFuncionario(){
      return await knex.select('*').from('funcionario')
   },

   async getFuncionarioByCPF(cpf){
      return await knex.select('*').from('funcionario').where('cpf', cpf)
   },
   
   async createReserva(checkin, checkout, cpf_cliente, nome_cliente, cpf_funcionario, nome_funcionario, num_quarto, telefone){
      return await knex('reserva').insert({
         checkin: checkin, 
         checkout: checkout, 
         cpf_cliente: cpf_cliente, 
         nome_cliente: nome_cliente, 
         cpf_funcionario: cpf_funcionario, 
         nome_funcionario: nome_funcionario, 
         num_quarto: num_quarto, 
         telefone:telefone
      })
   },

   async getReservaByCPF(cpf_cliente){
      return await knex.select('*').from('reserva').where('cpf_cliente', cpf_cliente)
   },
   async getAllReservas(){
      return knex.select('*').from('reserva')
   },
   
   async createHospedagem(num_quarto, cpf_cliente, id_reserva, id_quarto){
      return await knex('hospedagem').insert({
         num_quarto:num_quarto, 
         cpf_cliente:cpf_cliente, 
         id_reserva:id_reserva, 
         id_quarto:id_quarto
      })
   },

   async createQuarto(numero, tipo, valor, status){
      return await knex('quarto').insert({
         numero:numero, 
         tipo:tipo, 
         valor:valor, 
         status:status
      })
   },

   async getQuartoByNumero(numero){
      return await knex.select('*').from('quarto').where('numero', numero)
   },

   async createServico(num_quarto, valor, data_servico, cpf_funcionario){
      return await knex('servico').insert({
         num_quarto:num_quarto, 
         valor:valor, 
         data_servico:data_servico, 
         cpf_funcionario:cpf_funcionario
      })
   }
   

}