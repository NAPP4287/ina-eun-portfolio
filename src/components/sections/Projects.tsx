import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import { useScrollAnimation, fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation'
import type { ProjectCategory } from '@/types'

type FilterType = 'all' | ProjectCategory

const filters: { value: FilterType; label: string }[] = [
  { value: 'all', label: '전체' },
  { value: 'product', label: '제품 · 기능 개발' },
  { value: 'security', label: '보안 · 운영 안정화' },
  { value: 'devex', label: '개발 생산성 · 표준화' },
]

export default function Projects() {
  const { ref, isInView } = useScrollAnimation()
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  const [showAll, setShowAll] = useState(false)

  const filtered = activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)
  const collapsible = activeFilter === 'all' && !showAll
  const displayed = collapsible ? filtered.filter((p) => p.isHighlight) : filtered

  return (
    <section id="projects" className="section-padding bg-[#fafafa]">
      <div className="container-wide">
        {/* 섹션 제목 */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mb-12"
        >
          <motion.p variants={fadeInUp} custom={0} className="text-[#FA2256] text-sm font-semibold uppercase tracking-wider mb-3">
            Projects
          </motion.p>
          <motion.h2 variants={fadeInUp} custom={0.05} className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#0f0f0f] leading-tight">
            주요 프로젝트
          </motion.h2>
          <motion.p variants={fadeInUp} custom={0.1} className="text-[#6b7280] mt-3">
            카드를 탭하거나 마우스를 올리면 주요 기여 내용을 확인할 수 있습니다.
          </motion.p>
        </motion.div>

        {/* 필터 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => {
                setActiveFilter(f.value)
                setShowAll(false)
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === f.value
                  ? 'bg-[#FA2256] text-white shadow-[0_4px_12px_rgba(250,34,86,0.3)]'
                  : 'bg-white text-[#6b7280] border border-[#e5e7eb] hover:border-[#FA225633] hover:text-[#FA2256]'
              }`}
            >
              {f.label}
              <span className={`ml-1.5 text-xs ${activeFilter === f.value ? 'text-white/60' : 'text-[#9ca3af]'}`}>
                {f.value === 'all' ? projects.length : projects.filter((p) => p.category === f.value).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {displayed.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>

        {/* 전체 보기 / 접기 */}
        {activeFilter === 'all' && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="px-6 py-2.5 rounded-full text-sm font-medium bg-white text-[#6b7280] border border-[#e5e7eb] hover:border-[#FA225633] hover:text-[#FA2256] transition-all duration-200"
            >
              {showAll ? '대표 프로젝트만 보기' : `전체 ${projects.length}개 프로젝트 보기`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
