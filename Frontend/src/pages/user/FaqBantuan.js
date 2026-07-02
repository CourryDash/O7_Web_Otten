import React from "react";
import { Link } from 'react-router-dom';
import { faqData } from '../../data/faqData';
import '../../css/FaqBantuan.css';

class FaqBantuan extends React.Component {
    render() {
        const renderKolom = (posisi) => {
            return faqData
                .filter(item => item.kolom === posisi)
                .map((item, index) => (
                    <div key={index}>
                        <h4 className="fw-semibold fs-5 mb-3">{item.kategori}</h4>
                        <ul className="list-unstyled mb-4">
                            {item.pertanyaan.map((q, i) => (
                                <React.Fragment key={i}>
                                    <li className="mb-2"><a href="/">{q}</a></li>
                                    {i < item.pertanyaan.length - 1 && <hr />}
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>
                ));
        };

        return (
            <main className="container my-5">
                <div className="breadcrumbs container py-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/" className="text-secondary text-decoration-none">Home</Link>
                            </li>
                            <li className="breadcrumb-item active fw-semibold" aria-current="page">FAQ</li>
                        </ol>
                    </nav>
                </div>
                <div className="faq-bantuan container-fluid d-flex pt-5 gap-2">
                    <div className="content">
                        {renderKolom("kiri")}
                    </div>
                    <div className="content-tengah">
                        {renderKolom("tengah")}
                    </div>
                    <div className="content-kanan">
                        {renderKolom("kanan")}
                    </div>
                </div>
            </main>
        );
    }
}

export default FaqBantuan;