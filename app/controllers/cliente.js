import httpError from '../helpers/handleError.js'
import Cliente from '../models/cliente.js'

export const getItems = async (req, res) => {
    try {
        const clientes = await Cliente.findAll()
        res.json(clientes)
    } catch (e) {
        httpError(res, e)
    }
};

export const getItem = async (req, res) => {
    try {
        const {id} = req.params
        const clientes = await Cliente.findByPk(id)
        res.json(clientes)
    } catch (e) {
        httpError(res, e)
    }
};

export const createItem = async (req, res) => {
    try {
        const {nombre, direccion} = req.body
        const newCliente = await Cliente.create({nombre, direccion})
        res.json(newCliente)
    } catch (e) {
        httpError(res, e)
    }
};

export const updateItem = async (req, res) => {
    try {
        const {id} = req.params
        const cliente = await Cliente.findOne(id)
        cliente.set(req.body)
        await cliente.save()

        res.json(cliente)
    } catch (e) {
        httpError(res, e)
    }
};

export const deleteItem = async (req, res) => {
    try {
        const {id} = req.params
        await Cliente.destroy({
            where:{
                id:id
            },
        });
        res.sendStatus(204)
    } catch (e) {
        httpError(res, e)
    }
};