import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;
const API_URL = `${BASE_URL}/cart`;

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [showNotification, setShowNotification] = useState(false);
    const [loading, setLoading] = useState(true);
    const [infoMessage, setInfoMessage] = useState('');

    const token = localStorage.getItem('token');

    const authConfig = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    useEffect(() => {
        const fetchCartItems = async () => {
            if (!token) {
                setLoading(false);
                return;
            }
            try {
                const response = await axios.get(`${API_URL}`, authConfig);
                setCartItems(response.data);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCartItems();
    }, [token]);

    const addToCart = async (product) => {
        if (!token) {
            setInfoMessage('Please log in to add items to your cart.');
            setTimeout(() => setInfoMessage(''), 3000);
            return;
        }

        try {
            const response = await axios.post(`${API_URL}/add`, {
                id_produk: product.id_produk,
                qty: 1
            }, authConfig);

            setCartItems(response.data);
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 3000);
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    const removeFromCart = async (id_cart) => {
        try {
            const response = await axios.put(`${API_URL}/remove/${id_cart}`, {}, authConfig);
            setCartItems(response.data);
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    const deleteItem = async (id_cart) => {
        try {
            await axios.delete(`${API_URL}/item/${id_cart}`, authConfig);
            setCartItems((prevItems) => prevItems.filter((item) => item.id_cart !== id_cart));
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    const clearCart = async () => {
        try {
            await axios.delete(`${API_URL}/clear`, authConfig);
            setCartItems([]);
        } catch (error) {
            console.error('Error clearing cart:', error);
        }
    };

    const cartCount = cartItems.reduce((total, item) => total + item.qty, 0);

    const checkout = async () => {
        if (!token) {
            setInfoMessage('Please log in to add items to your cart.');
            setTimeout(() => setInfoMessage(''), 3000);
            return;
        }

        try {
            await axios.post(`${API_URL}/checkout/`, {}, authConfig);
            setCartItems([]);
            return true;
        } catch (err) {
            console.error("Checkout error:", err);
            return false;
        }
    }



    return (
        <CartContext.Provider value={{ cartItems, cartCount, addToCart, showNotification, removeFromCart, deleteItem, clearCart, loading, checkout }}>
            {
                infoMessage && (
                    <div className="cart-info-message">{infoMessage}</div>
                )
            }
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);