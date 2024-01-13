import httpError from '../helpers/handleError.js'
import Restaurante from '../models/restaurante.js'

export const getItems = async (req, res) => {
    try {
        const restaurantes = await Restaurante.findAll()
        res.json(restaurantes)
    } catch (e) {
        httpError(res, e)
    }
};

export const getItem = async (req, res) => {
    try {
        const {id} = req.params
        const restaurantes = await Restaurante.findByPk(id)
        res.json(restaurantes)
    } catch (e) {
        httpError(res, e)
    }
};

export const createItem = async (req, res) => {
    try {
        const {nombre, direccion} = req.body
        const newRestaurante = await Restaurante.create({
            nombre,
            direccion
        })
        res.json(newRestaurante)
    } catch (e) {
        httpError(res, e)
    }
};

export const updateItem = async (req, res) => {
    try {
        const {id} = req.params
        console.log(id)
        const {nombre, direccion} = req.body

        const restaurante = await Restaurante.findByPk(id)
        restaurante.nombre = nombre ? nombre : restaurante.nombre
        restaurante.direccion = direccion ? direccion : restaurante.direccion
        await restaurante.save()

        res.json(restaurante)
    } catch (e) {
        httpError(res, e)
    }
};

export const deleteItem = async (req, res) => {
    try {
        const {id} = req.params
        await Restaurante.destroy({
            where:{
                id:id
            },
        });
        res.sendStatus(204)
    } catch (e) {
        httpError(res, e)
    }
};