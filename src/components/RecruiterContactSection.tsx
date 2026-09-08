import { useState, FormEvent } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  Building, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { RecruiterFormState } from '../types';

export default function RecruiterContactSection() {
  const [formData, setFormData] = useState<RecruiterFormState>({
    recruiterName: '',
    workEmail: '',
    company: '',
    roleTitle: 'Full Stack AI Developer',
    roleType: 'Full-time Full Stack',
    urgency: 'Immediate',
    workArrangement: 'Remote',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [copiedDirectEmail, setCopiedDirectEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Quick preset templates for recruiters
  const presets = [
    {
      label: '🚀 Full-Stack Role',
      roleType: 'Full-time Full Stack' as const,
      subject: 'Interview Invitation: Full-Stack Developer',
      msg: "Hi Banti, I reviewed your experience with React, Python, and multi-panel applications. We have an open Full-Stack role and would love to schedule a technical screen with you.",
    },
    {
      label: '🤖 AI / LLM Project',
      roleType: 'AI / LLM Engineer' as const,
      subject: 'AI / LLM Developer Opportunity',
      msg: "Hi Banti, we were impressed by your work on LLM workflows and RAG integration in FinTech. We are looking for an engineer to help us implement generative AI capabilities.",
    },
    {
      label: '📅 Schedule Call',
      roleType: 'Full-time Full Stack' as const,
      subject: 'Initial Conversation with Hiring Team',
      msg: "Hi Banti, we'd like to invite you for a 20-minute introductory conversation to discuss your background and upcoming software initiatives at our company.",
    },
  ];

  const handleApplyPreset = (preset: typeof presets[0]) => {
    setFormData((prev) => ({
      ...prev,
      roleType: preset.roleType,
      roleTitle: preset.roleType,
      message: preset.msg,
    }));
    setValidationError('');
  };

  const generateEmailDraft = () => {
    return `To: ${PERSONAL_INFO.email}
Subject: [Recruitment] Opportunity for ${formData.roleTitle || formData.roleType} at ${formData.company || 'Our Company'}

Hi Banti,

My name is ${formData.recruiterName || '[Your Name]'} from ${formData.company || '[Your Company]'}.

Position: ${formData.roleTitle || formData.roleType}
Role Type: ${formData.roleType}
Arrangement: ${formData.workArrangement}
Timeline: ${formData.urgency}

${formData.message || 'We would like to connect regarding your engineering experience.'}

Best regards,
${formData.recruiterName || '[Your Name]'}
${formData.workEmail ? `Email: ${formData.workEmail}` : ''}`;
  };

  const handleCopyDraft = () => {
    navigator.clipboard.writeText(generateEmailDraft());
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  const handleMailto = () => {
    const subject = encodeURIComponent(
      `[Opportunity] ${formData.roleTitle || formData.roleType} at ${formData.company || 'Company'}`
    );
    const body = encodeURIComponent(
      `Hi Banti,\n\nI am ${formData.recruiterName || 'a recruiter'} from ${formData.company || 'our company'}.\n\nRole: ${formData.roleTitle || formData.roleType}\nWork Mode: ${formData.workArrangement}\nUrgency: ${formData.urgency}\n\n${formData.message || 'We would love to discuss potential opportunities with you.'}\n\nWork Email: ${formData.workEmail}\n`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.recruiterName.trim()) {
      setValidationError('Please enter your name or recruiter title.');
      return;
    }
    if (!formData.workEmail.trim() || !formData.workEmail.includes('@')) {
      setValidationError('Please enter a valid work email address.');
      return;
    }
    if (!formData.message.trim()) {
      setValidationError('Please include a brief message or job description.');
      return;
    }

    setValidationError('');
    setSubmitted(true);

    // Save inquiry to localStorage for persistence
    try {
      const existing = JSON.parse(localStorage.getItem('banti_portfolio_inquiries') || '[]');
      existing.unshift({
        ...formData,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('banti_portfolio_inquiries', JSON.stringify(existing));
    } catch {
      // ignore storage errors
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <Mail className="w-4 h-4" />
            <span>Recruiter & Hiring Portal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Connect for Opportunities
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Are you hiring a Full-Stack or AI Developer? Send a direct proposal, request an interview screen, or launch an email inquiry below.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left: Contact Info & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Cards */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-5">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                Direct Contact Details
              </h3>

              {/* Email */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="block text-xs text-slate-500 dark:text-slate-400">Email Address</span>
                    <a
                      href={PERSONAL_INFO.links.emailMailto}
                      className="font-semibold text-sm text-slate-900 dark:text-white hover:text-indigo-600 truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  id="copy-contact-email-btn"
                  onClick={() => {
                    navigator.clipboard.writeText(PERSONAL_INFO.email);
                    setCopiedDirectEmail(true);
                    setTimeout(() => setCopiedDirectEmail(false), 2000);
                  }}
                  className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors shrink-0"
                  title="Copy email"
                >
                  {copiedDirectEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">Phone Number</span>
                    <a
                      href={PERSONAL_INFO.links.tel}
                      className="font-semibold text-sm text-slate-900 dark:text-white hover:text-indigo-600"
                    >
                      {PERSONAL_INFO.displayPhone}
                    </a>
                  </div>
                </div>

                <button
                  id="copy-contact-phone-btn"
                  onClick={() => {
                    navigator.clipboard.writeText(PERSONAL_INFO.phone);
                    setCopiedPhone(true);
                    setTimeout(() => setCopiedPhone(false), 2000);
                  }}
                  className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors shrink-0"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location & Timezone */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 dark:text-slate-400">Location & Work Mode</span>
                  <span className="font-semibold text-sm text-slate-900 dark:text-white">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Professional Links */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
                <a
                  id="contact-linkedin-link"
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors text-sm font-semibold text-slate-800 dark:text-slate-200"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-[#0077b5]" />
                    <span>linkedin.com/in/banti-kr-singh</span>
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>

                <a
                  id="contact-github-link"
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors text-sm font-semibold text-slate-800 dark:text-slate-200"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                    <span>github.com/BunniSingh</span>
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Recruiter Quick Guarantee Box */}
            <div className="p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>Response Time Guarantee</span>
              </span>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Inquiries submitted via this portal trigger immediate notification. You will receive a response within <strong>24 business hours</strong>.
              </p>
            </div>
          </div>

          {/* Right: Recruiter Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl">
              {submitted ? (
                <div id="contact-success-screen" className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Inquiry Received!
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-md mx-auto">
                    Thank you, <strong>{formData.recruiterName}</strong> from <strong>{formData.company || 'your organization'}</strong>. Your role details for <strong>{formData.roleTitle || formData.roleType}</strong> have been recorded.
                  </p>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={handleMailto}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Also Open in My Email Client</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form id="recruiter-contact-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center justify-between">
                      <span>Recruiter Information</span>
                      <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
                        Interactive Form
                      </span>
                    </h3>
                    {/* Presets */}
                    <div className="space-y-1.5">
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        Quick Preset Templates:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {presets.map((p, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleApplyPreset(p)}
                            className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
                          >
                            {p.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {validationError && (
                    <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs sm:text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{validationError}</span>
                    </div>
                  )}

                  {/* Name & Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="recruiter-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Your Name / Hiring Lead *
                      </label>
                      <input
                        id="recruiter-name"
                        type="text"
                        required
                        value={formData.recruiterName}
                        onChange={(e) => setFormData({ ...formData, recruiterName: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="work-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Work Email Address *
                      </label>
                      <input
                        id="work-email"
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  {/* Company & Role Title */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="company-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Company / Organization
                      </label>
                      <input
                        id="company-name"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Stripe, Acme Corp"
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="role-type" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Role Focus
                      </label>
                      <select
                        id="role-type"
                        value={formData.roleType}
                        onChange={(e) => setFormData({ ...formData, roleType: e.target.value as any })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white"
                      >
                        <option value="Full-time Full Stack">Full-time Full Stack Developer</option>
                        <option value="AI / LLM Engineer">AI / LLM Workflow Engineer</option>
                        <option value="Frontend Specialist">Frontend Engineer (React / Next.js)</option>
                        <option value="Backend Developer">Backend Developer (Python / Node.js)</option>
                        <option value="Contract / Project">Contract / Freelance Project</option>
                        <option value="Other">Other Engagement</option>
                      </select>
                    </div>
                  </div>

                  {/* Work Arrangement & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="work-arrangement" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Work Arrangement
                      </label>
                      <select
                        id="work-arrangement"
                        value={formData.workArrangement}
                        onChange={(e) => setFormData({ ...formData, workArrangement: e.target.value as any })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white"
                      >
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="On-site">On-site</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="hiring-urgency" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Hiring Timeline
                      </label>
                      <select
                        id="hiring-urgency"
                        value={formData.urgency}
                        onChange={(e) => setFormData({ ...formData, urgency: e.target.value as any })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white"
                      >
                        <option value="Immediate">Immediate Hire (Next 1-2 weeks)</option>
                        <option value="Within 1-2 Weeks">Within 2 to 4 weeks</option>
                        <option value="Within 1 Month">Within 1-2 months</option>
                        <option value="Pipeline / Future">Future talent pipeline</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / JD */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="recruiter-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Message / Role Scope *
                      </label>
                      <span className="text-[11px] text-slate-400">
                        {formData.message.length} characters
                      </span>
                    </div>
                    <textarea
                      id="recruiter-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about the position, tech requirements, or suggested interview slots..."
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white resize-y"
                    />
                  </div>

                  {/* Action Buttons: Submit, Email Client, Copy Draft */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                    <button
                      id="submit-recruiter-form-btn"
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/20 active:scale-98 transition-all text-sm cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        id="open-mailto-btn"
                        type="button"
                        onClick={handleMailto}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                        title="Open default email app"
                      >
                        <Mail className="w-4 h-4 text-indigo-500" />
                        <span>Email App</span>
                      </button>

                      <button
                        id="copy-draft-btn"
                        type="button"
                        onClick={handleCopyDraft}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                        title="Copy prepared draft text to clipboard"
                      >
                        {copiedDraft ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-500" />
                            <span className="text-emerald-500">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copy Draft</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
