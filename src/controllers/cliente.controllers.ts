import { Handler } from 'express';

export const getClientes: Handler = (req, res) => res.send('get clientes')

export const getClientesCount: Handler = (req, res) => res.send('get clientes count')

export const getClienteById: Handler = (req, res) => res.send('get cliente by id')

export const createCliente: Handler = (req, res) => res.send('create cliente')

export const updateCliente: Handler = (req, res) => res.send('update cliente')

export const deleteCliente: Handler = (req, res) => res.send('delete cliente')


