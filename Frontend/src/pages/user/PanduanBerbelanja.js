import React from "react";
import { Link } from "react-router-dom";
import '../../css/PanduanBerbelanja.css';

class PanduanBerbelanja extends React.Component {
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
                                    <li className="breadcrumb-item active fw-semibold" aria-current="page">Panduan Berbelanja</li>
                                </ol>
                            </nav>
                        </div>

                        <h1 className="page-title my-5">Panduan Berbelanja</h1>

                        <div className="content">
                            <div className="row align-items-center guide-step">
                                <div className="col-md-6 order-mobile-first">
                                    <img src="aset/Panduan Belanja/panduan-belanja-1.png" alt="Buka Website" />
                                </div>
                                <div className="col-md-6 guide-content">
                                    <h3>Buka Website www.ottencoffee.co.id</h3>
                                    <ol>
                                        <li><b>Masuk</b> ke akun Anda terlebih dahulu melalui www.ottencoffee.co.id atau aplikasi Otten Coffee.</li>
                                        <li><b>Masuk</b> menggunakan email Anda yang sudah terdaftar atau lakukan pendaftaran terlebih dahulu jika Anda belum memiliki Akun.</li>
                                        <li>Anda juga dapat Masuk atau Daftar menggunakan Facebook atau Google.</li>
                                    </ol>
                                </div>
                            </div>

                            <div className="row align-items-center guide-step">
                                <div className="col-md-6 guide-content">
                                    <h3>Cari Produk yang Anda Inginkan</h3>
                                    <ol>
                                        <li>Ketik produk yang anda cari di kolom pencarian.</li>
                                        <li>Pilih produk yang ada di kategori utama.</li>
                                        <li>Atau pilih langsung produk yang ada di homepage.</li>
                                    </ol>
                                </div>
                                <div className="col-md-6 order-mobile-first">
                                    <img src="aset/Panduan Belanja/panduan-belanja-2.png" alt="Cari Produk" />
                                </div>
                            </div>

                            <div className="row align-items-center guide-step">
                                <div className="col-md-6 order-mobile-first">
                                    <img src="aset/Panduan Belanja/panduan-belanja-3.png" alt="Pilih Produk" />
                                </div>
                                <div className="col-md-6 guide-content">
                                    <h3>Pilih Produk yang Anda Inginkan</h3>
                                    <ol>
                                        <li>Klik produk dan buka detail produk yang diinginkan.</li>
                                        <li>Masukkan jumlah produk dan klik <b>Tambahkan Ke Keranjang</b>.</li>
                                        <li>Selanjutnya cari kembali produk lain yang Anda inginkan.</li>
                                    </ol>
                                </div>
                            </div>

                            <div className="row align-items-center guide-step">
                                <div className="col-md-6 guide-content">
                                    <h3>Checkout untuk Melakukan Pembayaran</h3>
                                    <p>Setelah selesai berbelanja. Klik icon Keranjang di kanan atas homepage dan klik Keranjang Belanja. Selanjutnya Anda akan masuk ke halaman Keranjang, cek kembali pesanan Anda dan <b>Klik Lanjut Ke Checkout</b> untuk melanjutkan.</p>
                                </div>
                                <div className="col-md-6 order-mobile-first">
                                    <img src="aset/Panduan Belanja/panduan-belanja-4.png" alt="Checkout" />
                                </div>
                            </div>

                            <div className="row align-items-center guide-step">
                                <div className="col-md-6 order-mobile-first">
                                    <img src="aset/Panduan Belanja/panduan-belanja-5.png" alt="Periksa Pesanan" />
                                </div>
                                <div className="col-md-6 guide-content">
                                    <h3>Periksa Pesanan Anda Sebelum Membayar</h3>
                                    <ol>
                                        <li>Pilih alamat Anda atau tambahkan untuk alamat baru.</li>
                                        <li>Pilih jasa pengiriman yang Anda inginkan.</li>
                                        <li>Periksa kembali barang pesanan Anda dan klik <b>Pilih Metode Pembayaran</b> untuk melanjutkan.</li>
                                    </ol>
                                </div>
                            </div>

                            <div className="row align-items-center guide-step">
                                <div className="col-md-6 guide-content">
                                    <h3>Pilih Metode Pembayaran</h3>
                                    <ol>
                                        <li>Masukkan kode Voucher atau gunakan Otten Poin untuk mendapatkan potongan harga.</li>
                                        <li>Pilih metode pembayaran yang Anda inginkan.</li>
                                        <li>Klik <b>Bayar Sekarang</b> dan selesaikan pembayaran Anda.</li>
                                    </ol>
                                </div>
                                <div className="col-md-6 order-mobile-first">
                                    <img src="aset/Panduan Belanja/panduan-belanja-6.png" alt="Metode Pembayaran" />
                                </div>
                            </div>
                        </div>

                        <div className="end-notes">
                            <div className="note-box">
                                <div>Proses belanja Anda telah selesai</div>
                                <div>Anda akan mendapatkan email dari Otten Coffee.</div>
                            </div>
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

export default PanduanBerbelanja;
