import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/style.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './components/CartContext';
import BackToTop from './components/BackToTop';
import CartNotification from './components/CartNotification';
import CartPage from './components/Cart';
import AdminRoute from './components/AdminRoute';
import AdminLayout from './components/AdminLayout';
import UserProfile from './components/UserProfile';

// Pages
import Home from './pages/user/Home';
import Login from './pages/user/Login';
import Daftar from './pages/user/Daftar';
import AdminHome from './pages/admin/adminPages';
import CategoryEdit from './pages/admin/categoryEdit';
import ProductEdit from './pages/admin/productEdit';

// Footer Pages
import HubungiKami from './pages/user/HubungiKami';
import OttenPoin from './pages/user/OttenPoin';
import TentangOtten from './pages/user/TentangOtten';
import Brand from './pages/user/Brand';
import Cicilan from './pages/user/Cicilan';
import Dropship from './pages/user/Dropship';
import HargaGrosir from './pages/user/HargaGrosir';
import FaqBantuan from './pages/user/FaqBantuan';

// Bantuan Pages
import Pengiriman from './pages/user/Pengiriman';
import SyaratdanKetentuan from './pages/user/SyaratdanKetentuan';
import KebijakanPrivasi from './pages/user/KebijakanPrivasi';
import PengembalianProduk from './pages/user/PengembalianProduk';
import PanduanPembayaran from './pages/user/PanduanPembayaran';
import PanduanVoucher from './pages/user/PanduanVoucher';
import PanduanBerbelanja from './pages/user/PanduanBerbelanja';

const NotFound = () => <div className="container mt-5 pt-5 text-center"><h1>404 - Halaman Tidak Ditemukan</h1></div>;
const Forbiden = () => <div className="container mt-5 pt-5 text-center"><h1>403 - Akses Ditolak</h1></div>;

const PublicLayout = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <CartNotification />
            <div className="flex-grow-1">
                {/* Outlet di sini akan merender isi dari Home, Login, Cart, dll */}
                <Outlet /> 
            </div>
            <BackToTop />
            <Footer />
        </div>
    );
};

function App() {
    return (
        <CartProvider>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route element={<PublicLayout />}>
                        {/* Utama */}
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Daftar />} />
                        <Route path="/cart" element={<CartPage />} />

                        {/* Menu Footer Baru */}
                        <Route path="/brands" element={<Brand />} />
                        <Route path="/cicilan" element={<Cicilan />} />
                        <Route path="/dropship" element={<Dropship />} />
                        <Route path="/harga-grosir" element={<HargaGrosir />} />
                        <Route path="/faq" element={<FaqBantuan />} />
                        <Route path="/hubungi-kami" element={<HubungiKami />} />
                        <Route path="/otten-poin" element={<OttenPoin />} />
                        <Route path="/tentang-kami" element={<TentangOtten />} />

                        {/* Bantuan */}
                        <Route path="/pengiriman" element={<Pengiriman />} />
                        <Route path="/syarat-dan-ketentuan" element={<SyaratdanKetentuan />} />
                        <Route path="/kebijakan-privasi" element={<KebijakanPrivasi />} />
                        <Route path="/pengembalian-produk" element={<PengembalianProduk />} />
                        <Route path="/panduan-pembayaran" element={<PanduanPembayaran />} />
                        <Route path="/panduan-voucher" element={<PanduanVoucher />} />
                        <Route path="/panduan-berbelanja" element={<PanduanBerbelanja />} />

                        {/* Profil User */}
                        <Route path="/profile" element={<UserProfile />} />

                        <Route path="*" element={<NotFound />} />
                        <Route path="/forbidden" element={<Forbiden />} />
                    </Route>

                    <Route element={<AdminRoute />}>
                        <Route element={<AdminLayout />}>
                            <Route path="/admin" element={<AdminHome />} />
                            <Route path="/admin/categories" element={<CategoryEdit />} />
                            <Route path="/admin/products" element={<ProductEdit />} />
                        </Route>
                    </Route>

                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;