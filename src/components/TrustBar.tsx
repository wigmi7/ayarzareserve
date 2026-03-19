import { ShieldCheck, Users, Coffee, CalendarCheck } from 'lucide-react';
import './TrustBar.css';

export default function TrustBar() {
  const items = [
    {
      icon: <Users className="trust-icon" />,
      text: 'Compra directa a productores'
    },
    {
      icon: <ShieldCheck className="trust-icon" />,
      text: 'Impacto social medible'
    },
    {
      icon: <Coffee className="trust-icon" />,
      text: 'Café de especialidad'
    },
    {
      icon: <CalendarCheck className="trust-icon" />,
      text: 'Entrega mensual flexible'
    }
  ];

  return (
    <section className="trust-bar bg-clinic">
      <div className="trust-container">
        {items.map((item, index) => (
          <div key={index} className="trust-item reveal-up active" style={{ animationDelay: `${index * 0.1}s` }}>
            {item.icon}
            <span className="clinic-text">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
