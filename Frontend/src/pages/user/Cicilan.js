import React from "react";
import { Link } from 'react-router-dom';
import '../../css/Cicilan.css'

class Cicilan extends React.Component {
    render() {
        return (
            <main className="container my-5">
                <article>
                    <div className="breadcrumbs container py-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/" className="text-secondary text-decoration-none">Home</Link>
                                </li>
                                <li className="breadcrumb-item active fw-semibold" aria-current="page">Cicilan</li>
                            </ol>
                        </nav>
                    </div>

                    <div className="cicilan py-5">
                        <h1>Penuhi Kebutuhan Kopi Kamu Lebih Mudah Dengan Cicilan 0%</h1>
                        <img src="aset/cicilan/cicilan-1.jpg" alt="cicilan-1" className="img-fluid" />
                        <br />
                        <br />
                        <p className="text-small" style={{ paddingbottom: "30px" }}> Belanja kamu lebih mudah dengan fasilitas cicilan 0% untuk tenor 3, 6, dan 12 bulan dengan minimal transaksi Rp. 500.000. Kamu cukup beli barang yang kamu inginkan tanpa perlu membayar penuh. Sekarang, Otten Coffee sudah bekerjasama dengan Bank BCA, Bank Mandiri, Bank BRI, Standard Chartered Bank, HSBC, OCBC, Bank Permata, Bank Danamon, Bank Bukopin, dan BNI untuk memberi kemudahan kamu penuhi kebutuhan kopi kamu. Berikut petunjuk dan syarat menggunakan metode pembayaran cicilan 0% disetiap belanja kamu.</p>

                        <h4 className="fw-bold text-start">Petunjuk Belanja dengan Program Cicilan Bank </h4>
                        <section className="petunjuk">
                            <ul>
                                <li>
                                    <span className="text-small">Pilih produk yang  diinginkan, masuk ke detail produk selanjutnya masukkan jumlah produk dan Klik <b>Tambahkan Ke Keranjang.</b></span>
                                </li>
                                <li>
                                    <span className="text-small">Setelah selesai berbelanja. Klik <b>icon Keranjang</b> di kanan atas homepage dan klik <b>Keranjang Belanja.</b></span>
                                </li>
                                <li>
                                    <span className="text-small">Selanjutnya, masuk ke halaman Keranjang, cek kembali pesanan dan Klik <b>Lanjut Ke Checkout</b> untuk melanjutkan.</span>
                                </li>
                                <li>
                                    <span className="text-small">Pilih alamat yang dituju atau tambahkan untuk alamat baru.</span>
                                </li>
                                <li>
                                    <span className="text-small">Pilih jasa pengiriman yang sesuai dengan kebutuhan.</span>
                                </li>
                                <li>
                                    <span className="text-kecil">Periksa kembali barang pesanan dan klik <b>Pilih Metode Pembayaran</b> untuk melanjutkan.</span>
                                </li>
                                <li>
                                    <span className="text-kecil">Pilih metode pembayaran <b>Cicilan.</b></span>
                                </li>
                                <li>
                                    <span className="text-kecil">Pilih Bank dan tenor cicilan 3, 6 atau 12 bulan.</span>
                                </li>
                                <li>
                                    <span className="text-kecil">Klik <b>Bayar Sekarang</b> dan selesaikan pembayaran.</span>
                                </li>
                            </ul>
                        </section>

                        <h4 className="fw-bold text-start">Syarat dan Ketentuan Cicilan 0% </h4>
                        <section className="syarat-cicilan">
                            <ul>
                                <li>
                                    <span className="text-small">Berlaku khusus untuk pemegang Kartu Kredit berlogo Visa/MasterCard dari bank-bank yang bekerja sama dengan Otten Coffee.</span>
                                </li>
                                <li>
                                    <span className="text-small">Minimum total pembelian Rp500.000 per Keranjang.</span>
                                </li>
                                <li>
                                    <span className="text-small">Untuk biaya bunga ringan akan ditambahkan pada biaya administrasi.</span>
                                </li>
                                <li>
                                    <span className="text-small">Biaya ini dibebankan oleh bank penerbit Kartu Kredit dan otomatis akan muncul di billing tagihan kartu kredit anda.</span>
                                </li>
                                <li>
                                    <span className="text-small">Proses konversi/perubahan transaksi menjadi cicilan memerlukan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</span>
                                </li>
                                <li>
                                    <span className="text-small">Otten Coffee berhak membatalkan pesanan apabila tidak memenuhi syarat ketentuan yang berlaku.<a href="home.html">https://ottencoffee.co.id</a></span>
                                </li>
                            </ul>
                        </section>
                    </div>
                </article>
            </main>
        );
    }
}

export default Cicilan;