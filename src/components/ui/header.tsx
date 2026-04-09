"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { name: "Cirurgia das Mamas", href: "/mama" },
    { name: "Cirurgia Facial", href: "/facial" },
    { name: "Contorno Corporal", href: "/#corpo" },
    { name: "Cosmiatria & Estética", href: "/estetica" },
    { name: "Nossa História", href: "/#sobre" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-[20px] bg-background/80 border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
           <Link href="/" onClick={() => setIsOpen(false)} className="relative w-40 md:w-48 h-12 block">
              <Image 
                src="/assets/logotipo.png" 
                alt="Canavarros Serra" 
                fill 
                className="object-contain object-left drop-shadow-sm" 
                priority
              />
            </Link>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden xl:flex gap-8">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`text-sm tracking-wide transition-colors ${
                pathname === link.href || (link.href.includes('#') && pathname === '/') ? 'font-bold text-primary' : 'font-medium text-foreground/80 hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* DESKTOP CTA */}
        <a href="https://wa.me/5565996236875" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center text-sm transition-all rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 hidden sm:flex shadow-md shadow-primary/20 h-10">
            Agendar Avaliação
        </a>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="xl:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      <div className={`xl:hidden fixed inset-0 top-20 bg-background/95 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out border-t border-border ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center justify-center h-full gap-8 p-8 pb-32">
           {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-heading transition-colors ${
                pathname === link.href ? 'text-primary' : 'text-foreground'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a href="https://wa.me/5565996236875" target="_blank" rel="noopener noreferrer" className="inline-flex mt-8 items-center justify-center text-lg transition-all rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 shadow-xl">
            Atendimento Online
          </a>
        </nav>
      </div>
    </header>
  )
}
