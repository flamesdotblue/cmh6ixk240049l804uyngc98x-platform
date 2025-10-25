import { motion } from 'framer-motion';
import { GraduationCap, Shield, Sparkles } from 'lucide-react';

const founders = [
  {
    name: 'Dr. Maya Singh',
    title: 'PhD, Computational Linguistics',
    focus: 'NLP, scholarly communication, research ethics',
    bio: 'Leads methodology design and ensures ethical and rigorous research practices for interdisciplinary projects.',
  },
  {
    name: 'Prof. Daniel Okoro',
    title: 'Professor, Data Science',
    focus: 'Statistical modeling, causal inference, reproducibility',
    bio: 'Specializes in experimental design and robust data analysis pipelines across STEM and social sciences.',
  },
  {
    name: 'Dr. Elena Petrov',
    title: 'PhD, Humanities & Media Studies',
    focus: 'Qualitative methods, rhetoric, citation standards',
    bio: 'Guides narrative structure, literature synthesis, and formatting for discipline-specific style guides.',
  },
  {
    name: 'Dr. Luis Romero',
    title: 'PhD, Systems Engineering',
    focus: 'Optimization, simulations, peer-review strategy',
    bio: 'Advises on results interpretation, visualization, and journal targeting for impactful publications.',
  },
];

function HomeAbout() {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 via-white to-slate-50 ring-1 ring-slate-200"
      >
        <div className="relative px-6 py-16 sm:px-10 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight">
              Expert guidance for every stage of your academic research
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              We help scholars navigate the journey from topic ideation and proposal development to data analysis, peer review, and publication. Our approach is rigorous, ethical, and collaborative.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="#services" className="rounded-md bg-navy-700 px-5 py-2.5 text-white text-sm font-medium hover:bg-navy-800 transition-colors shadow-sm">Explore Services</a>
              <a href="#contact" className="rounded-md border border-slate-300 bg-white px-5 py-2.5 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors">Start a Consultation</a>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 text-left">
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <Sparkles className="text-navy-700" size={20} />
                <div>
                  <div className="font-medium text-slate-900">Vision</div>
                  <p className="text-sm text-slate-600">Advancing academic excellence through clarity, rigor, and open scholarship.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <GraduationCap className="text-navy-700" size={20} />
                <div>
                  <div className="font-medium text-slate-900">Pedagogy</div>
                  <p className="text-sm text-slate-600">We mentor researchers to develop enduring, transferable research skills.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <Shield className="text-navy-700" size={20} />
                <div>
                  <div className="font-medium text-slate-900">Integrity</div>
                  <p className="text-sm text-slate-600">Ethical, standards-aligned support from topic selection to publication.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <div id="about" className="sr-only" aria-hidden="true" />

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-16"
      >
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">About Us</h2>
        <p className="mt-2 max-w-3xl text-slate-600">
          Our founding team brings together diverse expertise across STEM, social sciences, and humanities. We collaborate closely with scholars to elevate research quality and impact.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {founders.map((f) => (
            <div key={f.name} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-2 w-10 rounded-full bg-navy-700/80 group-hover:w-12 transition-all" />
              <div className="mt-4 font-serif text-lg font-semibold text-slate-900">{f.name}</div>
              <div className="text-sm text-navy-700">{f.title}</div>
              <div className="mt-2 text-xs uppercase tracking-wide text-slate-500">Focus</div>
              <div className="text-sm text-slate-700">{f.focus}</div>
              <p className="mt-3 text-sm text-slate-600">{f.bio}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default HomeAbout;
