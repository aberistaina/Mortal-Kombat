import { DataTypes} from "sequelize";
import { sequelize } from "../database/database.js";


//Tabla Personajes

export const Personajes = sequelize.define(
    "Personajes",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre:{
            type: DataTypes.STRING(20),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        reino:{
            type: DataTypes.STRING(20),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        raza:{
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        apariciones:{
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        imagen:{
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        descripcion:{
            type:DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        historia:{
            type:DataTypes.TEXT
        }
    },
    {
        timestamps: false,
        tableName: "Personajes"
    }
)
