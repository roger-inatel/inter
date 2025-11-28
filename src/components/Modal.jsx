function Modal({ university, onClose, onStartPreparation }) {
  const handleStartPreparation = () => {
    onStartPreparation(university.name)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="modal-header">
          <img src={university.image} alt={university.name} className="modal-image" />
          <div className="modal-header-content">
            <h2>{university.name}</h2>
            <div className="modal-tags">
              <span className="tag">{university.country}</span>
              <span className="tag">{university.language}</span>
              <span className="tag">{university.area}</span>
            </div>
          </div>
        </div>

        <div className="modal-body">
          <section className="modal-section">
            <h3>Sobre o Programa</h3>
            <p>{university.description}</p>
          </section>

          <section className="modal-section">
            <h3>Requisitos Necessários</h3>
            <ul className="requirements-list">
              {university.requirements.map((req, index) => (
                <li key={index}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="10" fill="#10B981" opacity="0.1"/>
                    <path d="M6 10l3 3 5-6" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  {req}
                </li>
              ))}
            </ul>
          </section>

          <section className="modal-section">
            <h3>Prazo de Inscrição</h3>
            <div className="deadline-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="6" width="18" height="15" rx="2" stroke="#003f8c" strokeWidth="2"/>
                <path d="M3 10h18M8 3v4M16 3v4" stroke="#003f8c" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>{university.deadline}</span>
            </div>
          </section>
        </div>

        <div className="modal-footer">
          <button 
            className="btn-primary btn-large"
            onClick={handleStartPreparation}
          >
            Iniciar Preparação
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal