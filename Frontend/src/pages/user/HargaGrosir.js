import React from "react";
import { Link } from 'react-router-dom';
import '../../css/HargaGrosir.css';

class HargaGrosir extends React.Component {
    render() {
        return (
            <main className="container my-5">
                <article className="harga-grosir">
                    <div className="breadcrumbs container py-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/" className="text-secondary text-decoration-none">Home</Link>
                                </li>
                                <li className="breadcrumb-item active fw-semibold" aria-current="page">Harga Grosir</li>
                            </ol>
                        </nav>
                    </div>

                    <h1 className="fw-semibold py-5">Syarat dan ketentuan Harga Grosir</h1>
                    <p>Syarat dan Ketentuan Program Harga Grosir yang ditetapkan di bawah ini mengatur pemakaian fasilitas yang ditawarkan oleh PT. Otten Coffee Indonesia (selanjutnya disebut sebagai "Otten Coffee") terkait dengan program Harga Grosir pada <a href="/" className="a">ottencoffee.co.id</a> dan / atau aplikasi mobile Otten Coffee.</p>

                    <p>Dengan menggunakan fitur program Harga Grosir, pengguna dianggap mengerti dan menyetujui semua Syarat & Ketentuan Program Harga Grosir yang berlaku berikut ini:</p>
                    <ol className="ps-4">
                        <li>
                            <p>Semua pengguna dapat menggunakan program Harga Grosir dengan syarat minimum pembelian sesuai dengan yang tertera di masing-masing produk di website atau aplikasi Otten Coffee.</p>
                        </li>
                        <li>
                            <p>Otten Coffee berhak dengan kewenangannya melakukan seleksi dan memutuskan secara sepihak para pengguna yang dapat menggunakan program Harga Grosir ini.</p>
                        </li>
                        <li>
                            <p>Program Harga Grosir tidak dapat digabungkan dengan promo lainnya dan tidak mendapatkan poin belanja.</p>
                        </li>
                        <li>
                            <p>Satu pengguna hanya boleh menggunakan 1 (satu) akun untuk mengikuti program Harga Grosir ini. Jika ditemukan pembuatan lebih dari 1 (satu) akun oleh 1 (satu) pengguna yang sama dan/atau nomor handphone yang sama dan/atau alamat yang sama dan/atau ID pelanggan yang sama dan/atau identitas pembayaran yang sama dan/atau riwayat transaksi yang sama, maka Otten Coffee berhak membatalkan pesanan pengguna tanpa pemberitahuan sebelumnya.</p>
                        </li>
                        <li>
                            <p>Otten Coffee dapat merubah dan/atau menambah dan/atau mengurangi fitur dan promo yang terdapat pada program ini tanpa pemberitahuan sebelumnya.</p>
                        </li>
                        <li>
                            <p>Jika pengguna program Harga Grosir akan menjual barang yang sudah dibeli dari situs/aplikasi Otten Coffee, pengguna harus mengikuti harga penjualan yang tertera di website Otten Coffee pada saat itu. Daftar harga tersebut akan diterbitkan pada akun pengguna dan dapat diubah sewaktu-waktu oleh Otten Coffee tanpa pemberitahuan sebelumnya.</p>
                        </li>
                        <li>
                            <p>Otten Coffee berhak melakukan tindakan yang diperlukan apabila diduga terjadi tindakan kecurangan dari pengguna yang merugikan Otten Coffee, termasuk namun tidak terbatas pada, pembekuan akun pengguna dan/atau upaya hukum lainnya.</p>
                        </li>
                        <li>
                            <p>Pengguna wajib mematuhi Syarat dan Ketentuan Umum Otten Coffee yang dijelaskan lebih lanjut pada laman <a href="/syarat-dan-ketentuan" className="a">syarat dan ketentuan</a>. Dalam hal ada ketentuan yang bertentangan, maka ketentuan pada Syarat dan Ketentuan Program Harga Grosir ini yang berlaku.</p>
                        </li>
                        <li>
                            <p>Syarat dan Ketentuan Program Harga Grosir ini mungkin diubah dan/atau diperbaharui dari waktu ke waktu tanpa pemberitahuan sebelumnya. Otten Coffee menyarankan agar pengguna membaca secara seksama dan memeriksa halaman Syarat dan Ketentuan Program Harga Grosir ini dari waktu ke waktu untuk mengetahui perubahan apapun. Dengan tetap mengakses dan menggunakan program ini, maka pengguna dianggap menyetujui perubahan-perubahan dalam Syarat dan Ketentuan Program Harga Grosir ini.</p>
                        </li>
                    </ol>

                </article>
            </main>
        );
    }
}

export default HargaGrosir;