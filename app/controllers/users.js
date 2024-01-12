const httpError = require('../helpers/handleError')
const userModel = require('../models/users')

const getItems = async (req, res) => {
    try {
        const listAll = await userModel.find({})
        res.send({data: listAll})
    } catch (e) {
        httpError(res, e)
    }
}

const getItem = async (req, res) => {
    try {
    
    } catch (e) {
        httpError(res, e)
    }
}

const createItem = async (req, res) => {
    try {
        const {name, age, email} = req.body
        const resDatail = await userModel.create({
            name, age, email
        })
        res.send({data: resDatail})
    } catch (e) {
        httpError(res, e)
    }
}

const updateItem = (req, res) => {
    try {
        
    } catch (e) {
        httpError(res, e)
    }
}

const deleteItem = (req, res) => {
    try {
        
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};