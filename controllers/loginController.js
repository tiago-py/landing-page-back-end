const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verificar se o nome de usuário existe
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Verificar se a senha é a correta
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Criar um token de autenticação
        const token = jwt.sign({ name: user.name }, 'secretkey');

        return res.json({ token });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const register = async (req, res) => {
    try {
        const { email, name, cpf, password } = req.body;
        const data = { email, name, cpf };

        // Verificar se o nome de usuário existe
        const user = await User.findOne({ name });

        if (user) {
            return res.status(409).json({ message: 'User already exists' });
        }

        // Criptografar a senha
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Adicionar a senha criptografada ao objeto de dados
        const newUser = new User({ ...data, password: hashedPassword });

        // Salvar o novo usuário no banco de dados
        await newUser.save();

        res.status(201).json({ 
            user: {
                name: user.name,
                email: user.email,
                cpf: user.cpf 
            } 
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    login,
    register
};
