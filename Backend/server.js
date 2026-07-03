import app from './src/app.js';
import { sequelize } from './src/models/index.js';

const port = 8000;

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Mysql connection has been established successfully.');

        await sequelize.sync();
        console.log('sync succesfully')

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

startServer();