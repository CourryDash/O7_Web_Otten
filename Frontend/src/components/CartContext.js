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

    const isLoggedIn = localStorage.getItem('userId') !== null;
    const userRole = localStorage.getItem('userRole');

    useEffect(() => {
        if (infoMessage) {
            const timer = setTimeout(() => {
                setInfoMessage('');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [infoMessage]);

    useEffect(() => {
        if (showNotification) {
            const timer = setTimeout(() => {
                setShowNotification(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showNotification]);

    const fetchCartItems = async () => {
        if (!isLoggedIn) {
            setLoading(false);
            return;
        }
        try {
            const response = await axios.get(`${API_URL}`, {
                withCredentials: true
            });
            setCartItems(response.data);
        } catch (error) {
            console.error('Error fetching cart items:', error);
            if (error.response?.status === 401) {
                localStorage.removeItem('userId');
                localStorage.removeItem('userEmail');
                localStorage.removeItem('userRole');
                localStorage.removeItem('userName');
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCartItems();
    }, [isLoggedIn]);

    const addToCart = async (product) => {
        if (!isLoggedIn) {
            setInfoMessage('Anda perlu login terlebih dahulu untuk menambahkan ke keranjang.');
            return;
        }

        if (userRole === 'admin') {
            setInfoMessage('Admin tidak dapat menambahkan produk ke keranjang.');
            return;
        }

        try {
            const response = await axios.post(`${API_URL}/add`, {
                id_produk: product.id_produk,
                qty: 1
            }, {
                withCredentials: true
            });

            setCartItems(response.data);
            setShowNotification(true);
        } catch (error) {
            console.error('Error adding item to cart:', error);
            if (error.response?.status === 401) {
                setInfoMessage('Sesi Anda telah habis. Silakan login kembali.');
                localStorage.clear();
                window.location.href = '/login';
            }
        }
    };

    const removeFromCart = async (id_cart) => {
        try {
            const response = await axios.put(`${API_URL}/remove/${id_cart}`, {}, {
                withCredentials: true
            });
            setCartItems(response.data);
        } catch (error) {
            console.error('Error removing item from cart:', error);
            if (error.response?.status === 401) {
                localStorage.clear();
                window.location.href = '/login';
            }
        }
    };

    const deleteItem = async (id_cart) => {
        try {
            await axios.delete(`${API_URL}/item/${id_cart}`, {
                withCredentials: true
            });
            setCartItems((prevItems) => prevItems.filter((item) => item.id_cart !== id_cart));
        } catch (error) {
            console.error("Error deleting item:", error);
            if (error.response?.status === 401) {
                localStorage.clear();
                window.location.href = '/login';
            }
        }
    };

    const clearCart = async () => {
        try {
            await axios.delete(`${API_URL}/clear`, {
                withCredentials: true
            });
            setCartItems([]);
        } catch (error) {
            console.error('Error clearing cart:', error);
            if (error.response?.status === 401) {
                localStorage.clear();
                window.location.href = '/login';
            }
        }
    };

    const cartCount = cartItems.reduce((total, item) => total + item.qty, 0);

    const checkout = async () => {
        if (!isLoggedIn) {
            setInfoMessage('Silakan login terlebih dahulu untuk checkout.');
            return;
        }

        try {
            await axios.post(`${API_URL}/checkout/`, {}, {
                withCredentials: true
            });
            setCartItems([]);
            return true;
        } catch (err) {
            console.error("Checkout error:", err);
            if (err.response?.status === 401) {
                setInfoMessage('Sesi Anda telah habis. Silakan login kembali.');
                localStorage.clear();
                window.location.href = '/login';
            }
            return false;
        }
    };

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