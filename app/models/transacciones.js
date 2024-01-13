// models/Transacciones.js
import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

import Pedido from './pedido.js'

const Transacciones = sequelize.define('Transacciones',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        monto: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        metodoPago: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true
    }
);

Pedido.hasOne(Transacciones)
Transacciones.belongsTo(Pedido)

export default Transacciones