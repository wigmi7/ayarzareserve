interface Props {
  title: string;
  subtitle: string;
}

export default function PlaceholderPage({ title, subtitle }: Props) {
  return (
    <div style={{ padding: '12rem 2rem 8rem', minHeight: '80vh', textAlign: 'center', backgroundColor: 'var(--bg-primary)' }}>
      <h1 className="luxury-heading" style={{ color: 'var(--accent-gold)' }}>{title}</h1>
      <p className="clinic-text" style={{ marginTop: '2rem', color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '2rem auto 0' }}>
        {subtitle}
      </p>
      <button className="btn-secondary" style={{ marginTop: '3rem' }} onClick={() => window.history.back()}>
        Volver
      </button>
    </div>
  );
}
