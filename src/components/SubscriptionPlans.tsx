import { Check } from 'lucide-react';
import './SubscriptionPlans.css';

export default function SubscriptionPlans() {
  const plans = [
    {
      name: 'Raíz',
      volume: '350g - 500g / mes',
      price: '$19',
      desc: 'Para quienes buscan calidad constante en su rutina diaria.',
      features: [
        'Café fijo: Ayarza Volcán Reserve',
        'Boletín digital mensual',
        'Eliges en grano o molido',
        'Apoyo directo a 1 familia'
      ],
      popular: false
    },
    {
      name: 'Ritual',
      volume: '500g - 1kg / mes',
      price: '$34',
      desc: 'Una experiencia personalizada de orígenes y tuestes.',
      features: [
        'Mix: Ayarza + orígenes latinos',
        'Tueste ajustable a tu gusto',
        'Molinillo manual en primer envío',
        'Apoyo directo a 3 familias'
      ],
      popular: true
    },
    {
      name: 'Impacto',
      volume: '1kg - 1.5kg / mes',
      price: '$59',
      desc: 'El viaje definitivo para apasionados de las ediciones limitadas.',
      features: [
        'Ediciones exclusivas de temporada',
        'Cata y tours virtuales en finca',
        'Caja gourmet mensual sorpresa',
        'Apoyo a proyectos comunitarios'
      ],
      popular: false
    }
  ];

  return (
    <section className="plans-section">
      <div className="plans-container">
        <div className="plans-header reveal-up active">
          <span className="accent-subtitle clinic-text">SUSCRIPCIÓN</span>
          <h2 className="luxury-heading">Elige tu nivel de impacto</h2>
        </div>

        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`plan-card reveal-up active ${plan.popular ? 'plan-popular' : ''}`} style={{ animationDelay: `${index * 0.15}s` }}>
              {plan.popular && <div className="popular-badge clinic-text">MÁS ELEGIDO</div>}
              
              <div className="plan-header-content">
                <h3 className="plan-name luxury-heading" style={{ fontSize: '2rem' }}>{plan.name}</h3>
                <p className="plan-volume clinic-text">{plan.volume}</p>
                <div className="plan-price">
                  <span className="price-value">{plan.price}</span>
                  <span className="price-period">/ mes</span>
                </div>
                <p className="plan-desc clinic-text">{plan.desc}</p>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <Check className="feature-icon" />
                    <span className="clinic-text">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`btn-primary plan-btn ${!plan.popular ? 'btn-outline' : ''}`}>
                Suscribirme
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
