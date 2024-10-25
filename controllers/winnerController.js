// Importando o model Winner
const Winner = require('../models/winner');
const Draw = require('../models/draw.js')

// Cadastrar ganhador
const createWinner = async (req, res) => {
    const { name, prize, date } = req.body;
    try {
        // Verificar se já existe um ganhador com o mesmo nome
        const existingWinner = await Winner.findOne({ name });
        if (existingWinner) {
            return res.status(400).json({ message: 'Ganhador já cadastrado' });
        }

        // Criar um novo ganhador com os dados recebidos
        const newWinner = new Winner({ name, prize, date });
        // Salvar o ganhador no banco de dados
        await newWinner.save();
        // Retornar o ganhador recém-criado com status 201
        res.status(201).json(newWinner);
    } catch (error) {
        // Retornar um erro caso algo dê errado
        res.status(400).json({ message: error.message });
    }
};


// Listar ganhadores
const getWinners = async (req, res) => {
    try {
        // Buscar todos os ganhadores no banco de dados
        const winners = await Winner.find();
        // Retornar a lista de ganhadores com status 200
        res.status(200).json(winners);
    } catch (error) {
        // Retornar um erro caso algo dê errado
        res.status(500).json({ message: error.message });
    }
};

// Remover ganhador
const deleteWinner = async (req, res) => {
    try {
        // Tentar encontrar e remover o ganhador pelo ID fornecido
        const winner = await Winner.findByIdAndDelete(req.params.id);
        if (!winner) {
            // Retornar erro caso o ganhador não seja encontrado
            return res.status(404).json({ message: 'Ganhador não encontrado' });
        }
        // Retornar mensagem de sucesso caso o ganhador seja removido
        res.status(200).json({ message: 'Ganhador removido com sucesso' });
    } catch (error) {
        // Retornar um erro caso algo dê errado
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    createWinner,
    getWinners,
    deleteWinner,
    createDraw
};
