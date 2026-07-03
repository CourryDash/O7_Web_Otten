import express from "express";
import { getAllCategories, getCategoryById, updateCategory, deleteCategory, createCategory } from "../controller/categoryController.js";
import { getAllProducts, getProductById, getProductsByCategory, updateProduct, deleteProduct, createProduct } from "../controller/productController.js";
import { loginUser, getAllUsers, getCurrentUser, getUserById, getUserByEmail, updateUser, deleteUser, createUser, logoutUser } from "../controller/userController.js";
import { addToCart, removeFromCart, deleteCartItem, clearCart, getCartItems, checkout } from "../controller/cartController.js";
import { verifyToken, isAdmin } from "../middleware/authMiddleware.js";
import passport from "../config/passport.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Category routes
router.get("/categories", getAllCategories);
router.get("/categories/:id", getCategoryById);
router.post("/categories", verifyToken, isAdmin, createCategory);
router.put("/categories/:id", verifyToken, isAdmin, updateCategory);
router.delete("/categories/:id", verifyToken, isAdmin, deleteCategory);

// Product routes
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.get("/products/category/:categoryId", getProductsByCategory);
router.post("/products", verifyToken, isAdmin, createProduct);
router.put("/products/:id", verifyToken, isAdmin, updateProduct);
router.delete("/products/:id", verifyToken, isAdmin, deleteProduct);

// User routes
router.post("/login", loginUser);
router.get("/users", verifyToken, isAdmin, getAllUsers);
router.get("/users/email/:email", verifyToken, isAdmin, getUserByEmail);
router.get("/users/:id_user", verifyToken, isAdmin, getUserById);
router.post("/users", createUser);
router.put("/me", verifyToken, updateUser);
router.delete("/me", verifyToken, deleteUser);
router.get("/me", verifyToken, getCurrentUser);
router.post("/logout", verifyToken, logoutUser);

// Cart routes
router.get("/cart", verifyToken, getCartItems); 
router.post("/cart/add", verifyToken, addToCart);
router.put("/cart/remove/:id_cart", verifyToken, removeFromCart);
router.delete("/cart/item/:id_cart", verifyToken, deleteCartItem);
router.delete("/cart/clear", verifyToken, clearCart);
router.post("/cart/checkout", verifyToken, checkout);

// google auth routes
const frontendUrl = process.env.FRONTEND_URL;

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback', 
    passport.authenticate('google', { session: false, failureRedirect: `${frontendUrl}/login` }), 
    (req, res) => {
        const user = req.user;

        const token = jwt.sign(
            { id_user: user.id_user, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.cookie('token', token, {
            httpOnly: true,
            // secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 3600000
        });

        res.redirect(`${frontendUrl}/login?auth=success`);
    }
);

export default router;