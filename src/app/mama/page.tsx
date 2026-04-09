import Image from "next/image"
import { FadeIn } from "@/components/ui/fade-in"
import { ChevronRight, ShieldCheck, CheckCircle2, Droplet, Sparkles, Activity, PlayCircle } from "lucide-react"
import { Reviews } from "@/components/ui/reviews"
import { FAQ } from "@/components/ui/faq"
import { ContactForm } from "@/components/ui/contact-form"

export default function MamaPage() {
  return (
    <main className="flex-grow bg-background">
      {/* HERO SECTION */}
      <section className="relative pt-10 pb-28 overflow-hidden min-h-[90dvh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/IMG_4281.JPG" 
            alt="Cirurgia das Mamas" 
            fill 
            className="object-cover object-center opacity-40 mix-blend-luminosity duration-[10000ms] animate-out zoom-in fill-mode-forwards"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="max-w-2xl space-y-8">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest backdrop-blur-md">
              <Activity className="w-4 h-4 mr-2" /> Técnica Internacional
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground tracking-tight drop-shadow-sm">
              Cirurgia das Mamas <br/>
              <span className="text-[#CC5833] italic font-serif">Fast Track Recovery.</span>
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed font-sans max-w-lg mt-4">
              Independência desde o primeiro dia. O protocolo R24R permite a elevação dos braços logo após a cirurgia, reduzindo dores e antecipando seu retorno à rotina.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <a href="#contato" className="inline-flex items-center justify-center text-sm transition-all rounded-full text-base px-10 bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl shadow-primary/40 h-16 hover:scale-105 font-bold">
                Agendar Avaliação
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* O PROTOCOLO R24R */}
      <section className="py-24 bg-card">
        <FadeIn className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 pr-4">
            <h2 className="font-heading text-4xl lg:text-5xl mb-4 text-foreground tracking-tight">
              O Protocolo R24R
            </h2>
            <div className="space-y-5 text-foreground/80 leading-relaxed text-lg">
              <p>
                A <strong>Recuperação em 24 Horas (R24R)</strong> não é apenas uma técnica, mas um conjunto de mais de 14 passos executados milimetricamente dentro do centro cirúrgico.
              </p>
              <p>
                O objetivo central é realizar o implante mamário causando o menor trauma possível aos tecidos, o que praticamente zera o sangramento e, por consequência, minimiza drasticamente a dor no pós-operatório.
              </p>
              <ul className="space-y-6 pt-6 border-t border-border/50">
                <li className="flex items-start">
                  <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-4 mt-1 font-heading text-xl font-bold">1</span> 
                  <div>
                    <strong className="block text-foreground mb-1">Recuperação em 24h</strong>
                    <span className="text-sm">Protocolo rigoroso que permite movimentação restabelecida na mesma semana, gerando muito mais autonomia à paciente.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-4 mt-1 font-heading text-xl font-bold">2</span> 
                  <div>
                    <strong className="block text-foreground mb-1">Dual-Plane Muscular</strong>
                    <span className="text-sm">A prótese é alocada abaixo do músculo peitoral, garantindo maior cobertura, naturalidade e estrutura duradoura ao longo dos anos.</span>
                  </div>
                </li>
                 <li className="flex items-start">
                  <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-4 mt-1 font-heading text-xl font-bold">3</span> 
                  <div>
                    <strong className="block text-foreground mb-1">Grip Plane (Sutiã Interno)</strong>
                    <span className="text-sm">Sutiã interno multitécnicas que ancora o sulco mamário para que a prótese se estabilize e não desça (bottoming out).</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative h-[500px] md:h-[700px] w-full rounded-[3rem] overflow-hidden shadow-2xl border border-secondary/20 group cursor-default">
             <Image 
              src="/assets/IMG_4281.JPG" 
              alt="Mamas" 
              fill 
              className="object-cover object-center group-hover:scale-110 transition-transform duration-[4000ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="absolute bottom-10 left-10 right-10 transform transition-transform duration-700 ease-out group-hover:-translate-y-4">
               <div className="bg-background/20 backdrop-blur-lg border border-white/30 p-8 rounded-3xl text-white shadow-2xl">
                  <h4 className="font-heading text-xl mb-3 flex items-center transform transition-transform group-hover:translate-x-2 duration-500"><ShieldCheck className="w-5 h-5 mr-3 text-primary transition-transform duration-700 group-hover:rotate-[360deg]" /> Menos Dor, Mais Vida.</h4>
                  <p className="text-sm opacity-90 leading-relaxed text-white/90 transform transition-transform group-hover:translate-x-2 duration-500 delay-[50ms]">Pacientes do protocolo R24R costumam retomar vida social, dirigir e lavar o próprio cabelo na mesma semana da cirurgia.</p>
               </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* MASTOPEXIA & REDUTORA */}
      <section className="py-24 bg-[#5A3E2B] text-background">
          <FadeIn className="container mx-auto px-4 text-center max-w-4xl">
             <span className="text-secondary font-bold text-xs tracking-[0.2em] uppercase">Abordagens Complementares</span>
             <h2 className="font-heading text-4xl lg:text-5xl mt-2 mb-10 tracking-tight text-[#F5EEE6]">
                Mastopexia & Alça Muscular
             </h2>
             <p className="text-[#F5EEE6]/80 text-lg leading-relaxed mb-16">
               Para pacientes com flacidez e ptose (queda) mamária, indicamos a <strong>Mastopexia</strong>. Durante o procedimento, combinamos a retirada de pele, reposição volumétrica com implantes e uso do suporte muscular, conhecido como Alça de Sustentação Muscular, proporcionando um colo robusto e alta durabilidade estética contra a ação da gravidade.
             </p>
             <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="group bg-background/5 border border-white/10 rounded-[2rem] p-10 hover:bg-background/10 transition-all duration-[600ms] hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                  <CheckCircle2 className="w-8 h-8 mb-4 text-[#D1B48C] transition-transform duration-[800ms] group-hover:rotate-[360deg] group-hover:scale-110" />
                  <h3 className="font-heading text-2xl font-semibold mb-4 text-[#D1B48C] transform transition-transform duration-500 group-hover:translate-x-2">Sutiã Interno (Grip Plane)</h3>
                  <p className="opacity-90 text-sm leading-relaxed text-[#F5EEE6] transform transition-transform duration-500 group-hover:translate-x-2 delay-75">
                    Uma técnica revolucionária que utiliza os próprios tecidos da paciente ou fios farpados para estabilizar a base da mama, atuando como um sustentáculo permanente.
                  </p>
               </div>
                <div className="group bg-background/5 border border-white/10 rounded-[2rem] p-10 hover:bg-background/10 transition-all duration-[600ms] hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                  <CheckCircle2 className="w-8 h-8 mb-4 text-[#D1B48C] transition-transform duration-[800ms] group-hover:rotate-[360deg] group-hover:scale-110" />
                  <h3 className="font-heading text-2xl font-semibold mb-4 text-[#D1B48C] transform transition-transform duration-500 group-hover:translate-x-2">Lipoenxertia (Mama Híbrida)</h3>
                  <p className="opacity-90 text-sm leading-relaxed text-[#F5EEE6] transform transition-transform duration-500 group-hover:translate-x-2 delay-75">
                    Uso do próprio tecido adiposo da paciente (retirado na lipo) para cobrir bordas de prótese transicionais e delinear com máxima discrição um colo volumoso e impalpável.
                  </p>
               </div>
             </div>
          </FadeIn>
      </section>

      <FAQ items={[
        {q: "Como é possível levantar os braços em 24h?", a: "O R24R usa instrumentos precisos para dissecção sem sangramento, blocos anestésicos modernos e o sutiã interno, permitindo que a musculatura seja inteiramente preservada e a prótese se estabilize."},
        {q: "Qual a diferença entre Mastopexia com e sem silicone?", a: "Com prótese, adicionamos volume marcado utilizando o implante. Sem prótese, usamos o próprio tecido glandular da paciente para montar uma estrutura auto-sustentável mais reservada."},
        {q: "O que é o Sutiã Interno (Grip Plane)?", a: "Construímos um reforço estrutural no sulco da mama. Isso funciona como um pilar de sustentação definitiva, impedindo que a prótese ceda para baixo ao longo dos anos com a gravidade."},
        {q: "A recuperação do R24R é indolor?", a: "Zero dor é relativo a cada organismo, mas o protocolo minimiza drasticamente a dor em comparação a técnicas antigas, não exigindo repouso absoluto ou dependência total de terceiros."}
      ]} />

      <Reviews category="mama" />

      <section id="contato" className="py-16 md:py-24 bg-card border-t border-border">
          <FadeIn className="container mx-auto px-4 max-w-4xl">
            <div className="bg-background rounded-[3rem] p-8 md:p-14 shadow-2xl border border-primary/20 relative overflow-hidden">
               <div className="absolute inset-0 bg-primary/5"></div>
               <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                    <Activity className="w-3 h-3" /> Recuperação Rápida
                  </span>
                  <h3 className="font-heading text-3xl md:text-4xl mb-4">Dê o Próximo Passo</h3>
                  <p className="text-foreground/70 mb-6">Mamas estáveis e firmes com o método R24R. Fale diretamente com nossa equipe.</p>
                </div>
                <ContactForm />
              </div>
            </div>
          </FadeIn>
      </section>
    </main>
  )
}
