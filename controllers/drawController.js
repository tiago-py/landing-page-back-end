const createDraw = async (req, res) => {
    const { prize, date } = req.body;
    try {
        // Verificar se já existe um ganhador com o mesmo nome
        const existingDraw = await Winner.findOne({ date });
        if (existingDraw) {
            return res.status(400).json({ message: 'Data já cadastrada' });
        }
        // Criar um novo ganhador com os dados recebidos
        const newDraw = new Draw({ prize, date });
        // Salvar o ganhador no banco de dados
        await newDraw.save();
        // Retornar o ganhador recém-criado com status 201
        res.status(201).json(newDraw);
    } catch (error) {
        // Retornar um erro caso algo dê errado
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createDraw
};