const mongoose = require('mongoose');

// Definir o esquema do ganhador
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    role: { 
        type: String, 
        enum: ['admin', 'user', 'professor'], 
        default: 'user'  
    },
    password: { type: String, required: true },
});

// Exportar o modelo do ganhador
module.exports = mongoose.model('User', UserSchema);
