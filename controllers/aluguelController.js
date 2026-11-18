import conexao from '../config/conexao.js';
import Veiculo from '../models/veiculo.js';
import Aluguel from '../models/aluguel.js';

const CLIENTE_PADRAO_ID = new conexao.Types.ObjectId('000000000000000000000001');

export const abrirAgendamento = async (req, res) => {
    try {
        const veiculos = await Veiculo.find();
        const veiculoSelecionado = req.query.veiculo || '';

        res.render('agendamento', {
            title: 'AutoLoca - Agendar Aluguel',
            veiculos,
            veiculoSelecionado
        });
    } catch (erro) {
        console.error('Erro ao carregar agendamento:', erro);
        res.status(500).send('Erro ao carregar a página de agendamento.');
    }
};

export const salvarAgendamento = async (req, res) => {
    try {
        const { veiculo, data, dias } = req.body;

        const veiculoEncontrado = await Veiculo.findById(veiculo);
        if (!veiculoEncontrado) {
            return res.status(404).send('Veículo não encontrado.');
        }

        const valorTotal = veiculoEncontrado.precopordia * Number(dias);

        await Aluguel.create({
            cliente: CLIENTE_PADRAO_ID,
            veiculo: veiculoEncontrado._id,
            data: new Date(data),
            valor: valorTotal
        });

        res.redirect('/');
    } catch (erro) {
        console.error('Erro ao salvar agendamento:', erro);
        res.status(500).send('Erro ao confirmar o agendamento.');
    }
};