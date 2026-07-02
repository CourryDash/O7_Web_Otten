import React from "react";
import { Link } from 'react-router-dom';
import '../../css/PanduanVoucher.css';

class PanduanVoucher extends React.Component {
    render() {
        return (
            <main className="container my-5 pt-5">
                <div id="main-content">
                    <article>
                        <div className="breadcrumbs container py-3">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/" className="text-secondary text-decoration-none">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active fw-semibold" aria-current="page">Panduan Voucher</li>
                                </ol>
                            </nav>
                        </div>

                        <h1 className="page-title my-5">Voucher</h1>

                        <div className="content">
                            <div className="row align-items-center guide-step">
                                <div className="col-md-6 order-mobile-first">
                                    <img src="aset/Panduan Voucher/voucher-1.png" alt="Voucher Anda" />
                                </div>
                                <div className="col-md-6 guide-content">
                                    <h3>Voucher Anda</h3>
                                    <ol>
                                        <li>Sebelum melihat Voucher, <b>Masuk</b> ke akun Anda terlebih dahulu melalui www.ottencoffee.co.id atau aplikasi Otten Coffee.</li>
                                        <li>Setelah Masuk, klik icon akun Anda di sebelah kanan atas homepage dan klik <b>Voucher</b>.</li>
                                    </ol>
                                </div>
                            </div>

                            <div className="row align-items-center guide-step">
                                <div className="col-md-6 guide-content">
                                    <h3>Bagaimana Mendapatkan Voucher</h3>
                                    <p>Di halaman Voucher, Anda dapat melihat jumlah voucher dan kode voucher. Voucher bisa Anda dapatkan dengan cara melakukan transaksi di www.ottencoffee.co.id atau aplikasi Otten Coffee, sesuai syarat & ketentuan masing-masing voucher.</p>
                                </div>
                                <div className="col-md-6 order-mobile-first">
                                    <img src="aset/Panduan Voucher/voucher-2.png" alt="Mendapatkan Voucher" />
                                </div>
                            </div>

                            <div className="row align-items-center guide-step">
                                <div className="col-md-6 order-mobile-first">
                                    <img src="aset/Panduan Voucher/voucher-3.png" alt="Menggunakan Voucher" />
                                </div>
                                <div className="col-md-6 guide-content">
                                    <h3>Cara Menggunakan Voucher</h3>
                                    <p>Copy kode Voucher pada halaman voucher, dan masukkan di kolom Voucher pada saat melakukan pembayaran.</p>
                                </div>
                            </div>
                        </div>

                        <div className="end-notes">
                            <div className="note-box">
                                <div>Untuk informasi lebih lanjut, hubungi customer care kami</div>
                                <div><b>0804-1-999-666.</b></div>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        );
    }
}

export default PanduanVoucher;