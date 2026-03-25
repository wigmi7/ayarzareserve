import { useState } from 'react';
import { Search } from 'lucide-react';
import { supabase } from '../lib/supabase';
import './CoffeeDatabase.css';

interface CoffeeLot {
  lote_code: string;
  variedad: string;
  altitud: string;
  proceso: string;
  notas: string;
  puntos: number;
  cosecha: string;
  finca: string;
}

export default function CoffeeDatabase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState<CoffeeLot | null | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      setResult(undefined);
      return;
    }
    
    setLoading(true);
    setResult(undefined);
    
    try {
      // Query the database directly matching the Lote Code ignoring case
      const { data, error } = await supabase
        .from('coffee_lots')
        .select('*')
        .ilike('lote_code', searchTerm.trim())
        .maybeSingle();
        
      if (error || !data) {
        setResult(null);
      } else {
        setResult(data as CoffeeLot);
      }
    } catch (err) {
      console.error("Error fetching lot:", err);
      setResult(null);
    } finally {
      setLoading(false);
    }
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
          <button type="submit" className="btn-primary search-btn" disabled={loading}>
            {loading ? 'Buscando...' : 'Buscar Lote'}
          </button>
        </form>
      </div>

      <div className="db-results-container">
        {result === null && !loading && (
          <div className="no-result glass-panel reveal-up active">
            <p className="clinic-text">No pudimos encontrar un lote con el código <strong>{searchTerm}</strong>. Por favor, verifica el número en tu empaque o asegúrate de haberlo escrito correctamente.</p>
          </div>
        )}

        {result && !loading && (
          <div className="result-card reveal-up active">
            <div className="result-card-header">
              <h3 className="luxury-heading" style={{ fontSize: '2.5rem', margin: 0, color: 'var(--text-primary)' }}>Lote {result.lote_code}</h3>
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
