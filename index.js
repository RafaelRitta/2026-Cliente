const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configura o motor de visualização para EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configura a pasta de arquivos estáticos (CSS e JS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para envio de formulários
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
    res.render('index', { title: 'Aluguel de Automóveis - Início' });
});

app.get('/agendamento', (req, res) => {
    res.render('agendamento', { title: 'Aluguel de Automóveis - Agendamento' });
});

app.get('/login', (req, res) => {
    res.render('login', { title: 'Aluguel de Automóveis - Autenticação' });
});

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});