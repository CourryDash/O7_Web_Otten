import categories from "../models/categories.js";

export const getAllCategories = async (req, res) => {
    try {
        const allCategories = await categories.findAll();
        res.status(200).json(allCategories);
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ error: "Failed to fetch categories" });
    }
};

export const getCategoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await categories.findByPk(id);
        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }
        res.status(200).json(category);
    } catch (error) {
        console.error("Error fetching category:", error);
        res.status(500).json({ error: "Failed to fetch category" });
    }
};

export const createCategory = async (req, res) => {
    const { nama_kategori, icon_url } = req.body;
    try {
        const newCategory = await categories.create({ nama_kategori, icon_url });
        res.status(201).json(newCategory);
    } catch (error) {
        console.error("Error creating category:", error);
        res.status(500).json({ error: "Failed to create category" });
    }
};

export const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { nama_kategori, icon_url } = req.body;
    try {
        const category = await categories.findByPk(id);
        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }
        category.nama_kategori = nama_kategori || category.nama_kategori;
        category.icon_url = icon_url || category.icon_url;
        await category.save();
        res.status(200).json(category);
    } catch (error) {
        console.error("Error updating category:", error);
        res.status(500).json({ error: "Failed to update category" });
    }
};

export const deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await categories.findByPk(id);
        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }
        await category.destroy();
        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        console.error("Error deleting category:", error);
        res.status(500).json({ error: "Failed to delete category" });
    }
};