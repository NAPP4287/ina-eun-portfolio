export type ProjectCategory = 'product' | 'security' | 'devex'

export interface Project {
  id: string
  title: string
  description: string
  detail: string
  techStack: string[]
  category: ProjectCategory
  metrics?: string
  highlights?: string[]
  company: string
  period: string
  isHighlight?: boolean
}

export interface KeyAchievement {
  id: string
  number: string
  unit: string
  description: string
  icon: 'users' | 'sparkles' | 'zap' | 'shield'
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  current: boolean
  description: string
  achievements: string[]
  techStack: string[]
  color: string
}

export type SkillLevel = 'expert' | 'proficient' | 'familiar'

export interface Skill {
  name: string
  level: SkillLevel
}

export interface SkillCategory {
  id: string
  label: string
  emoji: string
  skills: Skill[]
}

export interface SideProject {
  id: string
  title: string
  description: string
  techStack: string[]
  github?: string
  isPublic: boolean
}

export interface NavItem {
  label: string
  href: string
  sectionId: string
}
