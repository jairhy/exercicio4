const Veiculo = require('./Veiculo')
const Cliente = require('./Cliente')
const Agendamento = require('./Agendamento')


Cliente.hasMany(Agendamento,{
    foreignKey: 'idCliente',
    as: 'ClienteAgendamento',
    ondelete: 'CASCADE'
})

Agendamento.belongsTo(Cliente,{
    foreignKey: 'idCliente',
    as: 'AgendamentoCliente',
    allowNull: false
})

Veiculo.hasMany(Agendamento,{
   foreignKey: 'idVeiculo',
   as: 'veiculoAgendamento',
   onDelete: 'CASCADE'
})

Agendamento.belongsTo(Veiculo,{
    foreignKey: 'idVeiculo',
    as: 'AgendamentoVeiculo',
    allowNull: false
})

Cliente.hasMany(Veiculo, {
      foreignKey: 'idCliente',
      as: 'ClienteVeiculo',
      onDelete: 'CASCADE'
})

Veiculo.belongsTo(Cliente, {
    foreignKey: 'idCliente',
    as: 'VeiculoCliente',
    allowNull: false
})

module.exports = { Cliente, Veiculo , Agendamento }