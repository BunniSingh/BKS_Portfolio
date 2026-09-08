import { useState } from 'react';
import { 
  Code, 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  Search, 
  Sparkles, 
  Check, 
  Wrench
} from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export default function SkillsSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return Code;
      case 'Layout':
        return Layout;
      case 'Server':
        return Server;
      case 'Database':
        return Database;
      default:
        return Wrench;
    }
  };

  const filteredGroups = SKILL_GROUPS.map((group) => {
    if (!searchQuery.trim()) return group;
    const q = searchQuery.toLowerCase();
    const matchingSkills = group.skills.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        (s.tags && s.tags.some((t) => t.toLowerCase().includes(q))) ||
        s.level.toLowerCase().includes(q)
    );
    return {
      ...group,
      skills: matchingSkills,
    };
  }).filter((group) => group.skills.length > 0);

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              <Cpu className="w-4 h-4" />
              <span>Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Skills & Technology Matrix
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Proficiencies across core programming languages, modern reactive frontend frameworks, asynchronous backend microservices, and AI/LLM pipelines.
            </p>
          </div>

          {/* Interactive Search / Filter for Recruiters */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id="skills-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g., Python, LLM, React)..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white placeholder:text-slate-400 shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredGroups.map((group, idx) => {
            const IconComponent = getIcon(group.iconName);
            return (
              <div
                key={idx}
                id={`skill-category-${group.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-800 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                        {group.category}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Skill Items */}
                  <div className="space-y-3 pt-2">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80 hover:border-slate-200 dark:hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="font-semibold text-sm text-slate-800 dark:text-slate-200 font-mono">
                            {skill.name}
                          </span>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                              skill.level === 'Advanced'
                                ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                                : skill.level === 'Proficient'
                                ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                                : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>

                        {skill.tags && (
                          <div className="flex flex-wrap gap-1 mt-1">
                            {skill.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[10px] text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded border border-slate-200/60 dark:border-slate-800"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredGroups.length === 0 && (
          <div className="mt-12 text-center py-12 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400">
              No skills found matching "{searchQuery}". Try searching for "React", "Python", or "AWS".
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Reset Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
