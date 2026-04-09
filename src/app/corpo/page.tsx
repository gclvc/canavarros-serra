import Image from "next/image"
import { FadeIn } from "@/components/ui/fade-in"
import { ChevronRight, ShieldCheck, CheckCircle2, Activity, PlayCircle } from "lucide-react"
import { FAQ } from "@/components/ui/faq"
import { Reviews } from "@/components/ui/reviews"
import { ContactForm } from "@/components/ui/contact-form"

export default function CorpoPage() {
  return (
    <main className="min-h-screen pt-24 bg-background">
      {/* HERO SECTION DE ALTO LUXO */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/IMG_4279.JPG" 
            alt="Dr. Márcio Canavarros - Contorno Corporal" 
            fill 
            className="object-cover object-top lg:object-[center_20%] scale-105 animate-[slow-zoom_20s_ease-out_forwards] sepia-[.1]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        
        <FadeIn className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium tracking-wider text-primary uppercase">Escultura HD Corporal</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl mb-6 leading-tight drop-shadow-sm text-foreground">
              A exata <span className="text-primary italic">Proporção</span> da sua melhor versão.
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl leading-relaxed font-light">
              Técnicas cirúrgicas de alta definição para refinamento do contorno corporal. Lipo LAD e Abdominoplastia modernas projetadas para recuperações inteligentes, com o mínimo de trauma.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="group relative inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-5 rounded-full overflow-hidden transition-all hover:scale-105">
                <span className="relative z-10 font-bold uppercase tracking-widest text-xs">Avaliação de Contorno</span>
                <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* METODOLOGIA HD & RECUPERAÇÃO */}
      <section className="py-24 bg-card">
         <FadeIn className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase">Engenharia Visual</span>
                 <h2 className="font-heading text-4xl lg:text-5xl mt-4 mb-8 tracking-tight">O que é a Lipo HD?</h2>
                 <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                   Mais do que retirar gordura, a Alta Definição consiste no sombreamento estratégico de sulcos musculares. Desenhamos o abdômen devolvendo luzes e sombras condizentes com corpos atléticos reais e naturais.
                 </p>
                 <ul className="space-y-4 mb-8">
                   {[
                     "Lipoenxertia Estruturada (Reutilizamos para projeção glútea).",
                     "Preservação Vasculonervosa do tecido periférico.",
                     "Uso tático de Tecnologias de Retração de Pele.",
                     "Associação com Taping Fisiológico."
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>{item}</span>
                     </li>
                   ))}
                 </ul>
              </div>
              <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden group shadow-2xl">
                 <Image src="/IMG_4281.JPG" alt="Procedimento Corporal" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out" />
                 <div className="absolute inset-0 border border-primary/20 rounded-[2rem] z-10 pointer-events-none mix-blend-overlay"></div>
              </div>
            </div>
         </FadeIn>
      </section>

      {/* ABDOMINOPLASTIA DE RECUPERAÇÃO ACELERADA */}
      <section className="py-24 bg-background">
          <FadeIn className="container mx-auto px-4 max-w-5xl text-center">
             <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase">Inovação Cirúrgica</span>
             <h2 className="font-heading text-4xl lg:text-5xl mt-4 mb-8 tracking-tight">Abdominoplastia Avançada</h2>
             <p className="text-lg text-foreground/70 leading-relaxed mb-16 mx-auto max-w-3xl">
               Aplicamos uma rica rede de pontos de adesão internos associados ao Taping transoperatório. Isso virtualmente <strong className="text-foreground">elimina a necessidade dos dolorosos drenos</strong> na maioria absoluta dos casos e permite um pós-operatório infinitamente mais suportável.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-8">
               <div className="p-10 rounded-3xl bg-card border border-border hover:-translate-y-2 transition-transform duration-500 shadow-xl shadow-primary/5">
                 <ShieldCheck className="w-10 h-10 text-primary mb-6" />
                 <h4 className="font-heading text-2xl font-bold mb-3">Sem Drenos</h4>
                 <p className="text-base text-foreground/70 leading-relaxed">A tensão da cirurgia é resolvida de dentro para fora através de fios cirúrgicos, minimizando espaços vazios e o acumulo de fluidos.</p>
               </div>
               <div className="p-10 rounded-3xl bg-card border border-border hover:-translate-y-2 transition-transform duration-500 shadow-xl shadow-primary/5">
                 <Activity className="w-10 h-10 text-primary mb-6" />
                 <h4 className="font-heading text-2xl font-bold mb-3">Taping Clínico</h4>
                 <p className="text-base text-foreground/70 leading-relaxed">Colocado no bloco cirúrgico. Comprime controladamente o inchaço primário e protege as cicatrizes com extremo rigor.</p>
               </div>
               <div className="p-10 rounded-3xl bg-card border border-border hover:-translate-y-2 transition-transform duration-500 shadow-xl shadow-primary/5">
                 <PlayCircle className="w-10 h-10 text-primary mb-6" />
                 <h4 className="font-heading text-2xl font-bold mb-3">Drenagem Tática</h4>
                 <p className="text-base text-foreground/70 leading-relaxed">Liberação médica muito mais rápida das pacientes para início seguro das terapias manuais e drenagens no corpo.</p>
               </div>
             </div>
          </FadeIn>
      </section>

      <FAQ items={[
        {q: "O que significa 'Alta Definição' (HD)?", a: "HD (High Definition) é uma técnica de lipoaspiração que não foca apenas em reduzir volume, mas sim em esculpir o corpo realçando artificialmente os contornos musculares subjacentes de forma atlética."},
        {q: "Posso fazer a Abdominoplastia usando a Lipo HD junto?", a: "Sim, a união das duas técnicas é conhecida como Lipoabdominoplastia de Definição. Ela associa o refinamento dos contornos musculares laterais à remoção definitiva do excesso de flacidez, estrias e cicatrizes antigas na frente do abdômen."},
        {q: "É verdade que a Abdominoplastia não usa dreno?", a: "Graças aos inovadores 'pontos de tensão' internos (pontes de adesão) que fecham o que chamamos de 'espaço morto', juntamente com a boa hemostasia, o uso de drenos tem sido suprimido com segurança na imensa maioria das nossas pacientes de contorno."},
        {q: "Para onde vai a gordura da lipo?", a: "Sempre que indicado, realizamos a Lipoenxertia Glútea, tratando o volume e remodelando o formato anatômico dos glúteos e preenchendo as pequenas depressões da cintura lateral (o famoso 'Hip Dip')."}
      ]} />

      <Reviews category="corpo" />

      <section id="contato" className="py-16 md:py-24 bg-card border-t border-border">
          <FadeIn className="container mx-auto px-4 max-w-4xl">
            <div className="bg-background rounded-[3rem] p-8 md:p-14 shadow-2xl border border-primary/20 relative overflow-hidden">
               <div className="absolute inset-0 bg-primary/5"></div>
               <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                    <CheckCircle2 className="w-3 h-3" /> Alta Definição
                  </span>
                  <h3 className="font-heading text-3xl md:text-4xl mb-4">Esculpa sua Melhor Versão</h3>
                  <p className="text-foreground/70 mb-6">Contorne com precisão. Envie seus dados para a nossa equipe iniciar seu atendimento.</p>
                </div>
                <ContactForm />
              </div>
            </div>
          </FadeIn>
      </section>
    </main>
  )
}
