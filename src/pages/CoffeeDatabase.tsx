import { useState } from 'react';
import { Search } from 'lucide-react';
import './CoffeeDatabase.css';

// Base de datos Mock de lotes de café
const coffeeDatabase = [
  {
    lote: "AVR-001",
    variedad: "Bourbon Rojo",
    altitud: "1,950m",
    proceso: "Lavado Clásico",
    notas: "Cacao oscuro, Almendra tostada, Acidez málica sutil",
    puntos: "86.5",
    cosecha: "Enero 2026",
    finca: "Finca El Volcán Norte"
  },
  {
    lote: "AVR-002",
    variedad: "Caturra",
    altitud: "1,800m",
    proceso: "Honey Amarillo",
    notas: "Miel de abeja, Frutos rojos, Cuerpo sedoso",
    puntos: "87.0",
    cosecha: "Febrero 2026",
    finca: "Finca Las Nubes"
  },
  {
    lote: "AVR-003",
    variedad: "Pacamara / Edición Limitada",
    altitud: "2,050m",
    proceso: "Natural",
    notas: "Fresa madura, Vino tinto, Chocolate amargo",
    puntos: "89.0",
    cosecha: "Diciembre 2025",
    finca: "Ladera Alta Ayarza"
  }
];

export default function CoffeeDatabase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState<typeof coffeeDatabase[0] | null | undefined>(undefined);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      setResult(undefined);
      return;
    }
    const found = coffeeDatabase.find(c => c.lote.toLowerCase() === searchTerm.toLowerCase());
    setResult(found || null);
  };

  return (
    <div className="coffee-db-page">
      <div className="db-header reveal-up active">
        <span className="accent-subtitle clinic-text" style={{ textAlign: 'center', display: 'block' }}>Rastreabilidad Transparente</span>
        <h1 className="luxury-heading" style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--text-primary)' }}>El Café</h1>
        <p className="clinic-text" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--text-secondary)' }}>
          Introduce el Número de Lote impreso en tu bolsa (Ej: AVR-001, AVR-002, AVR-003) para descubrir las características exactas de tu café.
        </p>

        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-input-wrapper">
            <Search className="search-icon" />
            <input 
              type="text" 
              placeholder="Ej. AVR-001" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="lot-input"
            />
          </div>
          <button type="submit" className="btn-primary search-btn">Buscar Lote</button>
        </form>
      </div>

      <div className="db-results-container">
        {result === null && (
          <div className="no-result glass-panel reveal-up active">
            <p className="clinic-text">No pudimos encontrar un lote con el código <strong>{searchTerm}</strong>. Por favor, verifica el número en tu empaque.</p>
          </div>
        )}

        {result && (
          <div className="result-card reveal-up active">
            <div className="result-card-header">
              <h3 className="luxury-heading" style={{ fontSize: '2.5rem', margin: 0, color: 'var(--text-primary)' }}>Lote {result.lote}</h3>
              <div className="score-badge">
                <span className="score-number">{result.puntos}</span>
                <span className="score-text">SCA Score</span>
              </div>
            </div>
            
            <div className="result-grid">
              <div className="result-item">
                <span className="result-label clinic-text">Variedad</span>
                <span className="result-value">{result.variedad}</span>
              </div>
              <div className="result-item">
                <span className="result-label clinic-text">Proceso</span>
                <span className="result-value">{result.proceso}</span>
              </div>
              <div className="result-item">
                <span className="result-label clinic-text">Altitud</span>
                <span className="result-value">{result.altitud}</span>
              </div>
              <div className="result-item">
                <span className="result-label clinic-text">Finca de Origen</span>
                <span className="result-value">{result.finca}</span>
              </div>
              <div className="result-item">
                <span className="result-label clinic-text">Fecha de Cosecha</span>
                <span className="result-value">{result.cosecha}</span>
              </div>
              <div className="result-item full-width">
                <span className="result-label clinic-text">Perfil de Taza (Notas)</span>
                <span className="result-value notes-highlight">{result.notas}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
