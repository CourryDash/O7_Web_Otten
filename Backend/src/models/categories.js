import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const categories = sequelize.define('categories', {
    id_kategori: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama_kategori: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    icon_url: {
        type: DataTypes.STRING(255)
    }
}, {
    tableName: 'categories',
    timestamps: false
});

export default categories;