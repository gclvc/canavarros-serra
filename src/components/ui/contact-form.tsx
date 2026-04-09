"use client"

import { useState } from "react"
import { Button } from "./button"
import { Input } from "./input"
import { Loader2, Check } from "lucide-react"

const AVAILABLE_PROCEDURES = [
  "Facelift (Deep Plane)",
  "Blefaroplastia",
  "Prótese de Mama (R24R)",
  "Mastopexia",
  "Lipo HD / Abdominoplastia",
  "Botox / Preventivo",
  "Bioestimuladores",
  "Morpheus 3D",
  "Skincare Médico",
  "Clube de Assinatura",
  "Avaliação Geral"
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  })
  const [selectedProcedures, setSelectedProcedures] = useState<string[]>([])

  const toggleProcedure = (proc: string) => {
    setSelectedProcedures(prev => 
      prev.includes(proc) 
        ? prev.filter(p => p !== proc)
        : [...prev, proc]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      window.fbq?.('track', 'Lead', {
        content_name: selectedProcedures.join(', '),
        currency: 'BRL'
      })

      const phoneTarget = "5565996236875"
      const procText = selectedProcedures.length > 0 
        ? selectedProcedures.join(' • ') 
        : "Avaliação Geral"
      
      const text = `Olá, me chamo *${formData.name}*.\n\nGostaria de falar sobre:\n*${procText}*\n\nMeu contato: ${formData.phone}${formData.message ? `\n\nObservação: ${formData.message}` : ''}`
      
      const whatsappUrl = `https://wa.me/${phoneTarget}?text=${encodeURIComponent(text)}`
      window.open(whatsappUrl, "_blank")
      
      setIsSubmitting(false)
    }, 800)
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Nome Completo</label>
        <Input 
          required 
          placeholder="Ex: João da Silva" 
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Telefone / WhatsApp</label>
        <Input 
          required 
          placeholder="(xx) xxxxx-xxxx" 
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
        />
      </div>
      <div className="space-y-3 sm:col-span-2 pt-2">
        <label className="text-sm font-medium">Áreas de Interesse (Selecione uma ou mais)</label>
        <div className="flex flex-wrap gap-2">
          {AVAILABLE_PROCEDURES.map(proc => {
            const isSelected = selectedProcedures.includes(proc)
            return (
              <div 
                key={proc}
                onClick={() => toggleProcedure(proc)}
                className={`px-4 py-2 rounded-full text-xs font-medium border cursor-pointer transition-all duration-300 flex items-center gap-2 select-none active:scale-95 ${isSelected ? 'bg-primary border-primary text-primary-foreground shadow-md shadow-primary/20' : 'bg-background border-border text-foreground/70 hover:border-primary/50 hover:-translate-y-0.5'}`}
              >
                {isSelected && <Check className="w-3 h-3" />}
                {proc}
              </div>
            )
          })}
        </div>
      </div>
      <div className="space-y-2 sm:col-span-2 pt-2">
        <label className="text-sm font-medium">Mensagem Adicional (Opcional)</label>
        <Input 
          placeholder="Como podemos te ajudar hoje?" 
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
        />
      </div>
      <div className="sm:col-span-2 pt-4">
        <Button 
          type="submit"
          className="w-full text-lg h-14 hover:scale-[1.02] transition-transform duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processando Contato...</>
          ) : (
            "Iniciar Conversa Segura via WhatsApp"
          )}
        </Button>
      </div>
    </form>
  )
}

declare global {
  interface Window {
    fbq?: any;
  }
}
