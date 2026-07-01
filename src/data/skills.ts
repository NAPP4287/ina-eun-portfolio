import type { SideProject, SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    id: 'core',
    label: 'Core',
    emoji: '⚡',
    skills: [
      { name: 'React', level: 'expert' },
      { name: 'Next.js', level: 'expert' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'React Native', level: 'proficient' },
      { name: 'TanStack Query', level: 'expert' },
      { name: 'JavaScript', level: 'expert' },
    ],
  },
  {
    id: 'state-styling',
    label: 'State · Styling',
    emoji: '🎨',
    skills: [
      { name: 'Zustand', level: 'expert' },
      { name: 'Recoil', level: 'proficient' },
      { name: 'Redux', level: 'proficient' },
      { name: 'Tailwind CSS', level: 'expert' },
      { name: 'Styled-components', level: 'proficient' },
      { name: 'SCSS', level: 'proficient' },
    ],
  },
  {
    id: 'tooling',
    label: 'Tooling · Quality',
    emoji: '🔧',
    skills: [
      { name: 'ESLint Custom Rules', level: 'expert' },
      { name: 'Git Hooks', level: 'expert' },
      { name: 'Claude Code', level: 'expert' },
      { name: 'Datadog', level: 'familiar' },
      { name: 'Vite', level: 'proficient' },
      { name: 'Webpack', level: 'familiar' },
    ],
  },
  {
    id: 'infra',
    label: 'Familiar · Infra',
    emoji: '☁️',
    skills: [
      { name: 'Vue.js', level: 'familiar' },
      { name: 'Node.js', level: 'familiar' },
      { name: 'Express', level: 'familiar' },
      { name: 'AWS', level: 'familiar' },
      { name: 'Vercel', level: 'familiar' },
      { name: 'GCP', level: 'familiar' },
      { name: 'Naver Cloud', level: 'familiar' },
    ],
  },
]

export const sideProjects: SideProject[] = [
  {
    id: 'happy-new-year',
    title: 'HappyNewYear',
    description: '신년 심리테스트·계획 서비스. MBTI 스타일 질문으로 나의 2025 목표 유형을 진단하고 계획을 공유하는 서비스.',
    techStack: ['React', 'TypeScript', 'Styled-components', 'Redux Toolkit'],
    github: 'https://github.com/NAPP4287/HappyNewYear',
    isPublic: true,
  },
  {
    id: 'huigyeomjae',
    title: '휘겸재 예약 서비스',
    description: '서울특별시 주관 공공 프로젝트. 한옥 공간 온라인 예약 시스템 개발.',
    techStack: ['React', 'Redux-Persist', 'JavaScript'],
    isPublic: true,
  },
  {
    id: 'todays-chef',
    title: "Today's Chef",
    description: '요리사-고객 매칭 서비스. 요리 예약·결제·후기 기능을 포함한 풀스택 2인 프로젝트.',
    techStack: ['React', 'Node.js', 'Express', 'MySQL', 'AWS'],
    isPublic: true,
  },
]
