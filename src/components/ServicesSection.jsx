import { motion } from 'framer-motion';
import { FileText, BarChart3, CheckCircle, Compass } from 'lucide-react';

const services = [
  {
    title: 'Research Topic Selection & Proposal Development',
    icon: Compass,
    points: [
      'Landscape scan and gap analysis across disciplines',
      'Refined research questions and objectives',
      'Proposal drafting aligned with institutional guidelines',
    ],
  },
  {
    title: 'Paper Structuring & Formatting (APA, IEEE, MLA, Chicago)',
    icon: FileText,
    points: [
      'Argument flow, section organization, and clarity',
      'Citation management and style compliance',
      'Journal-specific formatting and submission prep',
    ],
  },
  {
    title: 'Data Analysis & Results Interpretation',
    icon: BarChart3,
    points: [
      'Study design, measurement, and statistical strategy',
      'Quantitative and qualitative analysis pipelines',
      'Result validation, visualization, and discussion framing',
    ],
  },
  {
    title: 'Peer-Review & Publication Guidance',
    icon: CheckCircle,
    points: [
      'Journal fit assessment and targeting',
      'Response-to-review strategy and revision plans',
      'Ethical publishing, preprints, and open science practices',
    ],
  },
];

function ServicesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className=""
    >
      <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Professional Services</h2>
      <p className="mt-2 max-w-3xl text-slate-600">
        Comprehensive support at every step of the research lifecycle—from ideation to peer-reviewed publication.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map(({ title, icon: Icon, points }) => (
          <div key={title} className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-navy-600/5" />
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-navy-700/10 p-2 text-navy-700">
                <Icon size={22} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-slate-900">{title}</h3>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-slate-700">
              {points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default ServicesSection;
