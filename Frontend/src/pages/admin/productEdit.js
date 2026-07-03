import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../../css/productEdit.css';

export default function ProductEdit() {
    const BASE_URL = process.env.REACT_APP_API_URL;

    const formRef = useRef(null); // Ref untuk form agar bisa di-reset setelah submit

    // State untuk menyimpan daftar data dari backend
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]); // Wajib ada untuk Dropdown Kategori
    const [loading, setLoading] = useState(true);

    // State form disesuaikan persis dengan kolom database products.js
    const initialFormState = {
        id_kategori: '',
        nama_produk: '',
        harga: '',
        stok: '',
        deskripsi: '',
        img_product: ''
        // rating dan terjual sengaja tidak dimasukkan agar mengikuti default database
    };

    const [formData, setFormData] = useState(initialFormState);
    const [editingId, setEditingId] = useState(null);
    const [infoMessage, setInfoMessage] = useState('');
    const [confirmVisible, setConfirmVisible] = useState(false);
    const [deleteTargetId, setDeleteTargetId] = useState(null);

    const confirmDelete = (id) => {
        setDeleteTargetId(id)
        setConfirmVisible(true);
    };

    const cancelDelete = () => {
        setConfirmVisible(false);
        setDeleteTargetId(null)
    };

    // 1. Mengambil Data Produk DAN Kategori sekaligus
    const fetchData = async () => {
        try {
            // Menjalankan dua request secara paralel agar lebih cepat
            const [productRes, categoryRes] = await Promise.all([
                axios.get(`${BASE_URL}/products`),
                axios.get(`${BASE_URL}/categories`)
            ]);
            setProducts(productRes.data);
            setCategories(categoryRes.data);
            setLoading(false);
        } catch (error) {
            console.error("Gagal mengambil data:", error);
            setLoading(false);
        }
    };

    useEffect(() => { fetchData(); }, []);

    useEffect(() => {
        if (infoMessage) {
            const timer = setTimeout(() => {
                setInfoMessage('');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [infoMessage]);

    // 2. Handler Input Dinamis
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 3. Proses Simpan / Edit
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validasi: Pastikan kategori sudah dipilih
        if (!formData.id_kategori) {
            setInfoMessage("Silakan pilih kategori produk terlebih dahulu!");
            return;
        }

        try {
            if (editingId) {
                await axios.put(`${BASE_URL}/products/${editingId}`, formData, {
                    withCredentials: true
                });
                setInfoMessage("Data produk berhasil diperbarui!");
            } else {
                await axios.post(`${BASE_URL}/products`, formData, {
                    withCredentials: true
                });
                setInfoMessage("Produk baru berhasil ditambahkan!");
            }

            setFormData(initialFormState);
            setEditingId(null);
            fetchData();

        } catch (error) {
            console.error("Gagal menyimpan data:", error);
            setInfoMessage("Terjadi kesalahan saat menyimpan produk.");
        }
    };

    // 4. Proses Hapus
    const handleDelete = async () => {
        if (!deleteTargetId) return;
        setConfirmVisible(false);
        try {
            await axios.delete(`${BASE_URL}/products/${deleteTargetId}`, {
                withCredentials: true
            });
            setInfoMessage("Produk berhasil dihapus!");
            fetchData();
        } catch (error) {
            console.error("Gagal menghapus data:", error);
            setInfoMessage("Gagal menghapus produk. Mungkin produk masih terkait dengan data transaksi.");
        }
    };

    // 5. Persiapan Edit
    const handleEditClick = (product) => {
        setEditingId(product.id_produk);
        setFormData({
            id_kategori: product.id_kategori || '',
            nama_produk: product.nama_produk || '',
            harga: product.harga || '',
            stok: product.stok || '',
            deskripsi: product.deskripsi || '',
            img_product: product.img_product || ''
        });
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    if (loading) return <div>Memuat data produk...</div>;

    return (
        <div className="product-edit-page" ref={formRef}>
            <h2 className="fw-bold mb-4">Kelola Produk</h2>

            {/* --- AREA FORMULIR --- */}
            <div className="card shadow-sm border-0 p-4 mb-5 rounded">
                <h5 className="mb-4">{editingId ? "Edit Produk" : "Tambah Produk Baru"}</h5>
                <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Nama Produk</label>
                            <input type="text" className="form-control" name="nama_produk" value={formData.nama_produk} onChange={handleInputChange} required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Kategori</label>
                            {/* Dropdown Kategori */}
                            <select className="form-select" name="id_kategori" value={formData.id_kategori} onChange={handleInputChange} required>
                                <option value="">-- Pilih Kategori --</option>
                                {categories.map(cat => (
                                    <option key={cat.id_kategori} value={cat.id_kategori}>
                                        {cat.nama_kategori}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label className="form-label">Harga (Rp)</label>
                            <input type="number" className="form-control" name="harga" value={formData.harga} onChange={handleInputChange} required min="0" />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label className="form-label">Stok</label>
                            <input type="number" className="form-control" name="stok" value={formData.stok} onChange={handleInputChange} required min="0" />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label className="form-label">URL/Path Gambar</label>
                            <input type="text" className="form-control" name="img_product" placeholder="Misal: aset/kopi1.jpg" value={formData.img_product} onChange={handleInputChange} />
                        </div>
                        <div className="col-12 mb-3">
                            <label className="form-label">Deskripsi Produk</label>
                            <textarea className="form-control" name="deskripsi" rows="3" value={formData.deskripsi} onChange={handleInputChange}></textarea>
                        </div>
                    </div>
                    <div className="d-flex gap-2">
                        <button type="submit" className={`btn ${editingId ? 'btn-success' : 'btn-primary'}`}>
                            {editingId ? "Simpan Perubahan" : "Tambah Produk"}
                        </button>
                        {editingId && (
                            <button type="button" className="btn btn-secondary" onClick={() => { setEditingId(null); setFormData(initialFormState); }}>
                                Batal
                            </button>
                        )}
                    </div>
                </form>
            </div>

            {/* --- AREA TABEL DATA --- */}
            <div className="card shadow-sm border-0 p-4 rounded product-edit-table-wrapper">
                <table className="table table-hover mt-3">
                    <thead className="table-light">
                        <tr>
                            <th>ID</th>
                            <th>Gambar</th>
                            <th>Nama Produk</th>
                            <th>Harga</th>
                            <th>Stok</th>
                            <th>Terjual</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((prod) => (
                            <tr key={prod.id_produk} className="align-middle">
                                <td>{prod.id_produk}</td>
                                <td>
                                    {prod.img_product ? (
                                        <img src={prod.img_product.startsWith('http') ? prod.img_product : `/${prod.img_product}`} alt={prod.nama_produk} className="product-edit-image" />
                                    ) : (
                                        <span className="text-muted small">No Img</span>
                                    )}
                                </td>
                                <td>{prod.nama_produk}</td>
                                <td>Rp {Number(prod.harga).toLocaleString('id-ID')}</td>
                                <td>{prod.stok}</td>
                                <td>{prod.terjual}</td>
                                <td>
                                    <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEditClick(prod)}>Edit</button>
                                    <button className="btn btn-sm btn-outline-danger" onClick={() => confirmDelete(prod.id_produk)}>Hapus</button>
                                </td>
                            </tr>
                        ))}
                        {products.length === 0 && (
                            <tr><td colSpan="7" className="text-center text-muted py-4">Belum ada data produk.</td></tr>
                        )}
                    </tbody>
                </table>
                {infoMessage && (
                    <div className="cart-info-message">
                        {infoMessage}
                    </div>
                )}
            </div>
            {confirmVisible && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Konfirmasi Hapus</h3>
                        <p>Yakin ingin menghapus produk ini?</p>
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