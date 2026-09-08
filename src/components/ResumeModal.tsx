import { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin,
  FileText
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_GROUPS, EDUCATION, ACHIEVEMENTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copiedPlainText, setCopiedPlainText] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const plainTextResume = `=====================================================
BANTI KUMAR SINGH
Full-Stack AI Developer | React | JavaScript | AWS | Node.js | Python | LLM
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}
LinkedIn: ${PERSONAL_INFO.links.linkedin} | GitHub: ${PERSONAL_INFO.links.github}
=====================================================

SUMMARY
${PERSONAL_INFO.bio}

EXPERIENCE
-----------------------------------------------------
Full stack Developer (Python+React.js) | Digital Night Owl Pvt. Ltd. (Aug 2025 – Present)
- Working as a Full stack Developer on multiple large-scale, multi-panel web applications using React.js, Python, Postgres, Redux, and Tailwind CSS.
- Integrated securely reusable RESTful APIs & LLM for optimized data flow and performance.
- Designed interactive analytics dashboards and data visualizations using Chart.js for business insights.

Full Stack Web Development Internship | Geekster (Jan 2024 – March 2025)
- 500+ hours of hands-on training in React, Node.js, Python and MongoDB, Postgres while building real-world projects.
- Solved 150+ DSA/Coding questions on LeetCode.
- Led 6-member team to win Geekathon 2024 (1st Place).
- Worked on various projects like FavFood, Multi-Search, Blog-App, Contact-App and Crypto-Trading.

PROJECT EXPERIENCES
-----------------------------------------------------
PhysNXT – Physiotherapy Management Platform
- Developed User, Therapist, and Admin panels for a healthcare management platform.
- Built responsive UI components and integrated REST APIs to improve performance and user experience.
- Tech Stack: React.js, Redux Toolkit, Node.js, Express, MongoDB, AWS, Firebase, Modular CSS.

Loanzo (FinTech) - Dealer & Partner Management Platform
- Developed a dealer and partner management platform for loan eligibility checks, CIBIL and loan eligibility.
- Built responsive dashboards, authentication systems, and API integrations for seamless financial operations.
- Tech Stack: React.js, Redux Toolkit, Node.js, Express, MongoDB, AWS, Firebase, Tailwind CSS, LLM, RAG.

TECHNICAL SKILLS
-----------------------------------------------------
- Languages: Java, JavaScript (ES6+), Python
- Frontend: ReactJS, Redux, NextJs, Tailwind CSS, shadcn/ui, RESTful APIs
- Backend: FastAPI, Django, Node.js, Express, AWS, Cheerio, LLM, vector DB, RAG
- Database: MongoDB, Postgres, MySQL
- Tools & Technologies: GIT/GitHub, VS code, Postman, Claude Code, Codex

EDUCATION
-----------------------------------------------------
- B.Sc. – J P University (2020 – 2023)
- Geekster Full Stack Web Development Bootcamp (2024)
- 12th – N L S College (2013)

ACHIEVEMENTS
-----------------------------------------------------
- Top performer in Geekster - HackerRank problem-solving assessments.
- Team Leader - Geekathon 2024 (1st Place) | Led 6-member team in HTML & CSS contest, securing 1st rank.
- 150+ LeetCode DSA problems solved.
`;

  const handleCopyPlainText = () => {
    navigator.clipboard.writeText(plainTextResume);
    setCopiedPlainText(true);
    setTimeout(() => setCopiedPlainText(false), 2000);
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="resume-modal-dialog"
        className="relative w-full max-w-4xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-4 sm:my-8 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                Banti Kumar Singh — Resume
              </h3>
              <span className="text-[11px] text-slate-500 font-mono">
                Full-Stack AI Developer • Verified Document
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="print-resume-btn"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-indigo-500" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              id="copy-plain-text-resume-btn"
              onClick={handleCopyPlainText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Copy ATS Text"
            >
              {copiedPlainText ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copy Text</span>
                </>
              )}
            </button>

            <button
              id="close-resume-modal-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 space-y-6 font-sans text-sm selection:bg-indigo-100">
          {/* Header */}
          <div className="text-center pb-4 border-b-2 border-slate-900 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase">
              Banti Kumar Singh
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-700 font-medium">
              <span>{PERSONAL_INFO.email}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.phone}</span>
              <span>•</span>
              <span>India</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-800">
              Full-Stack AI Developer | React | JavaScript | AWS | Node.js | Python | LLM
            </p>
            <div className="flex items-center justify-center gap-4 text-xs text-indigo-700 font-medium">
              <a href={PERSONAL_INFO.links.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                LinkedIn: in/banti-kr-singh
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.links.github} target="_blank" rel="noreferrer" className="hover:underline">
                GitHub: BunniSingh
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Summary
            </h2>
            <p className="text-xs leading-relaxed text-slate-700">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Experience
            </h2>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-slate-900">
                    Full stack Developer (Python+React.js) <span className="font-normal text-slate-600">| Digital Night Owl Pvt. Ltd.</span>
                  </h3>
                  <span className="text-[11px] font-mono text-slate-600">Aug 2025 – Present</span>
                </div>
                <ul className="list-disc list-outside pl-4 text-xs text-slate-700 space-y-1 mt-1">
                  <li>Working as a Full stack Developer on multiple large-scale, multi-panel web applications using React.js, Python, Postgres, Redux, and Tailwind CSS.</li>
                  <li>Integrated securely reusable RESTful APIs & LLM for optimized data flow and performance.</li>
                  <li>Designed interactive analytics dashboards and data visualizations using Chart.js for business insights.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-slate-900">
                    Full Stack Web Development Internship <span className="font-normal text-slate-600">| Geekster</span>
                  </h3>
                  <span className="text-[11px] font-mono text-slate-600">Jan 2024 – March 2025</span>
                </div>
                <ul className="list-disc list-outside pl-4 text-xs text-slate-700 space-y-1 mt-1">
                  <li>500+ hours of hands-on training in React, Node.js, Python and MongoDB, Postgres while building real-world projects.</li>
                  <li>Solved 150+ DSA/Coding questions on LeetCode.</li>
                  <li>Led 6-member team to win Geekathon 2024 (1st Place).</li>
                  <li>Worked on various projects like FavFood, Multi-Search, Blog-App, Contact-App and Crypto-Trading.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project Experiences */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Project Experiences
            </h2>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-slate-900">
                    PhysNXT – Physiotherapy Management Platform
                  </h3>
                </div>
                <ul className="list-disc list-outside pl-4 text-xs text-slate-700 space-y-1 mt-1">
                  <li>Developed User, Therapist, and Admin panels for a healthcare management platform.</li>
                  <li>Built responsive UI components and integrated REST APIs to improve performance and user experience.</li>
                  <li><strong>Tech Stack:</strong> React.js, Redux Toolkit, Node.js, Express, MongoDB, AWS, Firebase, Modular CSS.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-slate-900">
                    Loanzo (FinTech) - Dealer & Partner Management Platform
                  </h3>
                </div>
                <ul className="list-disc list-outside pl-4 text-xs text-slate-700 space-y-1 mt-1">
                  <li>Developed a dealer and partner management platform for loan eligibility checks, CIBIL and loan eligibility.</li>
                  <li>Built responsive dashboards, authentication systems, and API integrations for seamless financial operations.</li>
                  <li><strong>Tech Stack:</strong> React.js, Redux Toolkit, Node.js, Express, MongoDB, AWS, Firebase, Tailwind CSS, LLM, RAG.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Technical Skills
            </h2>
            <div className="text-xs text-slate-700 space-y-1">
              <p><strong>Languages:</strong> Java, JavaScript (ES6+), Python</p>
              <p><strong>Frontend:</strong> ReactJS, Redux, NextJs, Tailwind CSS, shadcn/ui, RESTful APIs</p>
              <p><strong>Backend:</strong> FastAPI, Django, Node.js, Express, AWS, Cheerio, LLM, vector DB, RAG</p>
              <p><strong>Databases:</strong> MongoDB, Postgres, MySQL</p>
              <p><strong>Tools & Technologies:</strong> GIT/GitHub, VS code, Postman, Claude Code, Codex</p>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Education
            </h2>
            <div className="text-xs text-slate-700 space-y-1">
              <div className="flex justify-between">
                <span><strong>B.Sc.</strong> – J P University</span>
                <span className="font-mono text-[11px]">2020 – 2023</span>
              </div>
              <div className="flex justify-between">
                <span><strong>Geekster Full Stack Web Development Bootcamp</strong></span>
                <span className="font-mono text-[11px]">2024</span>
              </div>
              <div className="flex justify-between">
                <span><strong>12th</strong> – N L S College</span>
                <span className="font-mono text-[11px]">2013</span>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Achievements and Co-Curricular Activities
            </h2>
            <ul className="list-disc list-outside pl-4 text-xs text-slate-700 space-y-1">
              <li><strong>Top performer in Geekster</strong> - HackerRank problem-solving assessments.</li>
              <li><strong>Team Leader - Geekathon 2024 (1st Place)</strong> | Led a 6-member team in an HTML & CSS contest, managing project execution and task coordination to secure 1st rank.</li>
              <li>Solved 150+ DSA/Coding questions on LeetCode.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
