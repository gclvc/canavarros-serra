// Force vercel cache invalidation
import Image from "next/image"
import { FadeIn } from "@/components/ui/fade-in"
import { ChevronRight, ShieldCheck, CheckCircle2, Droplet, Sparkles, Activity, PlayCircle } from "lucide-react"
import { Reviews } from "@/components/ui/reviews"
import { FAQ } from "@/components/ui/faq"
import { ContactForm } from "@/components/ui/contact-form"

export default function FacialPage() {
  return (
    <main className="flex-grow bg-background">
      {/* HERO SECTION */}
      <section className="relative pt-10 pb-28 overflow-hidden min-h-[90dvh] flex items-center bg-[#0D0D12]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/novo_facial.png" 
            alt="Cirurgia Facial" 
            fill 
            className="object-cover object-center opacity-30 mix-blend-screen duration-[10000ms] animate-out zoom-in fill-mode-forwards grayscale hover:grayscale-0 transition-all"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="max-w-xl space-y-8">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest backdrop-blur-md">
              <Sparkles className="w-4 h-4 mr-2" /> Alta Complexidade
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground tracking-tight drop-shadow-sm">
              Facelifting <br/>
              <span className="text-[#CC5833] italic font-serif">Deep Plane.</span>
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed font-sans max-w-lg mt-4">
              A elegância de não parecer operada. Reposicionamos a musculatura facial subjacente (SMAS), não a pele, resgatando a juventude com durabilidade e identidade preservada.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <a href="#contato" className="inline-flex items-center justify-center text-sm transition-all rounded-full text-base px-10 bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl shadow-primary/40 h-16 hover:scale-105 font-bold">
                Agendar Avaliação
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* A FILOSOFIA DEEP PLANE */}
      <section className="py-24 bg-card">
        <FadeIn className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center group cursor-default">
          <div className="relative h-[600px] md:h-[800px] w-full rounded-[3rem] overflow-hidden shadow-2xl border border-secondary/20">
             <Image 
              src="/assets/novo_facial.png" 
              alt="Deep Plane Face" 
              fill 
              className="object-cover object-[center_30%] transform transition-transform duration-[4000ms] group-hover:scale-110 ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
          </div>

          <div className="space-y-8 pl-4">
            <h2 className="font-heading text-4xl lg:text-5xl mb-4 text-foreground tracking-tight transition-colors duration-500 group-hover:text-primary">
              A Ciência da Naturalidade
            </h2>
            <div className="space-y-5 text-foreground/80 leading-relaxed text-lg">
              <p>
                O antigo estigma da cirurgia facial era a face "esticada" ou o "vento no rosto". Isso ocorria porque os cirurgiões tracionavam exaustivamente o envelope cutâneo (a pele).
              </p>
              <p>
                A técnica avançada <strong>Deep Plane</strong> atua profundamente nas estruturas ligamentares da face, liberando a musculatura e a pele para o reposicionamento da verdadeira "fundação" do rosto em seu vetor original, sem tensão cutânea.
              </p>
              <ul className="space-y-6 pt-6 border-t border-border/50">
                <li className="flex items-start transform transition-all duration-500 group-hover:translate-x-2">
                  <Droplet className="w-8 h-8 mr-4 text-primary shrink-0 transition-transform duration-700 group-hover:rotate-[360deg] group-hover:scale-110" />
                  <div>
                    <strong className="block text-foreground mb-1 text-xl">Lipoenxertia / Medicina Regenerativa</strong>
                    <span className="text-sm">Devolvemos a volumetria e vitalidade jovem à face combinando Células-Tronco, Nanofat e Microfat tracionados juntamente à pele.</span>
                  </div>
                </li>
                <li className="flex items-start transform transition-all duration-500 group-hover:translate-x-2 delay-100">
                  <ShieldCheck className="w-8 h-8 mr-4 text-primary shrink-0 transition-transform duration-700 group-hover:rotate-[360deg] group-hover:scale-110 delay-100" />
                  <div>
                    <strong className="block text-foreground mb-1 text-xl">Cervicoplastia Deep Neck</strong>
                    <span className="text-sm">Abordagem profunda de pescoço focada em definir impecavelmente o contorno e angulação do maxilar inferior.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* PROCEDIMENTOS COMPLEMENTARES DA FACE */}
      <section className="py-24 bg-background">
          <FadeIn className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase">O Conjunto da Obra</span>
               <h2 className="font-heading text-4xl lg:text-5xl mt-2 tracking-tight text-foreground text-foreground">
                  Aperfeiçoamento Periorbital
               </h2>
               <p className="mt-4 text-foreground/70 text-lg">Um rosto rejuvenescido precisa de olhos vibrantes. Nossos complementos diretos para um diagnóstico harmônico.</p>
            </div>
             
             <div className="grid md:grid-cols-2 gap-10">
                <div className="group bg-card border border-border rounded-[3rem] p-12 transition-all duration-700 hover:shadow-2xl hover:-translate-y-3 cursor-pointer">
                  <h3 className="font-heading text-3xl font-bold mb-4 text-primary transition-transform duration-500 group-hover:translate-x-2">Blefaroplastia</h3>
                  <p className="opacity-90 leading-relaxed text-foreground/80 mb-6 transition-transform duration-500 group-hover:translate-x-2 delay-75">
                    A cirurgia de pálpebras sob uma abordagem moderna. Não retiramos gordura desenfreadamente (o que gera olhos cadavéricos fundos no futuro). Preservamos tecidos, retiramos excessos precisos de pele e reposicionamos bolsas.
                  </p>
                  <ul className="space-y-3 text-sm transition-transform duration-500 group-hover:translate-x-2 delay-150">
                    <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-primary shrink-0 transition-transform duration-500 group-hover:rotate-[360deg]" /> Cantopexia para evitar olhar caído</li>
                    <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-primary shrink-0 transition-transform duration-500 group-hover:rotate-[360deg]" /> Ressecção milimétrica a laser/rádiofrequência</li>
                  </ul>
               </div>

               <div className="group bg-card border border-border rounded-[3rem] p-12 transition-all duration-700 hover:shadow-2xl hover:-translate-y-3 cursor-pointer">
                  <h3 className="font-heading text-3xl font-bold mb-4 text-primary transition-transform duration-500 group-hover:translate-x-2">Lift da Sobrancelha por Vídeo</h3>
                  <p className="opacity-90 leading-relaxed text-foreground/80 mb-6 transition-transform duration-500 group-hover:translate-x-2 delay-75">
                    Muitas pacientes não enxergam que a sobrancelha caída é a vilã do olhar cansado. Através de pequenas incisões no couro cabeludo (Videoendoscopia), erguemos suavemente o terço superior criando o belíssimo efeito "ponytail" sem cicatriz aparente.
                  </p>
                  <ul className="space-y-3 text-sm transition-transform duration-500 group-hover:translate-x-2 delay-150">
                    <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-primary shrink-0 transition-transform duration-500 group-hover:rotate-[360deg]" /> Restaura a suavidade da testa</li>
                    <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-primary shrink-0 transition-transform duration-500 group-hover:rotate-[360deg]" /> Melhora a sensação de pálpebra "pesada"</li>
                  </ul>
               </div>
             </div>
          </FadeIn>
      </section>

      <FAQ items={[
        {q: "O que torna o Deep Plane diferente do Facelift tradicional?", a: "Diferente do método tradicional que estica a pele, o Deep Plane atua abaixo da musculatura, reposicionando os tecidos estruturais originais. O resultado é incomparavelmente mais natural."},
        {q: "As cicatrizes do Facelift ficam aparentes?", a: "Nossas incisões são planejadas meticulosamente ao redor da curvatura da orelha e na linha do cabelo, tornando-se praticamente imperceptíveis após o período de maturação anatômica."},
        {q: "Quanto tempo dura a recuperação?", a: "Apesar de ser uma cirurgia profunda, a técnica Deep Plane costuma causar menos hematomas. A maioria de nossos pacientes retorna às atividades sociais em cerca de 15 a 20 dias."},
        {q: "O que é o efeito Ponytail?", a: "É o efeito de elevação sutil e elegante do terço superior do rosto obtido por videoendoscopia, que reproduz a sensação estética jovial de estar com os cabelos amarrados."}
      ]} />

      <Reviews category="facial" />

      <section id="contato" className="py-16 md:py-24 bg-card border-t border-border">
          <FadeIn className="container mx-auto px-4 max-w-4xl">
            <div className="bg-background rounded-[3rem] p-8 md:p-14 shadow-2xl border border-primary/20 relative overflow-hidden">
               <div className="absolute inset-0 bg-primary/5"></div>
               <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                    <Sparkles className="w-3 h-3" /> Avaliação Privê
                  </span>
                  <h3 className="font-heading text-3xl md:text-4xl mb-4">Dê o Próximo Passo</h3>
                  <p className="text-foreground/70 mb-6">A sua beleza com a naturalidade que você merece. Fale com nossa equipe.</p>
                </div>
                <ContactForm />
              </div>
            </div>
          </FadeIn>
      </section>
    </main>
  )
}
