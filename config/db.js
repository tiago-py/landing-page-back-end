const mongoose = require('mongoose');

// Função para conectar ao MongoDB
const connectDB = async () => {
    try {
        // Conectar ao MongoDB usando a URI fornecida nas variáveis de ambiente
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Conectado ao MongoDB');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
        process.exit(1); // Encerrar o processo em caso de erro
    }
};

module.exports = connectDB;
