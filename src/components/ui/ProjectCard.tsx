import { motion } from 'framer-motion'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

const categoryColors: Record<string, string> = {
  모비두: '#FA2256',
  NEXACODE: '#7c6dfa',
  PAYHADA: '#f59e0b',
  'ACE 엔터테인먼트': '#ef4444',
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const accentColor = categoryColors[project.company] ?? '#FA2256'

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        opacity: { duration: 0.25, ease: 'easeOut' },
        layout: { type: 'spring', stiffness: 320, damping: 32 },
      }}
      whileHover={{ y: -8, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
      className="group relative flex flex-col min-h-[300px] bg-white border border-[#e5e7eb] rounded-2xl p-6 cursor-default overflow-hidden transition-[border-color,box-shadow] duration-300 hover:border-[#FA225633] hover:shadow-[0_20px_40px_rgba(250,34,86,0.1)]"
    >
      {/* 상단 메타 */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ color: accentColor, backgroundColor: `${accentColor}18` }}
        >
          {project.company}
        </span>
        <span className="text-xs text-[#9ca3af]">{project.period}</span>
      </div>

      {/* 제목 */}
      <h3 className="text-[#0f0f0f] font-semibold text-lg mb-2 leading-snug group-hover:text-[#FA2256] transition-colors">
        {project.title}
      </h3>

      {/* 설명 */}
      <p className="text-[#6b7280] text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
        {project.description}
      </p>

      {/* 지표 */}
      {project.metrics && (
        <div
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg mb-4 w-fit"
          style={{ color: accentColor, backgroundColor: `${accentColor}18` }}
        >
          <span>✦</span>
          <span>{project.metrics}</span>
        </div>
      )}

      {/* 기술 태그 */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-0.5 rounded bg-[#f3f4f6] text-[#6b7280] border border-[#e5e7eb]"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="text-xs px-2 py-0.5 rounded bg-[#f3f4f6] text-[#9ca3af] border border-[#e5e7eb]">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>

      {/* 호버 시 highlights 오버레이 */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="absolute inset-0 z-10 bg-white p-6 flex flex-col justify-center overflow-y-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
          <p className="text-[#FA2256] text-xs font-semibold uppercase tracking-wider mb-3">주요 기여</p>
          <ul className="space-y-2.5">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-2 text-sm text-[#374151] leading-relaxed">
                <span className="text-[#FA2256] mt-0.5 flex-shrink-0">→</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  )
}
