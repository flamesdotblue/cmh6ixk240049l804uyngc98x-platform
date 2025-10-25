import { motion } from 'framer-motion';
import { BookOpenCheck, Send, Tag } from 'lucide-react';
import { useState } from 'react';

const posts = [
  {
    title: 'Interpretable AI in Healthcare: Balancing Accuracy and Ethics',
    field: 'STEM',
    summary:
      'A review of recent clinical decision-support models, emphasizing transparent modeling choices and patient safety.',
  },
  {
    title: 'Archival Methods in Digital Humanities',
    field: 'Humanities',
    summary:
      'Comparative analysis of metadata standards and preservation strategies for born-digital cultural artifacts.',
  },
  {
    title: 'Mixed-Methods Approaches to Social Impact Evaluation',
    field: 'Social Sciences',
    summary:
      'Design patterns that combine qualitative depth with quantitative breadth for credible causal narratives.',
  },
];

function InsightsContact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Consultation Inquiry — Aurora Research Collaborative');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:contact@aurora-research.org?subject=${subject}&body=${body}`;
  };

  return (
    <div className="mt-16">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className=""
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-navy-700/10 p-2 text-navy-700"><BookOpenCheck size={22} /></div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Insights & Reviews</h2>
            </div>
            <p className="mt-2 text-slate-600 max-w-xl">
              Our blog features in-depth analyses of papers across disciplines, offering methodological critique and synthesis.
            </p>
            <div className="mt-6 space-y-4">
              {posts.map((p) => (
                <article key={p.title} className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-semibold text-slate-900">{p.title}</h3>
                    <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700"><Tag size={14} />{p.field}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">{p.summary}</p>
                  <button className="mt-3 text-sm font-medium text-navy-700 hover:underline">Read analysis</button>
                </article>
              ))}
            </div>
          </div>

          <div id="contact" className="w-full lg:w-1/2">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-navy-700/10 p-2 text-navy-700"><Send size={22} /></div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Contact</h2>
            </div>
            <p className="mt-2 text-slate-600 max-w-xl">
              For consultations and collaboration inquiries, send us a message. We typically respond within two business days.
            </p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-navy-600 focus:outline-none focus:ring-2 focus:ring-navy-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-navy-600 focus:outline-none focus:ring-2 focus:ring-navy-200"
                  placeholder="you@university.edu"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-navy-600 focus:outline-none focus:ring-2 focus:ring-navy-200"
                  placeholder="Briefly describe your project, timeline, and goals."
                />
              </div>
              <div className="flex items-center gap-3">
                <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-navy-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-navy-800 transition-colors">
                  <Send size={16} /> Send Inquiry
                </button>
                <a href="mailto:contact@aurora-research.org" className="text-sm text-navy-700 hover:underline">contact@aurora-research.org</a>
              </div>
            </form>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default InsightsContact;
