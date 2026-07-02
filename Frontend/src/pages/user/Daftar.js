import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../../css/Daftar.css';


function withNavigation(Component) {
    return props => <Component {...props} navigate={useNavigate()} />;
}

class Daftar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
    };

    API_URL = process.env.REACT_APP_API_URL;

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => { // Fitur : Daftar
        e.preventDefault();
        const { username, email, password } = this.state;

        const newUser = async () => {
            try {
                const response = await fetch(`${this.API_URL}/users`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 
                        username: username, 
                        email: email, 
                        password: password 
                    }),
                });
                if (response.ok) {
                    this.props.navigate('/login');
                } else {
                    console.error('Failed to create user');
                }
            } catch (error) {
                console.error('Failed to create user, please try again later.', error);
            }
        };
        newUser();
    }

    render() {
        return (
            <div className="login-container">
                <div className="login-left">
                    <Link to="/">
                        <img
                            src="aset/logo-otten-coffee.png"
                            alt="Otten Coffee"
                            className="mb-4"
                            style={{ width: '100px' }}
                        />
                    </Link>

                    <h5 className="fw-semibold mb-3">Daftar sekarang untuk memudahkan ritual ngopi Anda</h5>

                    <form onSubmit={this.handleSubmit}>
                        <label className="form-label small text-muted">Username</label>
                        <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Username"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            required
                        />
                        <label className="form-label small text-muted">Email</label>
                        <input
                            type="email"
                            className="form-control mb-3"
                            placeholder="Email"
                            name="email"    
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            required
                        />
                        <label className="form-label small text-muted">Password</label>
                        <input
                            type="password"
                            className="form-control mb-3"
                            placeholder="Password (minimal 6 karakter)"
                            minLength="6"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            required
                        />
                        <button type="submit" className="btn btn-login mb-3">Daftar</button>
                    </form>

                    <p className="text-center small mb-0">
                        Sudah punya akun?{' '}
                        <Link to="/login" className="daftarkan fw-semibold text-decoration-none">Masuk</Link>
                    </p>

                    <div className="divider">
                        Butuh bantuan atau pertanyaan hubungi kami di{' '}
                        <a href="mailto:customer.care@ottencoffee.co.id" className="linkan">
                            customer.care@ottencoffee.co.id
                        </a>{' '}
                        atau kirim pesan via{' '}
                        <a href="/" target="_blank" rel="noopener noreferrer" className="linkan">
                            WhatsApp
                        </a>
                    </div>
                </div>

                <div className="login-right">
                    <input type="radio" name="radio-btn" id="slide1" defaultChecked />
                    <input type="radio" name="radio-btn" id="slide2" />
                    <input type="radio" name="radio-btn" id="slide3" />

                    <div className="slider">
                        <div className="slides">
                            <div className="slide">
                                <img src="aset/login1.png" alt="Coffee 1" />
                                <div className="caption">Nikmati Kopi Arabika Pilihan Terbaik</div>
                            </div>
                            <div className="slide">
                                <img src="aset/login2.png" alt="Coffee 2" />
                                <div className="caption">Espresso Kuat Untuk Awal Hari Kamu</div>
                            </div>
                            <div className="slide">
                                <img src="aset/login3.png" alt="Coffee 3" />
                                <div className="caption">Semua Kebutuhan Ngopi Kamu Ada di Sini!</div>
                            </div>
                        </div>
                    </div>

                    <div className="navigation">
                        <label htmlFor="slide1" className="bar"></label>
                        <label htmlFor="slide2" className="bar"></label>
                        <label htmlFor="slide3" className="bar"></label>
                    </div>
                </div>
            </div>
        );
    }
}

export default withNavigation(Daftar);