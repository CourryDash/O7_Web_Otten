import { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../components/CartContext';
import '../../css/home.css';

const Home = () => {
    // Refs untuk fitur scroll horizontal
    const kategoriScrollRef = useRef(null);
    const videoScrollRef = useRef(null);
    const resepScrollRef = useRef(null);
    const espressoScrollRef = useRef(null);
    const pemulaScrollRef = useRef(null);

    // State untuk produk dari database
    const [latestProducts, setLatestProducts] = useState([]);
    const [espressoProducts, setEspressoProducts] = useState([]);
    const [beginnerProducts, setBeginnerProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Timer flash sale dengan state yang lebih realistis
    const [timeLeft, setTimeLeft] = useState(() => {
        const now = new Date();
        const endTime = new Date(now.getTime() + (2 * 60 * 60 * 1000) + (53 * 60 * 1000) + (17 * 1000));
        return {
            hours: Math.floor((endTime - now) / (1000 * 60 * 60)),
            minutes: Math.floor(((endTime - now) % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor(((endTime - now) % (1000 * 60)) / 1000)
        };
    });

    // Memoized scroll functions untuk menghindari recreation
    const scrollRight = useCallback((ref) => {
        if (ref.current) {
            ref.current.scrollLeft += 300;
        }
    }, []);

    const scrollLeft = useCallback((ref) => {
        if (ref.current) {
            ref.current.scrollLeft -= 300;
        }
    }, []);

    // Format number utility
    const formatNumber = useCallback((num) => num.toString().padStart(2, '0'), []);

    // Format harga utility
    const formatPrice = useCallback((price) => {
        return price ? price.toLocaleString('id-ID') : '0';
    }, []);

    // Calculate cashback utility
    const calculateCashback = useCallback((price) => {
        return price ? Math.round(price * 0.01).toLocaleString('id-ID') : '0';
    }, []);

    const { addToCart } = useCart();

    // Optimized fetch function dengan Promise.all untuk parallel requests
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        const fetchAllProducts = async () => {
            setLoading(true);
            setError(null);

            try {
                const baseUrl = `${process.env.REACT_APP_API_URL}/products`;

                // Fetch semua produk secara paralel
                const [latestRes, espressoRes, beginnerRes] = await Promise.all([
                    fetch(`${baseUrl}/category/1`, { signal }).catch(() => ({ ok: false, data: [] })),
                    fetch(`${baseUrl}/category/2`, { signal }).catch(() => ({ ok: false, data: [] })),
                    fetch(`${baseUrl}/category/3`, { signal }).catch(() => ({ ok: false, data: [] }))
                ]);

                // Parse responses
                const [latestData, espressoData, beginnerData] = await Promise.all([
                    latestRes.ok ? latestRes.json() : [],
                    espressoRes.ok ? espressoRes.json() : [],
                    beginnerRes.ok ? beginnerRes.json() : []
                ]);

                setLatestProducts(Array.isArray(latestData) ? latestData : []);
                setEspressoProducts(Array.isArray(espressoData) ? espressoData : []);
                setBeginnerProducts(Array.isArray(beginnerData) ? beginnerData : []);

            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Gagal memuat produk. Silakan coba lagi.');
                // Set empty arrays sebagai fallback
                setLatestProducts([]);
                setEspressoProducts([]);
                setBeginnerProducts([]);
            } finally {
                if (!signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchAllProducts();
        return () => controller.abort();
    }, []);

    // Timer effect dengan cleanup yang lebih baik
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    seconds--;
                } else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                } else {
                    // Timer habis, reset ke nilai awal
                    return { hours: 2, minutes: 53, seconds: 17 };
                }

                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Memoized product card component untuk menghindari re-render
    const ProductCard = useMemo(() => ({ product, className = "product-card" }) => (
        <div className={className}>
            <img
                src={product.img_product || '/aset/placeholder.jpg'}
                className="card-img-top"
                alt={product.nama_produk}
                loading="lazy"
            />
            <div className="card-body">
                <h6 className="card-title">{product.nama_produk}</h6>
                <p className="price">Rp {formatPrice(product.harga)}</p>
                <span className="cashback">Cashback {calculateCashback(product.harga)}</span>
                <div className="espresso-rating">
                    ⭐ {product.rating || '0.0'} | {product.terjual || '0'} Terjual
                </div>
                <button
                    className="btn btn-success w-100 mt-2"
                    disabled={product.stok <= 0}
                    onClick={() => addToCart({
                        id_produk: product.id_produk,
                        nama_produk: product.nama_produk,
                        harga: product.harga,
                        img_product: product.img_product,
                        qty: 1
                    })}
                >
                    {product.stok <= 0 ? 'Stok Habis' : '+Keranjang'}
                </button>
            </div>
        </div>
    ), [addToCart, formatPrice, calculateCashback]);

    return (
        <div className="container home-content pb-5">
            <div className="slideshowarea">
                <div className="slideshow-but">
                    <button className="slide-all slide-but">Semua</button>
                    <button className="slide-promo slide-but">Promo Bulan Ini</button>
                    <button className="slide-produk-baru slide-but">Produk Baru</button>
                </div>
                <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/aset/slide1.jpg" className="d-block w-100 carousel-home" alt="Slide 1 - Promosi Kopi Otten" loading="lazy" />
                        </div>
                        <div className="carousel-item">
                            <img src="/aset/slide2.jpg" className="d-block w-100 carousel-home" alt="Slide 2 - Koleksi Produk Kopi" loading="lazy" />
                        </div>
                        <div className="carousel-item">
                            <img src="/aset/slide3.jpg" className="d-block w-100 carousel-home" alt="Slide 3 - Event Kopi Spesial" loading="lazy" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="menu2">
                <div className="menu2-atas">
                    <div className="sapa">
                        <img src="/aset/barista.svg" alt="" />
                        <p>Hey, <br /><big>Pilih Pengalaman Ngopimu</big></p>
                    </div>
                    <div className="penawaran">
                        <div className="menu-penawaran"><img src="/aset/ic-menu-promo.png" className="icon-penawaran" alt="" /><b>Promo Spesial</b></div>
                        <div className="menu-penawaran"><img src="/aset/ic-menu-subscription.png" className="icon-penawaran" alt="" /><b>Langganan Kopi Yuk!</b></div>
                        <div className="menu-penawaran"><img src="/aset/ic-menu-event.png" className="icon-penawaran" alt="" /><b>Event & Aktivitas</b></div>
                        <div className="menu-penawaran"><img src="/aset/ic-menu-coffee-journal.png" className="icon-penawaran" alt="" /><b>Coffee Journal</b></div>
                        <div className="menu-penawaran"><img src="/aset/ic-menu-otten-matic.png" className="icon-penawaran" alt="" /><b>Ngopi Diseduh Robot</b></div>
                    </div>
                </div>

                <section className="kategori-populer">
                    <h2>Kategori Terpopuler</h2>
                    <div className="kategori-wrapper">
                        <button className="prev" onClick={() => scrollLeft(kategoriScrollRef)}>&#10094;</button>
                        <div className="kategori-container" ref={kategoriScrollRef}>
                            <div className="kategori-item">
                                <img src="aset/coffee_beans.png" alt="Coffee beans" />
                                <p>Coffee Beans</p>
                            </div>
                            <div className="kategori-item">
                                <img src="aset/manual_brewer.png" alt="Manual Brewer" />
                                <p>Manual Brewer</p>
                            </div>
                            <div className="kategori-item">
                                <img src="aset/home_espresso.png" alt="Home Espresso" />
                                <p>Home Espresso</p>
                            </div>
                            <div className="kategori-item">
                                <img src="aset/grinder.png" alt="Grinder" />
                                <p>Grinder</p>
                            </div>
                            <div className="kategori-item">
                                <img src="aset/coffee_capsule.png" alt="Coffee Capsule" />
                                <p>Coffee Capsule</p>
                            </div>
                            <div className="kategori-item">
                                <img src="aset/coffee_tool.png" alt="Coffee Tool" />
                                <p>Coffee Tool</p>
                            </div>
                        </div>
                        <button className="next" onClick={() => scrollRight(kategoriScrollRef)}>&#10095;</button>
                    </div>
                </section>
            </div>

            <section className="flash-sale">
                <div className="flash-sale-left">
                    <img src="aset/flash_sale.png" alt="Flash Sale" />
                </div>

                <div className="flash-sale-right">
                    <div className="flash-sale-header">
                        <h5>Dimulai dalam</h5>
                        <div id="timer">
                            <span className="time-box">{formatNumber(timeLeft.hours)}</span>
                            <span className="time-box">{formatNumber(timeLeft.minutes)}</span>
                            <span className="time-box">{formatNumber(timeLeft.seconds)}</span>
                        </div>
                    </div>

                    <div className="flash-sale-products">
                        <div className="card-flashsale">
                            <img src="aset/flashsale1.jpg" alt="Gibraltar Rock 8 OZ" />
                            <div className="card-body">
                                <h6 className="card-title">Gibraltar Rock 8 OZ</h6>
                                <p><s>Rp 37.500</s></p>
                                <p style={{ color: 'green' }}>Rp ?</p>
                                <small>Tersedia</small>
                            </div>
                        </div>

                        <div className="card-flashsale">
                            <img src="aset/flashsale2.jpg" alt="Otten Filter Wave 155" />
                            <div className="card-body">
                                <h6 className="card-title">Otten - Kertas Saringan Kopi Filter Wave 155 (50lbr)</h6>
                                <p><s>Rp 85.000</s></p>
                                <p style={{ color: 'green' }}>Rp ?</p>
                                <small>Tersedia</small>
                            </div>
                        </div>

                        <div className="card-flashsale">
                            <img src="aset/flashsale3.jpg" alt="Otten Filter Wave 155" />
                            <div className="card-body">
                                <h6 className="card-title">Otten - Kertas Saringan Kopi Filter Wave 155 (50lbr)</h6>
                                <p><s>Rp 2.650.000</s></p>
                                <p style={{ color: 'green' }}>Rp ?</p>
                                <small>Tersedia</small>
                            </div>
                        </div>

                        <div className="card-flashsale">
                            <img src="aset/flashsale4.jpg" alt="Coffee Glass Server" />
                            <div className="card-body">
                                <h6 className="card-title">Coffee Glass Server with Silicon Handle 400ml</h6>
                                <p><s>Rp 175.000</s></p>
                                <p style={{ color: 'green' }}>Rp ?</p>
                                <small>Tersedia</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="otten-video">
                <h3>Otten Video</h3>
                <div className="carousel-container">
                    <button
                        className="prev"
                        onClick={() => scrollLeft(videoScrollRef)}
                        aria-label="Scroll video carousel left"
                    >
                        &#10094;
                    </button>
                    <div className="video-carousel" ref={videoScrollRef}>
                        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                            <div className="video-card" key={num}>
                                <img src={`/aset/video${num}.jpg`} alt={`Video tutorial kopi ${num}`} loading="lazy" />
                                <div className="overlay">1,6rb views</div>
                            </div>
                        ))}
                    </div>
                    <button
                        className="next"
                        onClick={() => scrollRight(videoScrollRef)}
                        aria-label="Scroll video carousel right"
                    >
                        &#10095;
                    </button>
                </div>
            </div>

            <div className="zona-pengguna-baru">
                <h2 className="zpb-header">Zona Pengguna Baru</h2>
                <div className="coupon-area">
                    <div className="coupon coupon-content sc-dnqmqq fOIITz mt-11 h-auto">
                        <h3>Diskon Pengguna Baru SINGLEORIGIN90</h3>
                        <p>Potongan 90%</p>
                        <a href="/">Detail</a>
                    </div>

                    <div className="coupon coupon-content sc-dnqmqq fOIITz mt-11 h-auto">
                        <h3>Diskon Pengguna Baru SINGLEORIGIN90</h3>
                        <p>Potongan 90%</p>
                        <a href="/">Detail</a>
                    </div>

                    <div className="coupon coupon-content sc-dnqmqq fOIITz mt-11 h-auto">
                        <h3>Diskon Pengguna Baru SINGLEORIGIN90</h3>
                        <p>Potongan 90%</p>
                        <a href="/">Detail</a>
                    </div>
                </div>
            </div>

            <section className="brand-section py-4">
                <div className="mb-3">
                    <h3 className="fw-bold">Brand Pilihan</h3>
                    <p className="text-muted mb-4">Temukan brand terbaik untuk pengalaman ngopi kamu ☕</p>
                </div>
                <div className="brand-layout">
                    <div id="carouselLeft" className="carousel slide carousel-left" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselLeft" data-bs-slide-to="0" className="active"></button>
                            <button type="button" data-bs-target="#carouselLeft" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#carouselLeft" data-bs-slide-to="2"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active"><img src="/aset/brand1.jpg" alt="1" /></div>
                            <div className="carousel-item"><img src="/aset/brand2.jpg" alt="2" /></div>
                            <div className="carousel-item"><img src="/aset/brand3.jpg" alt="3" /></div>
                        </div>
                    </div>

                    <div id="carouselRight" className="carousel slide carousel-right" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row g-3">
                                    {[
                                        { img: 'b1.jpg', name: 'Aeropress', count: 26 },
                                        { img: 'b2.jpg', name: 'Abfim', count: 2 },
                                        { img: 'b3.jpg', name: 'Comandante', count: 39 },
                                        { img: 'b4.jpg', name: 'De Longhi', count: 51 },
                                        { img: 'b5.jpg', name: 'DRiPP', count: 71 },
                                        { img: 'n6.jpg', name: 'Hario', count: 358 },
                                        { img: 'b7.jpg', name: 'Kalita', count: 7 },
                                        { img: 'b8.jpg', name: 'La Marzocco', count: 34 }
                                    ].map((brand, index) => (
                                        <div className="col-3" key={index}>
                                            <div className="brand-card">
                                                <img src={`/aset/${brand.img}`} alt={`Logo ${brand.name}`} loading="lazy" />
                                                <p>{brand.name}<br />{brand.count} Produk</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="row g-3">
                                    {[
                                        { img: 'b14.jpg', name: 'Mahkonig', count: 82 },
                                        { img: 'b9.jpg', name: 'Mazzer', count: 18 },
                                        { img: 'b10.jpg', name: 'Meraki', count: 1 },
                                        { img: 'b11.jpg', name: 'Monin', count: 51 },
                                        { img: 'b12.jpg', name: 'Fellow', count: 55 },
                                        { img: 'b13.jpg', name: 'Millab', count: 1 },
                                        { img: 'b15.jpg', name: 'Flair', count: 19 },
                                        { img: 'b16.jpg', name: 'Lavazza', count: 3 }
                                    ].map((brand, index) => (
                                        <div className="col-3" key={index}>
                                            <div className="brand-card">
                                                <img src={`/aset/${brand.img}`} alt={`Logo ${brand.name}`} loading="lazy" />
                                                <p>{brand.name}<br />{brand.count} Produk</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselRight" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                            <span className="visually-hidden">Previous brands</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselRight" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                            <span className="visually-hidden">Next brands</span>
                        </button>
                    </div>
                </div>
            </section>

            <div className="resepSeduh">
                <section className="resep-seduh">
                    <div className="resep-header"><h2>Resep Seduh Kopi Terbaik</h2></div>
                    <p class="resep-deskripsi">
                        Temukan resep seduh kopi dari para expert dan juara kejuaraan kopi. Pelajari cara membuat kopi
                        istimewa seperti barista profesional!
                    </p>

                    <div class="resep-tabs">
                        <button class="tab aktif">Resep Seduh Ahli Kopi</button>
                        <button class="tab">Resep Seduh Champion</button>
                    </div>

                    <div className="carousel-wrapper">
                        <button className="arrow left" onClick={() => scrollLeft(resepScrollRef)}>&#10094;</button>
                        <div className="resep-container" ref={resepScrollRef}>
                            <div className="resep-card"><div className="image-wrapper"><img src="/aset/kopi-seduh.jpg" alt="" /><div className="logo-circle"><img src="/aset/kopi-seduh1.jpg" alt="" /></div></div><div class="resep-info">
                                <h3>Kopi Tubruk Gula Aren</h3>
                                <p>Buat Kopi Tubruk dengan Gula Aren Organik dari Otten Coffee</p>
                            </div></div>
                            <div className="resep-card"><div className="image-wrapper"><img src="/aset/Kopiseduh2.jpg" alt="" /><div className="logo-circle"><img src="/aset/kopi-seduh2.jpg" alt="" /></div></div><div className="resep-info"><h3>MHW-3BOMBER - Eggonaut</h3><p>Resep Seduh Kopi Ijen Orange Bourbon dengan MHW-3BOMBER Eggonaut</p></div></div>
                            <div className="resep-card"><div className="image-wrapper"><img src="/aset/kopiseduh3.jpg" alt="" /><div className="logo-circle"><img src="/aset/kopi-seduh3.jpg" alt="" /></div></div><div className="resep-info"><h3>Wacaco Pipaxresso</h3><p>Buat Americano dengan Mudah Pakai Americano Blend</p></div></div>
                            <div className="resep-card"><div className="image-wrapper"><img src="/aset/kopiseduh4.jpg" alt="" /><div className="logo-circle"><img src="/aset/kopi-seduh4.jpg" alt="" /></div></div><div className="resep-info"><h3>Kees Van Der Westen Mirage</h3><p>Buat Sparkling Kiwi Americano dengan Americano Blend</p></div></div>
                            <div className="resep-card"><div className="image-wrapper"><img src="/aset/kopiseduh5.jpg" alt="" /><div className="logo-circle"><img src="/aset/kopi-seduh5.jpg" alt="" /></div></div><div className="resep-info"><h3>Otten Excellente</h3><p>Buat Americano dengan Americano Blend</p></div></div>
                            <div className="resep-card"><div className="image-wrapper"><img src="/aset/kopiseduh6.jpg" alt="" /><div className="logo-circle"><img src="/aset/kopi-seduh6.jpg" alt="" /></div></div><div className="resep-info"><h3>Mazelab Solo Dripper</h3><p>Resep Seduh Mazelab Solo Dripper dengan Bali Ulian</p></div></div>
                            <div className="resep-card"><div className="image-wrapper"><img src="/aset/kopiseduh7.jpg" alt="" /><div className="logo-circle"><img src="/aset/kopi-seduh7.jpg" alt="" /></div></div><div className="resep-info"><h3>Seduh Gula Aren Organik</h3><p>Resep Seduh Kopi Susu Gula Aren</p></div></div>
                        </div>
                        <button className="arrow right" onClick={() => scrollRight(resepScrollRef)}>&#10095;</button>
                    </div>
                </section>
            </div>

            <div>
                <div className="header"><h2>Semua Lokasi Toko Kami</h2></div>
                <p class="subtext">Penuhi kebutuhan ngopi kamu di toko kami atau melalui gadget kamu, lalu kamu ambil di toko kami.</p>
                <div className="toko-list">
                    <div className="toko-card">
                        <img src="/aset/otten-senopati.jpg" alt="Senopati" />
                        <div className="toko-info">
                            <p className="jam-buka">09:00 - 20:00</p>
                            <p className="nama-toko">Otten Coffee Senopati</p>
                            <p class="alamat">Jl. Senopati No.77, RT.8/RW.3, Selong, Kec Kby. Baru, Kota Jakarta Selatan
                            </p>
                            <Link to="#" className="btn-info">Info Toko</Link>
                        </div>
                    </div>
                    <div className="toko-card">
                        <img src="/aset/otten-medan.png" alt="Medan" />
                        <div className="toko-info">
                            <p className="jam-buka">08:00 - 19:00</p>
                            <p className="nama-toko">Otten Coffee Medan</p>
                            <p class="alamat">Jalan Kruing No.3 EF, Sekip, Medan Petisah, Kota Medan, Sumatera Utara</p>
                            <Link to="#" className="btn-info">Info Toko</Link>
                        </div>
                    </div>
                    <div className="toko-card">
                        <img src="/aset/otten-bandung.jpg" alt="Bandung" />
                        <div className="toko-info">
                            <p className="jam-buka">09:00 - 20:00</p>
                            <p className="nama-toko">Otten Coffee Bandung</p>
                            <p class="alamat">Jl. Pasir Kaliki No.178, Pasir Kaliki, Kec. Cicendo, Kota Bandung, Jawa Barat</p>
                            <Link to="#" className="btn-info">Info Toko</Link>
                        </div>
                    </div>
                    <div className="toko-card">
                        <img src="/aset/otten-semarang.jpg" alt="Semarang" />
                        <div className="toko-info">
                            <p className="jam-buka">09:00 - 20:00</p>
                            <p className="nama-toko">Otten Coffee Semarang</p>
                            <p class="alamat">Jl. Letjen Suprapto No.28, Kota Lama, Tj. Mas, Kec. Semarang Utara, Kota Semarang</p>
                            <Link to="#" className="btn-info">Info Toko</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="slideshowarea">
                <div id="carouselExampleAutoplaying2" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active"><img src="/aset/nav2-1.gif" className="d-block w-100 carousel-home" alt="..." /></div>
                        <div className="carousel-item"><img src="/aset/nav2-2.jpg" className="d-block w-100 carousel-home" alt="..." /></div>
                        <div className="carousel-item"><img src="/aset/nav2-3.jpg" className="d-block w-100 carousel-home" alt="..." /></div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                </div>
            </div>

            <section className="temukan-produk">
                <h2 className="judul-bagian">Temukan yang Anda Inginkan</h2>
                <div className="temukan-container">
                    <div className="produk-grid">
                        <div className="produk-card"><img src="/aset/temukan1.jpg" alt="" /><p className="produk-nama">Hario Tea Series</p></div>
                        <div className="produk-card"><img src="/aset/temukan2.jpg" alt="" /><p className="produk-nama">Bundling Sets</p></div>
                        <div className="produk-card"><img src="/aset/temukan3.jpg" alt="" /><p className="produk-nama">Paket Buka Cafe</p></div>
                        <div className="produk-card"><img src="/aset/temukan4.jpg" alt="" /><p className="produk-nama">Kopi Kapsul</p></div>
                        <div className="produk-card"><img src="/aset/temukan5.jpg" alt="" /><p className="produk-nama">Harga Grosir</p></div>
                        <div className="produk-card"><img src="/aset/temukan6.jpg" alt="" /><p className="produk-nama">Brand Eksklusif</p></div>
                    </div>
                </div>
            </section>

            {/* SECTION: PRODUK TERBARU */}
            <section className="product-section">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>Produk Terbaru</h2>
                </div>

                <div className="row g-3">
                    {/* Kondisional Rendering di sini */}
                    {loading ? (
                        <div className="col-12 text-center py-4">
                            <div className="spinner-border text-primary" role="status"></div>
                            <p>Memuat produk terbaru...</p>
                        </div>
                    ) : error ? (
                        <div className="col-12 text-center py-4 text-danger">
                            <p>{error}</p>
                        </div>
                    ) : latestProducts.length > 0 ? (
                        latestProducts.map((product) => (
                            <div className="col-6 col-md-4 col-lg" key={product.id}>
                                <ProductCard product={product} />
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center py-4">
                            <p className="text-muted">Tidak ada produk terbaru tersedia</p>
                        </div>
                    )}
                </div>
            </section>

            {/* SECTION: MESIN KOPI ESPRESSO */}
            <section className="espresso-section">
                <div className="espresso-header"><h2>Mesin Kopi Espresso Harga di bawah 5 Jutaan!</h2></div>
                <p className="espresso-subtext">
                    Kopimu pasti lebih berkualitas dengan pilihan mesin kopi terbaik dengan harga terjangkau. Mau, kan?
                </p>
                <div className="espresso-content">
                    <div className="espresso-banner"><img src="/aset/mesin1.jpg" alt="Banner" /></div>
                    <div className="espresso-slider-wrapper">
                        <button className="espresso-arrow espresso-arrow-left" onClick={() => scrollLeft(espressoScrollRef)}><i className="bi bi-chevron-left"></i></button>
                        <div className="espresso-products" ref={espressoScrollRef}>
                            {loading ? (
                                <div style={{ textAlign: 'center', width: '100%', padding: '20px' }}>
                                    <div className="spinner-border text-primary" role="status"></div>
                                    <p>Memuat mesin espresso...</p>
                                </div>
                            ) : error ? (
                                <div style={{ textAlign: 'center', width: '100%', padding: '20px' }} className="text-danger">
                                    <p>{error}</p>
                                </div>
                            ) : espressoProducts.length > 0 ? (
                                espressoProducts.map((product) => (
                                    <div className="espresso-card" key={product.id_produk}>
                                        <img
                                            src={product.img_product || '/aset/placeholder.jpg'}
                                            alt={product.nama_produk}
                                            loading="lazy"
                                        />
                                        <h4>{product.nama_produk}</h4>
                                        <p>Rp {formatPrice(product.harga)}</p>
                                        <div className="espresso-rating">
                                            ⭐ {product.rating || '0.0'} | {product.terjual || '0'} Terjual
                                        </div>
                                        <button
                                            className="espresso-btn"
                                            disabled={product.stok <= 0}
                                            onClick={() => addToCart({
                                                id_produk: product.id_produk,
                                                nama_produk: product.nama_produk,
                                                harga: product.harga,
                                                img_product: product.img_product,
                                                qty: 1
                                            })}
                                        >
                                            {product.stok <= 0 ? 'Stok Habis' : '+Keranjang'}
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <div style={{ textAlign: 'center', width: '100%', padding: '20px' }}>
                                    <p className="text-muted">Tidak ada produk espresso tersedia</p>
                                </div>
                            )}
                        </div>
                        <button className="espresso-arrow espresso-arrow-right" onClick={() => scrollRight(espressoScrollRef)}><i className="bi bi-chevron-right"></i></button>
                    </div>
                </div>
            </section>

            {/* SECTION: ALAT SEDUH PEMULA */}
            <section className="espresso-section">
                <div className="espresso-header"><h2>Alat Seduh untuk Pemula</h2></div>
                <p className="espresso-subtext">Baru terjun ke dunia kopi? Jangan khawatir, kreasikan kopimu dengan alat-alat kopi untuk pemula ini!</p>
                <div className="espresso-content">
                    <div className="espresso-banner"><img src="/aset/pemula.jpg" alt="Banner Pemula" /></div>
                    <div className="espresso-slider-wrapper">
                        <button className="espresso-arrow espresso-arrow-left" onClick={() => scrollLeft(pemulaScrollRef)}><i className="bi bi-chevron-left"></i></button>
                        <div className="espresso-products" ref={pemulaScrollRef}>
                            {loading ? (
                                <div style={{ textAlign: 'center', width: '100%', padding: '20px' }}>
                                    <div className="spinner-border text-primary" role="status"></div>
                                    <p>Memuat alat seduh pemula...</p>
                                </div>
                            ) : error ? (
                                <div style={{ textAlign: 'center', width: '100%', padding: '20px' }} className="text-danger">
                                    <p>{error}</p>
                                </div>
                            ) : beginnerProducts.length > 0 ? (
                                beginnerProducts.map((product) => (
                                    <div className="espresso-card" key={product.id_produk}>
                                        <img
                                            src={product.img_product || '/aset/placeholder.jpg'}
                                            alt={product.nama_produk}
                                            loading="lazy"
                                        />
                                        <h4>{product.nama_produk}</h4>
                                        <p>Rp {formatPrice(product.harga)}</p>
                                        <div className="espresso-rating">
                                            ⭐ {product.rating || '0.0'} | {product.terjual || '0'} Terjual
                                        </div>
                                        <button
                                            className="espresso-btn"
                                            disabled={product.stok <= 0}
                                            onClick={() => addToCart({
                                                id_produk: product.id_produk,
                                                nama_produk: product.nama_produk,
                                                harga: product.harga,
                                                img_product: product.img_product,
                                                qty: 1
                                            })}
                                        >
                                            {product.stok <= 0 ? 'Stok Habis' : '+Keranjang'}
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <div style={{ textAlign: 'center', width: '100%', padding: '20px' }}>
                                    <p className="text-muted">Tidak ada produk pemula tersedia</p>
                                </div>
                            )}
                        </div>
                        <button className="espresso-arrow espresso-arrow-right" onClick={() => scrollRight(pemulaScrollRef)}><i className="bi bi-chevron-right"></i></button>
                    </div>
                </div>
            </section>

            <section className="section-magazine">
                <div className="d-flex justify-content-between align-items-center mb-4"><h4>Majalah Otten</h4></div>
                <div className="row g-3">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card article-card">
                            <img src="/aset/m1.jpg" alt="" />
                            <div className="card-body"><h6 className="card-title">Resep Es Coconut Aren Latte, Keseimbangan Rasa Hanyut Lembut</h6><p className="card-text">07 Nov 2025</p></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card article-card">
                            <img src="/aset/m2.jpg" alt="" />
                            <div className="card-body"><h6 className="card-title">Ekspansi Agresif, Fore Kopi Tembus Rp 1 Triliun: Strateginya Layak Dipelajari</h6><p className="card-text">07 Nov 2025</p></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card article-card">
                            <img src="/aset/m3.jpg" alt="" />
                            <div className="card-body"><h6 className="card-title">Comandante Di-upgrade: Tampilkan Gaya, Presisi, dan Sesuai Karakter Unikmu</h6><p className="card-text">06 Nov 2025</p></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card article-card">
                            <img src="/aset/m4.jpg" alt="" />
                            <div className="card-body"><h6 className="card-title">Comandante C40, C60, X25 vs Grinder Kopi Manual di Segala Metode Seduh</h6><p className="card-text">06 Nov 2025</p></div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;