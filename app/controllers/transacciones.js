import httpError from '../helpers/handleError.js'
import Transacciones from '../models/transacciones.js'

export const getItems = async (req, res) => {
    try {
        const transacciones = await Transacciones.findAll()
        res.json(transacciones)
    } catch (e) {
        httpError(res, e)
    }
};

export const getItem = async (req, res) => {
    try {
        const {id} = req.params
        const transacciones = await Transacciones.findByPk(id)
        res.json(transacciones)
    } catch (e) {
        httpError(res, e)
    }
};

export const createItem = async (req, res) => {
    try {
        const {monto, metodoPago, estado, PedidoId} = req.body
        const newTransacciones = await Transacciones.create({monto, metodoPago, estado, PedidoId})
        res.json(newTransacciones)
    } catch (e) {
        httpError(res, e)
    }
};

export const updateItem = async (req, res) => {
    try {
        const {id} = req.params
        const transacciones = await Transacciones.findOne(id)

        transacciones.set(req.body)
        await transacciones.save()

        res.json(transacciones)
    } catch (e) {
        httpError(res, e)
    }
};

export const deleteItem = async (req, res) => {
    try {
        const {id} = req.params
        await Transacciones.destroy({
            where:{
                id:id
            },
        });
        res.sendStatus(204)
    } catch (e) {
        httpError(res, e)
    }
};