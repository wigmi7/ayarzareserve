import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface CoffeeLot {
  id: string;
  lote_code: string;
  variedad: string;
  altitud: string;
  proceso: string;
  notas: string;
  puntos: number;
  cosecha: string;
  finca: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [lots, setLots] = useState<CoffeeLot[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [formData, setFormData] = useState({
    lote_code: '', variedad: '', altitud: '', proceso: '', notas: '', puntos: '', cosecha: '', finca: ''
  });

  useEffect(() => {
    fetchLots();
  }, []);

  async function fetchLots() {
    const { data, error } = await supabase.from('coffee_lots').select('*').order('created_at', { ascending: false });
    if (!error && data) {
      setLots(data);
    }
    setLoading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await supabase.from('coffee_lots').insert([
      { ...formData, puntos: parseFloat(formData.puntos) }
    ]);
    
    if (error) {
      alert('Error guardando en la Nube: Verifica tus permisos SQL. Detalle: ' + error.message);
    } else {
      alert('¡Lote creado exitosamente en la Base de Datos!');
      setFormData({ lote_code: '', variedad: '', altitud: '', proceso: '', notas: '', puntos: '', cosecha: '', finca: '' });
      fetchLots();
    }
    setLoading(false);
  }

  async function handleDelete(id: string) {
    if (!confirm('¿Estás 100% seguro de borrar este lote de forma permanente?')) return;
    setLoading(true);
    const { error } = await supabase.from('coffee_lots').delete().eq('id', id);
    if (error) {
       alert('Error eliminando: ' + error.message);
    } else {
      fetchLots();
    }
    setLoading(false);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <div style={{ padding: '8rem 2rem 6rem', minHeight: '100vh', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 className="luxury-heading" style={{ color: 'var(--accent-gold)', marginBottom: '2rem' }}>Panel de Administración de Café</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
          
          <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
            <h3 className="clinic-text" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Crear Lote en la Nube</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Código de Lote Público</label>
                <input name="lote_code" value={formData.lote_code} onChange={handleChange} required placeholder="Ej: AVR-005" style={inputStyle} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Variedad (Botanica)</label>
                  <input name="variedad" value={formData.variedad} onChange={handleChange} required placeholder="Ej: Geisha Lavado" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Proceso</label>
                  <input name="proceso" value={formData.proceso} onChange={handleChange} required placeholder="Ej: Natural / Miel" style={inputStyle} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Altitud de Cultivo</label>
                  <input name="altitud" value={formData.altitud} onChange={handleChange} required placeholder="Ej: 1,900m" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>SCA Score (Puntaje)</label>
                  <input name="puntos" type="number" step="0.1" value={formData.puntos} onChange={handleChange} required placeholder="Ej: 88.5" style={inputStyle} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Cosecha (Fecha)</label>
                  <input name="cosecha" value={formData.cosecha} onChange={handleChange} required placeholder="Ej: Marzo 2026" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Finca u Origen</label>
                  <input name="finca" value={formData.finca} onChange={handleChange} required placeholder="Ej: Ladera Alta" style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Notas Descriptivas (Perfil)</label>
                <input name="notas" value={formData.notas} onChange={handleChange} required placeholder="Cacao puro, Flor de Jazmín..." style={inputStyle} />
              </div>
              <button type="submit" className="btn-primary" disabled={loading} style={{ marginTop: '1rem', width: '100%' }}>
                {loading ? 'Subiendo datos seguros...' : 'Guardar Lote de Café'}
              </button>
            </form>
          </div>

          <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
             <h3 className="clinic-text" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Lotes Existentes</h3>
             {loading && lots.length === 0 ? <p>Conectando con Supabase...</p> : null}
             
             <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '600px', overflowY: 'auto', paddingRight: '0.5rem' }}>
               {lots.map(lot => (
                 <div key={lot.id} style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '6px', border: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <div>
                     <strong style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', fontSize: '1.2rem' }}>{lot.lote_code}</strong>
                     <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0.2rem 0 0' }}>{lot.variedad} - {lot.puntos} pts</p>
                   </div>
                   <button onClick={() => handleDelete(lot.id)} style={{ background: '#bc4749', color: 'white', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600 }}>
                     Eliminar
                   </button>
                 </div>
               ))}
               {lots.length === 0 && !loading && (
                 <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>El catálogo maestro está vacío.</p>
               )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.8rem 1rem',
  background: 'var(--bg-primary)',
  border: '1px solid var(--border-subtle)',
  color: 'var(--text-primary)',
  borderRadius: '4px',
  outline: 'none',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.9rem'
};

const labelStyle: React.CSSProperties = { 
  display: 'block', 
  fontSize: '0.75rem', 
  color: 'var(--text-secondary)', 
  marginBottom: '0.4rem',
  textTransform: 'uppercase',
  letterSpacing: '1px'
};
