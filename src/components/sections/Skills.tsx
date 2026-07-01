import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { skillCategories } from '@/data/skills'
import SkillTag from '@/components/ui/SkillTag'
import { useScrollAnimation, fadeInUp, staggerContainer, defaultTransition } from '@/hooks/useScrollAnimation'

export default function Skills() {
  const { ref, isInView } = useScrollAnimation()
  const [activeTab, setActiveTab] = useState('core')

  const activeCategory = skillCategories.find((c) => c.id === activeTab) ?? skillCategories[0]

  return (
    <section id="skills" className="section-padding bg-[#fafafa]">
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
            Skills
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.05 }}
            className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#0f0f0f] leading-tight"
          >
            기술 스택
          </motion.h2>
        </motion.div>

        {/* 탭 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-[#FA2256] text-white shadow-[0_4px_12px_rgba(250,34,86,0.3)]'
                  : 'bg-white text-[#6b7280] border border-[#e5e7eb] hover:border-[#FA225633] hover:text-[#FA2256]'
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </motion.div>

        {/* 스킬 태그 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {activeCategory.skills.map((skill, i) => (
              <SkillTag key={skill.name} skill={skill} delay={i * 0.05} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* 범례 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-[#e5e7eb]"
        >
          {[
            { level: 'expert', label: '주력', color: 'border-[#FA2256] text-[#FA2256]' },
            { level: 'proficient', label: '능숙', color: 'border-[#0f0f0f40] text-[#0f0f0f]' },
            { level: 'familiar', label: '경험', color: 'border-[#9ca3af] text-[#6b7280]' },
          ].map((item) => (
            <div key={item.level} className="flex items-center gap-2">
              <span className={`px-2.5 py-1 rounded-full border text-xs ${item.color}`}>{item.level}</span>
              <span className="text-[#9ca3af] text-xs">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
