import { useEffect, useState } from 'react'

const PHRASES = [
  '복잡한 비즈니스 규칙을 구조화하는',
  '접근 제어와 운영 정책을 개선하는',
  '컨벤션과 자동화를 사랑하는',
  '라이브커머스 플랫폼을 만드는',
]

export const useTypingAnimation = () => {
  const [displayText, setDisplayText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const current = PHRASES[phraseIndex]
    const speed = isDeleting ? 40 : 80

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = charIndex + 1
        setDisplayText(current.slice(0, next))
        setCharIndex(next)
        if (next === current.length) {
          setIsPaused(true)
          setTimeout(() => {
            setIsPaused(false)
            setIsDeleting(true)
          }, 1800)
        }
      } else {
        const next = charIndex - 1
        setDisplayText(current.slice(0, next))
        setCharIndex(next)
        if (next === 0) {
          setIsDeleting(false)
          setPhraseIndex((i) => (i + 1) % PHRASES.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, isPaused, phraseIndex])

  return displayText
}
