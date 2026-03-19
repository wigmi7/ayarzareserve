import './Differentiator.css';

export default function Differentiator() {
  const comparisons = [
    { feature: 'Modelo de Compra', us: 'Directa a productores', others: 'Intermediarios ocultos' },
    { feature: 'Impacto Social', us: 'Medible y real (120+ familias)', others: 'Marketing vacío' },
    { feature: 'Frescura', us: 'Tueste bajo demanda', others: 'Meses en bodegas' },
    { feature: 'Calidad', us: 'Especialidad de altura volcánica', others: 'Mezclas comerciales' }
  ];

  return (
    <section className="diff-section">
      <div className="diff-container bg-clinic">
        <div className="diff-content reveal-up active">
          <h2 className="luxury-heading" style={{ color: 'var(--text-dark)' }}>¿Por qué Ayarza Reserve?</h2>
          
          <div className="diff-table-wrapper">
            <table className="diff-table">
              <thead>
                <tr>
                  <th className="clinic-text">Característica</th>
                  <th className="clinic-text diff-highlight">Ayarza Volcán</th>
                  <th className="clinic-text">Otras Marcas</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, idx) => (
                  <tr key={idx}>
                    <td className="clinic-text">{row.feature}</td>
                    <td className="diff-us">✓ {row.us}</td>
                    <td className="diff-others">✗ {row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
