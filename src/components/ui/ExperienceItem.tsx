import { motion } from 'framer-motion'
import type { Experience } from '@/types'

interface ExperienceItemProps {
  experience: Experience
  delay?: number
}

export default function ExperienceItem({ experience, delay = 0 }: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* 타임라인 점 */}
      <div
        className="absolute left-0 top-1 w-3 h-3 rounded-full border-2 z-10"
        style={{
          backgroundColor: experience.current ? experience.color : '#fafafa',
          borderColor: experience.color,
          boxShadow: experience.current ? `0 0 12px ${experience.color}60` : 'none',
        }}
      />

      {/* 컨텐츠 */}
      <motion.div
        whileHover={{ x: 4, transition: { duration: 0.2 } }}
        className="bg-white border border-[#e5e7eb] rounded-2xl p-6 hover:border-[#FA225622] hover:shadow-[0_4px_16px_rgba(250,34,86,0.06)] transition-all duration-300"
      >
        {/* 상단 */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-[#0f0f0f] font-bold text-xl">{experience.company}</h3>
              {experience.current && (
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ color: experience.color, backgroundColor: `${experience.color}18` }}
                >
                  현재
                </span>
              )}
            </div>
            <p className="text-[#6b7280] text-sm">{experience.role}</p>
          </div>
          <span className="text-[#9ca3af] text-sm whitespace-nowrap font-mono">{experience.period}</span>
        </div>

        {/* 설명 */}
        <p className="text-[#6b7280] text-sm mb-4 pb-4 border-b border-[#f3f4f6]">{experience.description}</p>

        {/* 성과 목록 */}
        <ul className="space-y-2">
          {experience.achievements.map((ach, i) => (
            <li key={i} className="flex gap-2 text-sm text-[#374151] leading-relaxed">
              <span className="flex-shrink-0 mt-1" style={{ color: experience.color }}>
                ·
              </span>
              <span>{ach}</span>
            </li>
          ))}
        </ul>

        {/* 기술 스택 */}
        <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-[#f3f4f6]">
          {experience.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded bg-[#f3f4f6] text-[#6b7280] border border-[#e5e7eb]"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
