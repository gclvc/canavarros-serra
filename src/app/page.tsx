import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"
import { ContactForm } from "@/components/ui/contact-form"
import { Phone, Star, ShieldCheck, HeartPulse, ChevronRight, CheckCircle2 } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">


      <main className="flex-grow">
        {/* HERO SECTION - AESTHETIC SOFT V2 */}
        <section className="relative pt-8 pb-12 overflow-hidden bg-background">
          <div className="container mx-auto px-4 relative z-10">
             {/* O Tank Curvo Flutuante */}
             <FadeIn direction="up" className="relative h-[550px] md:h-[650px] w-full rounded-[3rem] overflow-hidden shadow-2xl border border-secondary/20 flex flex-col items-center justify-center mx-auto max-w-[1400px]">
                 <Image 
                  src="/assets/b4772728-a888-4aee-a312-2c9c2e7b3ba1.jpg" 
                  alt="Dr. Cavanarros" 
                  fill 
                  className="object-cover object-[center_30%] animate-float origin-center"
                  priority
                />
                
                {/* O "Treatment Veil" - Centralizado */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 mix-blend-multiply pointer-events-none"></div>
                
                {/* Texto Centralizado Flutuante sobrepor à foto do medico */}
                <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mt-32 md:mt-48 transition-transform duration-700 hover:scale-105">
                  <span className="inline-block text-[#F5EEE6] font-bold text-[10px] md:text-xs tracking-[0.3em] uppercase bg-black/30 backdrop-blur-md px-6 py-2 rounded-full mb-4 md:mb-6 border border-white/20 shadow-xl">Tradição & Segurança</span>
                  <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-[#F5EEE6] tracking-tight drop-shadow-2xl mb-4">
                    Cirurgia plástica com expertise de gerações.
                  </h1>
                  <p className="text-sm md:text-lg text-[#F5EEE6]/80 font-sans max-w-xl mx-auto drop-shadow-md mb-8">
                    Há décadas transformando vidas com naturalidade e acolhimento inigualável.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <a href="https://wa.me/5565996236875" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center text-sm transition-all rounded-full text-base px-10 bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl shadow-primary/30 h-14 md:h-16 w-full sm:w-auto font-bold uppercase tracking-widest hover:-translate-y-1 hover:scale-110 duration-300">
                      Fale com a Clínica
                    </a>
                  </div>
                </div>
             </FadeIn>
          </div>
        </section>

        {/* ROW: DIFERENCIAIS */}
        <section className="py-20 bg-card">
          <FadeIn className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-border/50">
              
              {/* Div 1 */}
              <div className="group flex flex-col items-center space-y-5 px-6 pt-8 md:pt-0 transform transition-all duration-[600ms] hover:-translate-y-2 cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center text-primary shadow-sm border border-border transition-all duration-[800ms] group-hover:scale-110 group-hover:shadow-xl group-hover:bg-primary/5">
                  <ShieldCheck className="w-8 h-8 transition-transform duration-[800ms] group-hover:rotate-[360deg] group-hover:text-amber-500" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">Técnica R24R</h3>
                <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                  Recuperação rápida e segura para próteses de mama, 
                  focada no conforto e retorno precoce à rotina.
                </p>
              </div>

              {/* Div 2 */}
              <div className="group flex flex-col items-center space-y-5 px-6 pt-8 md:pt-0 transform transition-all duration-[600ms] hover:-translate-y-2 cursor-pointer md:delay-100">
                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center text-primary shadow-sm border border-border transition-all duration-[800ms] group-hover:scale-110 group-hover:shadow-xl group-hover:bg-primary/5">
                  <Star className="w-8 h-8 transition-transform duration-[800ms] group-hover:rotate-[180deg] group-hover:text-amber-500" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">Facelifting Deep Plane</h3>
                <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                  Rejuvenescimento avançado e natural. Atua nas
                  estruturas profundas da face, promovendo alta durabilidade.
                </p>
              </div>

              {/* Div 3 */}
              <div className="group flex flex-col items-center space-y-5 px-6 pt-8 md:pt-0 transform transition-all duration-[600ms] hover:-translate-y-2 cursor-pointer md:delay-200">
                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center text-primary shadow-sm border border-border transition-all duration-[800ms] group-hover:scale-110 group-hover:shadow-xl group-hover:bg-primary/5">
                  <HeartPulse className="w-8 h-8 transition-transform duration-[800ms] group-hover:scale-125 group-hover:text-[#CC5833]" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground transition-colors group-hover:text-[#CC5833]">Tradição & Acolhimento</h3>
                <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                  Legado de gerações na medicina. Unimos o cuidado ético 
                  rigoroso a um atendimento premium e sensível.
                </p>
              </div>

            </div>
          </FadeIn>
        </section>

        {/* FAST TRACKS - AESTHETIC SOFT CURVES V2 */}
        <section className="py-24 bg-background">
          <FadeIn className="container mx-auto px-4 grid md:grid-cols-3 gap-8 max-w-[1200px]">
            {/* Pill 1: Mamas */}
            <a href="/mama" className="group relative h-64 md:h-[400px] rounded-[3rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl block bg-card">
              <div className="absolute inset-0 bg-[#5A3E2B]/50 mix-blend-multiply transition-colors group-hover:bg-[#5A3E2B]/10 z-10 duration-[1500ms]"></div>
              <Image src="/assets/IMG_4279.JPG" fill alt="Mamas" className="object-cover transform group-hover:scale-110 transition-transform duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-[#F5EEE6] transform transition-transform duration-[1000ms] ease-out group-hover:-translate-y-3">
                 <h3 className="font-heading text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight drop-shadow-xl text-center px-4">Cirurgia das Mamas</h3>
                 <p className="mt-2 text-[10px] md:text-xs opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-[600ms] font-semibold tracking-[0.2em] uppercase delay-100">R24R • Mastopexia</p>
                 <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-[600ms] delay-200">
                    <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                      <ChevronRight className="w-5 h-5" />
                    </span>
                 </div>
              </div>
            </a>
            
            {/* Pill 2: Face */}
            <a href="/facial" className="group relative h-64 md:h-[400px] rounded-[3rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl block bg-card">
              <div className="absolute inset-0 bg-[#3d2c20]/60 group-hover:bg-[#3d2c20]/20 transition-colors z-10 duration-[1500ms]"></div>
               <Image src="/assets/IMG_4281.JPG" fill alt="Face" className="object-cover transform group-hover:scale-110 transition-transform duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-[#F5EEE6] transform transition-transform duration-[1000ms] ease-out group-hover:-translate-y-3">
                 <h3 className="font-heading text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight drop-shadow-xl text-center px-4">Lifting Facial</h3>
                 <p className="mt-2 text-[10px] md:text-xs opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-[600ms] font-semibold tracking-[0.2em] uppercase delay-100">Deep Plane • Pálpebras</p>
                 <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-[600ms] delay-200">
                    <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                      <ChevronRight className="w-5 h-5" />
                    </span>
                 </div>
              </div>
            </a>

            {/* Pill 3: Corpo */}
            <a href="#corpo" className="group relative h-64 md:h-[400px] rounded-[3rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl block bg-card">
              <div className="absolute inset-0 bg-[#5A3E2B]/70 group-hover:bg-[#5A3E2B]/30 transition-colors z-10 duration-[1500ms]"></div>
               <Image src="/assets/b4772728-a888-4aee-a312-2c9c2e7b3ba1.jpg" fill alt="Corpo" className="object-cover object-bottom transform group-hover:scale-110 transition-transform duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-[#F5EEE6] transform transition-transform duration-[1000ms] ease-out group-hover:-translate-y-3">
                 <h3 className="font-heading text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight drop-shadow-xl text-center px-4">Contorno Corporal</h3>
                 <p className="mt-2 text-[10px] md:text-xs opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-[600ms] font-semibold tracking-[0.2em] uppercase delay-100">Lipo HD • Abdômen</p>
                 <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-[600ms] delay-200">
                    <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                      <ChevronRight className="w-5 h-5" />
                    </span>
                 </div>
              </div>
            </a>
          </FadeIn>
        </section>

        {/* CIRURGIA DAS MAMAS */}
        <section id="mamas" className="py-24 bg-card">
          <FadeIn className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center group cursor-default">
            <div className="relative h-[400px] md:h-[650px] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-secondary/20">
               <Image 
                src="/assets/IMG_4279.JPG" 
                alt="Cirurgia das Mamas" 
                fill 
                className="object-cover object-center transform transition-transform duration-[4000ms] group-hover:scale-110 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
            </div>
            
            <div className="space-y-8 pr-4">
              <h2 className="font-heading text-4xl lg:text-5xl mb-4 text-foreground tracking-tight transition-colors duration-500 group-hover:text-[#5A3E2B]">
                Cirurgia das Mamas
              </h2>
              <div className="space-y-5 text-foreground/80 leading-relaxed text-lg">
                <p>
                  As mamas são símbolo central da feminilidade. Na Canavarros Serra, abordamos a mamoplastia 
                  de aumento, mastopexia e redução com as técnicas mais seguras e modernas do mundo, notavelmente a <strong>Técnica R24R</strong>.
                </p>
                <ul className="space-y-4 pt-4 border-t border-border/50">
                  <li className="flex items-start transform transition-all duration-500 group-hover:translate-x-2"><CheckCircle2 className="w-6 h-6 mr-3 text-[#5A3E2B] shrink-0 mt-0.5 transition-transform duration-700 group-hover:rotate-[360deg]" /> <p><strong>Recuperação Ultrarrápida:</strong> Movimentação de braços na mesma semana da cirurgia.</p></li>
                  <li className="flex items-start transform transition-all duration-500 delay-[50ms] group-hover:translate-x-2"><CheckCircle2 className="w-6 h-6 mr-3 text-[#5A3E2B] shrink-0 mt-0.5 transition-transform duration-700 delay-[50ms] group-hover:rotate-[360deg]" /> <p><strong>Sutiã Interno Multicamadas:</strong> Maior estabilidade dos tecidos garantindo um colo exuberante a longo prazo.</p></li>
                  <li className="flex items-start transform transition-all duration-500 delay-100 group-hover:translate-x-2"><CheckCircle2 className="w-6 h-6 mr-3 text-[#5A3E2B] shrink-0 mt-0.5 transition-transform duration-700 delay-100 group-hover:rotate-[360deg]" /> <p><strong>Segurança Elevada:</strong> Prevenção do afinamento de tecidos e mapeamento digital anatômico.</p></li>
                </ul>
              </div>
              <a href="#contato" className="inline-flex items-center justify-center text-sm transition-all rounded-full mt-6 bg-primary hover:bg-primary/90 hover:-translate-y-1 hover:shadow-xl shadow-md h-14 px-8 text-base group/btn">
              Saber mais sobre a R24R <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-500 group-hover/btn:translate-x-1" />
            </a>
            </div>
          </FadeIn>
        </section>

        {/* CIRURGIA FACIAL */}
        <section id="face" className="py-24 bg-background">
          <FadeIn className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center group cursor-default">
            
            <div className="space-y-8 lg:order-1 order-2 pr-4">
              <h2 className="font-heading text-4xl lg:text-5xl mb-4 text-foreground tracking-tight transition-colors duration-500 group-hover:text-[#3d2c20]">
                Cirurgia Facial
              </h2>
              <div className="space-y-5 text-foreground/80 leading-relaxed text-lg">
                <p>
                  A beleza facial atemporal não deve parecer "operada". Nosso foco é reposicionar 
                  tecidos aos seus lugares de origem, resgatando a fisionomia jovial da paciente sem distorções estigmatizantes.
                </p>
                <ul className="space-y-4 pt-4 border-t border-border/50">
                  <li className="flex items-start transform transition-all duration-500 group-hover:translate-x-2"><CheckCircle2 className="w-6 h-6 mr-3 text-[#3d2c20] shrink-0 mt-0.5 transition-transform duration-700 group-hover:rotate-[360deg]" /> <p><strong>Facelifting Deep Plane:</strong> Rejuvenescimento tridimensional profundo com ausência de tensão na pele.</p></li>
                  <li className="flex items-start transform transition-all duration-500 delay-[50ms] group-hover:translate-x-2"><CheckCircle2 className="w-6 h-6 mr-3 text-[#3d2c20] shrink-0 mt-0.5 transition-transform duration-700 delay-[50ms] group-hover:rotate-[360deg]" /> <p><strong>Blefaroplastia Premium:</strong> Cirurgia das pálpebras com refinamento milimétrico para um olhar vibrante e sem olhar caído.</p></li>
                  <li className="flex items-start transform transition-all duration-500 delay-100 group-hover:translate-x-2"><CheckCircle2 className="w-6 h-6 mr-3 text-[#3d2c20] shrink-0 mt-0.5 transition-transform duration-700 delay-100 group-hover:rotate-[360deg]" /> <p><strong>Lipotransferência Estrutural:</strong> Uso do próprio tecido do paciente para restabelecer os volumes de juventude.</p></li>
                </ul>
              </div>
              <a href="/facial" className="inline-flex items-center justify-center text-sm transition-all rounded-full mt-6 bg-[#3d2c20] hover:bg-[#3d2c20]/90 text-white shadow-md h-14 px-8 text-base hover:-translate-y-1 hover:shadow-xl group/btn">
                Descubra a Cirurgia Facial <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-500 group-hover/btn:translate-x-1" />
              </a>
            </div>

            <div className="relative h-[400px] md:h-[650px] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-secondary/20 lg:order-2 order-1">
               <Image 
                src="/assets/facial_rejuvenation.png" 
                alt="Face" 
                fill 
                className="object-cover object-center transform transition-transform duration-[4000ms] group-hover:scale-110 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
            </div>
          </FadeIn>
        </section>

        {/* CIRURGIA DO CORPO */}
        <section id="corpo" className="py-24 bg-card">
          <FadeIn className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center group cursor-default">
            
            <div className="relative h-[400px] md:h-[650px] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-secondary/20">
               <Image 
                src="/assets/IMG_4281.JPG" 
                alt="Contorno Corporal" 
                fill 
                className="object-cover object-center transform transition-transform duration-[4000ms] group-hover:scale-110 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
            </div>

            <div className="space-y-8 pl-4">
              <h2 className="font-heading text-4xl lg:text-5xl mb-4 text-foreground tracking-tight transition-colors duration-500 group-hover:text-amber-700">
                Contorno Corporal
              </h2>
              <div className="space-y-5 text-foreground/80 leading-relaxed text-lg">
                <p>
                  A arte de esculpir o corpo exige uma compressão estrutural impecável. Nossa abordagem visa 
                  a simetria, a definição elegante e a segurança através de protocolos de lipoaspiração avançada.
                </p>
                <ul className="space-y-4 pt-4 border-t border-border/50">
                  <li className="flex items-start transform transition-all duration-500 group-hover:translate-x-2"><CheckCircle2 className="w-6 h-6 mr-3 text-amber-700 shrink-0 mt-0.5 transition-transform duration-700 group-hover:rotate-[360deg]" /> <p><strong>Lipo HD e Lipoescultura:</strong> Definição precisa aliada à lipoenxertia glútea, devolvendo a curva sinuosa do corpo.</p></li>
                  <li className="flex items-start transform transition-all duration-500 delay-[50ms] group-hover:translate-x-2"><CheckCircle2 className="w-6 h-6 mr-3 text-amber-700 shrink-0 mt-0.5 transition-transform duration-700 delay-[50ms] group-hover:rotate-[360deg]" /> <p><strong>Abdominoplastia em Âncora:</strong> Reconstrução da parede abdominal preservando a elegância e afinando a silhueta.</p></li>
                  <li className="flex items-start transform transition-all duration-500 delay-100 group-hover:translate-x-2"><CheckCircle2 className="w-6 h-6 mr-3 text-amber-700 shrink-0 mt-0.5 transition-transform duration-700 delay-100 group-hover:rotate-[360deg]" /> <p><strong>Integração Morpheus Body:</strong> Terapia dupla com radiofrequência interna simultânea, acelerando e maximizando a retração de pele da lipo.</p></li>
                </ul>
              </div>
              <a href="#contato" className="inline-flex items-center justify-center text-sm transition-all rounded-full mt-6 bg-amber-700 hover:bg-amber-800 shadow-md h-14 px-8 text-base text-primary-foreground hover:-translate-y-1 hover:shadow-xl group/btn">
                Agendar Triagem Corporal <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-500 group-hover/btn:translate-x-1" />
              </a>
            </div>

          </FadeIn>
        </section>

        {/* COSMIATRIA */}
        <section id="cosmiatria" className="py-24 bg-[#5A3E2B] text-background">
          <FadeIn className="container mx-auto px-4 text-center">
             <span className="text-secondary font-bold text-xs tracking-[0.2em] uppercase">Tecnologia & Inovação</span>
             <h2 className="font-heading text-4xl lg:text-5xl mt-2 mb-16 tracking-tight text-[#F5EEE6]">
                Cosmiatria Avançada
             </h2>
             
             <div className="grid md:grid-cols-3 gap-8 text-left">
               <div className="bg-background/5 border border-white/10 rounded-[2rem] p-10 hover:bg-background/10 transition-colors">
                  <h3 className="font-heading text-2xl font-semibold mb-4 text-[#D1B48C]">Morpheus Face & Body</h3>
                  <p className="opacity-90 text-sm leading-relaxed text-[#F5EEE6]">
                    Radiofrequência microagulhada definitiva para tratar flacidez, estimular colágeno massivo e redesenhar o contorno facial e corporal sem tempo de inatividade prolongado.
                  </p>
               </div>
               <div className="bg-background/5 border border-white/10 rounded-[2rem] p-10 hover:bg-background/10 transition-colors">
                  <h3 className="font-heading text-2xl font-semibold mb-4 text-[#D1B48C]">Retração de Pele a Laser</h3>
                  <p className="opacity-90 text-sm leading-relaxed text-[#F5EEE6]">
                    Plataformas avançadas de retração pontual e ablação fracionada que renovam superficial e profundamente toda a trama cutânea com extrema precisão e segurança.
                  </p>
               </div>
                 <div className="bg-background/5 border border-white/10 rounded-[2rem] p-10 hover:bg-background/10 transition-colors">
                  <h3 className="font-heading text-2xl font-semibold mb-4 text-[#D1B48C]">Arquitetura Injetável</h3>
                  <p className="opacity-90 text-sm leading-relaxed text-[#F5EEE6]">
                    Reposição estrutural de volumes perdidos com ácido hialurônico e bioestimuladores de longa duração, seguindo os princípios de embelezamento dos MD Codes™.
                  </p>
               </div>
             </div>
             
             <div className="mt-12 text-center">
                <a href="/estetica" className="inline-flex items-center justify-center text-sm transition-all rounded-full bg-[#D1B48C] hover:bg-[#D1B48C]/90 text-[#3d2c20] font-bold px-10 h-14 shadow-lg shadow-black/20">
                  Explorar os Programas de Estética Completa <ChevronRight className="w-5 h-5 ml-2" />
                </a>
             </div>
          </FadeIn>
        </section>

        {/* GALERIA & AVALIAÇÕES (NOVA VERSÃO INTERATIVA MOBILE-FIRST) */}
        <section className="py-28 bg-card overflow-hidden">
          <FadeIn className="container mx-auto px-4 text-center">
            <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase">High Level Standards</span>
            <h2 className="font-heading text-4xl lg:text-5xl mt-2 mb-4 text-foreground tracking-tight">
              A Excelência na Prática
            </h2>
            <div className="bg-primary/5 border border-primary/20 text-foreground text-[10px] md:text-xs py-2 px-6 rounded-full inline-flex items-center mt-2 mb-12 backdrop-blur-sm">
               <ShieldCheck className="w-4 h-4 mr-2 text-primary shrink-0" />
               <span className="text-left leading-tight">Aviso Ético (CFM): Fotografias ilustram o padrão alcançado. Medicina não é ciência exata.</span>
            </div>

            {/* DADOS / ESTATÍSTICAS ANIMADAS (Scroll interaction) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mb-16">
              <div className="bg-background border border-border p-6 rounded-[2rem] shadow-sm transform hover:-translate-y-1 transition-transform">
                <div className="text-3xl lg:text-5xl font-heading font-bold text-primary mb-2">15+</div>
                <div className="text-xs uppercase tracking-widest text-foreground/70 font-semibold">Anos de Foco</div>
              </div>
              <div className="bg-background border border-border p-6 rounded-[2rem] shadow-sm transform hover:-translate-y-1 transition-transform">
                <div className="text-3xl lg:text-5xl font-heading font-bold text-primary mb-2">5k+</div>
                <div className="text-xs uppercase tracking-widest text-foreground/70 font-semibold">Vidas Tocadas</div>
              </div>
              <div className="bg-background border border-border p-6 rounded-[2rem] shadow-sm transform hover:-translate-y-1 transition-transform">
                <div className="text-3xl lg:text-5xl font-heading font-bold text-primary mb-2">2x</div>
                <div className="text-xs uppercase tracking-widest text-foreground/70 font-semibold">Unidades (MT)</div>
              </div>
              <div className="bg-background border border-border p-6 rounded-[2rem] shadow-sm transform hover:-translate-y-1 transition-transform">
                <div className="text-3xl lg:text-5xl font-heading font-bold text-primary mb-2">100%</div>
                <div className="text-xs uppercase tracking-widest text-foreground/70 font-semibold">Suporte VIP</div>
              </div>
            </div>

            {/* MARQUEE INFINITO DA GALERIA */}
            <div className="pause-marquee relative w-[100vw] left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] overflow-hidden py-8">
              {/* Degradê lateral para blending suave no desktop */}
              <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none"></div>
              <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none"></div>
              
              {/* Array Duplicado para fazer o loop de 50% suavemente */}
              <div className="flex w-max animate-marquee gap-4 md:gap-8 px-4 hover:[animation-play-state:paused]">
                {[...['4282','4283','4287','4289','4291','4292','4294','4295'], ...['4282','4283','4287','4289','4291','4292','4294','4295']].map((id, idx) => (
                  <div key={idx} className="relative h-60 w-48 md:h-80 md:w-64 rounded-[2rem] md:rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-xl border border-secondary/20 shrink-0 cursor-pointer">
                    <Image src={`/assets/IMG_${id}.JPG`} fill alt={`Visualização Clínica ${idx}`} className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* REVIEWS SWIPEÁVEIS (SNAP SCROLL) */}
            <div className="mt-20 w-[100vw] left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] relative">
              <div className="flex overflow-x-auto snap-mandatory-x gap-6 px-6 md:px-0 md:justify-center pb-12 pt-4 no-scrollbar">
                
                {/* Review 1 */}
                <div className="group bg-background min-w-[85vw] md:min-w-[400px] max-w-[400px] p-10 py-12 rounded-[3rem] border border-secondary/40 shadow-xl shrink-0 snap-center-element flex flex-col justify-between transform transition-all duration-[600ms] hover:-translate-y-4 hover:shadow-2xl cursor-pointer">
                   <div className="flex justify-center mb-6 text-primary gap-1">
                     {[1,2,3,4,5].map((i) => <Star key={i} className={`w-5 h-5 md:w-6 md:h-6 fill-current transition-all duration-[800ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:rotate-[360deg] group-hover:scale-125 group-hover:text-amber-500`} style={{ transitionDelay: `${i * 70}ms` }} />)}
                   </div>
                   <h3 className="font-heading text-lg md:text-xl italic text-foreground mb-8 leading-relaxed">
                     "Experiência incrível desde a recepção até o bloco cirúrgico. Dr. Márcio transmite uma tranquilidade e segurança inigualáveis. Meu resultado excedeu as expectativas."
                   </h3>
                   <div className="pt-6 border-t border-border mt-auto">
                     <p className="text-sm uppercase tracking-widest text-[#CC5833] font-bold">Amanda S.</p>
                     <p className="text-xs text-foreground/50 mt-1">Google Reviews</p>
                   </div>
                </div>

                {/* Review 2 */}
                <div className="group bg-background min-w-[85vw] md:min-w-[400px] max-w-[400px] p-10 py-12 rounded-[3rem] border border-secondary/40 shadow-xl shrink-0 snap-center-element flex flex-col justify-between transform md:scale-105 z-10 hidden md:flex transition-all duration-[600ms] hover:-translate-y-4 hover:shadow-2xl cursor-pointer">
                   <div className="flex justify-center mb-6 text-primary gap-1">
                     {[1,2,3,4,5].map((i) => <Star key={i} className={`w-5 h-5 md:w-6 md:h-6 fill-current transition-all duration-[800ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:rotate-[360deg] group-hover:scale-125 group-hover:text-amber-500`} style={{ transitionDelay: `${i * 70}ms` }} />)}
                   </div>
                   <h3 className="font-heading text-lg md:text-xl italic text-foreground mb-8 leading-relaxed font-semibold">
                     "O conceito R24R é real! Em poucos dias eu já estava retomando minha vida com zero dor. O cuidado da clínica em Sorriso é formidável."
                   </h3>
                   <div className="pt-6 border-t border-border mt-auto">
                     <p className="text-sm uppercase tracking-widest text-primary font-bold">Camila T.</p>
                     <p className="text-xs text-foreground/50 mt-1">Procedimento de Mamas</p>
                   </div>
                </div>

                {/* Review 3 */}
                <div className="group bg-background min-w-[85vw] md:min-w-[400px] max-w-[400px] p-10 py-12 rounded-[3rem] border border-secondary/40 shadow-xl shrink-0 snap-center-element flex flex-col justify-between transform transition-all duration-[600ms] hover:-translate-y-4 hover:shadow-2xl cursor-pointer">
                   <div className="flex justify-center mb-6 text-primary gap-1">
                     {[1,2,3,4,5].map((i) => <Star key={i} className={`w-5 h-5 md:w-6 md:h-6 fill-current transition-all duration-[800ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:rotate-[360deg] group-hover:scale-125 group-hover:text-amber-500`} style={{ transitionDelay: `${i * 70}ms` }} />)}
                   </div>
                   <h3 className="font-heading text-lg md:text-xl italic text-foreground mb-8 leading-relaxed">
                     "Realizei o Deep Plane com a equipe e foi a melhor decisão. Ninguém percebe que fiz cirurgia, apenas dizem que rejuvenesci 15 anos. Muito natural."
                   </h3>
                   <div className="pt-6 border-t border-border mt-auto">
                     <p className="text-sm uppercase tracking-widest text-[#CC5833] font-bold">Letícia G.</p>
                     <p className="text-xs text-foreground/50 mt-1">Google Reviews</p>
                   </div>
                </div>

              </div>
              
              {/* Mobile Indicator Helper */}
              <div className="md:hidden flex justify-center gap-2 -mt-4">
                 <div className="w-2 h-2 rounded-full bg-primary"></div>
                 <div className="w-2 h-2 rounded-full bg-primary/30"></div>
                 <div className="w-2 h-2 rounded-full bg-primary/30"></div>
              </div>
            </div>

          </FadeIn>
        </section>

        {/* SOBRE O CIRURGIÃO */}
        <section id="sobre" className="py-32 bg-background">
          <FadeIn className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
             
             {/* Imagem Dr */}
             <div className="relative h-[400px] md:h-[700px] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl lg:order-1 order-2 border border-secondary/20">
               <Image 
                src="/assets/Dr Canavarros - Fotos CC 01jul-23-24.jpg" 
                alt="Dr. Márcio Canavarros" 
                fill 
                className="object-cover object-[center_20%]"
              />
            </div>

            {/* Texto Dr */}
            <div className="space-y-8 lg:order-2 order-1 pr-4">
              <div>
                <h2 className="font-heading text-4xl lg:text-5xl mb-4 text-foreground tracking-tight">
                  Sobre o Cirurgião e <br/> a Clínica
                </h2>
                <h4 className="text-xl text-primary font-medium tracking-wide">
                  Dr. Márcio Augusto M. Canavarros Serra <br/> 
                  <span className="text-sm opacity-80 font-sans tracking-normal font-normal">CRM MT 6323 | RQE 3727</span>
                </h4>
              </div>
              
              <div className="space-y-5 text-foreground/80 leading-relaxed text-lg">
                <p>
                  A <strong>Canavarros Serra Cirurgia Plástica</strong> representa a continuidade de uma 
                  sólida tradição familiar dedicada à medicina. Trazemos em nossa essência 
                  o compromisso ético de guiar pacientes rumo ao bem-estar e da autoestima com 
                  máxima segurança e precisão técnica.
                </p>
                <p>
                  Membro ativo de renomadas sociedades internacionais de cirurgia, com extenso background de estudos de caso. 
                  Somos especializados nas técnicas cirúrgicas estéticas de alto padrão,
                  englobando o contorno corporal contemporâneo (incluindo avanços híbridos da R24R) e o rejuvenescimento profundo do terço cérvico-facial (Facelifting Deep Plane).
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6 border-t border-border/50 pt-6">
                  <div>
                    <span className="text-3xl font-heading text-primary font-bold">15+</span>
                    <p className="text-xs uppercase tracking-widest opacity-70 mt-1">Anos de Tradição</p>
                  </div>
                  <div>
                    <span className="text-3xl font-heading text-primary font-bold">100%</span>
                    <p className="text-xs uppercase tracking-widest opacity-70 mt-1">Foco em Segurança</p>
                  </div>
                </div>
              </div>

               <a href="#contato" className="inline-flex items-center justify-center text-sm transition-all rounded-full mt-4 bg-primary hover:bg-primary/90 shadow-md h-12 px-8">
              Conheça as sedes <ChevronRight className="w-4 h-4 ml-2" />
            </a>
            </div>

          </FadeIn>
        </section>

        {/* FAQ - NATIVE HTML (Zero JS Overhead) */}
        <section className="py-24 bg-card">
          <FadeIn className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase">Tire suas dúvidas</span>
              <h2 className="font-heading text-4xl lg:text-5xl mt-2 tracking-tight text-foreground">
                Perguntas Frequentes
              </h2>
            </div>
            
            <div className="space-y-4">
              {[
                {q: "Como funciona a avaliação com o Dr. Márcio?", a: "A avaliação é o momento mais importante. É nela que avaliamos se o seu biotipo tem indicação para a técnica desejada, alinhando suas expectativas à realidade cirúrgica segura e solicitando exames minuciosos de rastreamento de saúde."},
                {q: "O que é a técnica R24R na cirurgia das mamas?", a: "A técnica R24R (Recuperação em 24 Horas) é um protocolo rígido intraoperatório empregado com o objetivo de reduzir sangramentos e propiciar que você levante os braços e recupere a funcionalidade motora já no dia da cirurgia, trazendo mais independência."},
                {q: "Existe idade ideal para o Facelift Deep Plane?", a: "Habitualmente recomendado para pacientes entre 45 e 70 anos. Contudo, não focamos puramente em idade biológica, mas na flacidez profunda dos tecidos. O grande diferencial desta cirurgia é não puxar a pele, mas sim o SMAS (músculo subjacente), garantindo ausência de estigmas."},
                {q: "Posso aliar cirurgia facial ao Morpheus?", a: "Sim. Nossos protocolos costumam convergir o Lifting cirúrgico para tração muscular junto à tecnologia Morpheus para tratamento da superfície e derme profunda, maximizando a produção de colágeno e a textura visual da pele."},
              ].map((item, i) => (
                <details key={i} className="group border border-border bg-background rounded-3xl p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                  <summary className="flex items-center justify-between font-heading text-lg font-bold outline-none text-foreground">
                    {item.q}
                    <span className="transition-transform group-open:rotate-180 flex shrink-0 justify-center items-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                      <ChevronRight className="w-5 h-5 rotate-90" />
                    </span>
                  </summary>
                  <p className="text-foreground/70 mt-4 leading-relaxed pl-2 text-sm border-l-2 border-primary/20">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* CONTATO & LOCALIZAÇÃO */}
        <section id="contato" className="py-24 bg-background">
          <FadeIn className="container mx-auto px-4 grid lg:grid-cols-2 gap-16">
            <div className="bg-card p-10 md:p-14 rounded-[3rem] border border-border shadow-xl">
               <h2 className="font-heading text-4xl mb-6 text-foreground tracking-tight">
                 Agende sua Avaliação
               </h2>
               <p className="text-foreground/70 mb-8">
                 Preencha os dados abaixo e entraremos em contato via WhatsApp com as melhores datas.
               </p>
               <ContactForm />
            </div>

            <div className="flex flex-col justify-center space-y-12 lg:pl-12">
               <div>
                 <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase">Nossas Clínicas</span>
                 <h2 className="font-heading text-4xl lg:text-5xl mt-2 mb-6 tracking-tight">Onde nos<br/>encontrar</h2>
                 <p className="text-foreground/70 leading-relaxed mb-8 text-lg">
                   Possuímos duas unidades estruturadas com a mais alta tecnologia.
                 </p>
               </div>
               
               <div className="space-y-8">
                 <div className="bg-card border border-border rounded-3xl p-6 shadow-sm">
                   <div className="flex items-start gap-4 mb-4">
                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-border">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                     </div>
                     <div>
                       <h4 className="font-heading text-xl font-bold">Unidade Cuiabá</h4>
                       <p className="text-foreground/70 text-xs mt-1">Rua General Ramiro de Noronha, 475<br/>Jardim Cuiabá - MT</p>
                     </div>
                   </div>
                   <div className="w-full h-32 rounded-xl overflow-hidden bg-muted relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all border border-border">
                     <iframe src="https://maps.google.com/maps?q=Edificio+SB+Medical,+Cuiaba,+MT&z=16&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                   </div>
                 </div>

                 <div className="bg-card border border-border rounded-3xl p-6 shadow-sm">
                   <div className="flex items-start gap-4 mb-4">
                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-border">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                     </div>
                     <div>
                       <h4 className="font-heading text-xl font-bold">Unidade Sorriso</h4>
                       <p className="text-foreground/70 text-xs mt-1">Clínica Stefanela Gatto - Av. Porto Alegre, 2984</p>
                     </div>
                   </div>
                   <div className="w-full h-32 rounded-xl overflow-hidden bg-muted relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all border border-border">
                     <iframe src="https://maps.google.com/maps?q=Clinica+Stefanela+Gatto,+Sorriso,+MT&z=16&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                   </div>
                 </div>
               </div>
            </div>
          </FadeIn>
        </section>

      </main>


    </div>
  )
}
