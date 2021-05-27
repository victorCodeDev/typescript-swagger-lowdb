import { Router } from 'express';
import { getClientes, getClientesCount, getClienteById, createCliente, updateCliente, deleteCliente } from '../controllers/cliente.controllers';
const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Cliente:
 *          Type: object
 *          properties:
 *              id:
 *                  type: string
 *                  description: 'Id autogenerado para el cliente'
 *              nombre:
 *                  type: string
 *                  description: 'Nombre del cliente'
 *              apellido:
 *                  type: string
 *                  description: 'Apellido del cliente'
 *              numeroDocumento:
 *                  type: string
 *                  description: 'Número de Documento del cliente'
 *          required:
 *              - nombre
 *              - apellido
 *              - numeroDocumento
 *          example:
 *              id: 11111
 *              nombre: Juan
 *              apellido: Perez
 *              numeroDocumento: 2135707
 */

/**
 * @swagger
 * /clientes:
 *  get:
 *    summary: Returns a list of tasks
 *    tags: [Tasks]
 *    responses:
 *      200:
 *        description: the list of tasks
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Cliente'
 */

router.get('/clientes', getClientes);
router.get('/clientes/count', getClientesCount);
router.get('/cliente/:id', getClienteById);
router.post('/cliente', createCliente);
router.delete('/cliente/:id', deleteCliente);
router.put('/cliente/:id', updateCliente);


export default router;