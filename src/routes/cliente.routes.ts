import { Router } from 'express';
import { getClientes, getClientesCount, getClienteById, createCliente, updateCliente, deleteCliente } from '../controllers/cliente.controllers';
const router = Router();

router.get('/clientes', getClientes);
router.get('/clientes/count', getClientesCount);
router.get('/cliente/:id', getClienteById);
router.post('/cliente', createCliente);
router.delete('/cliente/:id', deleteCliente);
router.put('/clientes/:id', updateCliente);


export default router;