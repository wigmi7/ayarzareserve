import './RealImpact.css';

export default function RealImpact() {
  const metrics = [
    { value: '+120', label: 'Familias Beneficiadas' },
    { value: '+45%', label: 'Pago sobre mercado' },
    { value: '100%', label: 'Transparencia en origen' },
    { value: '20k', label: 'Años historia volcánica' }
  ];

  return (
    <section className="impact-section">
      <div className="impact-container">
        <div className="impact-content reveal-up active">
          <span className="accent-subtitle clinic-text">NUESTRO IMPACTO</span>
          <h2 className="luxury-heading" style={{ color: 'var(--text-dark)' }}>Tu taza de café cambia vidas</h2>
          <p className="impact-desc clinic-text">
            Al suscribirte a Ayarza Volcán Reserve, estás cortando los intermediarios. Esto nos permite pagar un precio verdaderamente justo a quienes cuidan la tierra y cosechan a mano cada grano en las faldas del volcán.
          </p>

          <div className="impact-metrics">
             {metrics.map((metric, index) => (
               <div key={index} className="metric-item">
                 <h4 className="metric-value">{metric.value}</h4>
                 <p className="metric-label clinic-text">{metric.label}</p>
               </div>
             ))}
          </div>
        </div>

        <div className="impact-testimonial reveal-up active" style={{ transitionDelay: '0.2s' }}>
          <img className="impact-image" src="/don_carlos.png" alt="Productor de café en Guatemala" />
          <div className="impact-quote-box glass-panel">
            <p className="impact-quote">"Gracias a la venta directa, ahora puedo enviar a mis hijos a una mejor escuela y reinvertir en mi cafetal. El volcán nos da la tierra, pero ustedes nos dan el futuro."</p>
            <span className="impact-author">— Don Carlos, Productor de Ayarza</span>
          </div>
        </div>
      </div>
    </section>
  );
}
