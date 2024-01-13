import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

import Entregador from './entregador.js'
import Pedido from './pedido.js'

const PedidoEntrega = sequelize.define('PedidoEntrega',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        estadoEntrega: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true
    }
);

Entregador.hasMany(PedidoEntrega)
PedidoEntrega.belongsTo(Entregador)

Pedido.hasOne(PedidoEntrega)
PedidoEntrega.belongsTo(Pedido)

export default PedidoEntrega;