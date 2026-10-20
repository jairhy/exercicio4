const { DataTypes } = require('sequelize')
const   db = require('../db/conn')

const Agendamento = db.define('agendamento',{
    codAgendamento: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idVeiculo: {
     type: DataTypes.INTEGER,
     allowNull: false,
     references: {
          model: 'veiculos',
            key: 'codVeiculo'
     }
    },
    idCliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'clientes',
            key: 'codCliente'
        }
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    horario: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    tipoService: {
        type: DataTypes.ENUM('revisao','manutencao','instalacao'),
        allowNull: false
    },
    codVeiculoRel: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ClienteRelAgen: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Agendamento