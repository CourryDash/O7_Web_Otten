import React from "react";
import { Link } from "react-router-dom";
import '../../css/SyaratdanKetentuan.css';

class SyaratdanKetentuan extends React.Component {
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
                                <li className="breadcrumb-item active fw-semibold" aria-current="page">Syarat dan Ketentuan</li>
                            </ol>
                        </nav>
                    </div>
                    
                    <h1 className="page-title my-5">Syarat &amp; Ketentuan</h1>

                    <div className="tnc-content">
                        <h2 className="section-title">Pendahuluan</h2>
                        <p>Selamat datang di website www.ottencoffee.co.id dan/atau aplikasi mobile Otten Coffee! Silakan membaca Syarat Penggunaan ini dengan seksama. Anda harus membaca, memahami, menerima, dan menyetujui semua persyaratan dan ketentuan dalam Perjanjian ini sebelum menggunakan aplikasi dan/atau menerima konten yang terdapat di dalamnya. Dengan mengakses atau menggunakan situs Ottencoffee.co.id, pengguna dianggap telah memahami dan menyetujui semua isi dalam syarat dan ketentuan di bawah ini. Syarat dan ketentuan dapat diubah atau diperbaharui sewaktu-waktu tanpa ada pemberitahuan terlebih dahulu. Perubahan dari syarat dan ketentuan akan segera berlaku setelah dicantumkan di dalam situs ottencoffee.co.id. Jika pengguna merasa keberatan terhadap syarat dan ketentuan yang kami ajukan dalam perjanjian ini, maka kami anjurkan untuk tidak menggunakan situs ini.</p>

                        <h2 className="section-title">Ketentuan Penggunaan Situs</h2>
                        <p>Saat mengunjungi dan menggunakan situs ottencoffee.co.id, termasuk setiap fitur dan layanannya, setiap pengguna wajib untuk mematuhi ketentuan pengguna situs berikut ini:</p>
                        <ul>
                            <li>Akses situs ini hanya diperkenankan untuk keperluan dan kepentingan berbelanja serta informasi terkait dengan layanan situs ini.</li>
                            <li>Pengguna tidak diperkenankan untuk mereproduksi, mendistribusikan, memajang, menjual, menyewakan, mengirimkan, membuat karya turunan dari, menerjemahkan, memodifikasi, merekayasa balik, membongkar, mengurai, atau mengeksploitasi situs www.ottencoffee.co.id.</li>
                            <li>Pengguna tidak diperkenankan untuk membuat dan menerbitkan konten yang melanggar hak cipta, paten, merek dagang, merek layanan, rahasia dagang, atau hak kepemilikan lainnya.</li>
                        </ul>

                        <h2 className="section-title">Komentar</h2>
                        <p>Seluruh komentar yang dituliskan, dan gambar/foto/image yang di-upload di website ottencoffee.co.id akan dikategorikan dan diperlakukan sebagai konten yang bersifat tidak rahasia. Anda dilarang untuk menuliskan komentar atau gambar/foto/image yang mengandung kalimat/analogi pelecehan terhadap Ottencoffee.co.id atau pihak ketiga lainnya/masyarakat. Ottencoffee.co.id berhak merubah atau menghapus komentar dan gambar/foto/image yang mengandung unsur yang tidak layak tayang (SARA, Pornografi, Pelecehan, Penghinaan, Pencemaran, dsb).</p>

