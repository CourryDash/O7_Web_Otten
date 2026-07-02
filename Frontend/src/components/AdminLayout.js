import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import '../css/style.css';
import '../css/AdminLayout.css';

export default function AdminLayout() {
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName');

    const handleLogout = () => {
        // Hapus semua data sesi dari browser
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userName');

        alert('Berhasil keluar dari mode Admin.');
        navigate('/login');
    };

    return (
        <div className="admin-layout">
            {/* --- SIDEBAR KIRI --- */}
            <div className="admin-sidebar">
                <h3 className="fw-bold mb-4 admin-sidebar-title">Otten Admin</h3>

                <ul className="admin-sidebar-menu">
                    <li className="admin-sidebar-item">
                        <Link to="/admin" className="admin-sidebar-link">🏠 Dashboard</Link>
                    </li>
                    <li className="admin-sidebar-item">
                        <Link to="/admin/categories" className="admin-sidebar-link">📂 Kelola Kategori</Link>
                    </li>
                    <li className="admin-sidebar-item">
                        <Link to="/admin/products" className="admin-sidebar-link">☕ Kelola Produk</Link>
                    </li>
                    <li className="admin-sidebar-item">
                        <Link to="/" className="admin-sidebar-link">Halaman Utama</Link>
                    </li>
                </ul>

                <div className="d-flex align-items-center">

                    {/* CUKUP UBAH 'dropdown' MENJADI 'dropup' DI SINI */}
                    <div className="dropup">
                        <a
                            className="nav-link dropdown-toggle d-flex align-items-center"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown" // Tetap data-bs-toggle="dropdown" ya, bawaan Bootstrap
                            aria-expanded="false"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"
                                alt="User Avatar"
                                className="rounded-circle border border-2 border-secondary"
                                className="admin-sidebar-user-avatar"
                            />
                        </a>

                        {/* Menu list otomatis akan muncul meloncat ke atas */}
                        <ul className="dropdown-menu shadow mb-2">
                            {/* Note: 'mb-2' ditambahkan memberi sedikit jarak tipis di atas avatar */}
                            <li className="px-3 py-2 text-muted text-truncate admin-user-dropdown-label">
                                <small>Masuk sebagai</small><br />
                                <strong class="text-dark">{userName}</strong>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link to="/profile" className="dropdown-item">👤 Profil</Link></li>
                            <li className="d-flex justify-content-center mt-3 ">
                                <button onClick={handleLogout} className="btn btn-danger mt-auto">
                                    Log Out
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="admin-sidebar-user-name">{userName}</div>
                </div>


            </div>

            {/* --- KONTEN UTAMA KANAN --- */}
            <div className="admin-content">
                {/* Di sinilah AdminHome, AdminCategories, dll akan dirender oleh React Router */}
                <Outlet />
            </div>
        </div>
    );
}