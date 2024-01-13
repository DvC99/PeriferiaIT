// models/Notificaciones.js
import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

import Cliente from './cliente.js'


const Notificaciones = sequelize.define('Notificaciones',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        mensaje: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, 
    {
    timestamps: true
    }
);

Cliente.hasMany(Notificaciones)
Notificaciones.belongsTo(Cliente)

export default Notificaciones