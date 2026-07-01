import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp, staggerContainer, defaultTransition } from '@/hooks/useScrollAnimation'

export default function Contact() {
  const { ref, isInView } = useScrollAnimation()

  const links = [
    {
      label: '이메일',
      value: 'nanni4287@gmail.com',
      href: 'mailto:nanni4287@gmail.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      value: 'github.com/NAPP4287',
      href: 'https://github.com/NAPP4287',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      label: '개발 일지',
      value: '나은\'s 개발 일지 (Notion)',
      href: 'https://www.notion.so/s-ce038d21a206441e827e48dd4e3668bd',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="section-padding bg-[#fafafa]">
      <div className="container-narrow">
        {/* 섹션 제목 */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.p
            variants={fadeInUp}
            transition={defaultTransition}
            className="text-[#FA2256] text-sm font-semibold uppercase tracking-wider mb-3"
          >
            Contact
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.05 }}
            className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#0f0f0f] leading-tight mb-4"
          >
            함께 일해요
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.1 }}
            className="text-[#6b7280] text-lg max-w-lg mx-auto"
          >
            새로운 기회나 협업 제안이 있다면 편하게 연락 주세요. 언제든 환영합니다.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 연락처 카드 */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.2 }}
            className="space-y-4"
          >
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="flex items-center gap-4 p-5 bg-white border border-[#e5e7eb] rounded-2xl hover:border-[#FA225633] hover:shadow-[0_4px_16px_rgba(250,34,86,0.08)] transition-all duration-300 group"
              >
                <div className="text-[#9ca3af] group-hover:text-[#FA2256] transition-colors">{link.icon}</div>
                <div>
                  <div className="text-[#9ca3af] text-xs mb-0.5">{link.label}</div>
                  <div className="text-[#0f0f0f] text-sm font-medium">{link.value}</div>
                </div>
                <div className="ml-auto text-[#d1d5db] group-hover:text-[#FA2256] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* 이메일 폼 */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.3 }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.target as HTMLFormElement
                const name = (form.elements.namedItem('name') as HTMLInputElement).value
                const email = (form.elements.namedItem('email') as HTMLInputElement).value
                const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value
                window.location.href = `mailto:nanni4287@gmail.com?subject=[포트폴리오 문의] ${name}&body=${encodeURIComponent(`이름: ${name}\n이메일: ${email}\n\n${message}`)}`
              }}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="이름"
                required
                className="w-full bg-white border border-[#e5e7eb] rounded-xl px-4 py-3 text-[#0f0f0f] placeholder-[#9ca3af] text-sm focus:outline-none focus:border-[#FA2256] transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="이메일"
                required
                className="w-full bg-white border border-[#e5e7eb] rounded-xl px-4 py-3 text-[#0f0f0f] placeholder-[#9ca3af] text-sm focus:outline-none focus:border-[#FA2256] transition-colors"
              />
              <textarea
                name="message"
                placeholder="메시지"
                required
                rows={5}
                className="w-full bg-white border border-[#e5e7eb] rounded-xl px-4 py-3 text-[#0f0f0f] placeholder-[#9ca3af] text-sm focus:outline-none focus:border-[#FA2256] transition-colors resize-none"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#FA2256] text-white font-semibold py-3 rounded-xl hover:bg-[#D91A45] transition-colors duration-200 flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(250,34,86,0.3)]"
              >
                <span>메시지 보내기</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
