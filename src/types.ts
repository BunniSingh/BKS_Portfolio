export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
  highlightBadge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'All' | 'AI & LLM' | 'Full-Stack' | 'FinTech' | 'Frontend';
  stack: string[];
  keyHighlights: string[];
  architecture?: string[];
  githubUrl: string;
  liveUrl?: string;
  role: string;
  status: string;
  impactMetrics?: string[];
}

export interface SkillGroup {
  category: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Working';
    tags?: string[];
  }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  badge: string;
  iconType: 'trophy' | 'award' | 'code';
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  gradeOrDetail?: string;
  notes?: string;
}

export interface RecruiterFormState {
  recruiterName: string;
  workEmail: string;
  company: string;
  roleTitle: string;
  roleType: 'Full-time Full Stack' | 'AI / LLM Engineer' | 'Frontend Specialist' | 'Backend Developer' | 'Contract / Project' | 'Other';
  urgency: 'Immediate' | 'Within 1-2 Weeks' | 'Within 1 Month' | 'Pipeline / Future';
  workArrangement: 'Remote' | 'Hybrid' | 'On-site';
  message: string;
}