                        <h2 className="section-title">Transaksi</h2>
                        <ul>
                            <li>Harga yang tertera di website ottencoffee.co.id belum termasuk biaya/tarif pengiriman, Tarif Armada, ataupun kurir baik dalam kota maupun ke luar kota (ekspedisi). Untuk pengiriman, kami menggunakan jasa pengiriman dengan tarif yang disesuaikan berdasarkan pilihan konsumen dengan kebijakan tarif masing-masing penyedia jasa pengiriman.</li>
                            <li>Kami menjamin semua produk telah dicek oleh petugas kami sebelum dikirim kepada Konsumen.</li>
                            <li>Jika terjadi kerusakan pada produk semasa dalam perjalanan, dalam waktu 2 x 24 jam setelah produk diterima, silakan hubungi kami melalui email ke: customer.care@ottencoffee.co.id.</li>
                            <li>Pelanggan yang melakukan order online melalui website kami harap memperhatikan isian untuk kolom quantity, size, ataupun warna.</li>
                            <li>Biaya atas jasa pengiriman tidak dapat diganti oleh Otten Coffee jika produk yang dipesan oleh Konsumen tidak diterima, yang disebabkan oleh kelalaian dari Konsumen dalam menerima produk dan/atau kesalahan/kelalaian yang dilakukan oleh jasa pengiriman.</li>
                            <li>Pengguna diharapkan untuk melengkapi alamat pengiriman dengan selengkap-lengkapnya dan menempatkan titik lokasi setepat mungkin untuk memastikan akurasi alamat pengiriman. Otten Coffee akan mengikuti ketentuan dari dari penyedia jasa pengiriman terkait dengan perubahan harga pengiriman yang disebabkan oleh kesalahan dalam penempatan titik atau penulisan alamat.</li>
                            <li>Khusus untuk produk-produk diskon, jika terjadi permasalahan ataupun kendala pada produk diskon maka dapat menghubungi call centre Otten Coffee. Adapun Produk diskon telah dicek oleh petugas kami sebelum dikirimkan ke alamat Konsumen. produk yang didiskon ini kami sediakan khusus untuk Anda dengan paket harga yang menarik.</li>
                            <li>Untuk pembelian online melalui shopping cart, pesanan dan pengiriman akan diproses oleh pihak Otten Coffee maksimal 2 x 24 jam setelah pembayaran diterima oleh rekening bank atas nama PT. Otten Coffee Indonesia. Lama waktu pengiriman disesuaikan dengan area pelayanan daerah tujuan.</li>
                            <li>Produk berupa mesin kopi yang dibeli dari ottencoffee.co.id dilengkapi dengan masa garansi yang disesuaikan dengan ketentuan garansi setiap produk.</li>
                            <li>Apabila terjadi kendala terkait dengan Produk maka Konsumen dapat menghubungi call center Otten Coffee.</li>
                            <li>Anda akan menerima email notifikasi mengenai Nomor Resi Pengiriman sesaat setelah produk pesanan Anda dikirim.</li>
                            <li>Untuk pembelian menggunakan bank transfer, Anda akan menerima email konfirmasi orderan setelah berbelanja dari website Otten Coffee. Produk pesanan Anda akan kami simpan paling lama 24 jam sebelum konfirmasi pembayaran. Jika Anda belum melakukan pembayaran dalam waktu 24 jam, maka Otten Coffee berhak menjual kembali produk pesanan Anda.</li>
                            <li>Jika Anda telah melakukan pembayaran dengan produk yang Anda pesan, tetapi produk yang telah Anda bayar tidak tersedia, Otten Coffee akan mengembalikan uang yang Anda bayar paling lama 7 x 24 jam hari kerja setelah Customer memberikan nomor rekening yang akan ditransfer kembali.</li>
                            <li>Pengguna memahami dan menyetujui bahwa setiap permasalahan yang terjadi pada saat proses pengiriman produk oleh penyedia jasa layanan pengiriman produk adalah merupakan tanggung jawab penyedia jasa layanan pengiriman.</li>
                        </ul>

                        <h2 className="section-title">Pengembalian produk / Retur</h2>
                        <p>Jika Anda tidak puas dengan Produk yang telah Anda beli, Anda bisa melakukan pengembalian produk tersebut ke gudang kami. Namun, pengembalian produk disesuaikan dengan ketentuan Otten Coffee dan terlebih dahulu kami lakukan pengecekan.</p>

                        <h3 className="sub-section-title">Mohon Perhatikan Hal-hal Berikut Ini</h3>
                        <ul>
                            <li>Anda dapat melakukan pengembalian produk / retur maksimal <b>3 x 24 jam</b> setelah Anda menerima produk dari Otten Coffee.</li>
                            <li>Produk harus dikirim dalam kondisi asli dan berada dalam kemasan lengkap dengan aksesoris terkait dan handtags. produk retur merupakan tanggung jawab dari customer sampai pihak Otten Coffee menerimanya, mohon bantuan Anda untuk mengembalikan paket dengan hati-hati.</li>
                            <li>Biaya pengiriman untuk pengembalian produk / retur ditanggung oleh Customer. Kami menyarankan agar Anda menggunakan jasa pengiriman JNE atau jasa pengiriman lain yang terpercaya untuk mencegah kemungkinan kehilangan produk pada saat pengiriman.</li>
                            <li>Pengembalian produk hanya akan diterima apabila telah dilakukan pengecekan oleh tim kami untuk memutuskan apakah produk tersebut layak untuk dikembalikan.</li>
                            <li>Pengembalian produk tidak dapat diuangkan, hanya boleh ditukar dengan produk serupa atau jika produk habis, boleh ditukar dengan produk lainnya.</li>
                            <li>Produk yang dikembalikan dan ganti produk tidak akan mendapat potongan atau promosi yang digunakan pada pembelian tersebut.</li>
                            <li>Otten Coffee hanya menerima pengembalian produk / retur jika:
                                <ul>
                                    <li>Produk rusak yang disebabkan oleh kesalahan produksi pabrik</li>
                                    <li>Produk cacat</li>
                                    <li>Salah / item salah dikirim</li>
                                    <li>Bagian produk hilang</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </article>
            </main>
        );
    }
}

export default SyaratdanKetentuan;
