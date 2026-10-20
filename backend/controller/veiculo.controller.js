const Veiculo = require('../models/Veiculo')
const Cliente = require('../models/Cliente')

const cadastrar = async (req , res) => {
    const valores = req.body
    
    if (!valores.modelo || !valores.tipo || valores.aro || !valores.idCliente) {
        return res.status(400).json({message: 'Todos os campos são obrigatórios!!!'})
    }

    try {
        const Cliente = await Cliente.findbyPk(valores.idCliente)
        if (!Cliente) {
             return res.status(404).json({message: 'Cliente informado não existe!!!'})
        }

        const novoCliente = await cliente.create(valores)
        return res.status(201).json({message: 'Cliente cadastrada com sucesso!!', Cliente: novoCliente})
    } catch (err) {
        console.error('Erro ao cadastrar bicicleta:', err)
        return res.status(500).json({message: 'Erro ao cadastrar Bicicleta!!'})
    }
}

module.exports = { cadastrar }