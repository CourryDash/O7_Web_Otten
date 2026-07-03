import React from "react";
import { Link } from 'react-router-dom';
import '../../css/PanduanPembayaran.css';

class PanduanPembayaran extends React.Component {
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
                                    <li className="breadcrumb-item active fw-semibold" aria-current="page">Panduan Pembayaran</li>
                                </ol>
                            </nav>
                        </div>

                        <h1 className="page-title my-5">Panduan Pembayaran</h1>

                        <div className="main-content">
                            <ul className="nav nav-tabs nav-justified" id="paymentTabs" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="ewallet-tab" data-bs-toggle="tab" data-bs-target="#ewallet" type="button" role="tab">E-Wallet</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="transfer-auto-tab" data-bs-toggle="tab" data-bs-target="#transfer-auto" type="button" role="tab">Transfer Bank <br /><small>(Verifikasi Otomatis)</small></button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="transfer-manual-tab" data-bs-toggle="tab" data-bs-target="#transfer-manual" type="button" role="tab">Transfer Bank <br /><small>(Verifikasi Manual)</small></button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="cicilan-kk-tab" data-bs-toggle="tab" data-bs-target="#cicilan-kk" type="button" role="tab">Cicilan Kartu Kredit</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="cicilan-non-kk-tab" data-bs-toggle="tab" data-bs-target="#cicilan-non-kk" type="button" role="tab">Cicilan Tanpa <br />Kartu Kredit</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="minimarket-tab" data-bs-toggle="tab" data-bs-target="#minimarket" type="button" role="tab">Minimarket</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="cc-debit-tab" data-bs-toggle="tab" data-bs-target="#cc-debit" type="button" role="tab">Kartu Kredit / Debit</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="online-payment-tab" data-bs-toggle="tab" data-bs-target="#online-payment" type="button" role="tab">Online Payment</button>
                                </li>
                            </ul>

