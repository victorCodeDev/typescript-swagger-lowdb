import { Handler } from 'express';
import { getConnection } from '../db'
import { nanoid } from 'nanoid';

export const getClientes: Handler = (req, res) => {
    const clientes = getConnection().get('clientes').value();
    return res.json(clientes);
}

export const getClientesCount: Handler = (req, res) => {
    let cantidad = getConnection().get('clientes').value().length;
    res.json(cantidad);
}

export const getClienteById: Handler = (req, res) => {

    const cliente = getConnection().get('clientes').find({ id: req.params.id }).value();
    if (!cliente) {
        res.status(404).json({ msg: 'Cliente no encontrado' })
    }
    return res.json(cliente);
}

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

export const updateCliente: Handler = (req, res) => {
    const cliente = getConnection().get('clientes').find({ id: req.params.id }).value();
    if (!cliente) {
        res.status(404).json({ msg: 'Cliente no encontrado' })
    }
    const clienteModificado = getConnection().get('clientes').find({ id: req.params.id }).assign(req.body).write();
    res.json(clienteModificado);
}

export const deleteCliente: Handler = (req, res) => {
    const cliente = getConnection().get('clientes').find({ id: req.params.id }).value();
    if (!cliente) {
        res.status(404).json({ msg: 'Cliente no encontrado' })
    }
    const clienteEliminado = getConnection().get('clientes').remove({ id: req.params.id }).write();
    
    res.json(clienteEliminado);
}


