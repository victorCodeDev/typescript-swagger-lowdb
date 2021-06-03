import { Router } from 'express';
import { getClientes, getClientesCount, getClienteById, createCliente, updateCliente, deleteCliente } from '../controllers/cliente.controllers';
const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Cliente:
 *        type: object
 *        properties:
 *          id:
 *            type: string
 *            description: 'Id autogenerado para el cliente'
 *          nombre:
 *            type: string
 *            description: 'Nombre del cliente'
 *          apellido:
 *            type: string
 *            description: 'Apellido del cliente'
 *          numeroDocumento:
 *            type: string
 *            description: 'Número de Documento del cliente'
 *          required:
 *            - nombre
 *            - apellido
 *            - numeroDocumento
 *          example:
 *            id: 11111
 *            nombre: Juan
 *            apellido: Perez
 *            numeroDocumento: 2135707
 *      ClienteNotFound:
 *        type: object
 *        properties:
 *          msg:
 *            type: string
 *            description: Mensaje cuando no se encuentra el cliente
 *        example:
 *          msg: Cliente no encontrado
 * 
 *  parameters:
 *    ClienteId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: El id del cliente
 */

/**
* @swagger
* tags:
*   name: Clientes
*   description: Clientes endpoint
*/

/**
 * @swagger
 * /clientes:
 *  get:
 *    summary: Retorna la lista de clientes
 *    tags: [Clientes]
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
 *     tags: [Clientes]
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


/**
 * @swagger
 * /cliente/{id}:
 *  get:
 *    summary: Retorna un cliente por su id
 *    tags: [Clientes]
 *    parameters:
 *      - $ref: '#/components/parameters/ClienteId'
 *    responses:
 *      200:
 *        description: Busca un cliente
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Cliente'
 *      404:
 *        description: El cliente no ha sido encontrado
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ClienteNotFound'
 */
router.get('/cliente/:id', getClienteById);


/**
 * @swagger
 * /cliente:
 *  post:
 *    summary: Crear un nuevo Cliente
 *    tags: [Clientes]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Cliente'
 *    responses:
 *      200:
 *        description: El cliente ha sido creado con exito
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Cliente'
 *      500:
 *        description: Error en el servisor
 *
 */
router.post('/cliente', createCliente);


/**
 * @swagger
 * /cliente/{id}:
 *  delete:
 *    summary: Elimina un cliente por su id
 *    tags: [Clientes]
 *    parameters:
 *      - $ref: '#/components/parameters/ClienteId'
 *    responses:
 *      200:
 *        description: El cliente ha sido eliminado
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Cliente'
 *      404:
 *        description: El cliente no ha sido encontrado
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ClienteNotFound'
 *
 */
router.delete('/cliente/:id', deleteCliente);


/**
 * @swagger
 * /cliente/{id}:
 *  put:
 *    summary: Actualiza un cliente por id
 *    tags: [Clientes]
 *    parameters:
 *      - $ref: '#/components/parameters/ClienteId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Cliente'
 *    responses:
 *      200:
 *        description: Cliente actualizado
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Cliente'
 *      404:
 *        description: El cliente no ha sido encontrado
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ClienteNotFound'
 *
 */
router.put('/cliente/:id', updateCliente);


export default router;