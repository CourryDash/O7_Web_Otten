import products from "../models/products.js";

export const getAllProducts = async (req, res) => {
    try {
        const allProducts = await products.findAll();
        res.json(allProducts);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Failed to fetch products" });
    }
};

export const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await products.findByPk(id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: "Product not found" });
        }
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ error: "Failed to fetch product" });
    }
};

export const getProductsByCategory = async (req, res) => {
    const { categoryId } = req.params;
    try {
        const productsByCategory = await products.findAll({ where: { id_kategori: categoryId } });
        res.json(productsByCategory);
    } catch (error) {
        console.error("Error fetching products by category:", error);
        res.status(500).json({ error: "Failed to fetch products by category" });
    }
};

export const createProduct = async (req, res) => {
    const { id_kategori, nama_produk, harga, stok, deskripsi, rating, terjual, img_product } = req.body;
    try {
        const newProduct = await products.create({
            id_kategori,
            nama_produk,
            harga,
            stok,
            deskripsi,
            rating,
            terjual,
            img_product
        });
        res.status(201).json(newProduct);
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ error: "Failed to create product" });
    }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { id_kategori, nama_produk, harga, stok, deskripsi, rating, terjual, img_product } = req.body;
    try {
        const product = await products.findByPk(id);
        if (product) {
            await product.update({
                id_kategori,
                nama_produk,
                harga,
                stok,
                deskripsi,
                rating,
                terjual,
                img_product
            });
            res.json(product);
        } else {
            res.status(404).json({ error: "Product not found" });
        }
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await products.findByPk(id);
        if (product) {
            await product.destroy();
            res.json({ message: "Product deleted successfully" });
        } else {
            res.status(404).json({ error: "Product not found" });
        }
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ error: "Failed to delete product" });
    }
};

