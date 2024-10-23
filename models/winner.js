const mongoose = require('mongoose');

// Definir o esquema do ganhador
const WinnerSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Nome do ganhador (obrigatório)
    prize: { type: String, required: true }, // Prêmio do ganhador (obrigatório)
    date: { type: Date, required: true } // Data do prêmio (obrigatório)
});

// Exportar o modelo do ganhador
module.exports = mongoose.model('Winner', WinnerSchema);
