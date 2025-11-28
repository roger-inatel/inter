function Filters({ filters, setFilters }) {
  const countries = ['Estados Unidos', 'Alemanha', 'Canadá', 'França', 'Austrália', 'Japão', 'Reino Unido', 'Espanha']
  const languages = ['Inglês', 'Alemão', 'Francês', 'Espanhol', 'Japonês', 'Português']
  const areas = ['Engenharia', 'Telecomunicações', 'Ciência da Computação', 'Administração', 'Ciências']

  return (
    <section className="filters-section" id="universidades">
      <div className="container">
        <div className="filters-container">
          <div className="filter-group">
            <label className="filter-label">País</label>
            <select
              value={filters.country}
              onChange={(e) => setFilters({ ...filters, country: e.target.value })}
              className="filter-select"
            >
              <option value="">Todos os países</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Idioma</label>
            <select
              value={filters.language}
              onChange={(e) => setFilters({ ...filters, language: e.target.value })}
              className="filter-select"
            >
              <option value="">Todos os idiomas</option>
              {languages.map(language => (
                <option key={language} value={language}>{language}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Área de Estudo</label>
            <select
              value={filters.area}
              onChange={(e) => setFilters({ ...filters, area: e.target.value })}
              className="filter-select"
            >
              <option value="">Todas as áreas</option>
              {areas.map(area => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>
          </div>

          {(filters.country || filters.language || filters.area) && (
            <button 
              className="btn-clear-filters"
              onClick={() => setFilters({ country: '', language: '', area: '' })}
            >
              Limpar Filtros
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Filters