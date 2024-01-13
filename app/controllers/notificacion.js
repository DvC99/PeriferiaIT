import httpError from '../helpers/handleError.js'
import Notificaciones from '../models/notificacion.js'

export const getItems = async (req, res) => {
    try {
        const notificaciones = await Notificaciones.findAll()
        res.json(notificaciones)
    } catch (e) {
        httpError(res, e)
    }
};

export const getItem = async (req, res) => {
    try {
        const {id} = req.params
        const notificaciones = await Notificaciones.findByPk(id)
        res.json(notificaciones)
    } catch (e) {
        httpError(res, e)
    }
};

export const createItem = async (req, res) => {
    try {
        const {mensaje, tipo, ClienteId} = req.body
        const newNotificaciones = await Notificaciones.create({mensaje, tipo, ClienteId})
        res.json(newNotificaciones)
    } catch (e) {
        httpError(res, e)
    }
};

export const updateItem = async (req, res) => {
    try {
        const {id} = req.params
        const notificacion = await Notificaciones.findOne(id)

        notificacion.set(req.body)
        await notificacion.save()

        res.json(notificacion)
    } catch (e) {
        httpError(res, e)
    }
};

export const deleteItem = async (req, res) => {
    try {
        const {id} = req.params
        await Notificaciones.destroy({
            where:{
                id:id
            },
        });
        res.sendStatus(204)
    } catch (e) {
        httpError(res, e)
    }
};