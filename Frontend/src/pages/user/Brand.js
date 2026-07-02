import React from "react";
import { Link } from 'react-router-dom';
import { brandData } from "../../data/brandData";
import '../../css/Brands.css';

class Brand extends React.Component {
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
                                <li className="breadcrumb-item active fw-semibold" aria-current="page">Brands</li>
                            </ol>
                        </nav>
                    </div>

                    <div className="brands container my-5">
                        <h1>Brands</h1>
                    </div>
                    <div className="brands container my-5">
                        <div className="d-flex flex-wrap gap-2 align-items-start">
                            {brandData.map((brand) => (
                                <div className="brand" key={brand.id}>
                                    <img src={brand.logo} alt={brand.name} className="img-fluid" />
                                    <p>{brand.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </article>
            </main>
        );
    }
}

export default Brand;
                                