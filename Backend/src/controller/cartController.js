import Cart from "../models/cart.js";
import products from "../models/products.js";
import sequelize from "../config/database.js";

export const addToCart = async (req, res) => {
    try {
        const { id_produk, qty } = req.body;
        const id_user = req.user.id_user; 
        if (!qty || qty <= 0) {
            return res.status(400).json({ error: "Jumlah harus lebih besar dari 0" });
        }

        const product = await products.findByPk(id_produk);
        if (!product) {
            return res.status(404).json({ error: "Produk tidak ditemukan" });
        }
        if (product.stok <= 0) {
            return res.status(400).json({ error: "Produk habis" });
        }

        const existingCartItem = await Cart.findOne({
            where: { id_user, id_produk }
        });

        if (existingCartItem) {
            const newQty = existingCartItem.qty + qty;
            if (newQty > product.stok) {
                return res.status(400).json({ error: "Jumlah melebihi stok tersedia" });
            }
            existingCartItem.qty = newQty;
            await existingCartItem.save();
        } else {
            if (qty > product.stok) {
                return res.status(400).json({ error: "Jumlah melebihi stok tersedia" });
            }
            await Cart.create({ id_user, id_produk, qty });
        }

        const allCartItems = await Cart.findAll({
            where: { id_user },
            include: [{
                model: products,
                attributes: ['nama_produk', 'harga', 'img_product', 'stok']
            }]
        });

        res.json(allCartItems);
    } catch (error) {
        console.error("Error adding to cart:", error);
        res.status(500).json({ error: "Failed to add item to cart" });
    }
};

export const getCartItems = async (req, res) => {
    try {
        const id_user = req.user.id_user;
        const cartItems = await Cart.findAll({
            where: { id_user },
            include: [{
                model: products,
                attributes: ['nama_produk', 'harga', 'img_product', 'stok']
            }]
        });
        res.json(cartItems);
    } catch (error) {
        console.error("Error fetching cart items:", error);
        res.status(500).json({ error: "Failed to fetch cart items" });
    }
};

export const removeFromCart = async (req, res) => {
    try {
        const { id_cart } = req.params;
        const cartItem = await Cart.findByPk(id_cart);
        if (!cartItem) {
            return res.status(404).json({ error: "Cart item not found" });
        }
        if (cartItem.qty > 1) {
            cartItem.qty -= 1;
            await cartItem.save();
        } else {
            await cartItem.destroy();
        }

        const allCartItems = await Cart.findAll({
            where: { id_user: cartItem.id_user },
            include: [{
                model: products,
                attributes: ['nama_produk', 'harga', 'img_product']
            }]
        });

        res.json(allCartItems);
    } catch (error) {
        console.error("Error removing from cart:", error);
        res.status(500).json({ error: "Failed to remove item from cart" });
    }
};

export const deleteCartItem = async (req, res) => {
    try {
        const { id_cart } = req.params;
        const cartItem = await Cart.findByPk(id_cart);
        if (!cartItem) {
            return res.status(404).json({ error: "Cart item not found" });
        }
        await cartItem.destroy();
        res.json({ message: "Cart item deleted" });
    } catch (error) {
        console.error("Error deleting cart item:", error);
        res.status(500).json({ error: "Failed to delete cart item" });
    }
};

export const clearCart = async (req, res) => {
    try {
        const id_user = req.user.id_user;
        await Cart.destroy({ where: { id_user } });
        res.json({ message: "Cart cleared" });
    } catch (error) {
        console.error("Error clearing cart:", error);
        res.status(500).json({ error: "Failed to clear cart" });
    }
};

export const checkout = async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
        const id_user = req.user.id_user;
        const cartItems = await Cart.findAll({
            where: { id_user }
        });

        if (cartItems.length === 0) {
            await transaction.rollback();
            return res.status(400).json({ error: "Keranjang kosong" });
        }

        for (const item of cartItems) {
            const product = await products.findByPk(item.id_produk, { transaction });
            if (!product) {
                await transaction.rollback();
                return res.status(404).json({ error: "Produk dalam keranjang tidak ditemukan" });
            }
            if (product.stok <= 0) {
                await transaction.rollback();
                return res.status(400).json({ error: `Produk ${product.nama_produk} habis` });
            }
            if (item.qty > product.stok) {
                await transaction.rollback();
                return res.status(400).json({ error: `Stok ${product.nama_produk} tidak cukup` });
            }
            product.stok -= item.qty;
            product.terjual += item.qty;
            await product.save({ transaction });
        }

        await Cart.destroy({
            where: { id_user },
            transaction
        });
        await transaction.commit();
        res.json({ message: "Berhasil Checkout" });
    } catch (err) {
        await transaction.rollback();
        console.error("Error during checkout:", err);
        res.status(500).json({ error: "Gagal Checkout" });
    }
};