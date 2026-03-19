import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <h3 className="luxury-heading" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Ayarza Volcán</h3>
          <p className="clinic-text" style={{ color: 'var(--text-secondary)' }}>Café de especialidad con propósito y origen milenario.</p>
        </div>
        
        <div className="footer-links">
          <h4 className="clinic-text">Navegación</h4>
          <ul>
            <li><a href="/impacto">Nuestro Impacto</a></li>
            <li><a href="/cafe">El Café</a></li>
            <li><a href="/productores">Productores</a></li>
            <li><a href="/suscripcion">Suscripción</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 className="clinic-text">Contacto</h4>
          <ul>
            <li><a href="mailto:hola@ayarza.com">hola@ayarza.com</a></li>
            <li><a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">WhatsApp</a></li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="clinic-text">&copy; {new Date().getFullYear()} Ayarza Volcán Reserve Coffee. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
