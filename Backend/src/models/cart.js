import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Cart = sequelize.define('Cart', {
    id_cart: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_produk: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    qty: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
}, {
    tableName: 'cart',
    timestamps: false
});

export default Cart;