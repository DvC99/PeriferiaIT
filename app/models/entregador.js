import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Entregador = sequelize.define('Entregador',
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
        vehiculo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true
    }
);

export default Entregador