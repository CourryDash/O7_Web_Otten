import React from 'react';
import { Link } from 'react-router-dom';
import { storeLocationData } from '../../data/storeLocationData';
import '../../css/HubungiKami.css';

class HubungiKami extends React.Component {
    render() {
        return (
            <main className="container my-5">
                <article>
                    <div className="breadcrumbs container py-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/" className="text-secondary text-decoration-none">Home</Link>
                                </li>
                                <li className="breadcrumb-item active fw-semibold" aria-current="page">Hubungi Kami</li>
                            </ol>
                        </nav>
                    </div>

                    <div className="hubungi-kami my-5">
                        <h1>Hubungi Kami</h1>
                        <div className="d-flex align-items-center">
                            <div className="kiri justify-content-start">
                                <img src="aset/hubungi kami/hubungi-kami1.png" width="100%" alt="Hubungi Kami Banner" />
                            </div>
                            <div className="kanan justify-content-end">
                                <p><span className="fw-semibold fs-5">Jam Operasi Pelayanan Pelanggan</span></p>
                                <p>Hari Senin-Minggu (09:00 - 18:00)</p>
                                <ul className="list-unstyled text-muted small">
                                    <li className="mb-2">
                                        <a target="_blank" rel="noopener noreferrer" href="mailto:customer.care@ottencoffee.co.id">
                                            <img src="aset/kontak kami/email.png" width="20px" height="100%" alt="Email Icon" />
                                            <span className="p-2">customer.care@ottencoffee.co.id</span>
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a target="_blank" rel="noopener noreferrer" href="#!">
                                            <img src="aset/kontak kami/telepon.png" width="20px" height="100%" alt="Phone Icon" />
                                            <span className="p-2">0804-1-999-666 (09.00 - 18.00 WIB)</span>
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=6281112540539&text=Hi%20Otten,%20saya%20mau%20bertanya">
                                            <img src="aset/kontak kami/whatsapp.png" width="20px" height="100%" alt="WhatsApp Icon" />
                                            <span className="p-2">0811-1254-0539 (09.00 - 18.00 WIB)</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <h5 className="fw-semibold pt-5 pb-1">Alamat Store Otten Coffee</h5>

                        <div className="row g-1 pt-3">
                            {storeLocationData.map((store) => (
                                <div className="col-md-3" key={store.id}>
                                    <div className="alamat">
                                        <a target="_blank" rel="noopener noreferrer" href={store.linkMap}>
                                            <img
                                                src={store.gambar}
                                                className="img-fluid"
                                                alt={`Map ${store.nama}`}
                                            />
                                        </a>
                                        <div className="text">
                                            <h5 className="fw-semibold fs-6 text-start pt-2">{store.nama}</h5>
                                            <p>{store.alamat}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </article>
            </main>
        );
    }
}

export default HubungiKami;