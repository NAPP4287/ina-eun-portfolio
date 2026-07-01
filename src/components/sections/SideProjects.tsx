import { motion } from 'framer-motion'
import { sideProjects } from '@/data/skills'
import { useScrollAnimation, fadeInUp, staggerContainer, defaultTransition } from '@/hooks/useScrollAnimation'

export default function SideProjects() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="side-projects" className="section-padding bg-white">
      <div className="container-narrow">
        {/* 섹션 제목 */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mb-12"
        >
          <motion.p
            variants={fadeInUp}
            transition={defaultTransition}
            className="text-[#FA2256] text-sm font-semibold uppercase tracking-wider mb-3"
          >
            Side Projects
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.05 }}
            className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#0f0f0f] leading-tight"
          >
            사이드 프로젝트
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {sideProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.1 + 0.2 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-[#fafafa] border border-[#e5e7eb] rounded-2xl p-6 hover:border-[#FA225633] hover:shadow-[0_8px_24px_rgba(250,34,86,0.08)] transition-all duration-300"
            >
              <div className="text-[#e5e7eb] text-5xl font-bold mb-4 group-hover:text-[#FA22561a] transition-colors font-mono">
                0{i + 1}
              </div>

              <h3 className="text-[#0f0f0f] font-semibold text-lg mb-3">{project.title}</h3>
              <p className="text-[#6b7280] text-sm leading-relaxed mb-5">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-0.5 rounded bg-[#f3f4f6] text-[#6b7280] border border-[#e5e7eb]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#9ca3af] text-sm hover:text-[#FA2256] transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
