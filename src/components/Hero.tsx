import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      {/* Background Image/Video Overlay */}
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=2000" 
          alt="Cafetal en ladera de volcán" 
          className="hero-image"
        />
      </div>

      <div className="hero-content">
        <h1 className="luxury-heading reveal-up active">Café excepcional que transforma vidas</h1>
        <p className="hero-subheadline clinic-text reveal-up active" style={{ transitionDelay: '0.2s' }}>
          Suscríbete y apoya directamente a productores locales
        </p>
        
        <div className="hero-ctas reveal-up active" style={{ transitionDelay: '0.4s' }}>
          <Link to="/suscripcion" className="btn-primary" style={{ textDecoration: 'none' }}>Unirme a la suscripción</Link>
          <Link to="/impacto" className="btn-secondary" style={{ textDecoration: 'none' }}>Descubrir nuestra historia</Link>
        </div>
      </div>
    </section>
  );
}
