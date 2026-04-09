import { Star } from "lucide-react"

const reviewsText = {
  facial: [
    { name: "Letícia G.", service: "Google Reviews - Lifting Facial", text: "Realizei o Deep Plane com a equipe e foi a melhor decisão. Ninguém percebe que fiz cirurgia, apenas dizem que rejuvenesci 15 anos. Muito natural." },
    { name: "Sandra M.", service: "Google Reviews - Videoendoscopia", text: "A videoendoscopia na testa não deixou cicatrizes visíveis! Fiquei com aquele olhar descansado maravilhoso. Atendimento premium em Cuiabá." },
    { name: "Vera D.", service: "Google Reviews", text: "Dr. Márcio transmite uma tranquilidade e segurança inigualáveis. Meu resultado excedeu as expectativas de durabilidade e harmonia natural." }
  ],
  mama: [
    { name: "Camila T.", service: "Procedimento de Mamas", text: "O conceito R24R é real! Em poucos dias eu já estava retomando minha vida com zero dor. O cuidado da clínica em Cuiabá é formidável." },
    { name: "Júlia R.", service: "Google Reviews - Mastopexia", text: "Coloquei as próteses com sutiã interno estruturado faz 1 ano e o colo continuou marcadinho mesmo após emagrecer. Excelência absoluta." },
    { name: "Amanda S.", service: "Google Reviews", text: "Experiência incrível desde a recepção até o bloco cirúrgico. A recuperação rápida em 24h foi a melhor coisa que vivi." }
  ],
  estetica: [
    { name: "Sônia B.", service: "Google Reviews - Cosmiatria", text: "Fiz sessões de Morpheus e o bioestimulador com a doutora e o resultado na flacidez do meu pescoço foi absurdo. Vale cada centavo." },
    { name: "Mariana F.", service: "Google Reviews - Cosmiatria", text: "O peeling de TCA e toxina botulínica devolveram o tônus da pele que eu procurava. Protocolo feito de forma absurdamente segura e clínica." },
    { name: "Fernanda L.", service: "Google Reviews", text: "Mato Grosso precisava dessa tecnologia toda. Ambientes refinados e um tratamento muito superior para procedimentos mínimos e de cuidados perenes." }
  ],
  corpo: [
    { name: "Patricia L.", service: "Google Reviews - Abdominoplastia", text: "Minha recuperação com os novos protocolos sem dreno foi incrível. No terceiro dia eu já andava esticada. A cicatriz ficou perfeitamente escondida no biquíni." },
    { name: "Fernanda G.", service: "Google Reviews - Lipo HD", text: "Dr. Márcio esculpiu meu corpo com a técnica HD de forma natural. O contorno ficou lindo, marcando exatamente o que eu pedi sem exageros." },
    { name: "Vitória B.", service: "Google Reviews", text: "Atenção máxima a todos os detalhes do pós-operatório (taping, drenagens e cintas). A equipe do Dr. Márcio transforma um período chato em uma experiência premium." }
  ]
}

export function Reviews({ category }: { category: 'facial' | 'mama' | 'estetica' | 'corpo' }) {
  const data = reviewsText[category]

  return (
    <section className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase">High Level Standards</span>
        <h2 className="font-heading text-4xl lg:text-5xl mt-2 mb-4 text-foreground tracking-tight">
          A Excelência na Prática
        </h2>
        
        <div className="mt-16 w-[100vw] left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] relative">
          <div className="flex overflow-x-auto snap-mandatory-x gap-6 px-8 md:px-0 md:justify-center pb-16 pt-8 no-scrollbar">
            {data.map((review, idx) => (
              <div key={idx} className="group bg-background min-w-[85vw] md:min-w-[400px] max-w-[400px] p-10 py-12 rounded-[3rem] border border-secondary/40 shadow-xl shrink-0 snap-center flex flex-col justify-between transform transition-all duration-[600ms] hover:-translate-y-4 hover:shadow-2xl cursor-pointer">
                 <div className="flex justify-center mb-6 text-primary gap-1">
                   {[1,2,3,4,5].map((i) => <Star key={`star-${idx}-${i}`} className={`w-5 h-5 md:w-6 md:h-6 fill-current transition-all duration-[800ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:rotate-[360deg] group-hover:scale-125 group-hover:text-amber-500`} style={{ transitionDelay: `${i * 70}ms` }} />)}
                 </div>
                 <h3 className="font-heading text-lg md:text-xl italic text-foreground mb-8 leading-relaxed font-semibold">
                   "{review.text}"
                 </h3>
                 <div className="pt-6 border-t border-border mt-auto">
                   <p className="text-sm uppercase tracking-widest text-primary font-bold">{review.name}</p>
                   <p className="text-xs text-foreground/50 mt-1">{review.service}</p>
                 </div>
              </div>
            ))}
          </div>
          
          <div className="md:hidden flex justify-center gap-2 -mt-4">
             <div className="w-2 h-2 rounded-full bg-primary"></div>
             <div className="w-2 h-2 rounded-full bg-primary/30"></div>
             <div className="w-2 h-2 rounded-full bg-primary/30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
