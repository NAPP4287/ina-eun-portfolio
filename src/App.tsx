import { useScroll, useTransform, motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import SideProjects from '@/components/sections/SideProjects'
import Contact from '@/components/sections/Contact'
import ScrollToTop from '@/components/ui/ScrollToTop'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="bg-[#fafafa] text-[#0f0f0f] min-h-screen">
      {/* 스크롤 진행 바 */}
      <motion.div
        style={{ scaleX, transformOrigin: 'left' }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#FA2256] z-[100]"
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <SideProjects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
