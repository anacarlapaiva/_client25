import { ArrowDown } from "lucide-react";
import { site, whatsappLink } from "../data/site";
import { LinkButton } from "../components/ui/Button";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--color-accent)_70%,transparent),transparent_55%)]" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="section-label reveal mb-4">
              {site.title} · {site.crp}
            </p>
            <h1 className="reveal reveal-delay-1 text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[3.75rem] leading-[1.1] mb-5 max-w-3xl">
              Cuidado clínico para infância e adolescência.
            </h1>
            <p className="reveal reveal-delay-2 text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl mb-8">
              Raquel é psicóloga clínica ({site.crp}), formada pela PUCPR, com
              atuação voltada à infância e à adolescência a partir da Análise do
              Comportamento. É pós-graduanda em Terapia Analítico-Comportamental
              na Infância e na Adolescência, com ênfase em ACT/FAP, e possui
              experiência em ABA e avaliação psicológica.
            </p>
            <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3">
              <LinkButton
                href={whatsappLink(
                  "Olá, Raquel! Gostaria de agendar uma conversa.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar consulta
              </LinkButton>
              <LinkButton href="#about" variant="ghost">
                Conhecer meu trabalho
                <ArrowDown className="w-4 h-4" />
              </LinkButton>
            </div>
          </div>

          <div className="reveal reveal-delay-2 relative">
            <div className="aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto border border-border bg-muted/60 overflow-hidden">
              <div className="h-full flex flex-col items-center justify-center px-8 text-center">
                <p className="font-serif text-4xl text-foreground/50 mb-3">
                  {site.initials}
                </p>
                <p className="text-sm text-muted-foreground">Foto em breve</p>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground text-center lg:text-right italic font-serif text-base">
              “Cuidar de uma criança é também cuidar de quem está ao redor.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
