import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../css/login.css';

function withNavigation(Component) {
    return props => <Component {...props} navigate={useNavigate()} />;
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoading: false,
            errorMessage: '',
        };
    };

    API_URL = process.env.REACT_APP_API_URL;

    componentDidMount() {
        const params = new URLSearchParams(window.location.search);
        const authSuccess = params.get('auth');
        const error = params.get('error');

        if (authSuccess || error) {
            window.history.replaceState({}, document.title, window.location.pathname);
        }

        if (error) {
            alert('Login dengan Google gagal. Silakan coba lagi.');
            return;
        }

        if (authSuccess === 'success') {
            this.fetchUserData();
        }
    }

    fetchUserData = async () => {
        try {
            const response = await axios.get(`${this.API_URL}/me`, {
                withCredentials: true
            });

            if (response.data.user) {
                const user = response.data.user;
                localStorage.setItem('userId', user.id_user);
                localStorage.setItem('userEmail', user.email);
                localStorage.setItem('userRole', user.role);
                localStorage.setItem('userName', user.username);

                if (user.role === 'admin') {
                    this.props.navigate("/admin");
                } else {
                    this.props.navigate("/");
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (e) => { // Fitur : Login dengan JWT
        e.preventDefault();
        const { email, password } = this.state;

        this.setState({ isLoading: true, errorMessage: '' });

        try {
            const response = await axios.post(
                `${this.API_URL}/login`,
                { email, password },
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.data.user) {
                const user = response.data.user;
                localStorage.setItem('userId', user.id_user);
                localStorage.setItem('userEmail', user.email);
                localStorage.setItem('userRole', user.role);
                localStorage.setItem('userName', user.username);

                if (user.role === 'admin') {
                    this.props.navigate("/admin");
                } else {
                    this.props.navigate("/");
                }
            }
        } catch (error) {
            const errorMessage = error.response?.data?.error || "Login gagal!";
            this.setState({ errorMessage: errorMessage });
            console.error('Login error: ', error)
        } finally {
            this.setState({ isLoading: false });
        }
    }

    render() {
        const { email, password, isLoading } = this.state;

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

                    <h5 className="fw-semibold mb-3">Masuk untuk melanjutkan</h5>

                    {this.state.errorMessage && (
                        <div className="alert alert-danger">
                            {this.state.errorMessage}
                        </div>
                    )}

                    <form onSubmit={this.handleSubmit}>
                        <label className="form-label small text-muted">Email</label>
                        <input
                            type="email"
                            className="form-control mb-3"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={this.handleInputChange}
                            required
                            disabled={isLoading}
                        />
                        <label className="form-label small text-muted">Password</label>
                        <input
                            type="password"
                            className="form-control mb-3"
                            placeholder="Password"
                            minLength="6"
                            name="password"
                            value={password}
                            onChange={this.handleInputChange}
                            required
                            disabled={isLoading}
                        />
                        <button type="submit" className="btn btn-login mb-3" disabled={isLoading}>{isLoading ? 'Memproses...' : 'Masuk'}</button>
                    </form>

                    <div className="divider">atau masuk dengan</div>

                    <div className="text-center mb-3">
                        <a className="google-btn" href={`${this.API_URL}/auth/google`} onClick={() => this.setState({ isLoading: true })}>
                            <img src="aset/logo-google.png" alt="Google" />
                        </a>
                    </div>

                    <p className="text-center small mb-0">
                        Belum punya akun?{' '}
                        <Link to="/register" className="daftarkan fw-semibold text-decoration-none">Daftar</Link>
                    </p>

                    <div className="divider">
                        Butuh bantuan atau pertanyaan hubungi kami di{' '}
                        <a href="mailto:customer.care@ottencoffee.co.id" className="linkan">
                            customer.care@ottencoffee.co.id
                        </a>{' '}
                        atau kirim pesan via{' '}
                        <a href="#" target="_blank" rel="noopener noreferrer" className="linkan">
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
};

export default withNavigation(Login);