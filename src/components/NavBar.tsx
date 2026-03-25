import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo luxury-heading">Ayarza</Link>

        {/* Desktop Menu */}
        <div className="nav-links">
          <Link to="/impacto" className="nav-link clinic-text">Impacto</Link>
          <Link to="/cafe" className="nav-link clinic-text">El Café</Link>
          <Link to="/productores" className="nav-link clinic-text">Productores</Link>
          <Link to="/privado" className="nav-link clinic-text" style={{ color: 'var(--accent-gold)' }}>Mi Reserva</Link>
          <Link to="/suscripcion" className="nav-cta btn-primary">Suscribirme</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="mobile-menu">
            <Link to="/impacto" onClick={() => setMobileOpen(false)}>Impacto</Link>
            <Link to="/cafe" onClick={() => setMobileOpen(false)}>El Café</Link>
            <Link to="/productores" onClick={() => setMobileOpen(false)}>Productores</Link>
            <Link to="/privado" onClick={() => setMobileOpen(false)} style={{ color: 'var(--accent-gold)' }}>Mi Reserva (Login)</Link>
            <Link to="/suscripcion" className="mobile-cta" onClick={() => setMobileOpen(false)}>Suscribirme</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
