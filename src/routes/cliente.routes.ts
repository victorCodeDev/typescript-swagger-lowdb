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
 *    summary: Retorna la lista de clientes
 *    tags: [Tasks]
 *    responses:
 *      200:
 *        description: Lista de clientes
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Cliente'
 */

router.get('/clientes', getClientes);

/**
 * @swagger
 * /clientes/count:
 *   get:
 *     summary: Retorna el total de clientes
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Retorna la cantidad total de clientes
 *         content:
 *           text/plain:
 *             schema:
 *               type: integer
 *               example: 10
 */

router.get('/clientes/count', getClientesCount);
router.get('/cliente/:id', getClienteById);
router.post('/cliente', createCliente);
router.delete('/cliente/:id', deleteCliente);
router.put('/cliente/:id', updateCliente);


export default router;