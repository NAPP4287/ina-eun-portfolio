import { motion } from 'framer-motion'
import { keyAchievements } from '@/data/projects'
import { useScrollAnimation, fadeInUp, fadeInLeft, staggerContainer, defaultTransition } from '@/hooks/useScrollAnimation'
import type { KeyAchievement } from '@/types'

const iconMap: Record<KeyAchievement['icon'], React.ReactNode> = {
  users: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  sparkles: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 3v4M3 5h4M19 15v4M17 17h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  zap: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  shield: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

export default function About() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="about" className="section-padding bg-white">
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
            About
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.05 }}
            className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#0f0f0f] leading-tight"
          >
            소개
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* 소개 텍스트 */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInLeft}
            transition={{ ...defaultTransition, delay: 0.1 }}
          >
            <p className="text-[#6b7280] text-lg leading-relaxed mb-6">
              버튼 하나가 눌린 뒤{' '}
              <span className="text-[#0f0f0f] font-medium">서버·세션·로그·운영 화면까지</span> 어떤 일이 벌어지는지 끝까지
              따라가는 프론트엔드 개발자입니다.
            </p>
            <p className="text-[#6b7280] text-lg leading-relaxed mb-6">
            라이브커머스·핀테크·SI 환경에서{' '}
              <span className="text-[#0f0f0f] font-medium">운영자가 쓰는 에디터·콘솔·어드민부터 사용자가 접하는 전시·플레이어·앱 화면까지</span>개발해 왔습니다.
            </p>
            <p className="text-[#6b7280] text-lg leading-relaxed">
              요구사항을 구현하는 데서 멈추지 않고, {' '}
              <span className="text-[#FA2256] font-medium">운영 리스크의 원인을 찾아 정책과 구조를 개선합니다.</span>{' '}
              반복되는 검증은{' '}<span className="text-[#FA2256] font-medium">표준과 자동화로 전환합니다.</span>
            </p>

            <div className="mt-10 space-y-3">
              {[
                { label: '위치', value: '서울시 구로구' },
                { label: '연락처', value: 'nanni4287@gmail.com' },
                { label: '경력', value: '4년+ (2022.04 ~)' },
                { label: 'GitHub', value: 'github.com/Lee-Na-eun' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="text-[#9ca3af] text-sm w-16 flex-shrink-0">{item.label}</span>
                  <span className="text-[#0f0f0f] text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 핵심 성과 카드 */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4"
          >
            {keyAchievements.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                transition={defaultTransition}
                whileHover={{ scale: 1.04, rotate: 0.5, transition: { duration: 0.2 } }}
                className="bg-white border border-[#e5e7eb] rounded-2xl p-6 hover:border-[#FA225633] hover:shadow-[0_8px_24px_rgba(250,34,86,0.08)] transition-all duration-300 group cursor-default"
              >
                <div className="text-[#FA2256] mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  {iconMap[item.icon]}
                </div>
                <div className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-[#0f0f0f] leading-none mb-1">
                  {item.number}
                </div>
                <div className="text-[#FA2256] text-sm font-semibold mb-2">{item.unit}</div>
                <p className="text-[#9ca3af] text-xs leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
