import React from "react";
import { useCart } from "./CartContext";

export default function CartNotification() { //Fitur : Notifikasi ketika +keranjang
    const { showNotification } = useCart();

    if (!showNotification) return null

    return (
        <div className="notification-container-custom">
            <div className="notification-content">
                <i className="bi bi-check-circle-fill me-2"></i>
                Add to Cart!
            </div>
        </div>
    )
}