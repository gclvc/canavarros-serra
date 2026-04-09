"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

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
  
  const getInitial = () => {
    switch (direction) {
      case "up": return { opacity: 0, y: 40 }
      case "down": return { opacity: 0, y: -40 }
      case "left": return { opacity: 0, x: 40 }
      case "right": return { opacity: 0, x: -40 }
      case "none": return { opacity: 0 }
    }
  }

  const getAnimate = () => {
    switch (direction) {
      case "up":
      case "down": return { opacity: 1, y: 0 }
      case "left":
      case "right": return { opacity: 1, x: 0 }
      case "none": return { opacity: 1 }
    }
  }

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }} // smooth easeOut
      className={className}
    >
      {children}
    </motion.div>
  )
}
