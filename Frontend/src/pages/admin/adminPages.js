import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/adminPages.css';

const AdminPages = () => {
    const [productItems, setProductItems] = useState([]);
    const [categoryItems, setCategoryItems] = useState([]);
    const userName = localStorage.getItem('userName');

    const API_URL = process.env.REACT_APP_API_URL;

    const fetchData = async () => {
        try {
            const [productRes, categoryRes] = await Promise.all([
                axios.get(`${API_URL}/products`),
                axios.get(`${API_URL}/categories`)
            ]);
            setProductItems(productRes.data);
            setCategoryItems(categoryRes.data);
        } catch (error) {
            console.error("Gagal mengambil data:", error);
        }
    };

    useEffect(() => { fetchData(); }, []);

    return (
        <div className="admin-pages">
            <h2 className="fw-bold mb-2">Dashboard Admin</h2>
            <h3 className="fw-bold text-primary">Selamat datang, {userName}!</h3>
            <p className="text-muted">Selamat datang di pusat kendali etalase toko.</p>

            {/* Kotak-kotak Informasi (Bisa dihubungkan ke API nanti) */}
            <div className="admin-pages-stats">
                <div className="card shadow-sm border-0 p-4 admin-pages-stat-card">
                    <h5 className="text-muted">Total Produk</h5>
                    <h1 className="fw-bold text-primary mt-2">{productItems.length}</h1>
                </div>

                <div className="card shadow-sm border-0 p-4 admin-pages-stat-card">
                    <h5 className="text-muted">Total Kategori</h5>
                    <h1 className="fw-bold text-success mt-2">{categoryItems.length}</h1>
                </div>
            </div>

            <div className="admin-pages-guide">
                <h5>Panduan Admin</h5>
                <p className="text-muted mb-0">
                    Gunakan navigasi di sebelah kiri untuk menambah, mengubah, atau menghapus data kategori dan produk. Segala perubahan akan langsung tercermin di halaman utama pelanggan.
                </p>
            </div>
        </div>
    );
}

export default AdminPages;