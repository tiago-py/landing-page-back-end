const mongoose = require('mongoose');

// Definir o esquema do ganhador
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    cpf: { type: String, required: true },
    password: { type: String, required: true },
});

// Exportar o modelo do ganhador
module.exports = mongoose.model('User', UserSchema);
