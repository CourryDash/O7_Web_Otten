import React from "react";
import { Link } from "react-router-dom";
import '../../css/PengembalianProduk.css';

class PengembalianProduk extends React.Component {
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
                                    <li className="breadcrumb-item active fw-semibold" aria-current="page">Pengembalian Produk</li>
                                </ol>
                            </nav>
                        </div>

                        <h1 className="page-title my-5">Kebijakan Pengembalian Produk / Return Policy</h1>
                        <div className="policy-content">
                            <ol>
                                <li>Barang yang dikembalikan masih dalam masa periode pengembalian barang yaitu 2 hari sejak barang diterima.</li>
                                <li>Konsumen dapat melakukan penukaran atau pengembalian barang dengan kondisi barang sebagai berikut:
                                    <ol>
                                        <li>Barang yang diterima tidak sesuai dengan pesanan;</li>
                                        <li>Barang yang diterima melebihi atau kurang dari kuantiti yang seharusnya didapatkan;</li>
                                        <li>Adanya kerusakan atau keadaan yang tidak sesuai pada pesanan, termasuk:
                                            <ol>
                                                <li>Barang pecah atau rusak saat diterima;</li>
                                                <li>Isi volume barang tidak sesuai dengan pesanan</li>
                                            </ol>
                                        </li>
                                    </ol>
                                </li>
                                <li>Barang yang diretur harus:
                                    <ol>
                                        <li>Belum pernah digunakan;</li>
                                        <li>Masih dalam kondisi sama saat pengiriman (lengkap dengan kotak kemasan, label dan lainnya);</li>
                                    </ol>
                                </li>
                                <li>Otten Coffee tidak menerima penukaran barang dengan alasan yang merupakan kelalaian pembeli, seperti jenis produk atau warna yang tidak sesuai dengan keinginan.</li>
                                <li>Otten Coffee berhak menolak pengajuan pengembalian barang jika:
                                    <ul className="dashed-list">
                                        <li>Pengembalian dilakukan tanpa alasan jelas</li>
                                        <li>Tanpa ada bukti video pada saat barang dikeluarkan dari packaging</li>
                                        <li>Kerusakan barang akibat kesalahan pemakaian, terjatuh, tergores, ternoda, pecah, terkena cairan, kecelakaan, kesalahan instalasi, pemeliharaan atau perbaikan yang tidak terotorisasi, mengubah atau merusak stiker garansi, nomor seri, dan tanda keaslian dan kerusakan yang diakibatkan selain manusia.</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>

                        <h2 className="section-title">Cara Pengembalian Produk</h2>

                        <div className="row step-row">
                            <div className="col-lg-6 order-mobile-first">
                                <img src="aset/Pengembalian/pesanan-anda-20201122.png" alt="Pesanan Anda" />
                            </div>
                            <div className="col-lg-6 step-content">
                                <h4>Pesanan Anda</h4>
                                <ol>
                                    <li>Sebelum melakukan pengembalian produk, <b>Masuk</b> ke akun Anda terlebih dahulu melalui www.ottencoffee.co.id atau aplikasi Otten Coffee.</li>
                                    <li>Setelah Masuk, klik <b>icon akun Anda</b> di sebelah kanan atas homepage dan klik <b>Transaksi</b>.</li>
                                </ol>
                            </div>
                        </div>

                        <div className="row step-row">
                            <div className="col-lg-6 step-content">
                                <h4>Pilih Pesanan Anda yang Akan Dikembalikan</h4>
                                <ol>
                                    <li>Pilih pesanan Anda yang akan dilakukan pengembalian.</li>
                                    <li>Klik <b>Lihat Detail</b> pada pesanan yang akan Anda kembalikan.</li>
                                </ol>
                            </div>
                            <div className="col-lg-6 order-mobile-first">
                                <img src="aset/Pengembalian/pilih-pesanan-anda-yang-akan-dikembalikan-20201122.png" alt="Pilih Pesanan" />
                            </div>
                        </div>

                        <div className="row step-row">
                            <div className="col-lg-6 order-mobile-first">
                                <img src="aset/Pengembalian/proses-pengembalian-produk-20201122.png" alt="Proses Pengembalian" />
                            </div>
                            <div className="col-lg-6 step-content">
                                <h4>Proses Pengembalian Produk</h4>
                                <p>Klik tombol <b>Pengembalian Produk</b> di sebelah kanan di bawah tombol Konfirmasi Penerimaan Pesanan pada halaman detail pesanan Anda (pastikan Anda belum melakukan Konfirmasi Penerimaan Pesanan). Selanjutnya Anda akan masuk ke halaman pengembalian produk dan pilih produk yang akan dilakukan pengembalian.</p>
                            </div>
                        </div>

                        <div className="row step-row">
                            <div className="col-lg-6 step-content">
                                <h4>Pilih Produk Yang Ingin Dikembalikan</h4>
                                <p>Klik tombol <b>Pengembalian Produk</b> pada produk yang ingin Anda kembalikan, setelah Anda klik button <b>Pengembalian Produk</b>, selanjutnya Anda diwajibkan untuk mengisi formulir Pengembalian Produk.</p>
                            </div>
                            <div className="col-lg-6 order-mobile-first">
                                <img src="aset/Pengembalian/pilih-produk-yang-ingin-dikembalikan-20201122.png" alt="Pilih Produk Kembali" />
                            </div>
                        </div>

                        <div className="row step-row">
                            <div className="col-lg-6 order-mobile-first">
                                <img src="aset/Pengembalian/isi-formulir-pengembalian-produk-20201122.png" alt="Isi Formulir" />
                            </div>
                            <div className="col-lg-6 step-content">
                                <h4>Isi Formulir Pengembalian Produk</h4>
                                <ol>
                                    <li>Pilih Jenis Pengembalian.</li>
                                    <li>Pilih Alamat Pengembalian.</li>
                                    <li>Jelaskan Keluhan mengenai pengembalian produk dengan lengkap.</li>
                                    <li>Upload foto produk.</li>
                                    <li>Setelah selesai, klik <b>Ajukan Pengembalian Produk</b>.</li>
                                </ol>
                            </div>
                        </div>

                        <div className="info-box-container">
                            <div className="info-box">
                                Setelah mengirim formulir pengembalian produk, Anda akan mendapatkan email konfirmasi dari Otten Coffee maksimal 7 hari kerja.
                            </div>
                            <div className="info-box">
                                Untuk informasi lebih lanjut, hubungi customer care kami<br /><br />
                                <strong>0804-1-999-666.</strong>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        );
    }
}

export default PengembalianProduk;