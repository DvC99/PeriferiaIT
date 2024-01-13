import httpError from '../helpers/handleError.js'
import Entregador from '../models/entregador.js'

export const getItems = async (req, res) => {
    try {
        const entregadores = await Entregador.findAll()
        res.json(entregadores)
    } catch (e) {
        httpError(res, e)
    }
};

export const getItem = async (req, res) => {
    try {
        const {id} = req.params
        const entregadores = await Entregador.findByPk(id)
        res.json(entregadores)
    } catch (e) {
        httpError(res, e)
    }
};

export const createItem = async (req, res) => {
    try {
        const {nombre, vehiculo} = req.body
        const newEntregador = await Entregador.create({nombre, vehiculo})
        res.json(newEntregador)
    } catch (e) {
        httpError(res, e)
    }
};

export const updateItem = async (req, res) => {
    try {
        const {id} = req.params
        const entregador = await Entregador.findOne(id)
        entregador.set(req.body)
        await entregador.save()

        res.json(entregador)
    } catch (e) {
        httpError(res, e)
    }
};

export const deleteItem = async (req, res) => {
    try {
        const {id} = req.params
        await Entregador.destroy({
            where:{
                id:id
            },
        });
        res.sendStatus(204)
    } catch (e) {
        httpError(res, e)
    }
};