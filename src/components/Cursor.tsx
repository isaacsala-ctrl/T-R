import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)
  const ringX = useSpring(dotX, { stiffness: 120, damping: 18 })
  const ringY = useSpring(dotY, { stiffness: 120, damping: 18 })
  const isHovering = useRef(false)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
    }
    const over = (e: MouseEvent) => {
      const t = e.target as Element
      isHovering.current = !!(t.closest('a, button, [data-cursor-hover]'))
      if (ringRef.current) {
        ringRef.current.style.transform = isHovering.current
          ? 'translate(-50%,-50%) scale(2.2)'
          : 'translate(-50%,-50%) scale(1)'
        ringRef.current.style.borderColor = isHovering.current
          ? 'var(--copper)'
          : 'var(--blue)'
        ringRef.current.style.opacity = isHovering.current ? '0.9' : '0.6'
      }
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [dotX, dotY])

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          left: dotX,
          top: dotY,
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: 'var(--blue)',
          transform: 'translate(-50%,-50%)',
          pointerEvents: 'none',
          zIndex: 99999,
          mixBlendMode: 'screen',
        }}
      />
      <motion.div
        ref={ringRef}
        style={{
          position: 'fixed',
          left: ringX,
          top: ringY,
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1.5px solid var(--blue)',
          opacity: 0.6,
          transform: 'translate(-50%,-50%) scale(1)',
          pointerEvents: 'none',
          zIndex: 99998,
          transition: 'transform 0.25s ease, border-color 0.25s ease, opacity 0.25s ease',
        }}
      />
    </>
  )
}
