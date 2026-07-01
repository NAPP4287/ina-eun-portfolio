import { motion, useAnimate } from 'framer-motion'
import { useEffect } from 'react'
import { useTypingAnimation } from '@/hooks/useTypingAnimation'

function FloatingOrb({ className, duration, delay }: { className: string; duration: number; delay: number }) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(
      scope.current,
      { y: [0, -24, 0], x: [0, 12, 0] },
      { duration, delay, repeat: Infinity, ease: 'easeInOut' }
    )
  }, [])

  return <div ref={scope} className={className} />
}

const nameChars = '이나은'.split('')

export default function Hero() {
  const typingText = useTypingAnimation()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* 배경 glow */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingOrb
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#FA22560a] blur-[120px]"
          duration={6}
          delay={0}
        />
        <FloatingOrb
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#FF6B8108] blur-[100px]"
          duration={8}
          delay={1.5}
        />
        <FloatingOrb
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-[#FA225605] blur-[80px]"
          duration={10}
          delay={3}
        />
      </div>

      <div className="relative z-10 max-w-5xl">
        {/* 상단 레이블 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="w-6 h-px bg-[#FA2256]" />
          <span className="text-[#FA2256] text-sm font-semibold tracking-wider uppercase">
            Frontend Developer · 4년+
          </span>
        </motion.div>

        {/* 이름 — 글자별 stagger */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
            hidden: {},
          }}
          className="text-[clamp(3.5rem,10vw,7rem)] font-bold leading-[1.0] tracking-tight text-[#0f0f0f] mb-4 flex"
        >
          {nameChars.map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* 타이핑 텍스트 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
          className="text-[clamp(1.25rem,3.5vw,2.25rem)] font-medium text-[#6b7280] mb-8 h-[1.4em] flex items-center"
        >
          <span className="text-[#0f0f0f]">{typingText}</span>
          <span className="ml-1 w-[3px] h-[1.1em] bg-[#FA2256] rounded-sm animate-cursor-blink" />
          &nbsp;<span className="text-[#6b7280]">프론트엔드 개발자</span>
        </motion.div>

        {/* 소개 */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
          className="text-[#6b7280] text-lg leading-relaxed max-w-2xl mb-12"
        >
          버튼 하나가 눌린 뒤 서버·세션·로그·운영 화면까지 끝까지 따라갑니다.
          <br className="hidden md:block" />
          운영 리스크를 스스로 찾아 해결하고, 반복되는 일을 표준·자동화로 줄이는 데 강점이 있습니다.
        </motion.p>

        {/* CTA 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.85 }}
          className="flex flex-wrap gap-4"
        >
          <motion.a
            href="mailto:nanni4287@gmail.com"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FA2256] text-white font-semibold rounded-full hover:bg-[#D91A45] transition-colors duration-200 shadow-[0_4px_24px_rgba(250,34,86,0.3)]"
          >
            <span>연락하기</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
          <motion.a
            href="https://github.com/NAPP4287"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#e5e7eb] text-[#0f0f0f] font-semibold rounded-full hover:border-[#FA2256] hover:text-[#FA2256] transition-all duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </motion.a>
          <motion.a
            href="https://www.notion.so/s-ce038d21a206441e827e48dd4e3668bd"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#e5e7eb] text-[#0f0f0f] font-semibold rounded-full hover:border-[#FA2256] hover:text-[#FA2256] transition-all duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933z" />
            </svg>
            <span>개발 일지</span>
          </motion.a>
        </motion.div>
      </div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#9ca3af] text-xs tracking-wider uppercase">스크롤</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#9ca3af] to-transparent animate-scroll-bounce" />
      </motion.div>
    </section>
  )
}
