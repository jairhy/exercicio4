const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Veiculo = db.define('veiculos',{
    codVeiculo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    modelo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    placaCodRastreador: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    codCliente: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'veiculos'
})

module.exports = Veiculo