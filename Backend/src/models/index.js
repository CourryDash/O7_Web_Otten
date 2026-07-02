import sequelize from '../config/database.js';
import users from './users.js';
import categories from './categories.js';
import products from './products.js';
import cart from './cart.js';

// relationships between categories and products
categories.hasMany(products, { foreignKey: 'id_kategori' });
products.belongsTo(categories, { foreignKey: 'id_kategori' });

// relationships between users and cart
users.hasMany(cart, { foreignKey: 'id_user' });
cart.belongsTo(users, { foreignKey: 'id_user' });

// relationships between products and cart  
products.hasMany(cart, { foreignKey: 'id_produk' });
cart.belongsTo(products, { foreignKey: 'id_produk' });

export {sequelize, users, categories, products, cart};