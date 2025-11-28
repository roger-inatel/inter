import logo from '../../assets/Inatel Branco.png';

export default function Header() {
  return (
    <header className="bg-primary text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Inatel" className="h-12 w-auto" />
          <div>
            <h1 className="font-bold text-xl">Intercâmbio Internacional</h1>
            <p className="text-xs text-blue-200">Instituto Nacional de Telecomunicações</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#universidades" className="hover:text-blue-200 transition text-sm font-medium">Universidades</a>
          <a href="#prazos" className="hover:text-blue-200 transition text-sm font-medium">Prazos</a>
          <a href="#como-funciona" className="hover:text-blue-200 transition text-sm font-medium">Como Funciona</a>
          <button className="bg-white text-primary px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition text-sm">
            Minha Conta
          </button>
        </nav>
        
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}