import React from "react";
import { Link } from 'react-router-dom';
import '../../css/Dropship.css';

class Dropship extends React.Component{
    render(){
        return (
            <main className="container my-5">
                <article>
                    <div className="breadcrumbs container py-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/" className="text-secondary text-decoration-none">Home</Link>
                                </li>
                                <li className="breadcrumb-item active fw-semibold" aria-current="page">Dropship</li>
                            </ol>
                        </nav>
                    </div>

                    <div className="panduan-dropship my-5">
                        <h1 style={{paddingbottom: "20px"}}>Panduan Berberlanja Dropship</h1>
                        <div>
                            <h4 className="fw-semibold">Cara Kerja Otten Dropship atau Reseller</h4>
                            <div className="cara-kerja">
                                <div className="cara">
                                    <img src="aset/dropship/cara-1.png" alt="Customer" className="img-fluid" />
                                    <h4 className="fw-semibold">Customer</h4>
                                    <br />
                                    <p>Customer/pembeli membeli produk Anda.</p>
                                </div>
                                <div className="cara">
                                    <img src="aset/dropship/cara-2.png" alt="Seller" className="img-fluid" />
                                    <h4 className="fw-semibold">Seller</h4>
                                    <br />
                                    <p>Kamu/seller menerima pesanan dari customer dan segera pesan produk via website/aplikasi Otten Coffee.</p>
                                </div>
                                <div className="cara">
                                    <img src="aset/dropship/cara-3.png" alt="Otten Coffee" className="img-fluid" />
                                    <h4 className="fw-semibold">Otten Coffee</h4>
                                    <br />
                                    <p>Setelah menerima pesanan kamu, kami siapkan barang dan dikirim langsung ke pembeli.</p>
                                </div> 
                                <div className="cara">
                                    <img src="aset/dropship/cara-4.png" alt="Tracking" className="img-fluid" />
                                    <h4 className="fw-semibold">Tracking</h4>
                                    <br />
                                    <p>Setelah barang dikirim, kami segera email nomor resi kepada Anda (penjual).</p>
                                </div>
                            </div>

                            <h4>Keuntungan Dropship atau Reseller</h4>
                            <div className="d-flex flex-wrap justify-content-start gap-3 pb-5">
                                <section className="keuntungan d-flex p-3">
                                    <span className="lingkaran">
                                        <div className="a">1</div>
                                    </span>
                                    <p>Tidak Perlu stok Barang</p>
                                </section>
                                <section className="keuntungan d-flex p-3">
                                    <span className="lingkaran">
                                        <div className="a">2</div>
                                    </span>
                                    <p>Tanpa Modal besar</p>
                                </section>
                                <section className="keuntungan d-flex p-3">
                                    <span className="lingkaran">
                                        <div className="a">3</div>
                                    </span>
                                    <p>Tanpa Resiko Barang Rusak</p>
                                </section>
                                <section className="keuntungan d-flex p-3">
                                    <span className="lingkaran">
                                        <div className="a">4</div>
                                    </span>
                                    <p>Tidak Perlu Biaya Packing</p>
                                </section>
                                <section className="keuntungan d-flex p-3">
                                    <span className="lingkaran">
                                        <div className="a">5</div>
                                    </span>
                                    <p>Tanpa Minimum Order</p>
                                </section>
                                <section className="keuntungan d-flex p-3">
                                    <span className="lingkaran">
                                        <div className="a">6</div>
                                    </span>
                                    <p>Tidak Terkait Waktu Kerja</p>
                                </section>
                            </div>

                            <h4 className="fw-semibold">Mengapa Otten Coffee</h4>
                            <div className="row flew-wrap justify-content-start gap-2">
                                <section className="mengapa p-2">
                                    <img src="aset/dropship/megaphone.png" alt="megaphone" className="img-fluid" />
                                    <h4 className="fw-semibold">Produk Terlengkap</h4>
                                    <p>Lebih dari 5.000 produk kopi yang kami jual.</p>
                                </section>
                                <section className="mengapa p-2">
                                    <img src="aset/dropship/delivery-truck.png" alt="delivery-truck" className="img-fluid" />
                                    <h4 className="fw-semibold">Pengiriman Cepat</h4>
                                    <p>Kami bekerja sama dengan beberapa kurir yang bisa mengirim pesanan Anda dengan cepat.</p>
                                </section>
                                <section className="mengapa p-2">
                                    <img src="aset/dropship/reward.png" alt="reward" className="img-fluid" />
                                    <h4 className="fw-semibold">Produk Asli</h4>
                                    <p>Otten Coffee merupakan distributor resmi Indonesia dari hampir semua brand yang dijual.</p>
                                </section>
                                <section className="mengapa p-2">
                                    <img src="aset/dropship/tracking.png" alt="tracking" className="img-fluid" />
                                    <h4 className="fw-semibold">Tracking</h4>
                                    <p>Setelah pengiriman, nomor resi langsung di email.</p>
                                </section>
                                <section className="mengapa p-2">
                                    <img src="aset/dropship/bill.png" alt="bill" className="img-fluid" />
                                    <h4 className="fw-semibold">Foto dan Deskripsi Lengkap</h4>
                                    <p>Spesifikasi, keterangan, video cara penggunaan semua ada di website Otten Coffee.</p>
                                </section>
                                <section className="mengapa p-2">
                                    <img src="aset/dropship/sticker.png" alt="sticker" className="img-fluid" />
                                    <h4 className="fw-semibold">Garansi Barang Aman</h4>
                                    <p>Jika barang sampai rusak/pecah, kami gantikan yang baru.</p>
                                </section>
                                <section className="mengapa p-2">
                                    <img src="aset/dropship/shield.png" alt="shield" className="img-fluid" />
                                    <h4 className="fw-semibold">Aman dan Terpercaya</h4>
                                    <p>Pengiriman dengan kardus tebal tanpa merek Otten, rapi dan dengan Bubble wrap.</p>
                                </section>
                                <section className="mengapa p-2">
                                    <img src="aset/dropship/money.png" alt="money" className="img-fluid" />
                                    <h4 className="fw-semibold">Untung Lebih Banyak</h4>
                                    <p>Promo harian dan flash deal setiap hari.</p>
                                </section>
                            </div>

                            <div className="panduan-berbelanja-dropship d-flex align-items-center justify-content-start gap-2 pt-4">
                                <img src="aset/dropship/dropship-1.png" alt="dropship1" className="img-fluid" />
                                <div className="keterangan">
                                    <h4 className="fw-semibold text-start fs-6">Panduan Berbelanja Dropship</h4>
                                    <br />
                                    <ol className="ps-3">
                                        <li>
                                            <p>Pada halaman Checkout, pilih dan isi nama customer yang membeli dari Anda.</p>
                                        </li>
                                        <li>
                                            <p>Anda bisa menambah daftar nama customer (nama penerima yang muncul di kotak pengiriman) dengan cara klik <b>Tambah Alamat Baru.</b></p>
                                        </li>
                                        <li>
                                            <p>Centang box (kirim sebagai dropshipper) dan isi nama dan no hp pengirim (nama pengirim yang muncul di kotak pengirim)</p>
                                        </li>
                                    </ol>
                                    <br />
                                    <p>Pelajari cara belanja di website Otten <a href="!">selengkapnya.</a></p>
                                </div>
                            </div>

                            <div className="questions pb-4">
                                <h4>Frequently Ask Questions</h4>
                                <div className="answers">
                                    <h4 className="fs-6 fw-semibold text-start pb-2">Apakah ada minimum order?</h4>
                                    <span className="text">Tidak ada minimum order untuk pembelian dropship</span>
                                </div>
                                <div className="answers">
                                    <h4 className="fs-6 fw-semibold text-start">Apa kebijakan pengambilan/penukaran barang?</h4>
                                    <span className="text">Prosedur pengembalian/penukaran barang dapat Anda pelajari <a href="#!">di halaman ini</a></span>
                                </div>
                                <div className="answers">
                                    <h4 className="fs-6 fw-semibold text-start">Bagaimana cara menjadi dropshipper?</h4>
                                    <span className="text">Pada dasarnya akun dropshipper dan member Otten Coffee adalah sama, jika sudah mendaftar silahkan <a href="#!">Masuk di sini.</a></span>
                                    <br />
                                    <span className="text">Jika belum mendaftar, silahkan <a href="#!">Daftar di sini.</a></span>
                                </div>
                                <div className="answers">
                                    <h4 className="fs-6 fw-semibold text-start">Bagaimana cara pembayaran?</h4>
                                    <span className="text">Cara pembayaran dengan E-Wallet, transfer bank, cicilan bank, minimarket, kartu kredit, dan Online Payment. Panduan pembayaran <a href="#!">Klik di sini.</a></span>
                                </div>
                                <div className="answers">
                                    <h4 className="fs-6 fw-semibold text-start">Apakah ada diskon khusus dropshipper?</h4>
                                    <span className="text">Diskon khusus untuk dropshipper adalah 5% dan maksimum diskon Rp. 50.000 dengan menggunakan kode voucher <b>DROPSHIP5</b> (Hanya berlaku untuk 10 transaksi per pelanggan)</span>
                                </div>
                            </div>

                            <div className="hubungi">
                                <section className="pb-2">Informasi lebih lanjut, silahkan hubungi customer care kami di</section>
                                <section className="pb-2"><b>0804-1-999-666</b> atau via WhatsApp <b>0822 76 999 666</b></section>
                                (09:00 - 18:00 WIB)
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        );
    }
}

export default Dropship;