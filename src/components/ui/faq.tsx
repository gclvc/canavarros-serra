'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { FadeIn } from "@/components/ui/fade-in"

interface FAQProps {
  items: { q: string; a: string }[]
  title?: string
  subtitle?: string
}

export function FAQ({ items, title = "Perguntas Frequentes", subtitle = "Tire suas dúvidas" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-card">
      <FadeIn className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase">{subtitle}</span>
          <h2 className="font-heading text-4xl lg:text-5xl mt-2 tracking-tight text-foreground">
            {title}
          </h2>
        </div>
        
        <div className="divide-y divide-primary/10 border-y border-primary/10">
          {items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className="py-8 cursor-pointer group" onClick={() => setOpenIndex(isOpen ? null : i)}>
                <div className="flex justify-between items-center">
                  <h3 className={`font-heading text-xl md:text-2xl transition-colors duration-300 pr-8 ${isOpen ? 'text-primary' : 'text-foreground group-hover:text-primary/70'}`}>
                    {item.q}
                  </h3>
                  <div className={`flex shrink-0 items-center justify-center w-10 h-10 rounded-full border transition-all duration-500 ${isOpen ? 'bg-primary border-primary rotate-45 text-primary-foreground shadow-lg shadow-primary/20' : 'bg-transparent border-border text-primary group-hover:border-primary/50'}`}>
                    <Plus className="w-5 h-5" />
                  </div>
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pt-6' : 'max-h-0 opacity-0'}`}>
                  <p className="text-foreground/70 text-base md:text-lg leading-relaxed max-w-3xl border-l-2 border-primary/30 pl-6">
                    {item.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </FadeIn>
    </section>
  )
}
