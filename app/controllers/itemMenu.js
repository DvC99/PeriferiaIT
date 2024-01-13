import httpError from '../helpers/handleError.js'
import ItemMenu from '../models/itemMenu.js'

export const getItems = async (req, res) => {
    try {
        const itemMenus = await ItemMenu.findAll()
        res.json(itemMenus)
    } catch (e) {
        httpError(res, e)
    }
};

export const getItem = async (req, res) => {
    try {
        const { id } = req.params
        const itemMenus = await ItemMenu.findByPk(id)
        res.json(itemMenus)
    } catch (e) {
        httpError(res, e)
    }
};

export const createItem = async (req, res) => {
    try {
        const { nombre, descripcion, precio, RestauranteId } = req.body
        const newItemMenu = await ItemMenu.create({ nombre, descripcion, precio, RestauranteId })
        res.json(newItemMenu)
    } catch (e) {
        httpError(res, e)
    }
};

export const updateItem = async (req, res) => {
    try {
        const { id } = req.params
        const itemMenu = await ItemMenu.findOne(id)
        itemMenu.set(req.body)
        await itemMenu.save()

        res.json(itemMenu)
    } catch (e) {
        httpError(res, e)
    }
};

export const deleteItem = async (req, res) => {
    try {
        const { id } = req.params
        await ItemMenu.destroy({
            where: {
                id: id
            },
        });
        res.sendStatus(204)
    } catch (e) {
        httpError(res, e)
    }
};