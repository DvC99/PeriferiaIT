import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Restaurante = sequelize.define('Restaurante', 
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
        disponibilidad: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        timestamps: true
    }
);

export default Restaurante;