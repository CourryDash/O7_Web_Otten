import React, { useState, useEffect } from 'react';

const BackToTop = () => { //Fitur : Balik ke halaman paling atas
    const [isVisible, setIsVisible] = useState(false); 

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const balikAtas = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        isVisible && (
            <button onClick={balikAtas} className="back-to-top">
                <i className="bi bi-arrow-up"></i>
            </button>
        )
    );
};

export default BackToTop;