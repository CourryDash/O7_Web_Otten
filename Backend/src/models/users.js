import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const users = sequelize.define('users', {
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    google_id: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true
    },
    role: {
        type: DataTypes.STRING(20),
        defaultValue: 'user',
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
});

export default users;