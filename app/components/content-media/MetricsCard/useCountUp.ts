import { useEffect, useRef, useState } from 'react'

interface UseCountUpOptions {
  target: number
  duration?: number
  /** Number of decimal places to preserve, e.g. 1 for "14.9" */
  decimals?: number
}

/**
 * Animates a number from 0 to `target` when the observed element
 * enters the viewport. Runs once per mount. Respects prefers-reduced-motion.
 */
export function useCountUp(
  { target, duration = 1500, decimals = 0 }: UseCountUpOptions,
  elementRef: React.RefObject<Element | null>
): number {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    // Respect system motion preference — skip animation, jump to value
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReduced) {
      setCount(target)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || hasAnimated.current) return
        hasAnimated.current = true
        observer.disconnect()

        const startTime = performance.now()
        const multiplier = Math.pow(10, decimals)

        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1)
          // Ease out cubic — fast start, smooth landing
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(eased * target * multiplier) / multiplier)
          if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration, decimals, elementRef])

  return count
}
