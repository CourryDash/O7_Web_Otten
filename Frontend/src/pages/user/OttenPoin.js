import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/OttenPoin.css'

class OttenPoin extends React.Component {
    render() {
        return (
            <main className="container my-5">
                <article className='otten-poin'>
                    <div className="breadcrumbs container py-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/" className="text-secondary text-decoration-none">Home</Link>
                                </li>
                                <li className="breadcrumb-item active fw-semibold" aria-current="page">Otten Poin</li>
                            </ol>
                        </nav>
                    </div>

                    <div className='pt-5'>
                        <h1>OTTEN POIN</h1>

                        <div className="d-flex align-items-center">
                            <img src="aset/otten point/apa itu otten poin.png" width="32%" style={{ paddingRight: "20px" }} className="img-fluid" alt="Apa itu Otten Poin" />
                            <div className="p-3">
                                <h4 className="mb-3 text-start">APA ITU OTTEN POIN?</h4>
                                <p className="my-4 text-start">
                                    <span className="fw-semibold">Otten poin</span> bisa didapatkan oleh pelanggan setia <span className="fw-semibold">Otten Coffee</span> yang sudah pernah berbelanja.<br />
                                    Tanggal kadaluwarsa poin: 6(enam) bulan setelah poin diperoleh.
                                </p>
                                <h5 className="text-start">1 OTTEN POIN = 1 RUPIAH</h5>
                            </div>
                        </div>

                        <div className="d-flex align-items-center">
                            <img src="aset/otten point/cara-melihat-otten-poin.png" width="40%" style={{ paddingRight: "20px" }} className="img-fluid" alt="Cara melihat poin" />
                            <div className="p-3">
                                <h4 className="mb-3 text-start">Bagaimana Cara Melihat Otten Poin Saya?</h4>
                                <ol className="my-4 ps-3">
                                    <li className="text-start pb-2 my-2">
                                        <div className="text-kecil ps-2">
                                            <span className="fw-semibold">Masuk</span> ke akun anda terlebih dahulu melalui website www.ottencoffee.co.id atau aplikasi Otten Coffee.
                                        </div>
                                    </li>
                                    <li className="text-start">
                                        <div className="text-kecil ps-2">
                                            Temukan icon <img src="aset/otten point/poin-otten.svg" alt="icon poin" /> di sebelah kanan atas homepage (pada aplikasi terdapat di sebelah kiri atas).
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div className="d-flex align-items-center">
                            <div className="p-3">
                                <h4 className="mb-3 text-start">Halaman Otten Poin</h4>
                                <div className="text-kecil">
                                    Klik Ikon <img src="aset/otten point/poin-otten.svg" alt="icon poin" /> untuk masuk Halaman Otten Poin. Pada halaman ini, Anda dapat melihat seluruh riwayat poin yang didapat, penggunaan dan tanggal kedaluwarsa Otten Poin Anda.
                                </div>
                            </div>
                            <img src="aset/otten point/halaman-otten-poin.png" width="40%" style={{ paddingRight: "20px" }} alt="Halaman poin" />
                        </div>

                        <div className="d-flex align-items-center">
                            <img src="aset/otten point/cara-memperoleh-otten-poin.png" width="45%" style={{ paddingRight: "20px" }} className="img-fluid" alt="Cara memperoleh" />
                            <div className="p-3">
                                <h4 className="mb-3 text-start">Cara Memperoleh Otten Poin</h4>
                                <ol className="my-4 ps-3">
                                    <li className="text-start pb-3 my-2">
                                        <div className="text-kecil ps-2">
                                            Pilih produk yang Anda inginkan di Otten Coffee. Pada halaman detail produk Anda dapat melihat jumlah <span className="fw-semibold">Otten Poin</span> yang akan Anda dapatkan. Masing-masing produk memiliki nilai poin yang berbeda.
                                        </div>
                                    </li>
                                    <li className="text-start pb-3">
                                        <div className="text-kecil ps-2">
                                            Anda baru bisa mendapatkan <span className="fw-semibold">Otten Poin</span> setelah Anda <span className="fw-semibold">selesai melakukan transaksi</span> dan melakukan <span className="fw-semibold">Konfirmasi Penerimaan Barang.</span>
                                        </div>
                                    </li>
                                    <li className="text-start pb-3 my-2">
                                        <div className="text-kecil ps-2">
                                            Anda bisa mendapatkan poin tambahan dengan <span className="fw-semibold">meninggalkan ulasan atau Review pada produk</span> yang Anda beli. Anda dapat menerima poin yang berbeda sesuai dengan Review yang Anda berikan.
                                        </div>
                                    </li>
                                    <li className="text-start pb-3 my-2">
                                        <div className="text-kecil ps-2">
                                            Otten Poin juga bisa didapatkan dengan menerima komisi apabila <span className="fw-semibold">pembeli selanjutnya melakukan pembelian karena ulasan yang Anda berikan.</span> Selengkapnya pada bagian Komisi dari ulasan Anda.
                                        </div>
                                    </li>
                                    <li className="text-start pb-3 my-2">
                                        <div className="text-kecil ps-2">
                                            Anda dapat mengecek masa berlaku dan riwayat penggunaan <span className="fw-semibold">Otten Poin</span> Anda pada <span className="fw-semibold">Halaman Otten Poin</span>.
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div className="d-flex align-items-center">
                            <div>
                                <h4 className="mb-3 text-start">Konfirmasi Penerimaan Barang</h4>
                                <ol className="my-4 ps-3">
                                    <li className="text-start pb-2 my-2">
                                        <div className="text-kecil ps-2">
                                            Arahkan kursor Anda ke sebelah kanan atas homepage dan klik Transaksi. Melalui aplikasi, klik Transaksi pada navigasi bar di bawah.
                                        </div>
                                    </li>
                                    <li className="text-start pb-2 my-2">
                                        <div className="text-kecil ps-2">
                                            Klik Lihat Detail pada Pesanan Anda.
                                        </div>
                                    </li>
                                    <li className="text-start">
                                        <div className="text-kecil ps-2">
                                            Klik tombol Konfirmasi Terima Barang.
                                        </div>
                                    </li>
                                </ol>
                            </div>
                            <img src="aset/otten point/konfirmasi-penerimaan-barang.png" width="50%" style={{ paddingRight: "20px" }} alt="Konfirmasi" />
                        </div>

                        <div className="d-flex g-4">
                            <div className="image-left">
                                <div className="image-left-content justify-content-start p-3 pt-5">
                                    <h4 className="mb-3 text-start">Ulasan atau Review</h4>
                                    <div className="note-top">
                                        <ol className="mb-0">
                                            <li className="text-start pb-3">
                                                <div className="text-kecil ps-2">
                                                    Klik tombol <span className="fw-semibold">Beri Ulasan</span> pada daftar produk yang Anda beli.
                                                </div>
                                            </li>
                                            <li className="text-start pb-3">
                                                <div className="text-kecil ps-2">
                                                    <span className="fw-semibold">Berikan bintang</span>sesuai dengan produk yang Anda terima.
                                                </div>
                                            </li>
                                            <li className="text-start pb-3">
                                                <div className="text-kecil ps-2">
                                                    Tulis ulasan Anda. Sematkan <span className="fw-semibold">foto dan video produk</span> untuk kesempatan memperoleh poin yang lebih besar.
                                                </div>
                                            </li>
                                            <li className="text-start pb-3">
                                                <div className="text-kecil ps-2">
                                                    Klik tombol <span className="fw-semibold">Beri Ulasan</span> untuk mengirimkan ulasan Anda.
                                                </div>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>

                            <div className="image-right">
                                <div className="justify-content-end p-3 pt-5">
                                    <h4 className="mb-3 text-start">Komisi dari Ulasan Anda</h4>
                                    <div className="note-top">
                                        <p className="mb-0">
                                            Pada saat pembeli lain melakukan <span className="fw-semibold">melakukan pembelian setelah melihat ulasan Anda</span>, Anda berhak mendapatkan komisi dari nilai yang dibayarkan, dengan nilai maksimal 100 ribu Rupiah. Syarat dan Ketentuan penerimaan komisi berlaku.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex align-items-center">
                            <img src="aset/otten point/cara-meggunakan-otten-poin.png" width="50%" style={{ paddingRight: "20px" }} className="img-fluid" alt="Cara pakai" />
                            <div className="p-3">
                                <h4 className="mb-3 text-start">Cara Menggunakan Otten Poin</h4>
                                <ol className="my-4 ps-3">
                                    <li className="text-start pb-2 my-2">
                                        <div className="text-kecil ps-2">
                                            <span className="fw-semibold">Otten Poin</span> hanya dapat digunakan ketika Anda telah sampai proses <i><span className="fw-semibold">Checkout</span></i> dan telah melakukan <span className="fw-semibold">Pembayaran</span>.
                                        </div>
                                    </li>
                                    <li className="text-start pb-2 my-2">
                                        <div className="text-kecil ps-2">
                                            Klik tombol <span className="fw-semibold">Gunakan</span> Otten Poin.
                                        </div>
                                    </li>
                                    <li className="text-start pb-2 my-2">
                                        <div className="text-kecil ps-2">
                                            Anda dapat melihat jumlah <span className="fw-semibold">Otten Poin</span> yang Anda miliki.
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div className="d-flex">
                            <div className="image-left-content p-4">
                                <h4 className="text-start pb-2 my-2">Syarat dan Ketentuan</h4>
                                <ol className="ps-3">
                                    <li className="text-start pb-2 my-2">
                                        <div className="text-kecil ps-2">
                                            Otten Poin hanya dapat digunakan untuk pembelanjaan melalui situs www.ottencoffee.co.id dan aplikasi Otten Coffee.
                                        </div>
                                    </li>
                                    <li className="text-start pb-2 my-2">
                                        <div className="text-kecil ps-2">
                                            Otten Poin tidak berlaku untuk produk dengan harga grosir.
                                        </div>
                                    </li>
                                    <li className="text-start pb-2 my-2">
                                        <div className="text-kecil ps-2">
                                            Otten Poin dapat diperoleh dari transaksi produk dengan harga normal, melakukan ulasan pada barang yang Anda beli, serta perolehan komisi dari ulasan yang dapat menarik pelanggan lain.
                                        </div>
                                    </li>
                                    <li className="text-start pb-2 my-2">
                                        <div className="text-kecil ps-2">
                                            Anda dapat melihat seluruh riwayat poin yang didapat, penggunaan dan tanggal kedaluwarsa Otten Poin Anda. Penggunaan Otten Poin Anda melalui icon Otten Point di sebelah kanan atas homepage (pada aplikasi terdapat di sebelah kiri atas).
                                        </div>
                                    </li>
                                    <li className="text-start pb-2 my-2">
                                        <div className="text-kecil ps-2">
                                            Otten Poin dapat digunakan pada transaksi produk dengan harga normal ataupun harga setelah diskon namun tidak dapat digunakan secara bersamaan dengan voucher.
                                        </div>
                                    </li>
                                    <li className="text-start pb-2 my-2">
                                        <div className="text-kecil ps-2">
                                            Sistem akan secara otomatis mengkalkulasikan persentase pemakaian poin sesuai dengan tanggal perolehan poin dan nilai transaksi. Poin yang didapatkan lebih awal akan terlebih dahulu diaplikasikan pada transaksi.
                                        </div>
                                    </li>
                                    <li className="text-start pb-2 my-2">
                                        <div className="text-kecil ps-2">
                                            Barang yang sudah dibeli tidak dapat dikembalikan.
                                        </div>
                                    </li>
                                    <li className="text-start">
                                        <div className="text-kecil ps-2">
                                            Otten Coffee berhak membatalkan pesanan apabila tidak memenuhi Syarat dan Ketentuan berlaku.
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div className="row g-4 pt-4">
                            <div className="col-md-4 rounded-3">
                                <div className="kotak-content">
                                    <h4 className="pb-4">Simulasi Pemakaian</h4>
                                    <div className="box-content">
                                        <span className="fw-semibold">Contoh:</span><br />
                                        <p>Pembelanjaan Rp1.000.000 Penggunaan Otten Poin Maksimal 90% = 900.000 poin.</p>
                                        <p>Sisa yang harus dibayar = Rp100.000 (Apabila total sisa yang harus dibayar kurang dari Rp10.000 maka total pembayaran akan disesuaikan secara sistem agar sisa yang harus dibayarkan menjadi minimal Rp10.000).</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="kotak-content">
                                    <h4 className="pb-4">Simulasi Perolehan Melalui Transaksi</h4>
                                    <div className="box-content">
                                        <span className="fw-semibold">Contoh:</span><br />
                                        <p>Pembelian Rp10.000.000 Perolehan Otten Poin 1% Otten Poin = 100.000 poin.</p>
                                        <p>Dapat digunakan hingga 90% harga pembelanjaan berikutnya Minimal yang harus dibayar pada pembelanjaan berikutnya adalah = Rp10.000.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="kotak-content">
                                    <h4>Simulasi Perolehan Melalui Ulasan</h4>
                                    <div className="box-content">
                                        <p>Ulasan dengan memberikan bintang / rating Otten Poin = 500 poin.</p>
                                        <p>Ulasan dengan meninggalkan komentar berupa teks Otten Poin = 1.000 poin.</p>
                                        <p>Ulasan dengan meninggalkan komentar berupa teks + foto Otten Poin = 2.500 poin.</p>
                                        <p>Ulasan dengan teks + foto + video berdurasi minimal 5 detik Otten Poin = 5.000 poin.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="perolehan-komisi mt-3">
                            <h4 className="pb-3">Simulasi Perolehan Komisi dari Ulasan</h4>
                            <div className="box-content mb-3">
                                <p>Ulasan yang diakses terakhir oleh pembeli selanjutnya akan mendapatkan komisi sebesar 5% dengan maksimal nilai 100.000 poin.</p>
                                <p><span className="fw-semibold">Contoh:</span></p>
                                <p>Pembeli mengakses ulasan dan membeli barang dan membayar dengan total Rp 200.000. Pemilik ulasan memperoleh Otten Poin 5% = Rp 10.000 Otten Poin = 10.000 poin.</p>
                            </div>
                            <div className="box-content mb-3">
                                <p>Ulasan yang diakses terakhir oleh pembeli selanjutnya akan mendapatkan komisi sebesar 5% dengan maksimal nilai 100.000 poin.</p>
                                <p><span className="fw-semibold">Contoh:</span></p>
                                <p>Pembeli mengakses ulasan dan membeli barang seharga Rp 200.000, lalu menggunakan voucher 10%, sehingga nilai total yang dibayarkan adalah Rp 180.000. Pemilik ulasan memperoleh Otten Poin 5% = Rp 9.000 Otten Poin = 9.000 poin.</p>
                            </div>
                            <div className="box-content">
                                <p>Ulasan yang diakses terakhir oleh pembeli selanjutnya akan mendapatkan komisi sebesar 5% dengan maksimal nilai 100.000 poin.</p>
                                <p><span className="fw-semibold">Contoh:</span></p>
                                <p>Pembeli berikutnya mengakses ulasan dan membeli dengan total Rp 5.000.000.
                                    Pemilik ulasan memperoleh Otten Poin 5%. Otten Poin = 100.000 poin karena maksimal nilai adalah 100.000 poin.</p>
                            </div>
                        </div>

                        <div className="bottom-box align-items-center pt-3">
                            <h4>Tanggal kadaluwarsa</h4>
                            <div className="d-flex gap-4">
                                <div className="image-left tanggal-kdlw">
                                    <h4 className="text-start">Transaksi Sampai Tanggal 1 juli 2019</h4>
                                    <div className="note">
                                        Poin kedaluwarsa pada tanggal 31 Januari 2020
                                    </div>
                                </div>
                                <div className="image-right tanggal-kdlw">
                                    <h4 className="text-start">Transaksi Mulai 2 juli 2020</h4>
                                    <div className="note">
                                        Poin kedaluwarsa 6 bulan dari tanggal perolehan
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="note">
                                    <p>
                                        Setelah pesanan sudah diterima, Anda wajib melakukan <span className="fw-semibold">Konfirmasi Penerimaan Barang.</span> Perlu diingat, saat Anda sudah melakukan <span className="fw-semibold">Konfirmasi Penerimaan Barang</span>, artinya produk yang Anda beli telah diterima dalam keadaan baik. Dengan demikian, Anda tidak dapat melakukan retur atau pengembalian barang.
                                    </p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="note">
                                    <p>
                                        Jika setelah 2 minggu barang dikirimkan Anda belum melakukan <span className="fw-semibold">Konfirmasi Penerimaan Barang,</span> Otten Coffee akan melakukan <span className="fw-semibold">Konfirmasi Penerimaan Barang</span> secara otomatis. <span className="fw-semibold">Otten Poin</span> yang Anda dapatkan beserta masa kedaluwarsanya secara otomatis akan masuk ke dalam akun Anda.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        );
    }
};

export default OttenPoin;