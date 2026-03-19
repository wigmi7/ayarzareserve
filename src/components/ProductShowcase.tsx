import './ProductShowcase.css';

export default function ProductShowcase() {
  return (
    <section className="product-section">
      <div className="product-container">
        
        <div className="product-images reveal-up active">
          <img className="product-img-main" src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800" alt="Granos de café Ayarza textura" />
        </div>

        <div className="product-info reveal-up active" style={{ transitionDelay: '0.2s' }}>
          <span className="accent-subtitle clinic-text">EL PRODUCTO</span>
          <h2 className="luxury-heading" style={{ color: 'var(--text-primary)'}}>Ayarza Volcán Reserve</h2>
          
          <div className="product-details">
            <div className="detail-item">
              <span className="detail-label clinic-text">Origen</span>
              <span className="detail-value">Laguna de Ayarza, Guatemala</span>
            </div>
            <div className="detail-item">
              <span className="detail-label clinic-text">Altitud</span>
              <span className="detail-value">1,800m - 2,000m s.n.m.</span>
            </div>
            <div className="detail-item">
              <span className="detail-label clinic-text">Proceso</span>
              <span className="detail-value">Lavado & Secado al Sol</span>
            </div>
            <div className="detail-item">
              <span className="detail-label clinic-text">Tueste</span>
              <span className="detail-value">Medio (Omniroast)</span>
            </div>
          </div>

          <div className="tasting-notes">
            <h4 className="clinic-text">Notas de Cata</h4>
            <div className="notes-tags">
              <span className="note-tag">Cacao Oscuro</span>
              <span className="note-tag">Frutos Rojos</span>
              <span className="note-tag">Caramelo Tostado</span>
              <span className="note-tag">Toques Especiados</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
