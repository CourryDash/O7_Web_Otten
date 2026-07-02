import React from "react";
import { Link } from "react-router-dom";
import '../../css/KebijakanPrivasi.css';

class KebijakanPrivasi extends React.Component {
    render() {
        return (
            <div>
                <main className="container my-5 pt-5">
                    <div id="main-content">
                        <article>
                            <div className="breadcrumbs container py-3">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/" className="text-secondary text-decoration-none">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active fw-semibold" aria-current="page">Kebijakan Privasi</li>
                                    </ol>
                                </nav>
                            </div>

                            <div className="privacy-content my-5">
                                <h1 className="page-title">Kebijakan Privasi</h1>

                                <p>Kebijakan Privasi berlaku untuk layanan yang disediakan oleh PT Otten Coffee Indonesia (selanjutnya disebut "Kami") dan memuat bagaimana kami dapat mengumpulkan, menggunakan, menyimpan, mengungkapkan dan melindungi "Informasi Pribadi" Anda, "Informasi Pribadi Tertentu" atau Informasi Pribadi lainnya (secara keseluruhan disebut "Informasi Pribadi") terkait akses Anda atas dan penggunaan aplikasi ("Aplikasi Otten Coffee").</p>

                                <p>Kebijakan Privasi ini adalah penjelasan terkait data dan Informasi Pribadi Pengguna, meliputi:</p>
                                <ol className="toc-list">
                                    <li>Pengumpulan Informasi Pribadi;</li>
                                    <li>Penggunaan Informasi Pribadi;</li>
                                    <li>Cookies;</li>
                                    <li>Menonaktifkan pengumpulan cookies di situs web kami;</li>
                                    <li>Penyimpanan Informasi Pribadi;</li>
                                    <li>Penghapusan Informasi Pribadi;</li>
                                    <li>Hukum dan Peraturan Yang Berlaku;</li>
                                    <li>Pembatasan Tanggung Jawab;</li>
                                    <li>Pembaruan Terhadap Kebijakan Privasi;</li>
                                    <li>Hubungi Kami.</li>
                                </ol>

                                <h2 className="section-title">Pengumpulan Informasi Pribadi</h2>
                                <p>Informasi Pribadi yang Kami kumpulkan secara daring (online) akan dibagi di dalam perusahaan hanya untuk kepentingan internal kami. Ketika Anda membuat akun di web kami, informasi pribadi yang umum dan spesifik kami kumpulkan termasuk:</p>
                                <ol>
                                    <li>Nama</li>
                                    <li>Alamat Pengiriman</li>
                                    <li>Alamat Email</li>
                                    <li>Nomor Telepon</li>
                                    <li>Informasi Transaksi, Keuangan dan /atau Perbankan</li>
                                    <li>Informasi Mengenai Data Dompet Digital (e-wallet)</li>
                                </ol>
                                <p>Anda dengan ini menyatakan Informasi Pribadi yang Anda sampaikan (input) ke dalam Sistem Kami (termasuk dokumen yang diunggah dan/atau diberikan kepada Otten Coffee) adalah asli, autentik, benar, akurat, lengkap, tidak menyesatkan, terbaru, dan merupakan hak pribadi Anda dan/atau dirinya berwenang untuk menyampaikan Informasi Pribadi Anda untuk menyampaikannya ke dalam Sistem Kami.</p>
                                <p>Kami melindungi segala Informasi Pribadi yang Anda berikan pada saat Anda menggunakan seluruh layanan Kami, termasuk menjaga kerahasiaan Informasi Pribadi Anda.</p>
                                <p>Kami berhak dari waktu ke waktu meminta autentifikasi dan pemutakhiran data pribadi Pengguna, sehingga data dan Informasi Pribadi Anda akurat, lengkap, dan terbaru.</p>
                                <p>Anda berhak dari waktu ke waktu melakukan pemutakhiran terhadap Informasi Pribadi Anda.</p>

                                <h2 className="section-title">Penggunaan Informasi Pribadi</h2>
                                <p>Seluruh Informasi Pribadi yang Anda berikan kepada Kami hanya akan digunakan dan dilindungi oleh Kami. Setiap informasi yang Anda berikan terbatas untuk tujuan proses yang berkaitan dengan :</p>
                                <ul>
                                    <li>Memproses segala bentuk permintaan, aktivitas maupun transaksi Anda melalui Situs dan Aplikasi Otten Coffee termasuk untuk keperluan pengiriman produk kepada Anda.</li>
                                    <li>Menawarkan, memperoleh, menyediakan, atau memfasilitasi layanan marketplace seperti laman beranda, penelusuran, pencarian, rekomendasi produk, maupun produk-produk lainnya melalui Situs dan Aplikasi Otten Coffee;</li>
                                    <li>Memungkinkan fitur untuk mempribadikan (personalised) akun Anda, seperti Keranjang Belanja dan Wishlist;</li>
                                    <li>Kami akan menggunakan Informasi yang Anda berikan untuk memverifikasi dan menjalankan transaksi finansial yang berhubungan dengan pembayaran online serta Pembayaran yang Anda buat melalui situs akan diproses oleh kami secara langsung. Anda hanya boleh memberikan informasi pembayaran kepada kami atas informasi yang akurat dan tidak menyesatkan dan Anda harus memberitahukan informasi dan perubahan-perubahan terkait dengan Informasi Pribadi untuk transaksi finansial;</li>
                                    <li>Mengakses saldo dompet digital (e-wallet) Anda untuk membantu mengelola keuangan dan memastikan ketersediaan dana saat akan bertransaksi pada platform kami. Data saldo hanya digunakan secara internal untuk menampilkan informasi pada Anda dan memfasilitasi transaksi, dan tidak digunakan untuk tujuan lain tanpa persetujuan Anda;</li>
                                    <li>Menggunakan fitur biometrik yang mungkin tersedia pada perangkat Anda, seperti otentikasi sidik jari atau pengenalan wajah. Kami tidak menyimpan data biometrik di server kami atau di perangkat Anda. Fitur biometrik sepenuhnya dikelola oleh perangkat itu sendiri dan tidak terintegrasi dengan aplikasi kami;</li>
                                    <li>Memproses pembayaran di situs dan aplikasi kami dengan kartu kredit Anda. Kami tidak menyimpan data kartu kredit Anda di server kami atau di dalam aplikasi. Informasi kartu kredit hanya diproses melalui penyedia layanan pembayaran yang telah terverifikasi dan aman;</li>
                                    <li>Melakukan kegiatan internal yang diperlukan untuk menyediakan layanan pada situs/aplikasi Otten Coffee, seperti pemecahan masalah software, bug, permasalahan operasional, melakukan analisis data, pengujian, dan penelitian, dan untuk memantau dan menganalisis kecenderungan penggunaan dan aktivitas;</li>
                                    <li>Memeriksa dan mengatasi permasalahan Anda serta mengarahkan pertanyaan kepada petugas layanan pelanggan yang tepat untuk mengatasi permasalahan yang dialami oleh Anda;</li>
                                    <li>Menggunakan informasi untuk tujuan penelitian, analisis, pengembangan dan pengujian produk guna meningkatkan keamanan layanan-layanan pada Situs, serta mengembangkan fitur dan produk baru; dan menginformasikan terkait produk, layanan, promosi, studi;</li>
                                    <li>Melakukan monitoring ataupun investigasi terhadap transaksi-transaksi mencurigakan atau transaksi yang terindikasi mengandung unsur kecurangan atau pelanggaran terhadap Syarat dan Ketentuan atau ketentuan hukum yang berlaku, serta melakukan tindakan-tindakan yang diperlukan sebagai tindak lanjut dari hasil monitoring atau investigasi transaksi tersebut.</li>
                                    <li>Dalam keadaan tertentu, Kami mungkin perlu untuk menggunakan ataupun mengungkapkan Informasi Pribadi Anda untuk tujuan penegakan hukum atau untuk pemenuhan persyaratan dan kewajiban peraturan perundang-undangan yang berlaku, termasuk dalam hal terjadinya sengketa atau proses hukum.</li>
                                </ul>

                                <h2 className="section-title">Cookies</h2>
                                <p>Otten Coffee dan pihak ketiga yang bermitra dengan kami dapat menggunakan cookies, web beacon, tag, skrip, objek lokal bersama seperti HTML5, pengidentifikasi iklan, dan teknologi serupa (seperti perangkat pengembangan perangkat lunak (SDK), yang memiliki fungsi serupa dengan cookies dan yang dapat dipasang di Aplikasi Otten Coffee untuk memungkinkan mitra mengumpulkan informasi tertentu tentang interaksi Anda dengan Aplikasi Otten Coffee) (secara kolektif disebut “Cookies”) sehubungan dengan penggunaan Anda atas Situs Web dan Aplikasi, yang mungkin bersifat tetap atau hanya disimpan selama sesi di browser atau perangkat Anda.</p>
                                <p>Cookies memiliki pengidentifikasi unik dan berada di komputer atau perangkat seluler Anda, di email yang kami kirimkan, dan di halaman web kami. Cookies dapat digunakan untuk berbagai tujuan seperti:</p>
                                <ul>
                                    <li>Menyediakan fungsi dasar dari penggunaan situs web, layanan, atau aplikasi kami;</li>
                                    <li>Mengotentikasi profil, mengingat preferensi dan pengaturan penggunaan Anda;</li>
                                    <li>Menyampaikan dan mengukur efektivitas kampanye iklan;</li>
                                    <li>Menganalisis lalu lintas dan tren situs;</li>
                                    <li>Menayangkan iklan yang relevan kepada Anda di aplikasi dan situs web lain yang dimiliki oleh perusahaan lain (baik oleh kami atau pengiklan lain); dan</li>
                                    <li>Meningkatkan pengalaman dengan memahami perilaku dan minat daring pengguna yang berinteraksi dengan situs web, layanan, atau aplikasi kami.</li>
                                </ul>
                                <p>Otten Coffee mengizinkan pihak ketiga untuk menggunakan cookies di situs web dan aplikasi untuk mengumpulkan data pribadi, sama seperti yang dilakukan Otten Coffee. Pihak ketiga mungkin dapat menyampurkan data pribadi Anda yang mereka kumpulkan dari sumber lain. Kami belum tentu memiliki akses atau kendali atas cookies yang mereka gunakan.</p>

                                <h2 className="section-title">Menonaktifkan pengumpulan cookies di situs web kami</h2>
                                <p>Anda berhak memilih untuk menonaktifkan, memblokir, atau menonaktifkan cookies. Namun, penolakan atau penghapusan beberapa cookies dapat mempengaruhi fungsionalitas situs web, layanan, atau aplikasi kami.</p>
                                <p>Anda dapat menyesuaikan pengaturan browser internet Anda untuk menonaktifkan, memblokir atau menonaktifkan cookies, menghapus riwayat penelusuran Anda atau menghapus cache dari browser internet Anda. Pengaturan mungkin terdapat dalam bagian “Riwayat”, “Preferensi”, “Pengaturan” atau “Privasi” dari browser internet Anda, atau Anda dapat berkonsultasi dengan bagian bantuan browser internet Anda untuk informasi lebih lanjut.</p>

                                <h2 className="section-title">Penyimpanan Informasi Pribadi</h2>
                                <p>Informasi Pribadi Anda hanya akan disimpan selama diperlukan untuk memenuhi tujuan dari pengumpulannya, atau selama penyimpanan tersebut diperlukan atau diperbolehkan oleh peraturan perundang-undangan dan peraturan yang ditetapkan oleh pemerintah.</p>
                                <p>Sebagai Subjek Data Pribadi anda berhak mendapatkan akses dan memperoleh salinan Data Pribadi tentang diri anda sesuai dengan ketentuan peraturan perundang-undangan. Yang ada pada fitur profile yang terdapat pada platform kami.</p>
                                <p>Kerahasiaan Informasi Pribadi Anda adalah hal yang terpenting bagi kami. Kami akan mengupayakan untuk melindungi dan mengamankan data dan Informasi Pribadi Anda dari akses, pengumpulan, penggunaan atau pengungkapan oleh pihak-pihak yang tidak berwenang dan dari pengolahan yang bertentangan dengan hukum.</p>
                                <p>Anda bertanggung jawab untuk menjaga kerahasiaan/menyimpan secara aman detail akun Anda, termasuk kata sandi Anda dan One Time Password (OTP) dan harus selalu menjaga dan bertanggung jawab atas keamanan perangkat yang anda gunakan.</p>

                                <h2 className="section-title">Penghapusan Informasi Pribadi</h2>
                                <p>Pengguna dapat mengajukan penghapusan Akun dan Penghapusan Informasi Pribadi dengan cara mengirimkan email ke it@ottencoffee.co.id atau melalui aplikasi Whatsapp dengan nomor 0811-1254-0539 dengan mencantumkan subject/judul "Data Deletion Request" dan mencantumkan data berupa :</p>
                                <ol>
                                    <li>Nama</li>
                                    <li>Email address</li>
                                    <li>Alasan penghapusan Akun dan Informasi Pribadi</li>
                                </ol>
                                <p>Kami akan menyetujui penghapusan data yang Anda ajukan jika telah mengajukan penghapusan Informasi Pribadi dan melampirkan data-data sebagaimana yang di jelaskan di atas.</p>
                                <p>Kami akan memproses penghapusan Informasi Pribadi dan Anda akan mendapatkan pemberitahuan dari Kami mengenai Penghapusan Informasi Pribadi telah selesai.</p>
                                <p>Anda juga dapat melakukan hapus akun secara mandiri dengan cara; masuk ke halaman profil, tekan tombol Hapus Akun, kemudian konfirmasi hapus beserta alasan penghapusan akun Anda.</p>
                                <p>Adapun sebelum Pengguna mengajukan penghapusan Akun dan Informasi Pribadi, Pengguna telah memperhatikan hal-hal tersebut :</p>
                                <ul>
                                    <li>Akun Pengguna akan dihapus secara permanen dan Pengguna tidak dapat menggunakan alamat email dan nomor HP yang sama untuk membuka kembali akun baru di Otten Coffee.</li>
                                    <li>Beberapa data terkait transaksi dapat disimpan Otten Coffee berdasarkan peraturan perundang-undangan yang berlaku di Indonesia.</li>
                                    <li>Akses Pengguna terhadap akun-akun lain yang terhubung pada Otten Coffee akan terputus seperti e-wallet, kartu kredit dll.</li>
                                    <li>Pengguna harus terlebih dahulu memastikan tidak ada lagi deposit pada akun dan apabila Pengguna masih memiliki deposit maka Pengguna wajib melakukan penarikan deposit sebelum Pengguna melakukan penutupan dan penghapusan Akun.</li>
                                    <li>Akun Pengguna tidak dapat dilakukan penghapusan atau penutupan jika Pengguna masih memiliki deposit pada Akun.</li>
                                    <li>Pengguna berkewajiban untuk memastikan sebelum dilakukan penghapusan atau penutupan Akun tidak ada transaksi atau langganan yang sedang berlangsung. Apabila terdapat transaksi atau langganan yang sedang berlangsung maka Akun tidak dapat dilakukan penghapusan atau penutupan.</li>
                                    <li>Dengan dilakukannya penutupan dan penghapusan Akun oleh Pengguna maka seluruh Voucher dan Poin akan hangus dan tidak dapat lagi dipergunakan ataupun di klaim untuk digunakan oleh Akun lain.</li>
                                </ul>

                                <h2 className="section-title">Hukum dan Peraturan Yang Berlaku</h2>
                                <p>Otten Coffee tunduk terhadap segala peraturan perundang-undangan dan kebijakan pemerintah Republik Indonesia yang berlaku, termasuk yang mengatur tentang informasi dan transaksi elektronik, penyelenggaraan sistem elektronik, dan perlindungan data pribadi Pengguna; termasuk segala peraturan pelaksana dan peraturan perubahan dari peraturan-peraturan tersebut yang mengatur dan melindungi penggunaan data dan informasi penting para Pengguna.</p>

                                <h2 className="section-title">Pembatasan Tanggung Jawab</h2>
                                <p>Anda turut serta bertanggung jawab atas keamanan dan mitigasi pelanggaran atas Informasi Pribadi dan/atau Akun Anda sendiri, seperti menerapkan pengamanan yang tepat, membatasi akses, membuat kata sandi yang kuat, menjaga kata sandi, menjaga one time password (“OTP”).</p>
                                <p>Kami tidak bertanggung jawab atas pertukaran dan pemberian data dan Informasi Pribadi yang dilakukan oleh Anda sendiri, termasuk yang dilakukan antar-Pengguna. Termasuk dalam ketentuan ini adalah setiap dan segala kesalahan yang disebabkan oleh Anda sendiri yang mengakibatkan kebocoran data dan Informasi Pribadi.</p>
                                <p>Kami bertanggung jawab atas Sistem Kami, termasuk perlindungan serta pengamanan rahasia Informasi Pribadi, termasuk memberitahukan Anda dalam hal terjadi kegagalan dalam perlindungan data pribadi melalui sekurang-kurangnya melalui e-mail Pengguna yang terdaftar pada Sistem Kami dan melaporkan kepada aparat penegak hukum atau Instansi Pengawas dan Pengatur Sektor terkait. Dalam hal terjadi kebocoran data, pihak yang bertanggung jawab untuk menginformasikan kepada Anda terkait kegagalan dalam perlindungan data tersebut adalah pihak atau institusi di mana data tersebut diproses berdasarkan Kebijakan Privasi ini.</p>
                                <p>Kami tidak bertanggung jawab atas keaslian, keotentikan, kebenaran, keakuratan, kelengkapan data pribadi yang Anda masukkan oleh ke dalam Sistem Kami.</p>
                                <p>Dalam hal Anda adalah anak belum dewasa, Kami tidak bertanggung jawab atas input data atau Informasi Pribadi Anda dan menganjurkan agar orang tua/wali anak memantau penggunaan internet anak, sehingga pemberian data pribadi Pengguna anak diberikan dan/atau dalam pengawasan orang tua/wali sebagai pihak yang berwenang.</p>
                                <p>Kami tidak bertanggung jawab atas kebocoran data yang terjadi diakibatkan dan/atau terjadi selama karena Keadaan Memaksa. Keadaan Memaksa meliputi antara lain (i) pemogokan, penutupan perusahaan, dan aksi industrial lain; (ii) huru-hara, kerusuhan, invasi, serangan atau ancaman teroris, perang (baik yang dinyatakan atau tidak) atau ancaman persiapan perang; (iii) kebakaran, ledakan, badai, banjir, gempa bumi, epidemi atau bencana alam lain; (iv) tidak tersedianya atau terganggunya jaringan telekomunikasi, informatika dan/atau listrik; (v) terdapatnya kegagalan sistem yang diakibatkan pihak ketiga yang terjadi di luar wewenang Otten Coffee; (vi) tidak berfungsinya sistem dan/atau jaringan perbankan, (vii) tindakan, putusan, undang-undang, peraturan atau pembatasan yang diterbitkan pemerintah. Dalam hal terjadi Keadaan Memaksa, Kami akan memberitahukan kepada Anda paling lambat 14 (empat belas) Hari Kalender setelah terjadinya Keadaan Kahar tersebut dan berusaha dengan kemampuan komersial terbaiknya memenuhi kewajiban Otten Coffee berdasarkan Kebijakan Privasi ini.</p>

                                <h2 className="section-title">Pembaruan Terhadap Kebijakan Privasi</h2>
                                <p>Sewaktu-waktu Kami dapat melakukan pembaruan Kebijakan Privasi ini dan waktu ke waktu dengan melakukan pengurangan ataupun penambahan ketentuan pada halaman ini. Perubahan terhadap kebijakan ini akan diumumkan melalui situs https://ottencoffee.co.id atau melalui alamat dari media lain yang Anda berikan kepada kami. Anda dianjurkan untuk membaca Kebijakan Privasi ini secara saksama dan memeriksa halaman dari waktu ke waktu untuk mengetahui perubahan apapun.</p>

                                <h2 className="section-title">Hubungi Kami</h2>
                                <p>Bila Anda memiliki pertanyaan, komentar, klaim atau keluhan mengenai kebijakan privasi ini atau Anda tidak puas dengan bagaimana kami menangani keluhan atau aduan Anda, silakan menghubungi kami di info@ottencoffee.co.id</p>
                            </div>
                        </article>
                    </div>
                </main>
            </div>
        );
    }
}

export default KebijakanPrivasi;