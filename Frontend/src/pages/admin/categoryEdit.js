import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/categoryEdit.css';

export default function CategoryEdit() {
    const BASE_URL = process.env.REACT_APP_API_URL;

    // State untuk menyimpan data
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    // State untuk form (Tambah/Edit)
    const [formData, setFormData] = useState({ nama_kategori: '', deskripsi: '' });
    const [editingId, setEditingId] = useState(null);
    const [infoMessage, setInfoMessage] = useState('');
    const [confirmVisible, setConfirmVisible] = useState(false);
    const [deleteTargetId, setDeleteTargetId] = useState(null);

    // 1. Fungsi Mengambil Data Kategori (GET)
    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/categories`);
            setCategories(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Gagal mengambil data kategori:", error);
            setLoading(false);
        }
    };

    // Panggil data saat komponen pertama kali dimuat
    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        if (infoMessage) {
            const timer = setTimeout(() => {
                setInfoMessage('');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [infoMessage]);

    // 2. Fungsi Menangani Perubahan Input Form
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const confirmDelete = (id) => {
        setDeleteTargetId(id);
        setConfirmVisible(true);
    };

    const cancelDelete = () => {
        setDeleteTargetId(null);
        setConfirmVisible(false);
    };

    // 3. Fungsi Menyimpan Data (POST untuk Tambah, PUT untuk Edit)
    const handleSubmit = async (e) => {
        e.preventDefault(); // Mencegah halaman me-refresh

        try {
            if (editingId) {
                await axios.put(`${BASE_URL}/categories/${editingId}`, formData, {
                    withCredentials: true
                });
                setInfoMessage("Kategori berhasil diperbarui!");
            } else {
                await axios.post(`${BASE_URL}/categories`, formData, {
                    withCredentials: true
                });
                setInfoMessage("Kategori baru berhasil ditambahkan!");
            }

            // Bersihkan form dan ambil ulang data terbaru
            setFormData({ nama_kategori: '', deskripsi: '' });
            setEditingId(null);
            fetchCategories();

        } catch (error) {
            console.error("Gagal menyimpan data:", error);
            setInfoMessage("Terjadi kesalahan saat menyimpan data.");
        }
    };

    // 4. Fungsi Menghapus Data (DELETE)
    const handleDelete = async () => {
        if (!deleteTargetId) return;
        setConfirmVisible(false);
        try {
            await axios.delete(`${BASE_URL}/categories/${deleteTargetId}`, {
                withCredentials: true
            });
            setInfoMessage("Kategori berhasil dihapus!");
            fetchCategories();
        } catch (error) {
            console.error("Gagal menghapus data:", error);
            setInfoMessage("Gagal menghapus. Pastikan kategori ini tidak sedang digunakan oleh produk.");
        }
    };

    // 5. Fungsi Mempersiapkan Form untuk Mode Edit
    const handleEditClick = (category) => {
        setEditingId(category.id_kategori);
        setFormData({
            nama_kategori: category.nama_kategori,
            deskripsi: category.deskripsi || ''
        });
        window.scrollTo(0, 0);
    };

    // 6. Fungsi Membatalkan Edit
    const handleCancelEdit = () => {
        setEditingId(null);
        setFormData({ nama_kategori: '', deskripsi: '' });
    };

    if (loading) return <div>Memuat data kategori...</div>;

    return (
        <div className="category-edit-page">
            <h2 className="fw-bold mb-4">Kelola Kategori</h2>

            {/* --- AREA FORMULIR (TAMBAH/EDIT) --- */}
            <div className="card shadow-sm border-0 p-4 mb-5 rounded">
                <h5 className="mb-3">{editingId ? "Edit Kategori" : "Tambah Kategori Baru"}</h5>
                <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Nama Kategori</label>
                            <input
                                type="text"
                                className="form-control"
                                name="nama_kategori"
                                value={formData.nama_kategori}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Deskripsi (Opsional)</label>
                            <input
                                type="text"
                                className="form-control"
                                name="deskripsi"
                                value={formData.deskripsi}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="d-flex gap-2">
                        <button type="submit" className={`btn ${editingId ? 'btn-success' : 'btn-primary'}`}>
                            {editingId ? "Simpan Perubahan" : "Tambah Kategori"}
                        </button>
                        {editingId && (
                            <button type="button" className="btn btn-secondary" onClick={handleCancelEdit}>
                                Batal
                            </button>
                        )}
                    </div>
                </form>
            </div>

            {/* --- AREA TABEL DATA --- */}
            <div className="card shadow-sm border-0 p-4 rounded category-edit-table-wrapper">
                <table className="table table-hover mt-3">
                    <thead className="table-light">
                        <tr>
                            <th>ID</th>
                            <th>Nama Kategori</th>
                            <th>Deskripsi</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((cat, index) => (
                            <tr key={cat.id_kategori || index}>
                                <td>{cat.id_kategori}</td>
                                <td>{cat.nama_kategori}</td>
                                <td>{cat.deskripsi || '-'}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-outline-primary me-2"
                                        onClick={() => handleEditClick(cat)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-sm btn-outline-danger"
                                        onClick={() => confirmDelete(cat.id_kategori)}
                                    >
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {categories.length === 0 && (
                            <tr>
                                <td colSpan="4" className="text-center text-muted py-4">Belum ada data kategori.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {infoMessage && (
                    <div className="cart-info-message">{infoMessage}</div>
                )}
            </div>
            {confirmVisible && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Konfirmasi Hapus</h3>
                        <p>Yakin ingin menghapus kategori ini?</p>
                        <div className="modal-actions">
                            <button className="modal-button cancel" onClick={cancelDelete}>Batal</button>
                            <button className="modal-button confirm" onClick={handleDelete}>Lanjut</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}