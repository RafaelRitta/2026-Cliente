import Veiculo from '../models/veiculo.js';

export const listarVeiculos = async (req, res) => {
    try {
        const veiculos = await Veiculo.find();
        res.render('index', {
            title: 'AutoLoca - Veículos',
            veiculos
        });
    } catch (erro) {
        console.error('Erro ao buscar veículos:', erro);
        res.status(500).send('Erro ao carregar os veículos.');
    }
};