import { Trophy, Award, Code, GraduationCap, Calendar, CheckCircle2, Star } from 'lucide-react';
import { ACHIEVEMENTS, EDUCATION } from '../data/portfolioData';

export default function AchievementsAndEducation() {
  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'trophy':
        return Trophy;
      case 'award':
        return Award;
      default:
        return Code;
    }
  };

  return (
    <section id="education" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Achievements & Accolades (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                <Trophy className="w-4 h-4" />
                <span>Recognitions & Contests</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Achievements & Leadership
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                Competitive engineering victories and recognized problem-solving rigor.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {ACHIEVEMENTS.map((ach) => {
                const IconComponent = getAchievementIcon(ach.iconType);
                return (
                  <div
                    key={ach.id}
                    id={`achievement-card-${ach.id}`}
                    className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-800 transition-all flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                          {ach.title}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                          {ach.badge}
                        </span>
                      </div>

                      <div className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-2">
                        <span>{ach.organization}</span>
                        <span>•</span>
                        <span>{ach.year}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                        {ach.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education & Academic Background (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                <GraduationCap className="w-4 h-4" />
                <span>Qualifications</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Education
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                Academic foundation and full-stack software development credentials.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-2"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0">
                      {edu.period}
                    </span>
                  </div>

                  {edu.gradeOrDetail && (
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {edu.gradeOrDetail}
                    </div>
                  )}

                  {edu.notes && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {edu.notes}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
