import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

export default function MemberArea() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUserEmail(user.email || '');
      }
    });
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div style={{ padding: '10rem 2rem 6rem', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <h1 className="luxury-heading" style={{ color: 'var(--accent-gold)' }}>Mi Reserva</h1>
          <button onClick={handleLogout} className="btn-secondary" style={{ padding: '0.5rem 1.5rem' }}>Cerrar Sesión</button>
        </div>
        
        <div className="glass-panel" style={{ padding: '3rem', border: '1px solid var(--border-subtle)', borderRadius: '8px', marginBottom: '3rem' }}>
          <h3 className="clinic-text" style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Bienvenido de nuevo.</h3>
          <p className="clinic-text" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
            Conectado como: <strong>{userEmail}</strong>.
          </p>
          <p className="clinic-text" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            Este es el portal exclusivo para miembros de la reserva. Muy pronto habilitaremos la gestión de tu suscripción recurrente, descargas de recursos técnicos (guías de filtrado) y acceso anticipado a nuestras micro-lotes en subasta.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
             <h4 className="clinic-text" style={{ color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Mi Suscripción</h4>
             <p className="clinic-text" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Plan activo: <strong>En evaluación</strong></p>
          </div>
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
             <h4 className="clinic-text" style={{ color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Guías VIP</h4>
             <p className="clinic-text" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Próximamente videotutoriales de V60, Chemex y Aeropress.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
