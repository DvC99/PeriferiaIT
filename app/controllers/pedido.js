import httpError from '../helpers/handleError.js'
import Pedido from '../models/pedido.js'

export const getItems = async (req, res) => {
    try {
        const pedidos = await Pedido.findAll()
        res.json(pedidos)
    } catch (e) {
        httpError(res, e)
    }
};

export const getItem = async (req, res) => {
    try {
        const {id} = req.params
        const pedidos = await Pedido.findByPk(id)
        res.json(pedidos)
    } catch (e) {
        httpError(res, e)
    }
};

export const createItem = async (req, res) => {
    try {
        const {ClienteId, RestauranteId, fechaPedido, estado} = req.body
        const newPedido = await Pedido.create({ClienteId, RestauranteId, fechaPedido, estado})
        res.json(newPedido)
    } catch (e) {
        httpError(res, e)
    }
};

export const updateItem = async (req, res) => {
    try {
        const {id} = req.params
        const pedido = await Pedido.findOne(id)

        pedido.set(req.body)
        await pedido.save()

        res.json(pedido)
    } catch (e) {
        httpError(res, e)
    }
};

export const deleteItem = async (req, res) => {
    try {
        const {id} = req.params
        await Pedido.destroy({
            where:{
                id:id
            },
        });
        res.sendStatus(204)
    } catch (e) {
        httpError(res, e)
    }
};