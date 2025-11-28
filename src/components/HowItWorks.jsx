export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Explore as Universidades",
      description: "Navegue pelas opções de universidades parceiras e filtre por país, idioma e área de interesse.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: 2,
      title: "Analise os Requisitos",
      description: "Verifique os documentos necessários, prazos e requisitos acadêmicos para cada programa de intercâmbio.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: 3,
      title: "Prepare sua Documentação",
      description: "Organize todos os documentos necessários, incluindo histórico, certificados de proficiência e cartas de recomendação.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: 4,
      title: "Realize sua Inscrição",
      description: "Submeta sua candidatura dentro do prazo e acompanhe o processo seletivo através da plataforma.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-white" id="como-funciona">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Como Funciona</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Siga estes passos simples para dar início à sua jornada internacional. 
            Estamos aqui para guiá-lo em cada etapa do processo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-secondary to-transparent -translate-x-1/2 z-0" />
              )}
              
              <div className="relative bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-secondary hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                  {step.icon}
                </div>
                <div className="text-center">
                  <div className="inline-block bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    Etapa {step.number}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-xl p-8 max-w-3xl mx-auto border border-blue-100">
            <h3 className="text-xl font-bold text-primary mb-3">Precisa de Ajuda?</h3>
            <p className="text-gray-700 mb-6">
              Nossa equipe de Relações Internacionais está disponível para esclarecer dúvidas e 
              orientar você durante todo o processo de candidatura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:internacional@inatel.br" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Enviar E-mail
              </a>
              <button className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary border-2 border-primary px-6 py-3 rounded-lg font-semibold transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
