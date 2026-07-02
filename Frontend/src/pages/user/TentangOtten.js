import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/TentangOtten.css'

class TentangOtten extends React.Component {
    render(){
        return (
            <main className="container my-5">
                <article>
                    <div className="breadcrumbs container py-1">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/" className="text-secondary text-decoration-none">Home</Link>
                                </li>
                                <li className="breadcrumb-item active fw-semibold" aria-current="page">Tentang Otten Coffee</li>
                            </ol>
                        </nav>
                    </div>

                    <div className="tentang-otten">
                        <h1 className="fw-semibold pt-4">Tentang Otten Coffee</h1>
                        <div className="justify-content-start">
                            <div className="bagian-1">
                                <img src="aset/tentang-otten/banner-why-otten-3.jpg" alt="gambar-1" className="img-fluid pb-4" />
                                <p>Otten Coffee menyediakan berbagai kebutuhan ngopi mulai dari biji kopi hingga peralatan kopi untuk kebutuhan ritual ngopi di rumah maupun untuk bisnis kafemu. Kami memiliki misi untuk memberikanmu kemudahan dalam mengakses kopi berkualitas, sehingga seluruh pecinta kopi di Indonesia dapat menikmatinya.</p>
                            </div>

                            <div className="bagian-2 d-flex justify-content-between align-items-center" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
                                <div className="content p-2 align-items-center">
                                    <h5 className="text-start">2014</h5>
                                    <p>Toko offline pertama dibuka di Medan untuk menyediakan pilihan peralatan kopi dan biji kopi dari roastery milik kami sendiri.</p>
                                </div>
                                <span style={{ width: "13%", borderTop: "3px solid #6DBF67" }}></span>
                                <span className="setengah-lingkaran"></span>

                                <div className="content p-2 align-items-center">
                                    <h5 className="text-start">2015</h5>
                                    <p>Toko online atau e-commerce Otten Coffee pertama kali diluncurkan.</p>
                                </div>
                                <span style={{ width: "13%", borderTop: "3px solid #6DBF67" }}></span>
                                <span className="setengah-lingkaran"></span>

                                <div className="content p-2 align-items-center">
                                    <h5 className="text-start">2018</h5>
                                    <p>Toko offline yang mengusung tema experience store hadir di Jakarta untuk memberikan pengalaman ngopi yang berbeda di Ibu Kota.</p>
                                </div>
                            </div>

                            <div className="bagian-3">
                                <img src="aset/tentang-otten/banner-why-otten-1.jpg" alt="gambar-2" className="img-fluid pb-4" />
                                <p>Untuk memberikanmu pengalaman ngopi berkualitas, kami percaya itu semua dimulai dari biji kopinya. Dengan misi tersebut, kami bekerjasama dengan petani kopi terbaik dari perkebunan kopi di seluruh Indonesia untuk pengalaman ngopi nikmatmu setiap hari. Kami percaya jika petani kopi berperan penting dalam menghasilkan kopi berkualitas di mejamu.</p>
                            </div>

                            <div className="bagian-4 pb-5">
                                <img src="aset/tentang-otten/banner-why-otten-2.jpg" alt="gambar-3" className="img-fluid pb-4" />
                                <p>Sampai saat ini, petani kopi terus produktif untuk menghasilkan banyak varian kopi dengan kualitas terbaik melihat tingkat konsumsi kopi di Indonesia yang semakin meninggi. Kami juga menyadari jika pengetahuanmu sebagai pecinta kopi juga semakin meningkat, sehingga kami mengakomodasi hal tersebut dengan berbagai keuntungan untukmu.</p>
                            </div>
                        </div>

                        <div className="bagian-5">
                            <h4 className="fw-bold text-start">Keuntungan Berbelanja dengan Otten Coffee</h4>
                            <div className="bagian-atas row justify-content-between">
                                <div className="gambar-1 col-md-3">
                                    <img src="aset/tentang-otten/benefit-1.svg" alt="benefit1" className="img-fluid" />
                                    <p className="text-start"><span className="fw-semibold">Produk berkualitas dan bergaransi</span> agar kamu tidak perlu khawatir saat berkreasi dengan kopi</p>
                                </div>
                                <div className="gambar-2 col-md-3">
                                    <img src="aset/tentang-otten/benefit-2.svg" alt="benerfit2" className="img-fluid" />
                                    <p className="text-start"><span className="fw-semibold">Biji kopi segar</span> dari roastery milik kami untuk kualitas kopimu</p>
                                </div>
                                <div className="gambar-3 col-md-3">
                                    <img src="aset/tentang-otten/benefit-3.svg" alt="benefit3" className="img-fluid" />
                                    <p className="text-start"><span className="fw-semibold">Layanan konsultasi bisnis kafe</span> jika kamu berencana untuk membuka usaha</p>
                                </div>
                            </div>
                            <div className="bagian-bawah row justify-content-between">
                                <div className="gambar-4 col-md-3">
                                    <img src="aset/tentang-otten/benefit-4.svg" alt="benefit4" className="img-fluid" />
                                    <p className="text-start"><span className="fw-semibold">Ongkos kirim yang terjangkau</span> untuk kemudahan aksesmu dalam ngopi berkualitas</p>
                                </div>
                                <div className="gambar-5 col-md-3">
                                    <img src="aset/tentang-otten/benefit-5.svg" alt="benefit5" className="img-fluid" />
                                    <p className="text-start"><span className="fw-semibold">Otten Poin</span> yang kamu dapatkan tiap berbelanja dan bisa kamu gunakan kembali</p>
                                </div>
                                <div className="gambar-6 col-md-3">
                                    <img src="aset/tentang-otten/benefit-6.svg" alt="benefit6" className="img-fluid" />
                                    <p className="text-start"><span className="fw-semibold">Berbagai pilihan pembayaran</span> seperti transfer bank dan kartu kredit sehingga kamu dapat dengan mudah melakukan pembayaran</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        );
    }
};

export default TentangOtten;