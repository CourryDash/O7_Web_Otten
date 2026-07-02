import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() { //Scroll ke atas ketika masuk halaman baru
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}