                            <div className="tab-content p-4" id="paymentTabsContent">
                                <div className="tab-pane fade show active" id="ewallet" role="tabpanel" aria-labelledby="ewallet-tab">
                                    <div className="accordion" id="accordionEwallet">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseGopay">
                                                    <img src="aset/Panduan Pembayaran/E-wallet/gopay.png" alt="GoPay" className="payment-logo" />
                                                    GoPay
                                                </button>
                                            </h2>
                                            <div id="collapseGopay" className="accordion-collapse collapse" data-bs-parent="#accordionEwallet">
                                                <div className="accordion-body">
                                                    <p className="fw-bold">Apabila kamu belum pernah menghubungkan akun GoPay sebelumnya:</p>
                                                    <ol>
                                                        <li>Verifikasi nomor HP di akun **Otten**, dan pastikan **nomor HP** sama dengan akun **GoPay**.</li>
                                                        <li>Pilih metode pembayaran pada saat checkout, lalu pilih **E-Wallet** kemudian pilih **GoPay**.</li>
                                                        <li>Selanjutnya saat kamu menekan tombol **Hubungkan** kamu akan diarahkan ke halaman untuk menghubungkan akun Otten dengan **GoPay**.</li>
                                                        <li>Masukkan **OTP** dan **PIN** untuk menghubungkan akun dan melanjutkan transaksi.</li>
                                                        <li>Jika pembayaran **berhasil**, akun GoPay kamu akan langsung terhubung ke akun **Otten**.</li>
                                                    </ol>
                                                    <p className="fw-bold">Apabila kamu sudah menghubungkan akun GoPay:</p>
                                                    <ol>
                                                        <li>Pilih metode pembayaran pada saat checkout, lalu pilih **E-Wallet**, pilih **GoPay**, kemudian klik **Bayar sekarang**.</li>
                                                        <li>Selanjutnya kamu akan diarahkan ke halaman konfirmasi pembayaran, lalu masukkan **PIN GoPay** kamu.</li>
                                                        <li>Klik **Bayar** lalu masukkan **PIN GoPay** kamu.</li>
                                                        <li>Pembayaran **berhasil**.</li>
                                                    </ol>
                                                    <p className="fw-bold">Apabila kamu tidak menghubungkan tetapi ingin menggunakan Gopay:</p>
                                                    <ol>
                                                        <li>Klik **Bayar Sekarang** dengan **GoPay** Anda.</li>
                                                        <li>Buka aplikasi **GO-JEK** di ponsel Anda.</li>
                                                        <li>Klik **Bayar**.</li>
                                                        <li>Arahkan kamera Anda ke **QR Code**.</li>
                                                        <li>Periksa detail pembayaran Anda di **aplikasi GO-JEK** dan klik **Bayar**.</li>
                                                        <li>Transaksi Anda **selesai**.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseGopayLater">
                                                    <img src="aset/Panduan Pembayaran/E-wallet/gopaylater.png" alt="GoPayLater" className="payment-logo" />
                                                    GoPayLater
                                                </button>
                                            </h2>
                                            <div id="collapseGopayLater" className="accordion-collapse collapse" data-bs-parent="#accordionEwallet">
                                                <div className="accordion-body">
                                                    <p className="fw-bold">Apabila kamu belum pernah menghubungkan akun GoPay sebelumnya:</p>
                                                    <ol>
                                                        <li>Verifikasi nomor HP di akun **Otten**, dan pastikan **nomor HP** sama dengan akun **GoPay**.</li>
                                                        <li>Pilih metode pembayaran pada saat checkout, lalu pilih **E-Wallet** kemudian pilih **GoPayLater**.</li>
                                                        <li>Selanjutnya saat kamu menekan tombol **Hubungkan** kamu akan diarahkan ke halaman untuk menghubungkan akun Otten dengan **GoPay**.</li>
                                                        <li>Masukkan **OTP** dan **PIN** untuk menghubungkan akun dan melanjutkan transaksi.</li>
                                                        <li>Jika pembayaran **berhasil**, akun GoPay kamu akan langsung terhubung ke akun **Otten**.</li>
                                                    </ol>
                                                    <p className="fw-bold">Apabila kamu sudah menghubungkan akun GoPay:</p>
                                                    <ol>
                                                        <li>Pilih metode pembayaran pada saat checkout, lalu pilih **E-Wallet**, pilih **GoPayLater**, kemudian klik **Bayar sekarang**.</li>
                                                        <li>Selanjutnya kamu akan diarahkan ke halaman konfirmasi pembayaran, lalu masukkan **PIN GoPay** kamu.</li>
                                                        <li>Klik **Bayar** lalu masukkan **PIN GoPay** kamu.</li>
                                                        <li>Pembayaran **berhasil**.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOvo">
                                                    <img src="aset/Panduan Pembayaran/E-wallet/ovo.png" alt="OVO" className="payment-logo" />
                                                    OVO
                                                </button>
                                            </h2>
                                            <div id="collapseOvo" className="accordion-collapse collapse" data-bs-parent="#accordionEwallet">
                                                <div className="accordion-body">
                                                    <p className="fw-bold">Apabila kamu belum pernah menghubungkan akun OVO sebelumnya:</p>
                                                    <ol>
                                                        <li>Verifikasi nomor HP di akun **Otten**, dan pastikan **nomor HP** sama dengan akun **OVO**.</li>
                                                        <li>Pilih metode pembayaran pada saat checkout, lalu pilih **E-Wallet** kemudian pilih **OVO**.</li>
                                                        <li>Selanjutnya saat kamu menekan tombol **Hubungkan** kamu akan diarahkan ke halaman untuk menghubungkan akun **Otten** dengan **OVO**.</li>
                                                        <li>Masukkan **OTP** dan **PIN** untuk menghubungkan akun dan melanjutkan transaksi.</li>
                                                        <li>Jika pembayaran **berhasil**, akun OVO kamu akan langsung **terhubung** ke akun Otten.</li>
                                                    </ol>
                                                    <p className="fw-bold">Apabila kamu sudah menghubungkan akun OVO:</p>
                                                    <ol>
                                                        <li>Pilih metode pembayaran pada saat checkout, lalu pilih **E-Wallet**, pilih **OVO**, kemudian klik **Bayar sekarang**.</li>
                                                        <li>Selanjutnya kamu akan diarahkan ke halaman konfirmasi pembayaran, lalu masukkan **PIN OVO** kamu.</li>
                                                        <li>Pembayaran **berhasil**.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseShopee">
                                                    <img src="aset/Panduan Pembayaran/E-wallet/shopeepay.png" alt="ShopeePay" className="payment-logo" />
                                                    ShopeePay
                                                </button>
                                            </h2>
                                            <div id="collapseShopee" className="accordion-collapse collapse" data-bs-parent="#accordionEwallet">
                                                <div className="accordion-body">
                                                    <p className="fw-bold">Cara Pembayaran</p>
                                                    <ol>
                                                        <li>Buka aplikasi **Shopee**.</li>
                                                        <li>Pilih menu **Scan**.</li>
                                                        <li>Arahkan kamera Anda ke **QR Code**.</li>
                                                        <li>Periksa detail pembayaran Anda dan klik **Lanjutkan**.</li>
                                                        <li>Masukkan **PIN** atau **autentikasi sidik jari**.</li>
                                                        <li>Pembayaran **Selesai**.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDana">
                                                    <img src="aset/Panduan Pembayaran/E-wallet/dana.png" alt="DANA" className="payment-logo" />
                                                    Dana
                                                </button>
                                            </h2>
                                            <div id="collapseDana" className="accordion-collapse collapse" data-bs-parent="#accordionEwallet">
                                                <div className="accordion-body">
                                                    <p className="fw-bold">Cara Pembayaran</p>
                                                    <ol>
                                                        <li>Pada metode pembayaran **E-wallet <i className="bi bi-chevron-right separator"></i> Dana**.</li>
                                                        <li>Klik **Bayar Sekarang**.</li>
                                                        <li>Masukkan **nomor handphone** yang terdaftar di aplikasi **Dana**.</li>
                                                        <li>Masukkan **PIN** aplikasi **Dana** Anda.</li>
                                                        <li>Pastikan nominal transaksi Anda benar, lalu klik **bayar**.</li>
                                                        <li>Pembayaran **selesai**.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQris">
                                                    <img src="aset/Panduan Pembayaran/E-wallet/qris.png" alt="QRIS" className="payment-logo" />
                                                    QRIS
                                                </button>
                                            </h2>
                                            <div id="collapseQris" className="accordion-collapse collapse" data-bs-parent="#accordionEwallet">
                                                <div className="accordion-body">
                                                    <p className="fw-bold">Cara Pembayaran</p>
                                                    <ol>
                                                        <li>Scan / Screenshot **Kode QR** yang tampil di layar dengan aplikasi BCA Mobile, GoPay, OVO, Dana, atau aplikasi pembayaran lain yang mendukung **QRIS**.</li>
                                                        <li>Masukkan **PIN** Anda.</li>
                                                        <li>Selamat, pembayaran Anda **selesai**.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseJenius">
                                                    <img src="aset/Panduan Pembayaran/E-wallet/jenius.png" alt="Jenius Pay" className="payment-logo" />
                                                    Jenius Pay
                                                </button>
                                            </h2>
                                            <div id="collapseJenius" className="accordion-collapse collapse" data-bs-parent="#accordionEwallet">
                                                <div className="accordion-body">
                                                    <p className="fw-bold">Cara Pembayaran</p>
                                                    <ol>
                                                        <li>Pembayaran dengan Jenius Pay hanya berlaku untuk Jenius User, pastikan akun Anda telah aktif dan memiliki aplikasi Jenius.</li>
                                                        <li>Temukan **$CASHTAG** di halaman **profil** pada aplikasi Jenius di ponsel Anda.</li>
                                                        <li>Masukkan **$CASHTAG** Anda.</li>
                                                        <li>Buka aplikasi Jenius untuk mengonfirmasi pembayaran.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="transfer-auto" role="tabpanel" aria-labelledby="transfer-auto-tab">
                                    <div className="accordion" id="accordionTransferAuto">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBni">
                                                    <img src="aset/Panduan Pembayaran/Transfer Bank(otomatis)/bni.png" alt="Bank BNI" className="payment-logo" />
                                                    Bank BNI
                                                </button>
                                            </h2>
                                            <div id="collapseBni" className="accordion-collapse collapse" data-bs-parent="#accordionTransferAuto">
                                                <div className="accordion-body">
                                                    <p className="fw-bold">ATM BNI</p>
                                                    <ol>
                                                        <li>Pada menu utama, pilih **Transaksi Lainnya**.</li>
                                                        <li>Pilih **Transfer**.</li>
                                                        <li>Pilih **Rekening Tabungan**.</li>
                                                        <li>Pilih Ke **Rekening BNI**.</li>
                                                        <li>Masukkan nomor virtual account dan pilih Tekan **Ya** jika **Benar**.</li>
                                                        <li>Masukkan jumlah tagihan yang akan anda bayar secara lengkap. Pembayaran dengan jumlah tidak sesuai akan otomatis ditolak.</li>
                                                        <li>Jumlah yang dibayarkan, nomor rekening dan nama Merchant akan ditampilkan. Jika informasi telah sesuai, tekan **Ya**.</li>
                                                        <li>Transaksi Anda sudah selesai.</li>
                                                    </ol>
                                                    <p className="fw-bold">Internet Banking BNI</p>
                                                    <ol>
                                                        <li>Ketik alamat **https://ibank.bni.co.id** kemudian klik **Masuk**.</li>
                                                        <li>Silakan masukkan **User ID** dan **Password**.</li>
                                                        <li>Klik menu **Transfer** kemudian pilih **Tambah Rekening Favorit**.</li>
                                                        <li>Masukkan nama, nomor rekening, dan email, lalu klik **Lanjut**.</li>
                                                        <li>Masukkan **Kode Otentikasi** dari token Anda dan klik **Lanjut**.</li>
                                                        <li>Kembali ke menu utama dan pilih **Transfer** lalu **Transfer Antar Rekening BNI**.</li>
                                                        <li>Pilih rekening yang telah Anda favoritkan sebelumnya di **Rekening Tujuan** lalu lanjutkan pengisian, dan tekan **Lanjut**.</li>
                                                        <li>Pastikan detail transaksi Anda benar, lalu masukkan **Kode Otentikasi** dan tekan **Lanjut**.</li>
                                                    </ol>
                                                    <p className="fw-bold">Mobile Banking BNI</p>
                                                    <ol>
                                                        <li>Buka aplikasi **BNI Mobile Banking** dan **login**.</li>
                                                        <li>Pilih menu **Transfer**.</li>
                                                        <li>Pilih menu **Virtual Account Billing**.</li>
                                                        <li>Pilih **rekening debit yang akan digunakan**.</li>
                                                        <li>Pilih menu **Input Baru** dan masukkan 16 digit nomor Virtual Account.</li>
                                                        <li>Informasi tagihan akan muncul pada halaman validasi.</li>
                                                        <li>Jika informasi telah sesuai, masukkan **Password** Transaksi dan klik **Lanjut**.</li>
                                                        <li>Transaksi Anda akan diproses</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMandiri">
                                                    <img src="aset/Panduan Pembayaran/Transfer Bank(otomatis)/mandiri.png" alt="Bank Mandiri" className="payment-logo" />
                                                    Bank Mandiri
                                                </button>
                                            </h2>
                                            <div id="collapseMandiri" className="accordion-collapse collapse" data-bs-parent="#accordionTransferAuto">
                                                <div className="accordion-body">
                                                    <p className="fw-bold">ATM Mandiri</p>
                                                    <ol>
                                                        <li>Pada menu utama, pilih **Bayar/Beli**.</li>
                                                        <li>Pilih **Lainnya**.</li>
                                                        <li>Pilih **Multi Payment**.</li>
                                                        <li>Masukkan 70012 (Kode perusahaan Midtrans) lalu tekan **Benar**.</li>
                                                        <li>Masukkan Kode Pembayaran Anda lalu tekan **Benar**.</li>
                                                        <li>Pada halaman konfirmasi akan muncul detail pembayaran Anda. Jika informasi telah sesuai tekan **Ya**.</li>
                                                    </ol>
                                                    <p className="fw-bold">Internet Banking Mandiri</p>
                                                    <ol>
                                                        <li>Login ke Internet Banking Mandiri (**https://ib.bankmandiri.co.id/**).</li>
                                                        <li>Pada menu utama, pilih bayar, lalu pilih **Multi Payment**.</li>
                                                        <li>Pilih akun Anda di **Dari Rekening**, kemudian di Penyedia Jasa pilih **Midtrans**.</li>
                                                        <li>Masukkan **Kode Pembayaran** Anda dan klik Lanjutkan.</li>
                                                        <li>Konfirmasi pembayaran Anda menggunakan Mandiri Token.</li>
                                                    </ol>
                                                    <p className="fw-bold">Mobile Banking Mandiri</p>
                                                    <ol>
                                                        <li>Buka aplikasi m-banking.</li>
                                                        <li>Masukkan **username** dan **password**.</li>
                                                        <li>Pilih menu **Bayar <i className="bi bi-chevron-right separator"></i> One Time <i className="bi bi-chevron-right separator"></i> Multipayment**.</li>
                                                        <li>Pilih Penyedia Jasa yang digunakan <i className="bi bi-chevron-right separator"></i> **Lanjut**.</li>
                                                        <li>Masukkan nomor Virtual account <i className="bi bi-chevron-right separator"></i> **Lanjut**.</li>
                                                        <li>Layar akan menampilkan konfirmasi. Jika sudah sesuai, masukkan **PIN** transaksi dan akhiri dengan **OK**.</li>
                                                        <li>**Selesai**.</li>
                                                    </ol>
                                                    <p className="fw-bold">Livin Mandiri</p>
                                                    <ol>
                                                        <li>Buka aplikasi **Livin Mandiri**, masukkan **password** agar Anda bisa melakukan login.</li>
                                                        <li>Silakan klik menu **Bayar** pada halaman home.</li>
                                                        <li>Livin akan menampilkan beragam fitur pembayaran, pilih **e-Commerce**.</li>
                                                        <li>**Pilih Midtrans 70012** agar Anda bisa melanjutkan proses cara bayar Midtrans lewat Livin Mandiri.</li>
                                                        <li>Masukkan **kode bayar** pada halaman selanjutnya, pastikan kode tersebut benar mengarah ke akun Anda.</li>
                                                        <li>Klik tombol **Lanjutkan** dan periksa detail transaksi di halaman Konfirmasi Pembayaran.</li>
                                                        <li>Klik tombol **Lanjut Bayar**, masukkan PIN Livin untuk menyelesaikan transaksi cara bayar Midtrans lewat Livin Mandiri Android.</li>
                                                        <li>Transaksi **selesai**, nasabah bisa menyimpan resi transaksi dalam bentuk file gambar.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBri">
                                                    <img src="aset/Panduan Pembayaran/Transfer Bank(otomatis)/bri.png" className="payment-logo" alt="Bank BRI"/>
                                                    Bank BRI
                                                </button>
                                            </h2>
                                            <div id="collapseBri" className="accordion-collapse collapse" data-bs-parent="#accordionTransferAuto">
                                                <div className="accordion-body">
                                                    <p className="fw-bold">ATM BRI</p>
                                                    <ol>
                                                        <li>Masukkan kartu ATM dan **PIN** BRI kamu.</li>
                                                        <li>Pada menu utama, pilih menu **Transaksi Lain <i className="bi bi-chevron-right separator"></i> Pembayaran <i className="bi bi-chevron-right separator"></i> Lainnya <i className="bi bi-chevron-right separator"></i> BRIVA**.</li>
                                                        <li>Masukkan nomor **BRIVA**.</li>
                                                        <li>Di halaman konfirmasi, pastikan data transaksi sudah benar kemudian pilih **Ya**.</li>
                                                    </ol>
                                                    <p className="fw-bold">Internet Banking BRI</p>
                                                    <ol>
                                                        <li>Masuk ke **https://ib.bri.co.id/ib-bri/**.</li>
                                                        <li>Masukkan **Username** dan **Password**.</li>
                                                        <li>Pilih menu **Pembayaran**, lalu pilih **BRIVA**.</li>
                                                        <li>Masukkan nomor **BRIVA**.</li>
                                                        <li>Pastikan data transaksi sudah benar.</li>
                                                        <li>Masukkan **password** kamu.</li>
                                                        <li>Masukkan **mToken** kamu.</li>
                                                    </ol>
                                                    <p className="fw-bold">Mobile Banking BRI</p>
                                                    <ol>
                                                        <li>Akses BRI Mobile Banking melalui handphone.</li>
                                                        <li>Pilih **Mobile Banking BRI**.</li>
                                                        <li>Pilih menu **Info**, lalu pilih **BRIVA**.</li>
                                                        <li>Masukkan nomor **BRIVA**.</li>
                                                        <li>Masukkan jumlah pembayaran sesuai tagihan.</li>
                                                        <li>Masukkan **PIN** kamu.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBca">
                                                    <img src="aset/Panduan Pembayaran/Transfer Bank(otomatis)/bca.png" alt="Bank BCA" className="payment-logo"/>
                                                    Bank BCA
                                                </button>
                                            </h2>
                                            <div id="collapseBca" className="accordion-collapse collapse" data-bs-parent="#accordionTransferAuto">
                                                <div className="accordion-body">
                                                    <p className="fw-bold">ATM BCA</p>
                                                    <ol>
                                                        <li>Pada menu utama, pilih **Transaksi Lainnya**.</li>
                                                        <li>Pilih **Transfer**.</li>
                                                        <li>Pilih Ke **Rek BCA Virtual Account**.</li>
                                                        <li>Masukkan **Nomor Rekening Pembayaran** (11 digit) Anda lalu tekan **Benar**.</li>
                                                        <li>Masukkan jumlah tagihan yang akan Anda **Bayar**.</li>
                                                        <li>Pada halaman konfirmasi transfer akan muncul detail pembayaran Anda. Jika informasi telah sesuai tekan **Ya**.</li>
                                                    </ol>
                                                    <p className="fw-bold">Internet Banking BCA</p>
                                                    <ol>
                                                        <li>Pilih menu **Transfer Dana**.</li>
                                                        <li>Pilih **Transfer ke BCA Virtual Account**.</li>
                                                        <li>Masukkan **nomor BCA Virtual Account**, atau pilih **Dari Daftar Transfer**.</li>
                                                        <li>Jumlah yang akan ditransfer, nomor rekening dan nama merchant akan muncul di halaman konfirmasi pembayaran, jika informasi benar klik **Lanjutkan**.</li>
                                                        <li>Ambil BCA Token Anda dan masukkan KEYBCA Response **APPLI 1** dan Klik **Submit**.</li>
                                                        <li>Transaksi Anda **Selesai**.</li>
                                                    </ol>
                                                    <p className="fw-bold">Mobile Banking BCA</p>
                                                    <ol>
                                                        <li>Lakukan Log in pada aplikasi **BCA Mobile**.</li>
                                                        <li>Pilih menu **m-BCA**, kemudian masukkan **kode akses m-BCA**.</li>
                                                        <li>Pilih **m-Transfer** BCA Virtual Account.</li>
                                                        <li>Pilih dari **Daftar Transfer**, atau masukkan **Nomor Virtual Account** tujuan.</li>
                                                        <li>Masukkan **Jumlah yang ingin dibayarkan**.</li>
                                                        <li>Masukkan pin **m-BCA**.</li>
                                                        <li>Pembayaran selesai. Simpan notifikasi yang muncul sebagai bukti pembayaran.</li>
                                                    </ol>
                                                    <p className="fw-bold">My BCA</p>
                                                    <ol>
                                                        <li>Buka **myBCA**, pilih menu Transfer.</li>
                                                        <li>Pilih menu **Virtual Account**.</li>
                                                        <li>Masukkan **nomor BCA Virtual Account** dan klik **Kirim**.</li>
                                                        <li>Cek nominal yang muncul dan klik **Lanjut**.</li>
                                                        <li>Konfirmasi detail transaksi dan klik **Lanjut**.</li>
                                                        <li>Masukkan **PIN myBCA**.</li>
                                                        <li>Transaksi **Berhasil**.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePermata">
                                                    <img src="aset/Panduan Pembayaran/Transfer Bank(otomatis)/permata.png" alt="Bank Permata" className="payment-logo" />
                                                    Bank Permata
                                                </button>
                                            </h2>
                                            <div id="collapsePermata" className="accordion-collapse collapse" data-bs-parent="#accordionTransferAuto">
                                                <div className="accordion-body">
                                                    <p className="fw-bold">ATM Permata</p>
                                                    <ol>
                                                        <li>Pada menu utama, pilih **Transaksi Lainnya**.</li>
                                                        <li>Pilih **Pembayaran**.</li>
                                                        <li>Pilih **Pembayaran Lainnya**.</li>
                                                        <li>Pilih **Virtual Account**.</li>
                                                        <li>Masukkan 16 digit No. Virtual Account yang dituju, lalu tekan **Benar**.</li>
                                                        <li>Pada halaman konfirmasi transfer akan muncul jumlah yang dibayarkan, nomor rekening, nama Merchant. Jika informasi telah sesuai tekan **Benar**.</li>
                                                        <li>Pilih rekening pembayaran Anda dan tekan **Benar**.</li>
                                                    </ol>
                                                    <p className="fw-bold">Internet Banking Permata</p>
                                                    <ol>
                                                        <li>Login internet banking kemudian pilih Menu **Pembayaran**.</li>
                                                        <li>Lalu pilih sub menu Pembayaran Tagihan dan **klik Virtual Account**.</li>
                                                        <li>Silahkan **pilih rekening** Anda lalu **pilih nomor rekening** dengan **nomor Virtual Account**, lalu klik **Lanjut**.</li>
                                                        <li>Pilih **Lanjutkan** untuk melanjutkan proses Detail Pembayaran.</li>
                                                        <li>Tunggu sebentar hingga Anda memperoleh SMS notifikasi yang berisi **KODE** respon.</li>
                                                        <li>Klik **lanjutkan** setelah memasukkan **KODE** respon tersebut.</li>
                                                        <li>Transaksi **berhasil**.</li>
                                                    </ol>
                                                    <p className="fw-bold">Mobile Banking Permata</p>
                                                    <ol>
                                                        <li>Login mobile banking yang dimiliki **Permata Bank**.</li>
                                                        <li>Lalu klik **Menu Pembayaran Tagihan** dan **pilih Menu Virtual Account**.</li>
                                                        <li>Kemudian **pilih Tagihan Anda** dan **pilih Daftar Tagihan Baru**.</li>
                                                        <li>Masukkan **nomor rekening dengan nomor Virtual Account** sebagai Nomor Tagihan. Apabila selesai silahkan klik **Konfirmasi**.</li>
                                                        <li>Masukkan Nama Pengingat setelah itu klik **Lanjut**. Apabila selesai silahkan klik **Konfirmasi**.</li>
                                                        <li>Masukkan Response **Code** dan klik **Konfirmasi** apabila telah selesai.</li>
                                                        <li>Transaksi **berhasil**.</li>
                                                    </ol>
                                                    <p className="fw-bold">PermataMobile X</p>
                                                    <ol>
                                                        <li>Buka aplikasi **PermataMobile X**.</li>
                                                        <li>Masukkan **Password**.</li>
                                                        <li>Pilih **Bayar Tagihan**.</li>
                                                        <li>Pilih **Virtual Account**.</li>
                                                        <li>Masukkan **Nomor Virtual Account**.</li>
                                                        <li>Pilih Rekening.</li>
                                                        <li>Masukkan nominal pembayaran.</li>
                                                        <li>Muncul konfirmasi pembayaran.</li>
                                                        <li>Masukkan Mobile **PIN**.</li>
                                                        <li>Transaksi **selesai**.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="transfer-manual" role="tabpanel" aria-labelledby="transfer-manual-tab">
                                    <div className="manual-transfer-list">
                                        <div className="manual-transfer-item">
                                            <div className="d-flex align-items-start">
                                                <img src="aset/Panduan Pembayaran/Transfer Bank(manual)/bca (1).png" alt="BCA Logo" className="payment-logo" />
                                                <div>
                                                    <h6 className="fw-bold mb-2 text-dark" style={{ fontSize: "1rem" }}>PT. Otten Coffee Indonesia</h6>
                                                    <p className="mb-0 text-secondary">
                                                        No. Rek : <span className="text-dark fw-medium">0229999666</span>
                                                        <button className="btn-copy" onClick={() => navigator.clipboard.writeText("0229999666")}>Salin</button>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="manual-transfer-item">
                                            <div className="d-flex align-items-start">
                                                <img src="aset/Panduan Pembayaran/Transfer Bank(manual)/mandiri.png" alt="Mandiri Logo" className="payment-logo" />
                                                <div>
                                                    <h6 className="fw-bold mb-2 text-dark" style={{ fontSize: "1rem" }}>PT. Otten Coffee Indonesia</h6>
                                                    <p className="mb-0 text-secondary">
                                                        No. Rek : <span className="text-dark fw-medium">1050006666998</span>
                                                        <button className="btn-copy" onClick={() => navigator.clipboard.writeText("1050006666998")}>Salin</button>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="manual-transfer-item">
                                            <div className="d-flex align-items-start">
                                                <img src="aset/Panduan Pembayaran/Transfer Bank(manual)/bni.png" alt="BNI Logo" className="payment-logo" />
                                                <div>
                                                    <h6 className="fw-bold mb-2 text-dark" style={{ fontSize: "1rem" }}>PT. Otten Coffee Indonesia</h6>
                                                    <p className="mb-0 text-secondary">
                                                        No. Rek : <span className="text-dark fw-medium">2299996616</span>
                                                        <button className="btn-copy" onClick={() => navigator.clipboard.writeText("2299996616")}>Salin</button>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="manual-transfer-item">
                                            <div className="d-flex align-items-start">
                                                <img src="aset/Panduan Pembayaran/Transfer Bank(manual)/bri.png" alt="BRI Logo" className="payment-logo" />
                                                <div>
                                                    <h6 className="fw-bold mb-2 text-dark" style={{ fontSize: "1rem" }}>PT. Otten Coffee Indonesia</h6>
                                                    <p className="mb-0 text-secondary">
                                                        No. Rek : <span className="text-dark fw-medium">040401000567307</span>
                                                        <button className="btn-copy" onClick={() => navigator.clipboard.writeText("040401000567307")}>Salin</button>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="manual-confirm-alert">
                                        Jika menggunakan metode bank transfer, setoran tunai atau internet/mobile banking, Anda harus melakukan **Konfirmasi Pembayaran** setelah mentransfer dana ke rekening Otten Coffee.
                                        <br className="d-none d-md-block" /> Untuk melakukan konfirmasi pembayaran <a href="#!">klik disini</a>.
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="cicilan-kk" role="tabpanel" aria-labelledby="cicilan-kk-tab">
                                    <div className="accordion" id="accordionCicilanKK">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCicilanKK">
                                                    <img src="aset/Panduan Pembayaran/Cicilan Kartu Kredit/visa-mastercard.png" alt="VISA Mastercard" className="payment-logo" />
                                                    Cicilan Kartu Kredit
                                                </button>
                                            </h2>
                                            <div id="collapseCicilanKK" className="accordion-collapse collapse" data-bs-parent="#accordionCicilanKK">
                                                <div className="accordion-body">
                                                    <p className="fw-bold">Cara Pembayaran:</p>
                                                    <ol>
                                                        <li>Setelah selesai berbelanja. Klik **Icon Keranjang** di kanan atas homepage dan klik **Keranjang Belanja**.</li>
                                                        <li>Selanjutnya Anda akan masuk ke halaman Keranjang, cek kembali pesanan Anda dan Klik **Lanjut Ke Checkout** untuk melanjutkan.</li>
                                                        <li>Pilih alamat Anda atau tambahkan untuk alamat baru.</li>
                                                        <li>Pilih jasa pengiriman yang Anda inginkan.</li>
                                                        <li>Periksa kembali barang pesanan Anda dan klik **Pilih Metode Pembayaran** untuk melanjutkan.</li>
                                                        <li>Jika metode Cicilan, pilih **Bank** dan **durasi cicilan** yang Anda inginkan.</li>
                                                        <li>Pada metode pembayaran pilih **Cicilan** atau **Kartu Kredit**.</li>
                                                        <li>Klik **Bayar Sekarang**.</li>
                                                        <li>Selanjutnya Anda akan ditujukan ke halaman pembayaran dengan Kartu Kredit. Masukkan nomor kartu kredit dan data Anda. (Data Kredit Anda Aman, tidak disimpan dan tidak akan disalahgunakan).</li>
                                                        <li>Selesai dan pembayaran Anda secara otomatis langsung telah di terima Otten Coffee.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="cicilan-non-kk" role="tabpanel" aria-labelledby="cicilan-non-kk-tab">
                                    <div className="accordion" id="accordionCicilanNonKK">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseKredivo">
                                                    <img src="aset/Panduan Pembayaran/Cicilan Tanpa Kartu/Kredivo.png" alt="Kredivo" className="payment-logo" />
                                                    Kredivo
                                                </button>
                                            </h2>
                                            <div id="collapseKredivo" className="accordion-collapse collapse" data-bs-parent="#accordionCicilanNonKK">
                                                <div className="accordion-body">
                                                    <p className="fw-bold">Cara Pembayaran</p>
                                                    <ol>
                                                        <li>Pilih metode pembayaran Kredivo di Checkout Page dan pastikan Anda telah memiliki akun Kredivo sebelum checkout.</li>
                                                        <li>Apabila Anda telah memiliki akun Kredivo silahkan Login menggunakan akun Kredivo Anda saat checkout, apabila belum memiliki akun Kredivo, silakan Daftar terlebih dahulu.</li>
                                                        <li>Pilih Kredivo dan sub-metode Bayar Dalam 30 Hari atau Cicilan di halaman Metode Pembayaran, kemudian klik Bayar Sekarang.</li>
                                                        <li>Bayar Dalam 30 Hari berlaku tanpa minimum transaksi dengan bunga 0%.</li>
                                                        <li>Cicilan 3/6/12 bulan berlaku untuk pembelian 1 produk atau lebih dalam 1 keranjang belanja dengan minimum transaksi Rp500.000 dan akan dikenakan bunga 2,6% per bulan.</li>
                                                        <li>Anda akan diarahkan ke halaman pembayaran Kredivo untuk menyelesaikan pembayaran.</li>
                                                        <li>Untuk menggunakan promo, klik menu Voucher Untukmu dan pilih voucher yang tersedia sesuai syarat dan ketentuan promo.</li>
                                                        <li>Masukkan OTP yang sudah dikirimkan ke nomor HP yang terdaftar dan klik Bayar.</li>
                                                        <li>Saat ini Kredivo berlaku di Jabodetabek, Bandung, Surabaya, Semarang, Palembang, Medan, Bali, Yogyakarta, Solo, Makassar, Malang, Sukabumi, Cirebon, Balikpapan, Batam, Purwakarta, Padang, Pekanbaru, Manado, Samarinda, dan Kediri.</li>
                                                        <li>Informasi lebih lanjut mengenai pembayaran menggunakan Kredivo bisa diakses pada <a href="https://kredivo.com/faqs" target="_blank" rel="noopener noreferrer">kredivo.com/faqs</a>.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIndodana">
                                                    <img src="aset/Panduan Pembayaran/Cicilan Tanpa Kartu/indodana.png" alt="Indodana" className="payment-logo" />
                                                    Indodana
                                                </button>
                                            </h2>
                                            <div id="collapseIndodana" className="accordion-collapse collapse" data-bs-parent="#accordionCicilanNonKK">
                                                <div className="accordion-body">
                                                    <p className="fw-bold">Cara Pembayaran</p>
                                                    <ol>
                                                        <li>Pilih metode pembayaran **Indodana**.</li>
                                                        <li>Klik **Bayar Sekarang**.</li>
                                                        <li>Login ke akun Indodana dengan memasukkan **nomor handphone** dan **PIN**.</li>
                                                        <li>Pilih salah satu **tenor cicilan** pembayaran Indodana.</li>
                                                        <li>Masukkan kode **PIN/OTP** yang akan dikirimkan sistem melalui SMS ke nomor handphone Anda.</li>
                                                        <li>Klik Konfirmasi **PIN/OTP**.</li>
                                                        <li>Pembayaran **Selesai**.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAkulaku">
                                                    <img src="aset/Panduan Pembayaran/Cicilan Tanpa Kartu/akulaku.png" alt="Akulaku" className="payment-logo" />
                                                    Akulaku
                                                </button>
                                            </h2>
                                            <div id="collapseAkulaku" className="accordion-collapse collapse" data-bs-parent="#accordionCicilanNonKK">
                                                <div className="accordion-body">
                                                    <p className="fw-bold">Cara Pembayaran</p>
                                                    <ol>
                                                        <li>Pilih metode pembayaran **Akulaku**.</li>
                                                        <li>Klik **Bayar Sekarang**.</li>
                                                        <li>Pilih salah satu **tenor cicilan** pembayaran Akulaku.</li>
                                                        <li>Login ke akun Akulaku dengan memasukkan **nomor handphone** dan **password**.</li>
                                                        <li>Masukkan kode **OTP** yang akan dikirimkan sistem melalui SMS ke nomor handphone Anda.</li>
                                                        <li>Klik Konfirmasi **OTP**.</li>
                                                        <li>Pembayaran **Selesai**.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="minimarket" role="tabpanel" aria-labelledby="minimarket-tab">
                                    <div className="accordion" id="accordionMinimarket">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIndomaret">
                                                    <img src="aset/Panduan Pembayaran/Minimarket/indomaret-1.png" alt="Indomaret" className="payment-logo" />
                                                    Indomaret
                                                </button>
                                            </h2>
                                            <div id="collapseIndomaret" className="accordion-collapse collapse" data-bs-parent="#accordionMinimarket">
                                                <div className="accordion-body">
                                                    <p className="fw-bold">Cara Pembayaran</p>
                                                    <ol>
                                                        <li>Setelah selesai berbelanja. Klik **Icon Keranjang** di kanan atas homepage dan klik **Keranjang Belanja**.</li>
                                                        <li>Selanjutnya Anda akan masuk ke halaman Keranjang, cek kembali pesanan Anda dan Klik **Lanjut Ke Checkout** untuk melanjutkan.</li>
                                                        <li>Pilih alamat Anda atau tambahkan untuk alamat baru.</li>
                                                        <li>Pilih jasa pengiriman yang Anda inginkan.</li>
                                                        <li>Periksa kembali barang pesanan Anda dan klik **Pilih Metode Pembayaran** untuk melanjutkan.</li>
                                                        <li>Pilih metode pembayaran dengan **Minimarket** dan pilih **Indomaret**.</li>
                                                        <li>Klik tombol **Bayar Sekarang**.</li>
                                                        <li>Beritahu ke kasir bahwa Anda ingin melakukan pembayaran "DOKU".</li>
                                                        <li>Catat kode pembayaran dan datang ke gerai Alfa Group atau Indomaret terdekat.</li>
                                                        <li>Anda akan mendapatkan 16 digit payment code.</li>
                                                        <li>Jika kasir tidak mengetahui mengenai pembayaran DOKU, informasikan ke kasir untuk membuka terminal e-transaction, pilih "2", lalu "2", lalu "2" yang akan menampilkan pilihan DOKU.</li>
                                                        <li>Kasir akan menanyakan "kode pembayaran". Berikan "kode pembayaran" Anda dan kasir akan menginformasikan nominal yang harus dibayarkan.</li>
                                                        <li>Lakukan pembayaran ke kasir sejumlah nominal yang disebutkan. Pembayaran dapat menggunakan uang tunai atau non tunai.</li>
                                                        <li>Selesai dan pesanan Anda akan segera diproses dan dikirimkan.</li>
                                                        <li>Simpan struk pembayaran sebagai bukti pembayaran selesai, notifikasi pembayaran secara otomatis langsung diterima Otten Coffee.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAlfamart">
                                                    <img src="aset/Panduan Pembayaran/Minimarket/alfamart.png" alt="Alfamart" className="payment-logo" />
                                                    Alfamart
                                                </button>
                                            </h2>
                                            <div id="collapseAlfamart" className="accordion-collapse collapse" data-bs-parent="#accordionMinimarket">
                                                <div className="accordion-body">
                                                    <p className="fw-bold">Cara Pembayaran</p>
                                                    <ol>
                                                        <li>Setelah selesai berbelanja. Klik **Icon Keranjang** di kanan atas homepage dan klik **Keranjang Belanja**.</li>
                                                        <li>Selanjutnya Anda akan masuk ke halaman Keranjang, cek kembali pesanan Anda dan Klik **Lanjut Ke Checkout** untuk melanjutkan.</li>
                                                        <li>Pilih alamat Anda atau tambahkan untuk alamat baru.</li>
                                                        <li>Pilih jasa pengiriman yang Anda inginkan.</li>
                                                        <li>Periksa kembali barang pesanan Anda dan klik **Pilih Metode Pembayaran** untuk melanjutkan.</li>
                                                        <li>Pilih metode pembayaran dengan **Minimarket** dan pilih **Alfamart**.</li>
                                                        <li>Klik tombol **Bayar Sekarang**.</li>
                                                        <li>Beritahu ke kasir bahwa Anda ingin melakukan pembayaran "DOKU".</li>
                                                        <li>Catat kode pembayaran dan datang ke gerai Alfa Group atau Indomaret terdekat.</li>
                                                        <li>Anda akan mendapatkan 16 digit payment code.</li>
                                                        <li>Jika kasir tidak mengetahui mengenai pembayaran DOKU, informasikan ke kasir untuk membuka terminal e-transaction, pilih "2", lalu "2", lalu "2" yang akan menampilkan pilihan DOKU.</li>
                                                        <li>Kasir akan menanyakan "kode pembayaran". Berikan "kode pembayaran" Anda dan kasir akan menginformasikan nominal yang harus dibayarkan.</li>
                                                        <li>Lakukan pembayaran ke kasir sejumlah nominal yang disebutkan. Pembayaran dapat menggunakan uang tunai atau non tunai.</li>
                                                        <li>Selesai dan pesanan Anda akan segera diproses dan dikirimkan.</li>
                                                        <li>Simpan struk pembayaran sebagai bukti pembayaran selesai, notifikasi pembayaran secara otomatis langsung diterima Otten Coffee.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="cc-debit" role="tabpanel" aria-labelledby="cc-debit-tab">
                                    <div className="accordion" id="accordionCcDebit">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCcDebit">
                                                    <img src="aset/Panduan Pembayaran/Cicilan Kartu Kredit/visa-mastercard.png" alt="Kartu Kredit" className="payment-logo" />
                                                    Kartu Kredit
                                                </button>
                                            </h2>
                                            <div id="collapseCcDebit" className="accordion-collapse collapse" data-bs-parent="#accordionCcDebit">
                                                <div className="accordion-body">
                                                    <p className="fw-bold">Cara Pembayaran</p>
                                                    <ol>
                                                        <li>Klik **Kartu Kredit/Kartu Debit** pada kolom Pilih Metode Pembayaran di halaman **Pembayaran**, lalu klik **Bayar Sekarang**.</li>
                                                        <li>Selanjutnya Anda akan ditujukan ke halaman pembayaran dengan Kartu Kredit. Masukkan **nomor kartu kredit** dan **data Anda**. (Data Kredit Anda Aman, tidak disimpan dan tidak akan disalahgunakan).</li>
                                                        <li>**Selesai** dan pembayaran Anda secara otomatis langsung telah di terima Otten Coffee.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="online-payment" role="tabpanel" aria-labelledby="online-payment-tab">
                                    <div className="accordion" id="accordionOnlinePayment">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseKlikPay">
                                                    <img src="aset/Panduan Pembayaran/Online Payment/bca-klikpay.png" alt="BCA KlikPay" className="payment-logo" />
                                                    Klik Pay
                                                </button>
                                            </h2>
                                            <div id="collapseKlikPay" className="accordion-collapse collapse" data-bs-parent="#accordionOnlinePayment">
                                                <div className="accordion-body">
                                                    <p className="fw-bold">Cara Pembayaran</p>
                                                    <ol>
                                                        <li>Setelah selesai berbelanja. Klik **Icon Keranjang** di kanan atas homepage dan klik **Keranjang Belanja**.</li>
                                                        <li>Selanjutnya Anda akan masuk ke halaman Keranjang, cek kembali pesanan Anda dan Klik **Lanjut Ke Checkout** untuk melanjutkan.</li>
                                                        <li>Pilih alamat Anda atau tambahkan untuk alamat baru.</li>
                                                        <li>Pilih jasa pengiriman yang Anda inginkan.</li>
                                                        <li>Periksa kembali barang pesanan Anda dan klik **Pilih Metode Pembayaran** untuk melanjutkan.</li>
                                                        <li>Pilih metode pembayaran **Online Payment** dan pilih **BCA Klikpay**.</li>
                                                        <li>Klik **Bayar Sekarang**.</li>
                                                        <li>Pilih jenis pembayaran Anda dengan **Klik BCA** atau **Kartu Kredit BCA**.</li>
                                                        <li>Masukkan alamat email dan password BCA Klikpay Anda, klik **Login**.</li>
                                                        <li>Anda akan ditujukan ke halaman payment BCA Klikpay.</li>
                                                        <li>Klik **Kirim OTP** dan Anda akan dikirimkan kode OTP oleh BCA dan masukkan kode OTP, lalu klik **Bayar**.</li>
                                                        <li>Selesai dan pembayaran Anda secara otomatis langsung telah di terima Otten Coffee.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <h2 className="section-title">Ubah Metode Pembayaran</h2>
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="info-box">
                                    <p className="mb-3 fw-bold">Anda dapat mengubah metode pembayaran Anda jika:</p>
                                    <ol>
                                        <li>Pembayaran dengan metode pembayaran E-Wallet gagal.</li>
                                        <li>Pembayaran dengan metode pembayaran Transfer Bank (Verifikasi Otomatis).</li>
                                        <li>Anda telah berbelanja di Otten Coffee dengan memilih metode Bank Transfer dan belum menyelesaikan pembayaran.</li>
                                        <li>Pembayaran dengan metode pembayaran Cicilan Kartu Kredit gagal.</li>
                                        <li>Pembayaran dengan metode pembayaran Cicilan Tanpa Kartu Kredit gagal.</li>
                                        <li>Pembayaran dengan metode pembayaran Minimarket gagal.</li>
                                        <li>Pembayaran dengan metode pembayaran Kartu Kredit / Debit gagal.</li>
                                        <li>Pembayaran dengan metode pembayaran Online Payment gagal.</li>
                                    </ol>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info-box">
                                    <p className="mb-3 fw-bold">Mengubah metode pembayaran:</p>
                                    <ol>
                                        <li>Pastikan Anda telah Masuk ke **Akun** Anda.
                                            <ul className="list-unstyled mt-2 mb-2 ps-3 text-muted" style={{ fontSize: "0.9em" }}>
                                                <li>Mobile: Klik Akun pada navigasi bar di bawah lalu klik Transaksi.</li>
                                                <li>Desktop: klik **icon akun Anda** di sebelah kanan atas homepage dan klik Transaksi.</li>
                                            </ul>
                                        </li>
                                        <li>Klik **Lihat Detail** pada Pesanan Anda.</li>
                                        <li>Klik tombol **Ubah Metode Pembayaran**.</li>
                                        <li>Pilih kembali Metode pembayaran yang Anda inginkan.</li>
                                        <li>Klik **Bayar Sekarang** dan selesaikan pembayaran Anda.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        );
    }
}

export default PanduanPembayaran;