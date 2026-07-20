import { Section } from "../components/ui/Section";

export function About() {
  return (
    <Section
      id="about"
      label="01 — Sobre mim"
      title="Uma prática construída no vínculo, na escuta e no acolhimento."
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-12 lg:gap-20">
        <div className="space-y-6 text-muted-foreground leading-relaxed text-[15px] md:text-base">
          <p>
            Sou Raquel, psicóloga clínica formada pela PUCPR, em Londrina, com
            registro no Conselho Regional de Psicologia (CRP 08/47222). Escolhi a
            psicologia clínica porque sempre gostei de trabalhar com crianças e
            porque acredito profundamente no poder de ajudar em um desenvolvimento
            saudável, não só o da criança, mas também o da família que a envolve.
          </p>
          <p>
            Atuo clinicamente desde o início de 2026, e cada atendimento reforça
            algo em que acredito: que cuidar de uma criança é, sempre, cuidar
            também de quem está ao redor dela. No meu trabalho, a brincadeira tem
            um lugar central — é através dela que crianças se expressam, constroem
            confiança e permitem que eu me aproxime do seu mundo.
          </p>
          <p>
            Busco formar um vínculo verdadeiro antes de qualquer intervenção,
            porque sei que é esse vínculo que sustenta toda mudança possível, e
            caminho junto com a família, oferecendo orientação sobre a rede de
            apoio da criança para que todos ao redor participem desse processo.
          </p>
          <p>
            Sou pós-graduanda em Terapia Analítico-Comportamental na Infância e na
            Adolescência, com ênfase em ACT (Terapia de Aceitação e Compromisso) e
            FAP (Psicoterapia Analítica Funcional), formação que amplia meu olhar
            clínico para além da técnica. Tenho também experiência em ABA (Análise
            do Comportamento Aplicada) e em avaliação psicológica.
          </p>
          <p>
            Meu trabalho une rigor técnico e sensibilidade humana: acredito que
            mudanças significativas acontecem quando ciência e acolhimento
            caminham lado a lado, com o acolhimento sempre em primeiro lugar.
          </p>
        </div>

        <aside className="lg:pt-2">
          <div className="border-t border-border pt-8 space-y-8">
            <div>
              <p className="section-label mb-3">Formação</p>
              <p className="font-serif text-xl leading-snug mb-2">
                Psicologia Clínica · PUCPR
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pós-graduanda em Terapia Analítico-Comportamental na Infância e na
                Adolescência (ACT/FAP)
              </p>
            </div>
            <div>
              <p className="section-label mb-3">Experiência</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                ABA · Avaliação psicológica · Atuação clínica desde 2026
              </p>
            </div>
            <div>
              <p className="section-label mb-3">Foco</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Infância, adolescência e orientação à rede de apoio familiar
              </p>
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}
