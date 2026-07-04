import { Sequelize } from "sequelize";
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: false, 
    dialectOptions: {
        ssl: {
            ca: process.env.DB_SSL,
            rejectUnauthorized: false
        }
    }
});

export default sequelize;