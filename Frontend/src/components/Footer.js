import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <>
                <div className="footer-otten container-fluid bg-white border-top pt-5">
                    <div className="row px-md-5 g-4">

                        <div className="col-lg-6 col-md-6">
                            <h4 className="mb-4">Kontak Kami</h4>
                            <ul className="list-unstyled text-muted small">
                                <li className="mb-2">
                                    <a target="_blank" href="mailto:customer.care@ottencoffee.co.id" rel="noreferrer">
                                        <img src="/aset/kontak kami/email.png" width="20px" alt="email" />
                                        <span className="p-2">customer.care@ottencoffee.co.id</span>
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a target="_blank" href="/" rel="noreferrer">
                                        <img src="/aset/kontak kami/telepon.png" width="20px" alt="telepon" />
                                        <span className="p-2">0804-1-999-666 (09.00 - 18.00 WIB)</span>
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a target="_blank" href="https://api.whatsapp.com/send?phone=6281112540539" rel="noreferrer">
                                        <img src="/aset/kontak kami/whatsapp.png" width="20px" alt="whatsapp" />
                                        <span className="p-2">0811-1254-0539 (09.00 - 18.00 WIB)</span>
                                    </a>
                                </li>
                            </ul>

                            <h5 className="mt-5 mb-2">Dapatkan Update Seputar Kopi</h5>
                            <div className="d-flex my-3" style={{ gap: '10px' }}>
                                <a href="https://www.instagram.com/ottencoffee" target="_blank" rel="noreferrer"><img src="/aset/social media/instagram.png" width="40px" alt="ig" /></a>
                                <a href="https://web.facebook.com/ottencoffeeindonesia" target="_blank" rel="noreferrer"><img src="/aset/social media/facebook.png" width="40px" alt="fb" /></a>
                                <a href="https://youtube.com/channel/UCA17qcyVcKtqdDWuNbSeLqg" target="_blank" rel="noreferrer"><img src="/aset/social media/youtube.png" width="40px" alt="yt" /></a>
                                <a href="https://x.com/ottencoffee" target="_blank" rel="noreferrer"><img src="/aset/social media/twitter.png" width="40px" alt="tw" /></a>
                                <a href="https://www.tiktok.com/@ottencoffee" target="_blank" rel="noreferrer"><img src="/aset/social media/tiktok.png" width="40px" alt="tt" /></a>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <h4 className="mb-4">Otten Coffee</h4>
                                    <ul className="list-unstyled">
                                        <li className="mb-2"><Link to="/otten-poin" className="text-decoration-none text-muted">Otten Poin</Link></li>
                                        <li className="mb-2"><Link to="/brands" className="text-decoration-none text-muted">Brands</Link></li>
                                        <li className="mb-2"><Link to="/dropship" className="text-decoration-none text-muted">Dropship</Link></li>
                                        <li className="mb-2"><Link to="/cicilan" className="text-decoration-none text-muted">Cicilan</Link></li>
                                    </ul>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <h4 className="mb-4">Bantuan</h4>
                                    <ul className="list-unstyled">
                                        <li className="mb-2"><Link to="/pengiriman" className="text-decoration-none text-muted">Pengiriman</Link></li>
                                        <li className="mb-2"><Link to="/pengembalian-produk" className="text-decoration-none text-muted">Pengembalian Produk</Link></li>
                                        <li className="mb-2"><Link to="/panduan-pembayaran" className="text-decoration-none text-muted">Panduan Pembayaran</Link></li>
                                        <li className="mb-2"><Link to="/panduan-voucher" className="text-decoration-none text-muted">Panduan Voucher</Link></li>
                                        <li className="mb-2"><Link to="/panduan-berbelanja" className="text-decoration-none text-muted">Panduan Berbelanja</Link></li>
                                        <li className="mb-2"><Link to="/syarat-dan-ketentuan" className="text-decoration-none text-muted">Syarat dan Ketentuan</Link></li>
                                        <li className="mb-2"><Link to="/kebijakan-privasi" className="text-decoration-none text-muted">Kebijakan Privasi</Link></li>
                                    </ul>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <h4 className="mb-4">Customer Care</h4>
                                    <ul className="list-unstyled">
                                        <li className="mb-2"><Link to="/hubungi-kami" className="text-decoration-none text-muted">Hubungi Kami</Link></li>
                                        <li className="mb-2"><Link to="/harga-grosir" className="text-decoration-none text-muted">Harga Grosir</Link></li>
                                        <li className="mb-2"><Link to="/faq" className="text-decoration-none text-muted">FAQ / Bantuan</Link></li>
                                        <li className="mb-2"><Link to="/tentang-kami" className="text-decoration-none text-muted">Tentang Otten Coffee</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row px-md-5 py-5 align-items-center">
                        <div className="col-md-6">
                            <h3>Belanja makin mudah menggunakan aplikasi</h3>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <a href="https://play.google.com/store/apps/details?id=id.ottencoffee.android" target="_blank" rel="noreferrer">
                                <img src="/aset/download aplikasi/playstore.png" alt="Get it on Google Play" height="49px" width="156px"/>
                            </a>
                            <a href="https://apps.apple.com/id/app/otten-coffee/id1109688110" target="_blank" rel="noreferrer">
                                <img src="/aset/download aplikasi/appstore.png" alt="Download on the App Store" height="49px" width="156px"/>
                            </a>
                        </div>
                    </div>

                    <div className="row px-md-5 py-3 g-4">

                        <div className="col-lg-6 col-md-12">
                            <h4>Metode Pembayaran</h4>
                            <div className="d-flex flex-wrap gap-2">
                                <section className="payment-logo-box"><img src="/aset/metode pembayaran/logo-bca.png" alt="BCA" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/metode pembayaran/logo-mandiri.png" alt="Mandiri" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/metode pembayaran/logo-jcb.png" alt="JCB" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/metode pembayaran/logo-visa.png" alt="VISA" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/metode pembayaran/logo-mastercard.png" alt="MasterCard" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/metode pembayaran/logo-american-express.png" alt="Amex" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/metode pembayaran/logo-gopay.png" alt="GoPay" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/metode pembayaran/logo-ovo.png" alt="OVO" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/metode pembayaran/logo-dana.png" alt="Dana" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/metode pembayaran/logo-alfamart.png" alt="Alfamart" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/metode pembayaran/logo-indomaret.png" alt="Indomaret" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/metode pembayaran/logo-shopeepay.png" alt="Shopee Pay" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/metode pembayaran/logo-kredivo.png" alt="Kredivo" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/metode pembayaran/logo-indodana.png" alt="Indodana" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/metode pembayaran/logo-akulaku.png" alt="Akulaku" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/metode pembayaran/logo-bri.png" alt="BRI" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/metode pembayaran/logo-bni.png" alt="BNI" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/metode pembayaran/logo-permatabank.png" alt="Permata Bank" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/metode pembayaran/logo-qris.png" alt="Qris" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/metode pembayaran/logo-jenius.png" alt="Jenius" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/metode pembayaran/logo-blu.png" alt="Blu" className="size-mp" /></section>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h4>Keamanan Berbelanja</h4>
                            <div className="d-flex flex-wrap gap-2">
                                <section className="payment-logo-box"><img src="/aset/keamanan berbelanja/logo-mastercardsecurecode.png" alt="secure" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/keamanan berbelanja/logo-verifiedbyvisa.png" alt="verified" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/keamanan berbelanja/logo-geotrust.png" alt="geotrust" className="size-mp" /></section>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h4>Jasa Pengiriman</h4>
                            <div className="d-flex flex-wrap gap-2">
                                <section className="payment-logo-box"><img src="/aset/jasa pengiriman/logo-jne.png" alt="JNE" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/jasa pengiriman/logo-sicepat.png" alt="Sicepat" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/jasa pengiriman/logo-grabexpress.png" alt="Grab" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/jasa pengiriman/logo-gosend.png" alt="Gosend" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/jasa pengiriman/logo-lionparcel.png" alt="Lion Parcel" className="size-mp" /></section>
                                <section className="payment-logo-box"><img src="/aset/jasa pengiriman/logo-lalamove.png" alt="Lalamove" className="size-mp" /></section>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="text-white">
                    <p className="copyright-2025">Ini Website Project Mata Kuliah Web Backend, tidak ada transaksi nyata yang terjadi. Website ini terinspirasi dari Otten Coffee.</p>
                </footer>
            </>
        );
    }
};

export default Footer;