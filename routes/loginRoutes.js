const express = require('express');
const loginRouter = express.Router();
const { login, register } = require('../controllers/loginController');

loginRouter.post('/login', login);
loginRouter.post('/register', register);

module.exports = loginRouter;