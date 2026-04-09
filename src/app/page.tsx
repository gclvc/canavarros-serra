import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Star, ShieldCheck, HeartPulse, ChevronRight, CheckCircle2 } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-[20px] bg-background/80 border-b border-border/40 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-48 h-12">
              <Image 
                src="/assets/logotipo.png" 
                alt="Canavarros Serra" 
                fill 
                className="object-contain object-left drop-shadow-sm" 
                priority
              />
            </div>
          </div>
          
          <nav className="hidden lg:flex gap-8">
            <a href="#mamas" className="text-sm font-medium hover:text-primary transition-colors text-foreground/80">Cirurgia das Mamas</a>
            <a href="#face" className="text-sm font-medium hover:text-primary transition-colors text-foreground/80">Cirurgia Facial</a>
            <a href="#cosmiatria" className="text-sm font-medium hover:text-primary transition-colors text-foreground/80">Cosmiatria</a>
            <a href="#sobre" className="text-sm font-medium hover:text-primary transition-colors text-foreground/80">Sobre nós</a>
          </nav>
          
          <Button asChild className=\"rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 hidden sm:flex shadow-md shadow-primary/20\">
            <a href=\"https://wa.me/5565996236875\" target=\"_blank\" rel=\"noopener noreferrer\">
              <Phone className="w-4 h-4 mr-2" />
              (65) 99623-6875
            </a>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative pt-16 pb-28 overflow-hidden">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Texto Hero */}
            <div className="max-w-xl space-y-6">
              <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase">Tradição familiar e segurança</span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-foreground tracking-tight drop-shadow-sm">
                Cirurgia plástica com tradição familiar, expertise e segurança.
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed font-sans max-w-md pt-2">
                Há gerações dedicados à medicina e à arte de transformar vidas com 
                naturalidade, precisão e cuidado cirúrgico de excelência.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-6">
                <Button asChild size="lg" className="rounded-full text-base px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/30 h-14">
                  <a href="https://wa.me/5565996236875" target="_blank" rel="noopener noreferrer">Fale no WhatsApp</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full text-base px-8 border-primary/20 text-foreground hover:bg-primary/5 h-14">
                  <a href="#mamas">Nossos Procedimentos</a>
                </Button>
              </div>
            </div>
            
            {/* Imagem Hero */}
            <div className="relative h-[400px] md:h-[650px] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-secondary/20">
               <Image 
                src="/assets/b4772728-a888-4aee-a312-2c9c2e7b3ba1.jpg" 
                alt="Aesthetic Elegance" 
                fill 
                className="object-cover object-center"
                priority
              />
              {/* O "Treatment Veil" - Sobreposição refinada exigida pelo design system Sienna Muse */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#5A3E2B]/10 to-transparent mix-blend-overlay"></div>
            </div>

          </div>
        </section>

        {/* ROW: DIFERENCIAIS */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-border/50">
              
              {/* Div 1 */}
              <div className="flex flex-col items-center space-y-5 px-6 pt-8 md:pt-0">
                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center text-primary shadow-sm border border-border">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground">Técnica R24R</h3>
                <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                  Recuperação rápida e segura para próteses de mama, 
                  focada no conforto e retorno precoce à rotina.
                </p>
              </div>

              {/* Div 2 */}
              <div className="flex flex-col items-center space-y-5 px-6 pt-8 md:pt-0">
                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center text-primary shadow-sm border border-border">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground">Facelifting Deep Plane</h3>
                <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                  Rejuvenescimento avançado e natural. Atua nas
                  estruturas profundas da face, promovendo alta durabilidade.
                </p>
              </div>

              {/* Div 3 */}
              <div className="flex flex-col items-center space-y-5 px-6 pt-8 md:pt-0">
                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center text-primary shadow-sm border border-border">
                  <HeartPulse className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground">Tradição & Acolhimento</h3>
                <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                  Legado de gerações na medicina. Unimos o cuidado ético 
                  rigoroso a um atendimento premium e sensível.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* FAST TRACKS */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
            <div className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer shadow-md border border-border">
              <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply transition-opacity group-hover:opacity-60 z-10"></div>
              <Image src="/assets/IMG_4277.JPG" fill alt="Mamas" className="object-cover" />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-foreground group-hover:scale-105 transition-transform duration-500">
                 <h3 className="font-heading text-3xl font-bold">Cirurgia das Mamas</h3>
                 <p className="mt-2 text-sm opacity-80 font-semibold tracking-widest uppercase">18-40 anos</p>
              </div>
            </div>
            <div className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer shadow-md border border-border">
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity group-hover:opacity-40 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 z-10"></div>
              <Image src="/assets/IMG_4285.JPG" fill alt="Face" className="object-cover" />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-foreground group-hover:scale-105 transition-transform duration-500">
                 <h3 className="font-heading text-3xl font-bold">Cirurgia Facial</h3>
                 <p className="mt-2 text-sm opacity-80 font-semibold tracking-widest uppercase">50-70 anos</p>
              </div>
            </div>
          </div>
        </section>

        {/* CIRURGIA DAS MAMAS */}
        <section id="mamas" className="py-24 bg-card">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] md:h-[650px] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-secondary/20">
               <Image 
                src="/assets/IMG_4281.JPG" 
                alt="Cirurgia das Mamas" 
                fill 
                className="object-cover object-center"
              />
            </div>
            
            <div className="space-y-8 pr-4">
              <h2 className="font-heading text-4xl lg:text-5xl mb-4 text-foreground tracking-tight">
                Cirurgia das Mamas
              </h2>
              <div className="space-y-5 text-foreground/80 leading-relaxed text-lg">
                <p>
                  As mamas são símbolo central da feminilidade. Na Canavarros Serra, abordamos a mamoplastia 
                  de aumento, mastopexia e redução com as técnicas mais seguras e modernas do mundo, notavelmente a <strong>Técnica R24R</strong>.
                </p>
                <ul className="space-y-4 pt-4 border-t border-border/50">
                  <li className="flex items-start"><CheckCircle2 className="w-6 h-6 mr-3 text-primary shrink-0 mt-0.5" /> <p><strong>Recuperação Ultrarrápida:</strong> Movimentação de braços na mesma semana da cirurgia.</p></li>
                  <li className="flex items-start"><CheckCircle2 className="w-6 h-6 mr-3 text-primary shrink-0 mt-0.5" /> <p><strong>Sutiã Interno Multicamadas:</strong> Maior estabilidade dos tecidos garantindo um colo exuberante a longo prazo.</p></li>
                  <li className="flex items-start"><CheckCircle2 className="w-6 h-6 mr-3 text-primary shrink-0 mt-0.5" /> <p><strong>Segurança Elevada:</strong> Prevenção do afinamento de tecidos e mapeamento digital anatômico.</p></li>
                </ul>
              </div>
              <Button asChild className="rounded-full mt-6 bg-primary hover:bg-primary/90 shadow-md h-14 px-8 text-base">
                <a href="#contato">Saber mais sobre a R24R <ChevronRight className="w-5 h-5 ml-2" /></a>
              </Button>
            </div>
          </div>
        </section>

        {/* CIRURGIA FACIAL */}
        <section id="face" className="py-24 bg-background">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8 lg:order-1 order-2 pr-4">
              <h2 className="font-heading text-4xl lg:text-5xl mb-4 text-foreground tracking-tight">
                Cirurgia Facial
              </h2>
              <div className="space-y-5 text-foreground/80 leading-relaxed text-lg">
                <p>
                  A beleza facial atemporal não deve parecer "operada". Nosso foco é reposicionar 
                  tecidos aos seus lugares de origem, resgatando a fisionomia jovial da paciente sem distorções estigmatizantes.
                </p>
                <ul className="space-y-4 pt-4 border-t border-border/50">
                  <li className="flex items-start"><CheckCircle2 className="w-6 h-6 mr-3 text-primary shrink-0 mt-0.5" /> <p><strong>Facelifting Deep Plane:</strong> Rejuvenescimento tridimensional profundo com ausência de tensão na pele.</p></li>
                  <li className="flex items-start"><CheckCircle2 className="w-6 h-6 mr-3 text-primary shrink-0 mt-0.5" /> <p><strong>Blefaroplastia Premium:</strong> Cirurgia das pálpebras com refinamento milimétrico para um olhar vibrante e sem olhar caído.</p></li>
                  <li className="flex items-start"><CheckCircle2 className="w-6 h-6 mr-3 text-primary shrink-0 mt-0.5" /> <p><strong>Lipotransferência Estrutural:</strong> Uso do próprio tecido do paciente para restabelecer os volumes de juventude.</p></li>
                </ul>
              </div>
              <Button asChild className="rounded-full mt-6 bg-primary hover:bg-primary/90 shadow-md h-14 px-8 text-base">
                <a href="#contato">Agendar Avaliação Facial <ChevronRight className="w-5 h-5 ml-2" /></a>
              </Button>
            </div>

            <div className="relative h-[400px] md:h-[650px] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-secondary/20 lg:order-2 order-1">
               <Image 
                src="/assets/IMG_4279.JPG" 
                alt="Face" 
                fill 
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* COSMIATRIA */}
        <section id="cosmiatria" className="py-24 bg-[#5A3E2B] text-background">
          <div className="container mx-auto px-4 text-center">
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
          </div>
        </section>

        {/* GALERIA & AVALIAÇÕES */}
        <section className="py-28 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-4xl lg:text-5xl mb-4 text-foreground tracking-tight">
              A Excelência na Prática
            </h2>
            <div className="bg-primary/10 border border-primary/20 text-foreground text-xs py-3 px-6 rounded-full inline-flex items-center mt-2 mb-12">
               <ShieldCheck className="w-4 h-4 mr-2 text-primary" />
               Aviso Ético (CFM): As fotografias ilustram o alto padrão alcançado, mas a medicina não é ciência exata.
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 xl:gap-8 max-w-5xl mx-auto">
              {[1, 2, 3, 4, 5, 8].map((idx) => (
                <div key={idx} className="relative h-72 rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-[800ms] shadow-sm border border-border">
                  <Image src={`/assets/IMG_428${idx}.JPG`} fill alt={`Visualização Clínica ${idx}`} className="object-cover" />
                </div>
              ))}
            </div>

            <div className="mt-20 max-w-3xl mx-auto bg-background p-10 rounded-[3rem] border border-secondary shadow-lg">
               <div className="flex justify-center mb-6 text-primary">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-8 h-8 fill-current" />)}
               </div>
               <h3 className="font-heading text-xl md:text-2xl italic text-foreground mb-6 leading-relaxed">
                 "Experiência incrível desde a recepção até o bloco cirúrgico. Dr. Márcio transmite uma tranquilidade e segurança inigualáveis. Meu resultado excedeu todas as expectativas."
               </h3>
               <p className="text-sm uppercase tracking-widest text-primary font-bold">Avaliação Verificada no Google</p>
            </div>
          </div>
        </section>

        {/* SOBRE O CIRURGIÃO */}
        <section id="sobre" className="py-32 bg-background">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
             
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
                  Somos especializados nas técnicas cirúrgicas estéticas de alto padrão,
                  englobando o contorno corporal contemporâneo (incluindo R24R) e o rejuvenescimento do terço cérvico-facial (Facelifting Deep Plane).
                </p>
                <p>
                  Nosso grande diferencial é a busca incessante por um resultado natural, aliada 
                  à utilização das mais altas tecnologias e acolhimento humano desde a primeira consulta.
                </p>
              </div>

               <Button asChild className="rounded-full mt-4 bg-primary hover:bg-primary/90 shadow-md h-12 px-8">
                 <a href="#contato">Conheça as sedes <ChevronRight className="w-4 h-4 ml-2" /></a>
               </Button>
            </div>

          </div>
        </section>

        {/* CONTATO & LOCALIZAÇÃO */}
        <section id="contato" className="py-24 bg-background">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16">
            <div className="bg-card p-10 md:p-14 rounded-[3rem] border border-border shadow-xl">
               <h2 className="font-heading text-4xl mb-6 text-foreground tracking-tight">
                 Agende sua Avaliação
               </h2>
               <p className="text-foreground/70 mb-8">
                 Preencha os dados abaixo e entraremos em contato via WhatsApp com as melhores datas.
               </p>
               <form className="space-y-6">
                 <div>
                   <label className="text-sm font-medium text-foreground">Nome Completo</label>
                   <input type="text" className="w-full mt-2 bg-background border border-border rounded-full h-12 px-6 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Seu nome" />
                 </div>
                 <div>
                   <label className="text-sm font-medium text-foreground">WhatsApp</label>
                   <input type="text" className="w-full mt-2 bg-background border border-border rounded-full h-12 px-6 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="(65) 99999-9999" />
                 </div>
                 <div>
                   <label className="text-sm font-medium text-foreground">Procedimento de Interesse</label>
                   <select className="w-full mt-2 bg-background border border-border rounded-full h-12 px-6 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground/80 appearance-none">
                     <option>Selecione um procedimento</option>
                     <option>Cirurgia das Mamas (R24R)</option>
                     <option>Facelift Deep Plane / Blefaroplastia</option>
                     <option>Cosmiatria / Morpheus</option>
                   </select>
                 </div>
                 <div className="flex items-start gap-3 mt-4">
                   <input type="checkbox" className="mt-1" />
                   <p className="text-xs text-foreground/60 w-11/12">Autorizo o contato via WhatsApp e concordo com a política de privacidade.</p>
                 </div>
                 <Button asChild className="w-full rounded-full mt-6 bg-primary hover:bg-primary/90 h-14 text-base shadow-md">
                   <a href="https://wa.me/5565996236875" target="_blank" rel="noopener noreferrer">Solicitar Contato Especializado</a>
                 </Button>
               </form>
            </div>

            <div className="flex flex-col justify-center space-y-12 lg:pl-12">
               <div>
                 <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase">Nossas Clínicas</span>
                 <h2 className="font-heading text-4xl lg:text-5xl mt-2 mb-6 tracking-tight">Onde nos<br/>encontrar</h2>
                 <p className="text-foreground/70 leading-relaxed mb-8 text-lg">
                   Possuímos duas unidades estruturadas com a mais alta tecnologia.
                 </p>
               </div>
               
               <div className="flex items-start gap-6">
                 <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-border">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                 </div>
                 <div>
                   <h4 className="font-heading text-xl font-bold mb-2">Unidade Cuiabá</h4>
                   <p className="text-foreground/70 text-sm">Edifício SB Tower - Sala 100<br/>Cuiabá, Mato Grosso</p>
                 </div>
               </div>

               <div className="flex items-start gap-6 pt-6 border-t border-border/50">
                 <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-border">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                 </div>
                 <div>
                   <h4 className="font-heading text-xl font-bold mb-2">Unidade Sorriso</h4>
                   <p className="text-foreground/70 text-sm">Av. Brasil, Centro<br/>Sorriso, Mato Grosso</p>
                 </div>
               </div>
            </div>
          </div>
        </section>

      </main>

      {/* INSTITUTIONAL FOOTER */}
      <footer className="bg-foreground text-card py-16 mt-auto">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-12 text-sm">
          <div className="max-w-sm">
            <p className="font-heading text-2xl mb-4 text-primary">Canavarros Serra</p>
            <p className="opacity-90 font-medium">Dr. Márcio Augusto M. Canavarros Serra</p>
            <p className="opacity-70 mt-1">CRM MT 6323 | RQE 3727</p>
            
            <p className="mt-8 opacity-50 text-[11px] leading-relaxed">
               Aviso ético: As imagens exibidas são meramente ilustrativas e não representam promessa de resultados. 
               Os resultados variam de acordo com o biotipo. 
               A consulta médica presencial é indispensável segundo as diretrizes do Conselho Federal de Medicina.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-16">
            <div>
              <p className="opacity-70 font-bold uppercase tracking-wider mb-6 text-xs text-primary">Nossas Clínicas</p>
              <ul className="space-y-4 opacity-80">
                <li className="hover:text-primary transition-colors cursor-pointer">Unidade Cuiabá</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Unidade Sorriso</li>
              </ul>
            </div>
            <div>
              <p className="opacity-70 font-bold uppercase tracking-wider mb-6 text-xs text-primary">Contato Urgente</p>
              <ul className="space-y-4 opacity-80">
                <li className="hover:text-primary transition-colors cursor-pointer">WhatsApp Principal</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Agendamento Online</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
