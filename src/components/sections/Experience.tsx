import { motion } from 'framer-motion'
import { experiences } from '@/data/experience'
import ExperienceItem from '@/components/ui/ExperienceItem'
import { useScrollAnimation, fadeInUp, staggerContainer, defaultTransition } from '@/hooks/useScrollAnimation'

export default function Experience() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-narrow">
        {/* 섹션 제목 */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.p
            variants={fadeInUp}
            transition={defaultTransition}
            className="text-[#FA2256] text-sm font-semibold uppercase tracking-wider mb-3"
          >
            Experience
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.05 }}
            className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#0f0f0f] leading-tight"
          >
            경력
          </motion.h2>
        </motion.div>

        {/* 타임라인 */}
        <div className="relative">
          {/* 수직선 */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
            style={{ originY: 0 }}
            className="absolute left-[5px] top-2 bottom-2 w-px bg-[#e5e7eb]"
          />

          <div>
            {experiences.map((exp, i) => (
              <ExperienceItem
                key={exp.id}
                experience={exp}
                delay={isInView ? i * 0.15 + 0.3 : 0}
              />
            ))}
          </div>
        </div>

        {/* 학력 및 교육 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-12 border-t border-[#e5e7eb]"
        >
          <h3 className="text-[#0f0f0f] text-xl font-bold mb-6">학력 및 교육</h3>
          <div className="space-y-4">
            {[
              { period: '2021.04 ~ 2021.10', name: '코드스테이츠', detail: '풀스택 개발 과정' },
              { period: '2016.03 ~ 2019.02', name: '인천재능대학교', detail: '호텔관광과' },
            ].map((edu) => (
              <div key={edu.name} className="flex flex-wrap items-center gap-4 py-4 border-b border-[#f3f4f6] last:border-0">
                <span className="text-[#9ca3af] text-sm font-mono w-44">{edu.period}</span>
                <span className="text-[#0f0f0f] font-medium">{edu.name}</span>
                <span className="text-[#6b7280] text-sm">— {edu.detail}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
