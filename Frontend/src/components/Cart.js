import React, { useState } from "react";
import { useCart } from "./CartContext";
import '../css/Cart.css'

export default function CartPage() {
    const { cartItems, addToCart, removeFromCart, deleteItem, clearCart, loading, checkout } = useCart();
    const [confirmVisible, setConfirmVisible] = useState(false);
    const [infoMessage, setInfoMessage] = useState('');

    if (loading) {
        return <div>Memuat Isi Keranjang...</div>;
    }

    const totalPrice = cartItems.reduce((acc, item) => {
        const harga = Number(item.product.harga) || 0;
        return acc + (harga * (item.qty || 1));
    }, 0);

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            setInfoMessage("Keranjang kosong. Tambahkan produk sebelum checkout.");
            return;
        }

        setInfoMessage('');
        setConfirmVisible(true);
    }

    const confirmCheckout = async () => {
        setConfirmVisible(false);
        const lanjut = await checkout();
        if (lanjut) {
            setInfoMessage("Terima kasih telah membeli produk kami!");
        } else {
            setInfoMessage("Terjadi kesalahan saat proses checkout.");
        }
        setTimeout(() => {
            setInfoMessage('');
        }, 4000);
    }

    const cancelCheckout = () => {
        setConfirmVisible(false);
    }

    return (
        <div className="container-cart-page">
            {/* LEFT SIDE */}
            <div>
                <div className="card">
                    <div className="card-header">Keranjang Belanja ({cartItems.length} Produk)</div>

                    {cartItems.length > 0 && (
                        <button
                            onClick={() => clearCart()}
                            style={{
                                border: 'none',
                                background: 'none',
                                color: '#ff4d4f',
                                fontSize: '14px',
                                fontWeight: 'normal',
                                cursor: 'pointer'
                            }}
                        >
                            Hapus Semua
                        </button>
                    )}

                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.product.id_produk}>
                            <input type="checkbox" defaultChecked />
                            <img src={item.product.img_product} alt={item.product.nama_produk} />

                            <div className="cart-info">
                                <div className="cart-title">{item.product.nama_produk}</div>
                                <div className="cart-variant">Kuantitas: {item.qty}</div>
                            </div>

                            <div className="qty">
                                <button
                                    onClick={() => removeFromCart(item.id_cart)}
                                    disabled={item.qty <= 1}
                                    style={{ cursor: item.qty <= 1 ? 'not-allowed' : 'pointer' }}
                                >-</button>
                                <span>{item.qty}</span>
                                <button
                                    onClick={() => addToCart(item)}
                                    disabled={item.product?.stok <= item.qty}
                                    style={{ cursor: item.product?.stok <= item.qty ? 'not-allowed' : 'pointer' }}
                                >
                                    +
                                </button>
                            </div>

                            <div className="price">
                                <span>
                                    Rp {(Number(item.product.harga) || 0).toLocaleString('id-ID')}
                                </span>
                                <button
                                    onClick={() => deleteItem(item.id_cart)}
                                    style={{
                                        border: 'none',
                                        background: 'none',
                                        color: '#ff4d4f',
                                        fontSize: '13px',
                                        cursor: 'pointer',
                                        marginTop: '5px'
                                    }}
                                >
                                    <i className="bi bi-trash"></i> Hapus
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div>
                <div className="card" style={{ padding: 14 }}>
                    <div className="card-header">Rincian Pembelian</div>
                    <div className="summary-row">
                        <span>Total harga produk</span>
                        <span>Rp {totalPrice.toLocaleString('id-ID')}</span>
                    </div>
                    <button className="buy-btn" onClick={handleCheckout}>
                        Beli ({cartItems.length})
                    </button>
                </div>
            </div>

            {confirmVisible && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Konfirmasi Checkout</h3>
                        <p>Total harga: <strong>Rp {totalPrice.toLocaleString('id-ID')}</strong></p>
                        <p>Yakin ingin melanjutkan ke checkout?</p>
                        <div className="modal-actions">
                            <button className="modal-button cancel" onClick={cancelCheckout}>Batal</button>
                            <button className="modal-button confirm" onClick={confirmCheckout}>Lanjut</button>
                        </div>
                    </div>
                </div>
            )}

            {infoMessage && (
                <div className="cart-info-message">{infoMessage}</div>
            )}
        </div>
    );
}