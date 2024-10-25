const express = require('express');
const {
    createWinner,
    getWinners,
    deleteWinner,
} = require('../controllers/winnerController');
const { createDraw, getDraws } = require('../controllers/drawController');

const router = express.Router();

// Rota para cadastrar um ganhador
router.post('/', createWinner);

// Rota para listar todos os ganhadores
router.get('/', getWinners);

// Rota para remover um ganhador pelo ID
router.delete('/:id', deleteWinner);

// Rota para criar um novo sorteio
router.post('/create-draw', createDraw);

// Rota para obter todos os sorteios
router.get('/draws', getDraws);

module.exports = router;
