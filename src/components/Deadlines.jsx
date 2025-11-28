import { deadlines } from '../data/universities';

export default function Deadlines() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50" id="prazos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Prazos Importantes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mantenha-se atualizado com as datas importantes do processo de seleção. 
            O planejamento antecipado é essencial para uma candidatura bem-sucedida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deadlines.map((deadline, index) => (
            <div key={deadline.id} className="bg-white rounded-xl shadow-md p-6 border-t-4 border-secondary hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center">
                  <span className="text-secondary font-bold text-lg">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{deadline.title}</h3>
                  <p className="text-sm text-primary font-semibold">{deadline.date}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{deadline.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600 mb-4">Não perca nenhuma data importante</p>
          <button className="bg-primary hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-semibold transition inline-flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            Receber Notificações
          </button>
        </div>
      </div>
    </section>
  );
}
