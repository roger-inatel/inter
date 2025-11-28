export default function IntroSection() {
  return (
    <section className="bg-white py-16 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-secondary bg-opacity-10 px-6 py-2 rounded-full mb-4">
              <span className="text-secondary font-semibold text-sm">Como funciona</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Seu intercâmbio em 3 passos simples
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Facilitamos todo o processo para você focar no que importa: sua experiência internacional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                  1
                </div>
                <div className="absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-secondary to-transparent hidden md:block" style={{transform: 'translateX(50%)'}}></div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Explore e Filtre</h3>
                <p className="text-sm text-gray-600">
                  Navegue pelas universidades parceiras usando nossos filtros por país, idioma e área de interesse
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                  2
                </div>
                <div className="absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-secondary to-transparent hidden md:block" style={{transform: 'translateX(50%)'}}></div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Veja os Detalhes</h3>
                <p className="text-sm text-gray-600">
                  Clique em "Ver Detalhes" para conhecer requisitos, prazos e toda a documentação necessária
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                  3
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Inicie sua Jornada</h3>
                <p className="text-sm text-gray-600">
                  Prepare sua documentação e submeta sua candidatura dentro do prazo estabelecido
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Pronto para começar?
                </h3>
                <p className="text-gray-700">
                  Explore as universidades disponíveis logo abaixo e encontre a opção perfeita para você
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => document.getElementById('universidades').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-lg font-semibold transition shadow-lg flex items-center gap-2 whitespace-nowrap"
                >
                  Ver Universidades
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  8 universidades disponíveis
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}