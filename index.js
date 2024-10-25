const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const winnerRouter = require('./routes/winnerRoutes');
const loginRouter = require('./routes/loginRoutes');
const connectDB = require('./config/db'); // Importar a função de conexão
const cors = require('cors')
// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
app.use(bodyParser.json()); // Usar o body-parser para interpretar JSON
app.use(cors())
app.use('/api/winners', winnerRouter); // Configurar as rotas da API
app.use('/api/login', loginRouter); // Configurar as rotas da API

// Conectar ao MongoDB
connectDB(); // Chamar a função de conexão

// Iniciar o servidor na porta especificada
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
