import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import axios from 'axios';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmVisible: false,
            isLoading: false,
        }
    }

    static contextType = CartContext;
    API_URL = process.env.REACT_APP_API_URL;

    confirmLogout = () => {
        this.setState({ confirmVisible: true });
    }

    cancelLogout = () => {
        this.setState({ confirmVisible: false });
    }

    clearLocalStorage = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userName');
    };

    handleLogout = async () => {
        this.setState({ confirmVisible: false });

        try {
            const response = await axios.post(`${this.API_URL}/logout`, {
                method: 'POST',
                withCredentials: true
            });

            if (response.ok) {
                localStorage.removeItem('userId');
                localStorage.removeItem('userEmail');
                localStorage.removeItem('userRole');
                localStorage.removeItem('userName');

                window.location.href = '/';
            } else {
                console.error("Logout gagal");
                window.location.href = '/';
            }
        } catch (err) {
            console.error("Error saat Logout: ", err);
            this.clearLocalStorage();
            window.location.href = '/';
        } finally {
            this.setState({ confirmVisible: false, isLoading: false });
        }
    };

    render() {
        const { cartCount } = this.context;
        const isLoggedIn = localStorage.getItem('userId') !== null;
        const userName = localStorage.getItem('userName');
        const userAccount = userName ? userName : '';
        const userRole = localStorage.getItem('userRole');

        return (
            <>
                <div className="nav-atas-container container-fluid">
                    <div className="nav-atas">
                        <ul className="but">
                            <li className="list-nav">
                                <Link to="/" className="a-nav">
                                    <img src="/aset/ic-guarantee.svg" alt="" className="icon-nav" /> Garansi 2 Tahun
                                </Link>
                            </li>
                            <li className="list-nav">
                                <Link to="/" className="a-nav">
                                    <img src="/aset/ic-delivery-truck.svg" alt="" className="icon-nav" /> Garansi Ongkir*
                                </Link>
                            </li>
                            <li className="list-nav">
                                <Link to="/" className="a-nav">
                                    <img src="/aset/shield(home).svg" alt="" className="icon-nav" /> Produk Original <i className="bi bi-question-circle"></i>
                                </Link>
                            </li>
                        </ul>
                        <div className="nav-kanan">
                            <ul className="but-kanan">
                                <li className="li-kanan"><Link to="#">Download Otten App</Link></li>
                                <li className="li-kanan2"><Link to="#"><i className="bi bi-whatsapp"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <nav className="sticky-top">
                    <div className="nav-bawah container">
                        <ul className="nav-bawah-kiri">
                            <li className="li-nav-bawah-kiri">
                                <Link to="/">
                                    <img src="/aset/logo-otten-coffee.png" alt="Otten Logo" className="logo-kehome" />
                                </Link>
                            </li>
                            <li className="li-nav-bawah-kiri">
                                <button className="dropdwn"><i className="bi bi-grid"></i> Kategori</button>
                            </li>
                            <li className="li-nav-bawah-kiri search-nav">
                                <div className="container-fluid">
                                    <form className="d-flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Cari kopi, alat kopi..." aria-label="Search" />
                                    </form>
                                </div>
                            </li>
                        </ul>
                        <div className="bawah-kanan">
                            <ul className="but-bwh-kanan">
                                <li className="nav-bawah-kanan">
                                    <button className="transaksi">
                                        <img src="/aset/ic-shipping-delivery-revamp.png" alt="" className="logo-pengiriman" />
                                        <div className="but-pengiriman">
                                            <b className="tebel-kirim">Tipe Transaksi</b>
                                            <p>Pengiriman atau Ambil di Toko</p>
                                        </div>
                                        <i className="bi bi-chevron-down"></i>
                                    </button>
                                </li>
                                <li className="nav-bawah-kanan tas-belanja">
                                    <Link to="/cart"><i className="bi bi-bag">{cartCount > 0 && <span className="cart-dot">{cartCount}</span>}</i></Link>
                                </li>
                                <li className="nav-bawah-kanan masuk-daftar">
                                    {isLoggedIn ? (
                                        <div className="d-flex align-items-center order-lg-3">

                                            <div className="dropdown ms-3">
                                                <a
                                                    className="nav-link dropdown-toggle d-flex align-items-center"
                                                    href="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <img
                                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"
                                                        alt="User Avatar"
                                                        className="rounded-circle border border-2 border-secondary"
                                                        style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                                                    />
                                                </a>

                                                <ul className="dropdown-menu dropdown-menu-end shadow">
                                                    <li className="px-3 py-2 text-muted text-truncate" style={{ maxWidth: '200px' }}>
                                                        <small>Masuk sebagai</small><br />
                                                        <strong className="text-dark">{userName}</strong>
                                                    </li>
                                                    <li><hr className="dropdown-divider" /></li>
                                                    <li><Link to="/profile" className="dropdown-item">👤 Profil</Link></li>
                                                    {userRole === 'admin' && (
                                                        <Link to="/admin" className="dropdown-item">
                                                            ⚙️ Dasbor Admin
                                                        </Link>
                                                    )}
                                                    <li className="d-flex justify-content-center mt-3 ">
                                                        <button onClick={this.confirmLogout} className="btn btn-danger mt-auto">
                                                            Log Out
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>

                                            <button
                                                className="navbar-toggler ms-2"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#mainNavbar"
                                                aria-controls="mainNavbar"
                                                aria-expanded="false"
                                                aria-label="Toggle navigation"
                                            >
                                                <span className="navbar-toggler-icon"></span>
                                            </button>

                                            {this.state.confirmVisible && (
                                                <div className="modal-overlay">
                                                    <div className="modal-content">
                                                        <p>Yakin ingin Keluar?</p>
                                                        <div className="modal-actions">
                                                            <button className="modal-button cancel" onClick={this.cancelLogout}>Batal</button>
                                                            <button className="modal-button confirm" onClick={this.handleLogout}>Lanjut</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    ) : (
                                        <>
                                            <Link to="/login" className="masuk">Masuk</Link>
                                            <Link to="/register" className="daftar">Daftar</Link>
                                        </>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav >
            </>
        );
    }
};

export default Navbar;