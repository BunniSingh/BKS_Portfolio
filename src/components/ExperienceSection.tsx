import { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, Sparkles, Building2, CheckCircle } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export default function ExperienceSection() {
  const [activeExpId, setActiveExpId] = useState<string>(EXPERIENCES[0].id);

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <Briefcase className="w-4 h-4" />
            <span>Work History & Engineering Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Demonstrated engineering experience building multi-panel web applications, integrating LLMs, and designing analytics dashboards for business insight.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="mt-12 space-y-8">
          {EXPERIENCES.map((exp, index) => {
            const isActive = activeExpId === exp.id;
            return (
              <div
                key={exp.id}
                id={`experience-card-${exp.id}`}
                className={`relative rounded-2xl border transition-all duration-200 p-6 sm:p-8 ${
                  isActive
                    ? 'bg-white dark:bg-slate-900 border-indigo-500/80 dark:border-indigo-500/70 shadow-lg shadow-indigo-500/5'
                    : 'bg-white/60 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {/* Header: Role & Company */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      {exp.highlightBadge && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                          {exp.highlightBadge}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                      <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                      <span className="px-2 py-0.5 rounded text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-mono text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 px-3.5 py-1.5 rounded-xl self-start lg:self-center border border-slate-200 dark:border-slate-700">
                    <Calendar className="w-4 h-4 text-indigo-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Body: Bullet Points */}
                <div className="pt-6 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Key Contributions & Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {exp.description.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills used */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1">
                    Tech Stack:
                  </span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
