import UniversityCard from './UniversityCard'

function UniversityList({ universities, onSelectUniversity, favorites, toggleFavorite }) {
  return (
    <section className="universities-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Universidades Parceiras</h2>
          <p className="section-subtitle">
            {universities.length} {universities.length === 1 ? 'universidade encontrada' : 'universidades encontradas'}
          </p>
        </div>

        {universities.length > 0 ? (
          <div className="universities-grid">
            {universities.map(university => (
              <UniversityCard
                key={university.id}
                university={university}
                onSelect={onSelectUniversity}
                isFavorite={favorites.includes(university.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <circle cx="60" cy="60" r="60" fill="#f3f4f6"/>
              <circle cx="50" cy="50" r="20" stroke="#9ca3af" strokeWidth="4"/>
              <path d="M85 85L65 65" stroke="#9ca3af" strokeWidth="4" strokeLinecap="round"/>
            </svg>
            <h3>Nenhuma universidade encontrada</h3>
            <p>Tente ajustar seus filtros de busca ou termo de pesquisa</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default UniversityList