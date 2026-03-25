import './StorySection.css';

export default function StorySection() {
  return (
    <section className="story-section">
      <div className="story-container">
        
        <div className="story-header reveal-up active">
          <span className="accent-subtitle clinic-text">ESTE CAFÉ VIENE DE...</span>
          <h2 className="luxury-heading">Descubre el sabor que nace de un volcán dormido y de una historia milenaria.</h2>
        </div>

        <div className="story-grid">
          <div className="story-text-block reveal-up active" style={{ animationDelay: '0.1s' }}>
            <p className="clinic-text">
              En las alturas de Guatemala, donde la naturaleza ha dejado su marca a través de los milenios, surge un café que lleva en su esencia la historia de un antiguo volcán. Ayarza Volcán Reserve Coffee nace en una tierra que, hace más de 20,000 años, fue testigo de una poderosa explosión volcánica que cambió el paisaje para siempre.
            </p>
          </div>
          
          <div className="story-image-block cinematic-zoom reveal-up active" style={{ animationDelay: '0.2s' }}>
            <img src="/laguna_ayarza.png" alt="Majestuosa Laguna de Ayarza y plantaciones de café en Guatemala" />
          </div>

          <div className="story-image-block cinematic-zoom reveal-up active" style={{ animationDelay: '0.3s' }}>
            <img src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=1200" alt="Cultivo de altura" />
          </div>

          <div className="story-text-block reveal-up active" style={{ animationDelay: '0.4s' }}>
            <p className="clinic-text">
              Este rincón de Guatemala, rodeado de montañas y bendecido por un microclima único, ofrece las condiciones perfectas para el cultivo de un café de altura excepcional. Las fincas cafetaleras, situadas a más de 1,800 metros sobre el nivel del mar, aprovechan los minerales volcánicos que enriquecen la tierra para producir granos que expresan una profundidad y complejidad de sabores inigualables.
            </p>
          </div>

          <div className="story-full-text-block reveal-up active" style={{ animationDelay: '0.5s' }}>
            <p className="clinic-text">
              Cada taza de Ayarza Volcán Reserve Coffee es una invitación a descubrir la esencia de la antigua tierra volcánica. Con notas que oscilan entre frutas, cacao y sutiles toques de especias, este café lleva consigo la riqueza del suelo fértil y la historia milenaria de una explosión que creó un paisaje tan sorprendente como el café que se cultiva en él.
            </p>
            <p className="clinic-text" style={{ marginTop: '1rem' }}>
              Ayarza Volcán Reserve Coffee es más que un café premium; es una experiencia que conecta a los consumidores con el corazón de Guatemala, con sus antiguas raíces volcánicas, y con las manos que cuidan y cultivan este grano tan especial.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
