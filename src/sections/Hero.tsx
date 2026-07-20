import { ArrowRight, Phone } from "lucide-react";
import { site, whatsappLink } from "../data/site";

export function Hero() {
  return (
    <section id="hero" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-center">
          <div>
            <p className="text-sm font-medium tracking-wide mb-6">
              {site.title} · {site.crp}
            </p>
            <h1 className="text-5xl md:text-7xl leading-[1.05] mb-8">
              Um espaço de escuta, cuidado e presença.
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-10">
              Raquel é psicóloga clínica ({site.crp}), formada pela PUCPR, com
              atuação voltada à infância e à adolescência a partir da Análise do
              Comportamento. É pós-graduanda em Terapia Analítico-Comportamental
              na Infância e na Adolescência, com ênfase em ACT/FAP, e possui
              experiência em ABA e avaliação psicológica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Agendar consulta
              </a>
              <a
                href="#approach"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-foreground/20 rounded-full font-medium hover:border-foreground/40 transition-colors"
              >
                Conhecer a abordagem
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] w-full max-w-md mx-auto bg-muted border border-border rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="text-center px-6">
                <p className="font-serif text-2xl text-muted-foreground">
                  R.Q.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Espaço reservado para foto
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
