import { motion } from 'framer-motion'
import type { Skill } from '@/types'

interface SkillTagProps {
  skill: Skill
  delay?: number
}

const levelStyles = {
  expert: 'border-[#FA2256] bg-[#FA22561a] text-[#FA2256]',
  proficient: 'border-[#0f0f0f40] bg-transparent text-[#0f0f0f]',
  familiar: 'border-[#9ca3af] bg-transparent text-[#6b7280]',
}

export default function SkillTag({ skill, delay = 0 }: SkillTagProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut', delay }}
      whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
      className={`inline-flex items-center px-3 py-1.5 rounded-full border text-sm font-medium transition-all duration-200 ${levelStyles[skill.level]}`}
    >
      {skill.name}
    </motion.span>
  )
}
