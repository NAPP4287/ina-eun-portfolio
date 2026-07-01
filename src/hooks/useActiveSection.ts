import { useEffect, useState } from 'react'

const SECTION_IDS = ['hero', 'about', 'skills', 'experience', 'projects', 'side-projects', 'contact']

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>('hero')

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      rootMargin: '-80px 0px -55% 0px',
      threshold: 0,
    }

    const observers: IntersectionObserver[] = []

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActiveSection(id)
      }, observerOptions)

      observer.observe(element)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  return activeSection
}
