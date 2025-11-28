function Hero({ searchTerm, setSearchTerm }) {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Explore Oportunidades de<br/>
            Intercâmbio Internacional
          </h1>
          <p className="hero-description">
            Encontre as melhores universidades parceiras do Inatel ao redor do mundo<br/>
            e prepare-se para uma experiência acadêmica transformadora.
          </p>
          
          <div className="hero-search-box">
            <svg className="search-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Buscar universidade, país ou área de estudo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="hero-search-input"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero