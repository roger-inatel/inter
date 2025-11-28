function UniversityCard({ university, onSelect, isFavorite, onToggleFavorite }) {
  return (
    <div className="university-card">
      <div className="card-image-container">
        <img src={university.image} alt={university.name} className="card-image" />
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation()
            onToggleFavorite(university.id)
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill={isFavorite ? '#003f8c' : 'none'}>
            <path d="M10 17l-5.878 3.09 1.123-6.545L.489 8.91l6.572-.955L10 2l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" 
                  stroke={isFavorite ? '#003f8c' : '#666'} strokeWidth="2"/>
          </svg>
        </button>
      </div>

      <div className="card-content">
        <h3 className="card-title">{university.name}</h3>
        
        <div className="card-info">
          <span className="info-badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" stroke="#003f8c" strokeWidth="1.5"/>
              <path d="M8 8V4M8 10.5v.5" stroke="#003f8c" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            {university.country}
          </span>
          <span className="info-badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 5h12M2 8h12M2 11h6" stroke="#003f8c" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            {university.language}
          </span>
        </div>

        <div className="card-details">
          <div className="detail-item">
            <span className="detail-label">Área:</span>
            <span className="detail-value">{university.area}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Prazo:</span>
            <span className="detail-value deadline">{university.deadline}</span>
          </div>
        </div>

        <button 
          className="btn-primary btn-block"
          onClick={() => onSelect(university)}
        >
          Ver Detalhes
        </button>
      </div>
    </div>
  )
}

export default UniversityCard