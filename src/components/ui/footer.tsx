"use client"

import { Phone } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-card py-20 mt-auto border-t border-border/10">
      <FadeIn className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
        {/* Col 1: Brand & Info */}
        <div className="space-y-6">
          <div className="relative w-48 h-12 block opacity-90">
             <Image 
                src="/assets/logotipo.png" 
                alt="Canavarros Serra" 
                fill 
                className="object-contain object-left sepia saturate-200 hue-rotate-[-30deg]" 
              />
          </div>
          <div>
            <p className="opacity-90 font-medium pt-2">Dr. Márcio Augusto M. Canavarros Serra</p>
            <p className="opacity-70 mt-1">CRM MT 6323 | RQE 3727</p>
          </div>
          <p className="opacity-50 text-[11px] leading-relaxed">
             Aviso ético: As imagens exibidas são meramente ilustrativas. Os resultados variam. A consulta médica presencial é indispensável segundo as diretrizes do CFM.
          </p>
        </div>
        
        {/* Col 2: Endereços */}
        <div>
          <p className="opacity-70 font-bold uppercase tracking-wider mb-6 text-xs text-primary">Nossas Clínicas</p>
          <ul className="space-y-6 opacity-80">
            <li>
              <strong className="block mb-1 text-primary">Unidade Cuiabá</strong>
              <a href="https://www.google.com/maps/search/SB+Medical+Jardim+Mariana+Cuiabá" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-pointer text-xs block leading-relaxed">
                Ed. SB Medical, Jardim Mariana<br/>Cuiabá - MT<br/><span className="underline mt-1 inline-block">Ver no Google Maps</span>
              </a>
            </li>
            <li>
              <strong className="block mb-1 text-primary">Unidade Sorriso</strong>
              <a href="https://www.google.com/maps/search/Clínica+Stefanela+Gatto+Sorriso" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-pointer text-xs block leading-relaxed">
                Clínica Stefanela Gato<br/>Sorriso - MT<br/><span className="underline mt-1 inline-block">Ver no Google Maps</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Navegação */}
        <div>
           <p className="opacity-70 font-bold uppercase tracking-wider mb-6 text-xs text-primary">Links Úteis</p>
           <ul className="space-y-4 opacity-80">
             <li><Link href="/mama" className="hover:text-primary transition-colors cursor-pointer block">Cirurgia das Mamas</Link></li>
             <li><Link href="/facial" className="hover:text-primary transition-colors cursor-pointer block">Cirurgia Facial</Link></li>
             <li><Link href="/estetica" className="hover:text-primary transition-colors cursor-pointer block">Cosmiatria & Estética</Link></li>
             <li><Link href="/#sobre" className="hover:text-primary transition-colors cursor-pointer block">Nossa História</Link></li>
           </ul>
        </div>
        
        {/* Col 4: Contato */}
        <div>
          <p className="opacity-70 font-bold uppercase tracking-wider mb-6 text-xs text-primary">Atendimento</p>
          <ul className="space-y-4 opacity-80">
            <li>
              <a href="https://wa.me/5565996236875" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-pointer flex items-center">
                <Phone className="w-4 h-4 mr-3 text-primary" /> (65) 99623-6875
              </a>
            </li>
            <li className="pt-4">
               <a href="https://wa.me/5565996236875" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center text-xs transition-all rounded-full bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground font-semibold px-6 h-10 border border-primary/50 text-center w-full">
                  Agendar por WhatsApp
               </a>
            </li>
          </ul>
        </div>
      </FadeIn>
    </footer>
  )
}
