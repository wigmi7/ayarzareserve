import './Testimonials.css';

export default function Testimonials() {
  const reviews = [
    {
      quote: "El nivel de complejidad en taza es excepcional. Tiene ese toque volcánico que no encuentras en cafés comerciales. Una joya.",
      author: "Martín R.",
      role: "Barista Profesional"
    },
    {
      quote: "Saber exactamente de qué finca viene mi café y que mi suscripción apoya a las familias productoras hace que cada mañana se sienta especial.",
      author: "Elena G.",
      role: "Suscriptora Nivel Ritual"
    },
    {
      quote: "Las notas de cacao y frutos rojos son inconfundibles. Definitivamente el mejor café de especialidad que he probado este año.",
      author: "Chef Alejandro T.",
      role: "Restaurante Estelar"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="test-header reveal-up active">
          <span className="accent-subtitle clinic-text">TESTIMONIOS</span>
          <h2 className="luxury-heading">Lo que dicen los expertos y nuestra comunidad</h2>
        </div>

        <div className="test-grid">
          {reviews.map((rev, index) => (
            <div key={index} className="test-card reveal-up active" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="quote-icon">"</div>
              <p className="test-quote clinic-text">{rev.quote}</p>
              <div className="test-author-box">
                <span className="test-author">{rev.author}</span>
                <span className="test-role clinic-text">{rev.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
