import { useState } from 'react';
import { 
  CheckCircle2, 
  Layers, 
  Cpu, 
  BarChart3, 
  Trophy, 
  Copy, 
  Check, 
  ExternalLink,
  Code2,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function AboutSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const pillars = [
    {
      icon: Layers,
      title: 'Multi-Panel Full-Stack Systems',
      description: 'Architecting dedicated User, Admin, and Provider portals with unified role-based authentication, modular styling, and scalable RESTful APIs.'
    },
    {
      icon: Cpu,
      title: 'LLM & AI Integration',
      description: 'Deploying real-world generative AI features, Retrieval-Augmented Generation (RAG) pipelines, and intelligent document processing workflows.'
    },
    {
      icon: BarChart3,
      title: 'Interactive Analytics & Dashboards',
      description: 'Crafting responsive data visualizations, real-time charts, and metric monitoring tools using Chart.js, React, and efficient data pipelining.'
    },
    {
      icon: Trophy,
      title: 'Algorithmic Rigor & Leadership',
      description: 'Proven track record with 150+ DSA problems solved on LeetCode and leading a 6-developer team to 1st Place victory in Geekathon 2024.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <Code2 className="w-4 h-4" />
            <span>Professional Profile & Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Crafting Scalable Full-Stack Web Apps with AI Capabilities
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I am an AI & Full-Stack Developer experienced in MERN Stack and Python ecosystems. My focus is delivering production-ready, performant software that combines crisp user interfaces with robust backend architectures and intelligent generative AI automation.
          </p>
        </div>

        {/* 4 Engineering Pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-800 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quick Contact & Profile Verification Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-indigo-50/60 via-slate-50 to-violet-50/60 dark:from-slate-900 dark:via-slate-900/90 dark:to-indigo-950/30 border border-indigo-100 dark:border-slate-800">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Looking for a dedicated Full-Stack or AI Developer?</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                Directly connect with Banti Kumar Singh for technical roles, contract engagements, or engineering collaborations.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              {/* Copy Email */}
              <button
                id="copy-email-btn"
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-2xs transition-all cursor-pointer"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-slate-500" />}
                <span>{copiedEmail ? 'Email Copied!' : PERSONAL_INFO.email}</span>
              </button>

              {/* Copy Phone */}
              <button
                id="copy-phone-btn"
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-2xs transition-all cursor-pointer"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-slate-500" />}
                <span>{copiedPhone ? 'Phone Copied!' : PERSONAL_INFO.displayPhone}</span>
              </button>

              {/* LinkedIn Link */}
              <a
                id="about-linkedin-link"
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-sm"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
