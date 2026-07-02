import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const products = sequelize.define('products', {
    id_produk: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_kategori: {
        type: DataTypes.INTEGER,
        references: { model: 'categories', key: 'id_kategori' }
    },
    nama_produk: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    harga: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false
    },
    stok: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0
        }
    },
    deskripsi: {
        type: DataTypes.TEXT
    },
    rating: {
        type: DataTypes.DECIMAL(2, 1),
        defaultValue: 0.0
    },
    terjual: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    img_product: {
        type: DataTypes.STRING(255)
    }
}, {
    tableName: 'products',
    timestamps: false
});

export default products;