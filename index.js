import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import './config/conexao.js'; // Garante a conexão com o MongoDB ao iniciar
import routes from './routes/route.js';
import veiculoRoutes from './routes/VeiculoRoutes.js';
import aluguelRoutes from './routes/AluguelRoutes.js';

const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Caminho correto das views e public
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Servir arquivos estáticos e views
app.use(express.static(join(__dirname, '/public')));
app.set('views', join(__dirname, '/views'));

// Rotas
app.use(veiculoRoutes);
app.use(aluguelRoutes);
app.use(routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// Exporta o handler compatível com Vercel
export default app;