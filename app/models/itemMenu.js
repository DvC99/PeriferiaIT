import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

import Restaurante from './restaurante.js'

const ItemMenu = sequelize.define('ItemMenu',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        timestamps: true
    }
);


Restaurante.hasMany(ItemMenu)
ItemMenu.belongsTo(Restaurante)

export default ItemMenu