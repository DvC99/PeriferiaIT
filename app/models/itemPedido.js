// models/itemPedido.js
import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

import Pedido from './pedido.js'


const ItemPedido = sequelize.define('ItemPedido',
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
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    }, {
    timestamps: true
}
);

Pedido.hasMany(ItemPedido);
ItemPedido.belongsTo(Pedido)

export default ItemPedido;
