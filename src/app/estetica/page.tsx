import Image from "next/image"
import { FadeIn } from "@/components/ui/fade-in"
import { ContactForm } from "@/components/ui/contact-form"
import { Sparkles, Activity, Plus, Award, CheckCircle2, ShieldCheck, Zap, Phone } from "lucide-react"
import { Reviews } from "@/components/ui/reviews"
import { FAQ } from "@/components/ui/faq"

export default function EsteticaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">


      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section className="relative pt-16 pb-28 overflow-hidden bg-background">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl space-y-6">
              <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase">Cosmiatria & Estética Avançada</span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-foreground tracking-tight drop-shadow-sm">
                Medicina estética com ciência, expertise e naturalidade.
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed font-sans max-w-md pt-2">
                Programas de rejuvenescimento e prevenção focados em preservar sua identidade. Elevamos a beleza através de protocolos baseados em evidência s, em um ambiente de absoluto luxo.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-6">
                <a href="#tratamentos" className="inline-flex items-center justify-center text-sm transition-all rounded-full text-base px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/30 h-14">
                  Visualizar Tratamentos
                </a>
              </div>
            </div>
            
            <div className="relative h-[450px] md:h-[650px] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-secondary/20 group">
               <Image 
                src="/assets/IMG_4281.JPG" 
                alt="Medicina Estética" 
                fill 
                className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5A3E2B]/10 to-transparent mix-blend-overlay pointer-events-none transition-opacity duration-1000 group-hover:opacity-0"></div>
            </div>
          </div>
        </section>

        {/* MANIFESTO / ABORDAGEM */}
        <section className="py-24 bg-[#3d2c20] text-white">
          <FadeIn className="container mx-auto px-4 text-center max-w-3xl">
             <ShieldCheck className="w-12 h-12 mx-auto text-[#d1b48c] mb-6" />
             <h2 className="font-heading text-4xl md:text-5xl mb-8 leading-tight">
               Nossa Abordagem:<br/>Beleza Que Respeita Quem Você É
             </h2>
             <p className="text-lg opacity-90 leading-relaxed mb-12">
               Realçar a beleza natural de cada paciente com segurança, precisão e resultados duradouros. Rejeitamos a padronização em favor de um planejamento anatômico sob medida.
             </p>
             <div className="grid md:grid-cols-3 gap-8">
               <div className="group bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md transition-all duration-700 hover:-translate-y-3 hover:bg-white/10 hover:shadow-2xl cursor-default">
                 <h3 className="font-heading text-xl text-[#d1b48c] mb-3 transition-transform duration-500 group-hover:translate-x-1">Ciência</h3>
                 <p className="text-sm opacity-80 transition-transform duration-500 group-hover:translate-x-1 delay-75">Protocolos baseados em evidências e medicina estética avançada de padrão global.</p>
               </div>
               <div className="group bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md transition-all duration-700 hover:-translate-y-3 hover:bg-white/10 hover:shadow-2xl cursor-default md:delay-[100ms]">
                 <h3 className="font-heading text-xl text-[#d1b48c] mb-3 transition-transform duration-500 group-hover:translate-x-1">Expertise</h3>
                 <p className="text-sm opacity-80 transition-transform duration-500 group-hover:translate-x-1 delay-75">Excelência desde a formação médica até extensões e atualizações internacionais.</p>
               </div>
               <div className="group bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md transition-all duration-700 hover:-translate-y-3 hover:bg-white/10 hover:shadow-2xl cursor-default md:delay-[200ms]">
                 <h3 className="font-heading text-xl text-[#d1b48c] mb-3 transition-transform duration-500 group-hover:translate-x-1">Naturalidade</h3>
                 <p className="text-sm opacity-80 transition-transform duration-500 group-hover:translate-x-1 delay-75">Resultados invisíveis e harmônicos que fortalecem a sua identidade facial orgânica.</p>
               </div>
             </div>
          </FadeIn>
        </section>

        {/* LISTA COMPLETA DE PROCEDIMENTOS */}
        <section className="py-24 bg-background border-y border-border/30">
          <FadeIn className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase">Nosso Portfólio</span>
              <h2 className="font-heading text-4xl lg:text-5xl mt-2 tracking-tight">O Foco da Nossa Expertise</h2>
              <p className="mt-4 text-foreground/70">Domínio absoluto sobre as terapias não cirúrgicas mais modernas do mundo.</p>
            </div>
             
             <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-5">
               {[
                 "Toxina Botulínica (Botox)", "Morpheus Face & Body", 
                 "Bioestimuladores de Colágeno (Radiesse/Sculptra)", "Peeling Químico de TCA", 
                 "Skincare Médico Personalizado", "Preenchimento com Ácido Hialurônico",
                 "Protocolos Full Face (Revitalização global)", "Microagulhamento Robótico",
                 "Tratamento de Flacidez Profunda Corporal", "Lifting Não-Cirúrgico",
                 "Prevenção Muscular Estrutural", "Regeneração Dérmica 360º"
               ].map((proc, idx) => (
                 <div key={idx} className="bg-card border border-border/80 hover:border-primary text-foreground/90 md:text-base text-sm px-6 py-4 rounded-full shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-[400ms] ease-out font-medium flex items-center cursor-default group">
                   <div className="w-2 h-2 rounded-full bg-primary/40 mr-3 group-hover:bg-primary group-hover:scale-[1.8] group-hover:shadow-[0_0_10px_rgba(209,180,140,0.5)] transition-all duration-300"></div> {proc}
                 </div>
               ))}
             </div>
          </FadeIn>
        </section>

        {/* OS 4 ESTÁGIOS - CARDS ASSIMÉTRICOS */}
        <section id="tratamentos" className="py-32 bg-card">
          <div className="container mx-auto px-4">
            <div className="mb-20">
              <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase">Jornada Clínica</span>
              <h2 className="font-heading text-4xl lg:text-6xl mt-2 tracking-tight">Categorias de Tratamento</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
              
              {/* Card 1 */}
              <FadeIn delay={0.1}>
                <div className="bg-background border border-border p-10 md:p-14 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 group h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8 border border-border">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-3xl mb-2">1. Prevenção</h3>
                  <p className="text-xs uppercase tracking-widest text-[#d1b48c] font-bold mb-6">Idade Alvo: 25-35 anos</p>
                  <p className="text-foreground/70 mb-8 leading-relaxed">
                    Foco: Adiar os sinais do envelhecimento antes que apareçam, preservando a qualidade da pele e estimulando o banco de colágeno primário.
                  </p>
                  <ul className="space-y-4 mb-8 border-t border-border/50 pt-6">
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-primary shrink-0 mt-0.5" /> <p className="text-sm"><strong>Botox Preventivo:</strong> Relaxamento muscular precoce.</p></li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-primary shrink-0 mt-0.5" /> <p className="text-sm"><strong>Peeling TCA:</strong> Renovação celular e ablação progressiva.</p></li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-primary shrink-0 mt-0.5" /> <p className="text-sm"><strong>Skincare Médico:</strong> Dermocosméticos de alta performance.</p></li>
                  </ul>
                </div>
              </FadeIn>

              {/* Card 2 */}
              <FadeIn delay={0.2} className="md:mt-24">
                <div className="bg-background border border-border p-10 md:p-14 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 group h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8 border border-border">
                    <Activity className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-3xl mb-2">2. Rejuvenescimento</h3>
                  <p className="text-xs uppercase tracking-widest text-[#d1b48c] font-bold mb-6">Idade Alvo: 35-50 anos</p>
                  <p className="text-foreground/70 mb-8 leading-relaxed">
                    Foco: Tratar rugas iniciais instaladas, restaurar volumes perdidos e melhorar a densidade estrutural da pele com as mais altas tecnologias.
                  </p>
                  <ul className="space-y-4 mb-8 border-t border-border/50 pt-6">
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-primary shrink-0 mt-0.5" /> <p className="text-sm"><strong>Morpheus Face:</strong> Radiofrequência fracionada profunda.</p></li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-primary shrink-0 mt-0.5" /> <p className="text-sm"><strong>Bioestimuladores:</strong> Restauração da sustentação.</p></li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-primary shrink-0 mt-0.5" /> <p className="text-sm"><strong>Protocolo Face Revitalize:</strong> Botox + Bioestimulador Facial.</p></li>
                  </ul>
                </div>
              </FadeIn>

              {/* Card 3 */}
              <FadeIn delay={0.3}>
                <div className="bg-background border border-border p-10 md:p-14 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 group h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8 border border-border">
                    <Award className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-3xl mb-2">3. Rejuv. Avançado</h3>
                  <p className="text-xs uppercase tracking-widest text-[#d1b48c] font-bold mb-6">Idade Alvo: 40-60 anos</p>
                  <p className="text-foreground/70 mb-8 leading-relaxed">
                    Foco: Tratar flacidez facial e perda de sustentação intensa, exigindo reposição volumétrica e redensificação de alto impacto (Lifting Não-Cirúrgico).
                  </p>
                  <ul className="space-y-4 mb-8 border-t border-border/50 pt-6">
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-primary shrink-0 mt-0.5" /> <p className="text-sm"><strong>Botox Estrutural:</strong> Remodelação global com posicionamento estratégico.</p></li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-primary shrink-0 mt-0.5" /> <p className="text-sm"><strong>Protocolo Full Face:</strong> Integração de Hialurônico, Morpheus e Bioestimuladores.</p></li>
                  </ul>
                </div>
              </FadeIn>

              {/* Card 4 */}
              <FadeIn delay={0.4} className="md:mt-24">
                <div className="bg-background border border-border p-10 md:p-14 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 group h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8 border border-border">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-3xl mb-2">4. Contorno Corporal</h3>
                  <p className="text-xs uppercase tracking-widest text-[#d1b48c] font-bold mb-6">Skin Quality Total</p>
                  <p className="text-foreground/70 mb-8 leading-relaxed">
                    Foco: Tratamento de flacidez corporal localizada (abdômen, coxas, glúteos, braços) com as mais potentes plataformas de retração tecidual existentes.
                  </p>
                  <ul className="space-y-4 mb-8 border-t border-border/50 pt-6">
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-primary shrink-0 mt-0.5" /> <p className="text-sm"><strong>Morpheus Body:</strong> Subcisão térmica profunda no tecido adiposo e retração.</p></li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-primary shrink-0 mt-0.5" /> <p className="text-sm"><strong>Protocolo Firm Body:</strong> Associação de Morpheus + Bioestimulador Corporal Extenso.</p></li>
                  </ul>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* ASSINATURAS CLUBE */}
        <section className="py-24 bg-background">
          <FadeIn className="container mx-auto px-4">
            
            <div className="text-center mb-16">
               <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase">Programa Face 365 & Clube</span>
               <h2 className="font-heading text-4xl lg:text-5xl mt-2 tracking-tight">
                  Manutenção Cuidada o Ano Todo
               </h2>
               <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
                 O <strong>Programa Face 365</strong> garante 2 manutenções semestrais de botox, 1 de bioestimulador e 1 de Morpheus. Conheça as verticais do Clube Canavarros Serra:
               </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
               {/* Tier 1 */}
               <div className="border border-border bg-card p-10 rounded-[3rem] relative flex flex-col hover:border-primary/50 transition-colors">
                  <h3 className="font-heading text-2xl mb-2 text-[#715b39]">Plano Skin</h3>
                  <p className="text-sm text-foreground/60 mb-8">Para prevenção contínua e qualidade dérmica.</p>
                  <ul className="space-y-4 flex-grow text-sm text-foreground/80">
                     <li className="flex items-center"><Plus className="w-4 h-4 mr-2 text-primary" /> Skincare Personalizado</li>
                     <li className="flex items-center"><Plus className="w-4 h-4 mr-2 text-primary" /> Limpeza de Pele Trimestral</li>
                     <li className="flex items-center"><Plus className="w-4 h-4 mr-2 text-primary" /> Benefícios em Outros Procedimentos</li>
                  </ul>
               </div>

               {/* Tier 2 */}
               <div className="border-2 border-primary bg-primary/5 p-10 rounded-[3rem] relative flex flex-col shadow-lg transform lg:-translate-y-4">
                  <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                     Mais Buscado
                  </div>
                  <h3 className="font-heading text-2xl mb-2 text-[#715b39]">Plano Rejuvenescimento</h3>
                  <p className="text-sm text-foreground/70 mb-8">Tratamento essencial garantido anualmente.</p>
                  <ul className="space-y-4 flex-grow text-sm text-foreground/80">
                     <li className="flex items-center"><Plus className="w-4 h-4 mr-2 text-primary" /> Cota de Botox Anual</li>
                     <li className="flex items-center"><Plus className="w-4 h-4 mr-2 text-primary" /> Microagulhamento Clínico</li>
                     <li className="flex items-center"><Plus className="w-4 h-4 mr-2 text-primary" /> Benefícios Especiais em Bioestimuladores</li>
                  </ul>
               </div>

               {/* Tier 3 */}
               <div className="border border-border bg-card p-10 rounded-[3rem] relative flex flex-col hover:border-primary/50 transition-colors">
                  <h3 className="font-heading text-2xl mb-2 text-[#715b39]">Plano Premium</h3>
                  <p className="text-sm text-foreground/60 mb-8">A arquitetura completa do antienvelhecimento.</p>
                  <ul className="space-y-4 flex-grow text-sm text-foreground/80">
                     <li className="flex items-center"><Plus className="w-4 h-4 mr-2 text-primary" /> Cota de Botox Anual</li>
                     <li className="flex items-center"><Plus className="w-4 h-4 mr-2 text-primary" /> Aplicação de Bioestimulador</li>
                     <li className="flex items-center"><Plus className="w-4 h-4 mr-2 text-primary" /> Sessão Anual de Plataforma (Morpheus)</li>
                  </ul>
               </div>
            </div>
            
          </FadeIn>
        </section>

        <FAQ items={[
          {q: "O Botox (preventivo) deixa o rosto congelado?", a: "Não na nossa clínica. Adotamos a abordagem 'Botox Estrutural', focada em enfraquecer apenas o músculo que traciona o rosto para baixo. Preservamos a elevação e a mímica facial autêntica da paciente."},
          {q: "Quantas sessões de Morpheus são necessárias?", a: "O protocolo inicial ideal envolve de 2 a 3 sessões, variando conforme o grau de flacidez dérmica e gordura. Os resultados colagênicos continuam aparecendo progressivamente por meses."},
          {q: "Como funciona o Programa Face 365?", a: "Desenhado sob medida, este programa garante a sua arquitetura anual. Nossos pacientes têm acesso garantido aos tratamentos chaves de toxina e estímulo de colágeno divididos ao longo dos 12 meses."},
          {q: "O Peeling de TCA exige ficar em casa?", a: "O TCA promove uma renovação celular muito profunda. Há uma descamação visível e controlada por alguns dias, porém, organizando o cronograma para curtas janelas de repouso social, é totalmente gerenciável."}
        ]} />

        <Reviews category="estetica" />

        {/* CTA FINAL DE AGENDAMENTO (Contornando o ContactForm com temática Estética) */}
        <section id="contato" className="py-24 bg-card border-t border-border">
          <FadeIn className="container mx-auto px-4 max-w-4xl">
             <div className="text-center mb-12">
               <h2 className="font-heading text-4xl mb-4">Inicie sua Jornada Estética</h2>
               <p className="text-foreground/70">
                 Dê o primeiro passo para a estruturação do seu projeto facial e corporal com a nossa equipe médica dermatológica e estética avançada.
               </p>
             </div>
             
             <div className="bg-background border border-border p-10 rounded-[3rem] shadow-xl">
               <ContactForm />
             </div>
          </FadeIn>
        </section>

      </main>


    </div>
  )
}
