import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/userprofile.css';

export default function UserProfile() {
    const BASE_URL = process.env.REACT_APP_API_URL;
    const userId = localStorage.getItem('userId');

    // State untuk formulir
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState({ type: '', text: '' });
    const [confirmVisible, setConfirmVisible] = useState(false);

    const confirmDelete = () => {
        setConfirmVisible(true);
    }

    const cancelDelete = () => {
        setConfirmVisible(false);
    }

    // 1. Tarik data pengguna saat halaman pertama kali dibuka
    const fetchUserData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/me`, {
                withCredentials: true
            });

            if (response.data.user) {
                setFormData({
                    username: response.data.user.username || '',
                    email: response.data.user.email || '',
                    password: ''
                });
            }
        } catch (error) {
            console.error("Error fetching profile:", error);
            if (error.response?.status === 401) {
                setMessage({ type: 'danger', text: 'Sesi Anda telah habis. Silakan login kembali.' });
                window.location.href = '/login';
            } else {
                setMessage({ type: 'danger', text: 'Gagal memuat data profil.' });
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('userId') !== null;

        if (!isLoggedIn) {
            setLoading(false);
            setMessage({ type: 'danger', text: 'Anda belum login. Silakan login terlebih dahulu.' });
            window.location.href = '/login';
            return;
        }

        fetchUserData();
    }, []);

    // 2. Tangani ketikan pengguna di formulir
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 3. Kirim data yang diperbarui ke Backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage({ type: '', text: '' });
        setLoading(true);

        const updatePayload = {
            username: formData.username,
            email: formData.email,
        };
        if (formData.password.trim() !== '') {
            updatePayload.password = formData.password;
        }

        try {
            const response = await axios.put(`${BASE_URL}/me`, updatePayload, {
                withCredentials: true
            });

            setMessage({ type: 'success', text: 'Profil berhasil diperbarui!' });

            localStorage.setItem('userEmail', response.data.email || formData.email);
            localStorage.setItem('userName', response.data.username || formData.username);

            setFormData(prev => ({ ...prev, password: '' }));

            window.location.href = '/'

        } catch (error) {
            console.error("Error updating profile:", error);
            if (error.response?.status === 401) {
                setMessage({ type: 'danger', text: 'Sesi Anda telah habis. Silakan login kembali.' });
                window.location.href = '/login';
            } else {
                setMessage({ type: 'danger', text: error.response?.data?.error || 'Gagal menyimpan perubahan.' });
            }
        } finally {
            setLoading(false);
        }
    };

    const deleteAccount = async () => {
        if (!confirmVisible) {
            setConfirmVisible(true);
            return;
        }

        try {
            const response = await axios.delete(`${BASE_URL}/me`, {
                withCredentials: true
            });

            if (response.status === 200) {
                localStorage.clear();
                window.location.href = '/login';
            } else {
                console.error("Gagal menghapus akun");
                setMessage({ type: 'danger', text: 'Gagal menghapus akun.' });
            }

        } catch (error) {
            console.error("Error deleting account:", error);
            setMessage({ type: 'danger', text: 'Gagal menghapus akun.' });
        } finally {
            setLoading(false);
            setConfirmVisible(false);
        }
    };

    if (loading) return <div className="container mt-5 text-center">Memuat profil...</div>;

    return (
        <div className="container mt-5 mb-5" style={{ maxWidth: '600px' }}>
            <h2 className="fw-bold mb-4">Profil Saya</h2>

            {/* Area Pesan Notifikasi */}
            {message.text && (
                <div className={`alert alert-${message.type} alert-dismissible fade show`} role="alert">
                    {message.text}
                    <button type="button" className="btn-close" onClick={() => setMessage({ type: '', text: '' })}></button>
                </div>
            )}

            <div className="card shadow-sm border-0 p-4 rounded">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label text-muted">ID Pengguna</label>
                        <input
                            type="text"
                            className="form-control"
                            value={userId || ''}
                            disabled // ID tidak boleh diubah
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            required
                            disabled={loading}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            disabled={loading}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Password Baru (Opsional)</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Isi hanya jika ingin mengganti password"
                            value={formData.password}
                            onChange={handleInputChange}
                            disabled={loading}
                        />
                        <div className="form-text">Biarkan kosong jika tidak ingin mengubah password Anda saat ini.</div>
                    </div>

                    <button
                        type="button"
                        className="btn btn-danger fw-bold py-2 mb-5"
                        onClick={confirmDelete}
                    >
                        Hapus Akun
                    </button>

                    <div className="d-flex justify-content-between mt-5">
                        <button
                            type="submit"
                            className="btn btn-primary fw-bold py-2"
                            disabled={loading}
                        >
                            {loading ? 'Menyimpan...' : 'Simpan Perubahan'}
                        </button>

                        <button
                            type="button"
                            className="btn btn-secondary fw-bold py-2 text-end"
                            onClick={() => window.location.href = '/'}
                        >
                            Kembali
                        </button>
                    </div>

                    {confirmVisible && (
                        <div className="modal-overlay">
                            <div className="modal-content">
                                <h3>Konfirmasi Penghapusan Akun</h3>
                                <p>
                                    <strong>Apakah Anda yakin ingin menghapus akun ini? Tindakan ini tidak dapat dibatalkan.</strong> 
                                </p>
                                <div className="modal-actions">
                                    <button
                                        type="button"
                                        className="modal-button confirm"
                                        onClick={deleteAccount}
                                    >
                                        Ya, Hapus Akun
                                    </button>
                                    <button
                                        type="button"
                                        className="modal-button cancel"
                                        onClick={cancelDelete}
                                    >
                                        Batal
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}