const mongoose = require('mongoose');

// Definir o esquema do ganhador
const DrawSchema = new mongoose.Schema({
    prize: { type: String, required: true }, // Prêmio do ganhador (obrigatório)
    date: { type: Date, required: true } // Data do prêmio (obrigatório)
});

// Exportar o modelo do ganhador
module.exports = mongoose.model('Draw', DrawSchema);
