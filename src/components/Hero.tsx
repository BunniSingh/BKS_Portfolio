import { useState } from 'react';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  Terminal, 
  Copy, 
  Check, 
  Sparkles, 
  Code2, 
  Layers, 
  Database,
  Award
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onContactClick: () => void;
}

export default function Hero({ onOpenResume, onContactClick }: HeroProps) {
  const [copiedCode, setCopiedCode] = useState(false);

  const developerSnippet = `const developer = {
  name: "Banti Kumar Singh",
  role: "Full-Stack AI Developer",
  coreStack: ["React.js", "Python", "Node.js", "PostgreSQL", "AWS"],
  aiArchitecture: ["LLM Workflows", "RAG Pipelines", "Vector DB"],
  leadership: "Geekathon 2024 Winner (1st Rank)",
  dsaSolved: "150+ LeetCode problems",
  status: "Ready for High-Impact Roles"
};`;

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(developerSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[500px] bg-indigo-500/10 dark:bg-indigo-500/15 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-violet-500/10 dark:bg-violet-500/10 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Calls to Action */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Available for Full-time Roles & Recruiter Inquiries</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 dark:from-indigo-400 dark:via-indigo-300 dark:to-violet-400">Banti Kumar Singh</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
                Full-Stack AI Developer
              </p>
            </div>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-300">
              {['React.js', 'Python', 'AWS', 'Node.js', 'LLM & RAG', 'PostgreSQL', 'FastAPI'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Narrative summary extracted from resume */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Experienced in building responsive, scalable multi-panel web applications, designing 
              interactive analytics dashboards, developing high-throughput APIs, and orchestrating intelligent 
              AI & LLM workflows. Specialized in React, Python, Node.js, and modern cloud architectures.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                id="hero-hire-me-btn"
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/25 active:scale-98 transition-all text-sm sm:text-base cursor-pointer"
              >
                <span>Hire Banti / Contact</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-view-resume-btn"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-2xs active:scale-98 transition-all text-sm sm:text-base cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-500" />
                <span>View Resume</span>
              </button>

              {/* Social Profile Links */}
              <div className="flex items-center gap-2 pl-1">
                <a
                  id="hero-github-link"
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700 transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub Profile (BunniSingh)"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  id="hero-linkedin-link"
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Contact Line */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <a
                href={PERSONAL_INFO.links.emailMailto}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4 text-indigo-500" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a
                href={PERSONAL_INFO.links.tel}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <span>{PERSONAL_INFO.displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/90 shadow-xl backdrop-blur-md overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-800/70">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5" />
                    developer-profile.ts
                  </span>
                </div>
                <button
                  id="copy-code-snippet-btn"
                  onClick={handleCopySnippet}
                  className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors px-2 py-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                  title="Copy snippet"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-800 dark:text-slate-200">
                <p><span className="text-indigo-600 dark:text-indigo-400 font-bold">const</span> developer = &#123;</p>
                <p className="pl-4">name: <span className="text-emerald-600 dark:text-emerald-400">"{PERSONAL_INFO.name}"</span>,</p>
                <p className="pl-4">role: <span className="text-emerald-600 dark:text-emerald-400">"{PERSONAL_INFO.role}"</span>,</p>
                <p className="pl-4">company: <span className="text-emerald-600 dark:text-emerald-400">"Digital Night Owl Pvt. Ltd."</span>,</p>
                <p className="pl-4">coreStack: [</p>
                <p className="pl-8 text-amber-600 dark:text-amber-400">"React.js", "Python", "Postgres", "Redux", "AWS"</p>
                <p className="pl-4">],</p>
                <p className="pl-4">aiSystems: [</p>
                <p className="pl-8 text-violet-600 dark:text-violet-400">"LLM Integrations", "RAG Pipeline", "Vector DB"</p>
                <p className="pl-4">],</p>
                <p className="pl-4">accolades: <span className="text-emerald-600 dark:text-emerald-400">"Geekathon 2024 (1st Place Winner)"</span>,</p>
                <p className="pl-4">leetcodeSolved: <span className="text-indigo-600 dark:text-indigo-400 font-bold">150+</span>,</p>
                <p className="pl-4">hireable: <span className="text-emerald-600 dark:text-emerald-400 font-bold">true</span></p>
                <p>&#125;;</p>

                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Active Full-Stack Engine</span>
                  </span>
                  <span>UTF-8 • TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
