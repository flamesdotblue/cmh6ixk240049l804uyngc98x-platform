import { Book, Users, Layers, PenLine } from 'lucide-react';

function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="group inline-flex items-center gap-2">
          <div className="rounded-md bg-navy-600/10 p-2 text-navy-700 group-hover:bg-navy-600/20 transition-colors">
            <Book size={22} />
          </div>
          <div className="leading-tight">
            <div className="font-serif text-xl font-semibold text-slate-900">Aurora Research Collaborative</div>
            <div className="text-xs text-slate-500">From idea to publication</div>
          </div>
        </a>
        <nav className="hidden gap-6 md:flex">
          <a href="#home" className="text-sm text-slate-700 hover:text-navy-700 transition-colors">Home</a>
          <a href="#about" className="text-sm text-slate-700 hover:text-navy-700 transition-colors inline-flex items-center gap-1"><Users size={16}/>About</a>
          <a href="#services" className="text-sm text-slate-700 hover:text-navy-700 transition-colors inline-flex items-center gap-1"><Layers size={16}/>Services</a>
          <a href="#insights" className="text-sm text-slate-700 hover:text-navy-700 transition-colors inline-flex items-center gap-1"><PenLine size={16}/>Insights</a>
        </nav>
        <a href="#contact" className="rounded-md bg-navy-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-navy-800 transition-colors">Contact</a>
      </div>
    </header>
  );
}

export default NavBar;
