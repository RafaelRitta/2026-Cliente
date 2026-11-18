import { Router } from 'express';
import { listarVeiculos } from '../controllers/VeiculoController.js';

const router = Router();

router.get('/', listarVeiculos);

export default router;