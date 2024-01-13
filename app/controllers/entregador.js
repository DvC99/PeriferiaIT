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
        const {nombre, direccion} = req.body
        const newEntregador = await Entregador.create({
            nombre,
            direccion
        })
        res.json(newEntregador)
    } catch (e) {
        httpError(res, e)
    }
};

export const updateItem = async (req, res) => {
    try {
        const {id} = req.params
        console.log(id)
        const {nombre, direccion} = req.body

        const cliente = await Entregador.findByPk(id)
        cliente.nombre = nombre ? nombre : cliente.nombre
        cliente.direccion = direccion ? direccion : cliente.direccion
        await cliente.save()

        res.json(cliente)
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