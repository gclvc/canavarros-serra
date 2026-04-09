"use client"

import { useState } from "react"
import { Button } from "./button"
import { Input } from "./input"
import { Loader2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    procedure: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulando um loading leve p/ UX Cinematográfica
    setTimeout(() => {
      window.fbq?.('track', 'Lead', {
        content_name: formData.procedure,
        currency: 'BRL'
      })

      const phoneTarget = "5565996236875" // Cuiabá Official
      const text = `Olá, me chamo *${formData.name}*.\nGostaria de falar sobre: *${formData.procedure}*.\nMeu contato: ${formData.phone}\n\nObservação: ${formData.message}`
      
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
      <div className="space-y-2 sm:col-span-2">
        <label className="text-sm font-medium">Área de Interesse</label>
        <select 
          required
          className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          value={formData.procedure}
          onChange={(e) => setFormData(prev => ({ ...prev, procedure: e.target.value }))}
        >
          <option value="" disabled>Selecione o procedimento...</option>
          <optgroup label="Cirurgia Plástica">
            <option value="Cirurgia das Mamas">Mastopexia / Prótese de Mama (R24R)</option>
            <option value="Cirurgia Facial">Lifting Facial (Deep Plane) / Blefaro</option>
          </optgroup>
          <optgroup label="Cosmiatria & Estética">
            <option value="Botox e Prevenção">Botox / Skincare / Prevenção</option>
            <option value="Bioestimuladores">Bioestimuladores / Rejuvenescimento</option>
            <option value="Morpheus">Morpheus Face & Body</option>
            <option value="Planos e Clube">Planos de Assinatura (Clube Canavarros)</option>
          </optgroup>
          <option value="Avaliação Geral">Avaliação Geral Inicial</option>
        </select>
      </div>
      <div className="space-y-2 sm:col-span-2">
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
