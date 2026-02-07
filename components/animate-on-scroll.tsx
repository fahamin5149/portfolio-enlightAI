"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
  animation?: "fadeInUp" | "fadeIn" | "slideInLeft" | "slideInRight" | "scaleIn"
  delay?: number
  threshold?: number
  once?: boolean
}

export function AnimateOnScroll({
  children,
  className,
  animation = "fadeInUp",
  delay = 0,
  threshold = 0.1,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(entry.target)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, once])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        !isVisible && "opacity-0",
        !isVisible && animation === "fadeInUp" && "translate-y-8",
        !isVisible && animation === "slideInLeft" && "-translate-x-8",
        !isVisible && animation === "slideInRight" && "translate-x-8",
        !isVisible && animation === "scaleIn" && "scale-95",
        isVisible && "opacity-100 translate-y-0 translate-x-0 scale-100",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
