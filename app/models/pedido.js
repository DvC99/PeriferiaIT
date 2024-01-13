// models/Pedido.js
import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

import Cliente from './cliente.js'
import Restaurante from './restaurante.js'

const Pedido = sequelize.define('Pedido', 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fechaPedido: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        estado: {
            type: DataTypes.STRING,
            default: 'creado',
            allowNull: false,
        },
    },{
        timestamps: true
    }
);

Cliente.hasMany(Pedido)
Pedido.belongsTo(Cliente)

Restaurante.hasMany(Pedido)
Pedido.belongsTo(Restaurante)

export default Pedido