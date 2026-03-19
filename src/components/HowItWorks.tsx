import { MousePointerClick, PackageOpen, HeartHandshake, Settings2 } from 'lucide-react';
import './HowItWorks.css';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: <MousePointerClick className="step-icon" />,
      title: 'Elige tu plan',
      desc: 'Selecciona la frecuencia y cantidad de café.'
    },
    {
      num: '02',
      icon: <PackageOpen className="step-icon" />,
      title: 'Recibe café premium',
      desc: 'Tostado fresco y entregado en tu puerta.'
    },
    {
      num: '03',
      icon: <HeartHandshake className="step-icon" />,
      title: 'Impactas directamente',
      desc: 'Apoyas a familias locales y la conservación del volcán de Ayarza.'
    },
    {
      num: '04',
      icon: <Settings2 className="step-icon" />,
      title: 'Ajusta o cancela',
      desc: 'Control total de tu suscripción en cualquier momento.'
    }
  ];

  return (
    <section className="how-it-works bg-clinic">
      <div className="hiw-container">
        <div className="hiw-header reveal-up active">
          <h2 className="luxury-heading" style={{ color: 'var(--text-dark)' }}>¿Cómo Funciona?</h2>
          <p className="clinic-text">Una suscripción diseñada para ser simple, flexible y llena de propósito.</p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card reveal-up active" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="step-number">{step.num}</div>
              <div className="step-icon-wrapper">
                {step.icon}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc clinic-text">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
