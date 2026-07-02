import React from "react";
import { Link } from "react-router-dom";
import '../../css/Pengiriman.css';

class Pengiriman extends React.Component {
    render() {
        return (
            <main className="container my-5 pt-5">
                <article>
                    <div className="breadcrumbs container py-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/" className="text-secondary text-decoration-none">Home</Link>
                                </li>
                                <li className="breadcrumb-item active fw-semibold" aria-current="page">Pengiriman</li>
                            </ol>
                        </nav>
                    </div>

                    <div className="hero-banner1 my-5">
                        <h1 className="hero-title">
                            Pertanyaan Umum Tentang Pengiriman di Otten Coffee--
                        </h1>
                        <p className="hero-text">
                            Temukan informasi lengkap dan jelas tentang pengiriman di Otten Coffee. Kami pastikan pesanan kamu sampai dengan cepat, aman, dan terpercaya. Yuk, baca pertanyaan umum ini untuk menemukan jawaban yang kamu cari!
                        </p>
                    </div>

                    <div className="faq-illustration">
                        <img src="aset/Pengiriman/illustration-faq-main.png" alt="Ilustrasi FAQ Pengiriman" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200?text=Ilustrasi+FAQ';" />
                    </div>
                    <h2 className="faq-title">Yang Sering Ditanyakan</h2>

                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="accordion accordion-flush" id="faqAccordionOtten">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Metode pengiriman apa saja yang tersedia di ottencoffee.co.id?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordionOtten">
                                        <div className="accordion-body">

                                            <p>Kami menawarkan beberapa pilihan pengiriman:</p>
                                            <ul>
                                                <li>Pengiriman Instant/Same Day: Pengiriman cepat yang sampai di hari yang sama.</li>
                                                <li>Pengiriman Reguler/Next Day: Pengiriman biasa yang sampai keesokan harinya atau beberapa hari kedepan.</li>
                                                <li>Pengiriman Kargo: Untuk barang dalam jumlah besar.</li>
                                            </ul>

                                            <ul className="nav nav-tabs nav-fill mt-4" id="shippingTabs" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active" id="instant-tab" data-bs-toggle="tab" data-bs-target="#instant" type="button" role="tab" aria-controls="instant" aria-selected="true">Instant</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="sameday-tab" data-bs-toggle="tab" data-bs-target="#sameday" type="button" role="tab" aria-controls="sameday" aria-selected="false">Same Day</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="nextday-tab" data-bs-toggle="tab" data-bs-target="#nextday" type="button" role="tab" aria-controls="nextday" aria-selected="false">Next Day</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="regular-tab" data-bs-toggle="tab" data-bs-target="#regular" type="button" role="tab" aria-controls="regular" aria-selected="false">Regular</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="cargo-tab" data-bs-toggle="tab" data-bs-target="#cargo" type="button" role="tab" aria-controls="cargo" aria-selected="false">Cargo</button>
                                                </li>
                                            </ul>

                                            <div className="tab-content" id="shippingTabsContent">

                                                <div className="tab-pane fade show active" id="instant" role="tabpanel" aria-labelledby="instant-tab">
                                                    <div className="row g-3">
                                                        <div className="col-md-6">
                                                            <div className="shipping-card">
                                                                <div className="shipping-title">
                                                                    <img src="aset/Pengiriman/instant/6090c675cabb6359307666.png" alt="GrabExpress" className="shipping-logo" style={{ height: "20px" }} />
                                                                    Grab Express Instant Bike
                                                                </div>
                                                                <div className="shipping-area">Wilayah Pengiriman : Jakarta, Medan & Bandung</div>
                                                                <ul className="shipping-details">
                                                                    <li><b>Waktu Pengiriman :</b> 4 Jam (Maks. 30km)</li>
                                                                    <li><b>Berat Maksimum :</b> 15kg</li>
                                                                    <li><b>Ukuran Barang Max :</b> 50cm x 50cm x 50cm</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="shipping-card">
                                                                <div className="shipping-title">
                                                                    <img src="aset/Pengiriman/instant/60ed3129cde5c045351256.png" alt="GoSend" className="shipping-logo" style={{ height: "25px" }} />
                                                                    Gosend Instant
                                                                </div>
                                                                <div className="shipping-area">Wilayah Pengiriman : Jakarta, Medan & Bandung</div>
                                                                <ul className="shipping-details">
                                                                    <li><b>Waktu Pengiriman :</b> 4 Jam (Maks. 40km)</li>
                                                                    <li><b>Berat Maksimum :</b> 15kg</li>
                                                                    <li><b>Ukuran Barang Max :</b> 70cm x 50cm x 50cm</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="tab-pane fade" id="sameday" role="tabpanel" aria-labelledby="sameday-tab">
                                                    <div className="row g-3">
                                                        <div className="col-md-6 col-lg-4">
                                                            <div className="shipping-card">
                                                                <div className="shipping-title">
                                                                    <img src="aset/Pengiriman/same day/6090c675cabb6359307666 (1).png" alt="GrabExpress" className="shipping-logo" style={{ height: "20px" }} />
                                                                    Grab Express Same Day
                                                                </div>
                                                                <div className="shipping-area">Wilayah Pengiriman : Jakarta & Bandung</div>
                                                                <ul className="shipping-details">
                                                                    <li><b>Waktu Pengiriman :</b> Dihari yang sama (Maks. 40km)</li>
                                                                    <li><b>Berat Maksimum :</b> 8kg</li>
                                                                    <li><b>Ukuran Barang Max :</b> 40cm x 20cm x 20cm</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-lg-4">
                                                            <div className="shipping-card">
                                                                <div className="shipping-title">
                                                                    <img src="aset/Pengiriman/same day/6090c675cabb6359307666 (1).png" alt="GrabExpress" className="shipping-logo" style={{ height: "20px" }} />
                                                                    Grab Express Car
                                                                </div>
                                                                <div className="shipping-area">Wilayah Pengiriman : Jakarta & Bandung</div>
                                                                <ul className="shipping-details">
                                                                    <li><b>Waktu Pengiriman :</b> Dihari yang sama (Maks. 50km)</li>
                                                                    <li><b>Berat Maksimum :</b> 150kg</li>
                                                                    <li><b>Ukuran Barang Max :</b> 40cm x 20cm x 20cm</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-lg-4">
                                                            <div className="shipping-card">
                                                                <div className="shipping-title">
                                                                    <img src="aset/Pengiriman/same day/60ed3129cde5c045351256.png" alt="GoSend" className="shipping-logo" style={{ height: "25px" }} />
                                                                    Gosend Same Day
                                                                </div>
                                                                <div className="shipping-area">Wilayah Pengiriman : Jakarta, Bandung & Medan</div>
                                                                <ul className="shipping-details">
                                                                    <li><b>Waktu Pengiriman :</b> Dihari yang sama (Maks. 40km)</li>
                                                                    <li><b>Berat Maksimum :</b> 8kg</li>
                                                                    <li><b>Ukuran Barang Max :</b> 40cm x 40cm x 17cm</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-lg-4">
                                                            <div className="shipping-card">
                                                                <div className="shipping-title">
                                                                    <img src="aset/Pengiriman/same day/6764766db270b824020395.jpeg" alt="Lalamove" className="shipping-logo" style={{ height: "35px" }} />
                                                                    Lalamove Bike
                                                                </div>
                                                                <div className="shipping-area">Wilayah Pengiriman : Jakarta</div>
                                                                <ul className="shipping-details">
                                                                    <li><b>Waktu Pengiriman :</b> Dihari yang sama (Maks. 25km)</li>
                                                                    <li><b>Berat Maksimum :</b> 20kg</li>
                                                                    <li><b>Ukuran Barang Max :</b> -</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="tab-pane fade" id="nextday" role="tabpanel" aria-labelledby="nextday-tab">
                                                    <div className="row g-3">
                                                        <div className="col-md-6">
                                                            <div className="shipping-card">
                                                                <div className="shipping-title">
                                                                    <img src="aset/Pengiriman/next day/64e46db86648e734976368.png" alt="JNE YES" className="shipping-logo" style={{ height: "25px" }} />
                                                                    JNE YES
                                                                </div>
                                                                <div className="shipping-area">Wilayah Pengiriman : Jakarta & Medan</div>
                                                                <ul className="shipping-details">
                                                                    <li><b>Waktu Pengiriman :</b> 24 Jam</li>
                                                                    <li><b>Berat Maksimum :</b> -</li>
                                                                    <li><b>Ukuran Barang Max :</b> -</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="tab-pane fade" id="regular" role="tabpanel" aria-labelledby="regular-tab">
                                                    <div className="row g-3">
                                                        <div className="col-md-6">
                                                            <div className="shipping-card">
                                                                <div className="shipping-title">
                                                                    <img src="aset/Pengiriman/regular/jnereg.png" alt="JNE REG" className="shipping-logo" style={{ height: "25px" }} />
                                                                    JNE REG
                                                                </div>
                                                                <div className="shipping-area">Wilayah Pengiriman : Jakarta, Bandung & Medan</div>
                                                                <ul className="shipping-details">
                                                                    <li><b>Waktu Pengiriman :</b> 2 - 3 Hari</li>
                                                                    <li><b>Berat Maksimum :</b> -</li>
                                                                    <li><b>Ukuran Barang Max :</b> -</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="shipping-card">
                                                                <div className="shipping-title">
                                                                    <img src="aset/Pengiriman/regular/687533ddc3432683850749.png" alt="Lion Parcel" className="shipping-logo" style={{ height: "30px" }} />
                                                                    Lion Parcel Reg Pack
                                                                </div>
                                                                <div className="shipping-area">Wilayah Pengiriman : Jakarta & Medan</div>
                                                                <ul className="shipping-details">
                                                                    <li><b>Waktu Pengiriman :</b> 2 - 3 Hari</li>
                                                                    <li><b>Berat Maksimum :</b> -</li>
                                                                    <li><b>Ukuran Barang Max :</b> -</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="tab-pane fade" id="cargo" role="tabpanel" aria-labelledby="cargo-tab">
                                                    <div className="row g-3">
                                                        <div className="col-md-6">
                                                            <div className="shipping-card">
                                                                <div className="shipping-title">
                                                                    <img src="aset/Pengiriman/cargo/64e46d9e7e0f7181149187.png" alt="JNE TRUCKING" className="shipping-logo" style={{ height: "25px" }} />
                                                                    JNE TRUCKING
                                                                </div>
                                                                <div className="shipping-area">Wilayah Pengiriman : Jakarta & Medan</div>
                                                                <ul className="shipping-details">
                                                                    <li><b>Waktu Pengiriman :</b> 3 - 7 Hari</li>
                                                                    <li><b>Berat Maksimum :</b> -</li>
                                                                    <li><b>Ukuran Barang Max :</b> -</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="shipping-card">
                                                                <div className="shipping-title">
                                                                    <img src="aset/Pengiriman/cargo/64e46d9e7e0f7181149187.png" alt="Lion Parcel" className="shipping-logo" style={{ height: "30px" }} />
                                                                    Lion Parcel Big Pack
                                                                </div>
                                                                <div className="shipping-area">Wilayah Pengiriman : Jakarta & Medan</div>
                                                                <ul className="shipping-details">
                                                                    <li><b>Waktu Pengiriman :</b> 3 - 4 Hari</li>
                                                                    <li><b>Berat Maksimum :</b> -</li>
                                                                    <li><b>Ukuran Barang Max :</b> -</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="custom-alert-box">
                                                Perlu diperhatikan bahwa berat yang tertera pada halaman produk adalah berat produk. Biaya pengiriman tidak hanya ditentukan dari berat produk tetapi ditentukan pula oleh dimensi kemasan berdasarkan kriteria yang telah ditetapkan oleh mitra pengiriman kami.
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                            Apakah ada biaya yang dikenakan untuk pengiriman?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordionOtten">
                                        <div className="accordion-body">
                                            Ya, ada biaya pengiriman yang bervariasi tergantung pada alamat tujuan dan jenis layanan pengiriman yang kamu pilih.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                            Bagaimana cara saya mendapatkan voucher untuk biaya pengiriman?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordionOtten">
                                        <div className="accordion-body">
                                            Voucher untuk biaya pengiriman dapat digunakan saat checkout jika tersedia.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                            Berapa lama waktu yang diperlukan untuk proses pengiriman pesanan saya?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordionOtten">
                                        <div className="accordion-body">
                                            Waktu pengiriman tergantung pada jenis layanan yang kamu pilih. Estimasi waktu akan muncul saat kamu memilih kurir di halaman checkout.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                                            Apakah saya bisa melacak status pesanan setelah melakukan pemesanan?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#faqAccordionOtten">
                                        <div className="accordion-body">
                                            Tentu saja. Kamu bisa melacak status pesananmu melalui halaman "Pesanan Saya" di akunmu.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix">
                                            Apa langkah yang harus diambil jika paket saya tidak tiba sesuai jadwal?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#faqAccordionOtten">
                                        <div className="accordion-body">
                                            Jika paketmu terlambat, silakan cek status pelacakan terlebih dahulu atau hubungi CS kami.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSeven">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven">
                                            Adakah batasan wilayah tertentu untuk layanan pengiriman dari ottencoffee.co.id?
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#faqAccordionOtten">
                                        <div className="accordion-body">
                                            Kami melayani pengiriman ke hampir seluruh wilayah Indonesia.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingEight">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight">
                                            Bisakah saya mengubah alamat tujuan setelah menyelesaikan pemesanan?
                                        </button>
                                    </h2>
                                    <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#faqAccordionOtten">
                                        <div className="accordion-body">
                                            Mohon maaf, alamat pengiriman tidak dapat diubah setelah pesanan diproses.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingNine">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine">
                                            Apa yang harus dilakukan jika barang yang diterima dalam kondisi rusak atau salah kirim?
                                        </button>
                                    </h2>
                                    <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#faqAccordionOtten">
                                        <div className="accordion-body">
                                            Segera hubungi customer service kami maksimal 2x24 jam setelah barang diterima.
                                        </div>
                                    </div>
                                </div>


                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTen">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                            Bagaimana cara mengetahui skema voucher pengiriman berdasarkan total belanja di ottencoffee.co.id?
                                        </button>
                                    </h2>
                                    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#faqAccordionOtten">
                                        <div className="accordion-body">
                                            <p className="mb-4">Informasi tentang skema voucher dapat ditemukan di halaman Pengiriman kami dan syaratnya akan terlihat saat checkout sesuai dengan total belanja dan jenis layanan kamu pilih.</p>

                                            <div className="table-responsive">
                                                <table className="table voucher-table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Nominal Belanja</th>
                                                            <th scope="col">Min. Berat Cargo (kg)</th>
                                                            <th scope="col">Diskon Kurir Cargo</th>
                                                            <th scope="col">Diskon Kurir Reguler & Next Day</th>
                                                            <th scope="col">Diskon Kurir Instan & Sameday</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Rp 40.000 - Rp 99.999</td>
                                                            <td>-</td>
                                                            <td>-</td>
                                                            <td>Rp 5.000</td>
                                                            <td>-</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Rp 100.000 - Rp 199.999</td>
                                                            <td>-</td>
                                                            <td>-</td>
                                                            <td>Rp 10.000</td>
                                                            <td>Rp 10.000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Rp 200.000 - Rp 499.999</td>
                                                            <td>10</td>
                                                            <td>Rp 10.000</td>
                                                            <td>Rp 15.000</td>
                                                            <td>Rp 10.000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Rp 500.000 - Rp 999.999</td>
                                                            <td>10</td>
                                                            <td>Rp 15.000</td>
                                                            <td>Rp 25.000</td>
                                                            <td>Rp 10.000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Rp 1.000.000 - Rp 9.999.999</td>
                                                            <td>10</td>
                                                            <td>Rp 30.000</td>
                                                            <td>Rp 50.000</td>
                                                            <td>Rp 20.000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>≥ Rp 10.000.000</td>
                                                            <td>10</td>
                                                            <td>Rp 100.000</td>
                                                            <td>Rp 100.000</td>
                                                            <td>Rp 50.000</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingEleven">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven">
                                            Apakah pertanyaanmu masih belum terjawab?
                                        </button>
                                    </h2>
                                    <div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#faqAccordionOtten">
                                        <div className="accordion-body">
                                            Jangan ragu untuk menghubungi tim customer service kami.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        );
    }
}

export default Pengiriman;