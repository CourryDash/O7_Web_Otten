import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserProfile() {
    const BASE_URL = process.env.REACT_APP_API_URL;
    
    // Ambil data sesi dari localStorage
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    // State untuk formulir
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '' // Dikosongkan secara default
    });
    
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState({ type: '', text: '' }); // Untuk alert sukses/gagal

    const authConfig = {
        headers: { Authorization: `Bearer ${token}` }
    };

    // 1. Tarik data pengguna saat halaman pertama kali dibuka
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Memanggil endpoint backend untuk mendapatkan detail user
                const response = await axios.get(`${BASE_URL}/users/${userId}`, authConfig);
                
                // Isi formulir dengan data dari database (kecuali password)
                setFormData({
                    username: response.data.username || '',
                    email: response.data.email || '',
                    password: '' // Password tetap kosong agar tidak terekspos
                });
                setLoading(false);
            } catch (error) {
                console.error("Gagal mengambil data profil:", error);
                setMessage({ type: 'danger', text: 'Gagal memuat data profil. Silakan coba lagi.' });
                setLoading(false);
            }
        };

        if (userId && token) {
            fetchUserData();
        } else {
            setLoading(false);
            setMessage({ type: 'danger', text: 'Anda belum login.' });
        }
    }, [userId, token, BASE_URL]);

    // 2. Tangani ketikan pengguna di formulir
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 3. Kirim data yang diperbarui ke Backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage({ type: '', text: '' }); // Reset pesan

        // Siapkan data yang akan dikirim (jika password kosong, jangan kirim)
        const updatePayload = {
            username: formData.username,
            email: formData.email,
        };
        if (formData.password.trim() !== '') {
            updatePayload.password = formData.password;
        }

        try {
            await axios.put(`${BASE_URL}/users/${userId}`, updatePayload, authConfig);
            setMessage({ type: 'success', text: 'Profil berhasil diperbarui!' });
            
            // Perbarui localStorage jika email berubah
            localStorage.setItem('userEmail', formData.email);
            
        } catch (error) {
            console.error("Gagal memperbarui profil:", error);
            setMessage({ type: 'danger', text: 'Terjadi kesalahan saat menyimpan data.' });
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
                            value={userId} 
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
                        />
                        <div className="form-text">Biarkan kosong jika tidak ingin mengubah password Anda saat ini.</div>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 fw-bold py-2">
                        Simpan Perubahan
                    </button>
                </form>
            </div>
        </div>
    );
}