import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    let result;
    if (isSignUp) {
      result = await supabase.auth.signUp({ email, password });
    } else {
      result = await supabase.auth.signInWithPassword({ email, password });
    }

    if (result.error) {
      setError(result.error.message);
      setLoading(false);
    } else {
      navigate('/privado');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-secondary)', padding: '2rem' }}>
      <div className="glass-panel" style={{ padding: '3rem', width: '100%', maxWidth: '400px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
        <h2 className="luxury-heading" style={{ color: 'var(--text-primary)', textAlign: 'center', marginBottom: '2rem' }}>
          {isSignUp ? 'Crear Acceso' : 'Acceso Privado'}
        </h2>
        {error && <p style={{ color: '#d9534f', textAlign: 'center', marginBottom: '1rem', fontFamily: 'var(--font-sans)', fontSize: '0.9rem' }}>{error}</p>}
        <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Correo Electrónico</label>
            <input 
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', borderRadius: '4px', outline: 'none', fontFamily: 'var(--font-sans)' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Contraseña secreta</label>
            <input 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', borderRadius: '4px', outline: 'none', fontFamily: 'var(--font-sans)' }}
            />
          </div>
          <button type="submit" className="btn-primary" disabled={loading} style={{ width: '100%', marginTop: '1rem' }}>
            {loading ? 'Procesando...' : (isSignUp ? 'Registrarse' : 'Ingresar')}
          </button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button 
            type="button" 
            onClick={() => setIsSignUp(!isSignUp)}
            style={{ background: 'none', border: 'none', color: 'var(--accent-gold)', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: '0.9rem' }}
          >
            {isSignUp ? 'Ya tengo una cuenta. Iniciar sesión.' : '¿Eres nuevo suscriptor? Crea tu cuenta.'}
          </button>
        </div>
      </div>
    </div>
  );
}
