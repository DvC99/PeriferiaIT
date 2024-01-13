import httpError from '../helpers/handleError.js'
import ItemPedido from '../models/itemPedido.js'

export const getItems = async (req, res) => {
    try {
        const itemPedidos = await ItemPedido.findAll()
        res.json(itemPedidos)
    } catch (e) {
        httpError(res, e)
    }
};

export const getItem = async (req, res) => {
    try {
        const {id} = req.params
        const itemPedidos = await ItemPedido.findByPk(id)
        res.json(itemPedidos)
    } catch (e) {
        httpError(res, e)
    }
};

export const createItem = async (req, res) => {
    try {
        const {nombre, cantidad, precio, PedidoId} = req.body
        const newItemPedido = await ItemPedido.create({nombre, cantidad, precio, PedidoId})
        res.json(newItemPedido)
    } catch (e) {
        httpError(res, e)
    }
};

export const updateItem = async (req, res) => {
    try {
        const {id} = req.params
        const itemPedido = await ItemPedido.findOne(id)
        itemPedido.set(req.body)
        await itemPedido.save()

        res.json(itemPedido)
    } catch (e) {
        httpError(res, e)
    }
};

export const deleteItem = async (req, res) => {
    try {
        const {id} = req.params
        await ItemPedido.destroy({
            where:{
                id:id
            },
        });
        res.sendStatus(204)
    } catch (e) {
        httpError(res, e)
    }
};