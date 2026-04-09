"use client"

import { ReactNode, useEffect, useRef, useState } from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
  duration?: number
}

export function FadeIn({ 
  children, 
  delay = 0, 
  direction = "up", 
  className = "",
  duration = 0.8
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Fallback timer just in case IO fails in weird server environments
    const fallbackTimeout = setTimeout(() => setIsVisible(true), 1500)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(fallbackTimeout)
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    )

    if (ref.current) observer.observe(ref.current)
    return () => {
      observer.disconnect()
      clearTimeout(fallbackTimeout)
    }
  }, [])

  const getBaseTransform = () => {
    switch (direction) {
      case "up": return "translate-y-16 scale-95"
      case "down": return "-translate-y-16 scale-95"
      case "left": return "translate-x-16 scale-95"
      case "right": return "-translate-x-16 scale-95"
      case "none": return "scale-95"
      default: return "translate-y-16 scale-95"
    }
  }

  const baseState = `opacity-0 ${getBaseTransform()}`
  const inState = "opacity-100 translate-y-0 translate-x-0 scale-100"

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu", 
        isVisible ? inState : baseState,
        className
      )}
      style={{ 
        transitionDuration: `${duration}s`, 
        transitionDelay: `${delay}s` 
      }}
    >
      {children}
    </div>
  )
}
