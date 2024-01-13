// models/Cliente.js
import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Cliente = sequelize.define('Cliente',
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
        direccion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, 
    {
        timestamps: true
    }
);

export default Cliente;
