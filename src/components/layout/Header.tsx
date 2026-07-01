import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useActiveSection } from '@/hooks/useActiveSection'
import type { NavItem } from '@/types'

const navItems: NavItem[] = [
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Projects', href: '#projects', sectionId: 'projects' },
  { label: 'Experience', href: '#experience', sectionId: 'experience' },
  { label: 'Skills', href: '#skills', sectionId: 'skills' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
]

export default function Header() {
  const activeSection = useActiveSection()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md border-b border-[#e5e7eb]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-16">
            {/* 로고 */}
            <button
              onClick={() => handleNav('#hero')}
              className="text-[#0f0f0f] font-bold text-lg hover:text-[#FA2256] transition-colors"
            >
              이나은<span className="text-[#FA2256]">.</span>
            </button>

            {/* 데스크탑 nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => handleNav(item.href)}
                  className={`text-sm transition-colors duration-200 ${
                    activeSection === item.sectionId
                      ? 'text-[#FA2256] font-medium'
                      : 'text-[#6b7280] hover:text-[#0f0f0f]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="mailto:nanni4287@gmail.com"
                className="ml-4 px-4 py-1.5 border border-[#FA2256] text-[#FA2256] text-sm font-medium rounded-full hover:bg-[#FA2256] hover:text-white transition-all duration-200"
              >
                연락하기
              </a>
            </nav>

            {/* 모바일 햄버거 */}
            <button
              className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-6 h-px bg-[#0f0f0f] block origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-px bg-[#0f0f0f] block"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-6 h-px bg-[#0f0f0f] block origin-center"
              />
            </button>
          </div>
        </div>
      </header>

      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.sectionId}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleNav(item.href)}
                className={`text-3xl font-bold transition-colors ${
                  activeSection === item.sectionId ? 'text-[#FA2256]' : 'text-[#0f0f0f] hover:text-[#FA2256]'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              href="mailto:nanni4287@gmail.com"
              className="mt-4 px-8 py-3 bg-[#FA2256] text-white text-lg font-semibold rounded-full"
              onClick={() => setMenuOpen(false)}
            >
              연락하기
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
