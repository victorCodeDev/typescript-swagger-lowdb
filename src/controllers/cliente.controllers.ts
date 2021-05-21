import { Handler } from 'express';
import { getConnection } from '../db'
import { nanoid } from 'nanoid';

export const getClientes: Handler = (req, res) => {
    const data = getConnection().get('clientes').value();
    return res.json(data);
}

export const getClientesCount: Handler = (req, res) => {

}

export const getClienteById: Handler = (req, res) => res.send('get cliente by id')

export const createCliente: Handler = (req, res) => {
    const { nombre, apellido, numeroDocumento } = req.body;

    const newCliente = {
        id: nanoid(),
        nombre,
        apellido,
        numeroDocumento
    };
    try {
        getConnection().get('clientes').push(newCliente).write()
        res.json(newCliente);
    } catch (error) {
        res.status(500).send(error);
    }

}

export const updateCliente: Handler = (req, res) => res.send('update cliente')

export const deleteCliente: Handler = (req, res) => res.send('delete cliente')


