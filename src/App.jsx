import { useEffect } from 'react';
import NavBar from './components/NavBar';
import HomeAbout from './components/HomeAbout';
import ServicesSection from './components/ServicesSection';
import InsightsContact from './components/InsightsContact';

function App() {
  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash) {
        const el = document.querySelector(window.location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      <NavBar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section id="home" className="pt-28">
          <HomeAbout />
        </section>
        <section id="services" className="pt-10">
          <ServicesSection />
        </section>
        <section id="insights" className="pt-10">
          <InsightsContact />
        </section>
      </main>
      <footer className="mt-16 border-t border-slate-200 bg-white/60 backdrop-blur py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Aurora Research Collaborative. Advancing Academic Excellence.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
