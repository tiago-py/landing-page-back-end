const express = require('express');
const {
    createWinner,
    getWinners,
    deleteWinner,
} = require('../controllers/winnerController');
const { createDraw, getDraws } = require('../controllers/drawController');

const winnerRouter = express.Router();

// Rota para cadastrar um ganhador
winnerRouter.post('/', createWinner);

// Rota para listar todos os ganhadores
winnerRouter.get('/', getWinners);

// Rota para remover um ganhador pelo ID
winnerRouter.delete('/:id', deleteWinner);

// Rota para criar um novo sorteio
winnerRouter.post('/create-draw', createDraw);

// Rota para obter todos os sorteios
winnerRouter.get('/draws', getDraws);

module.exports = winnerRouter;
