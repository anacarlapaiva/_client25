import { Section } from "../components/ui/Section";

const areas = [
  {
    title: "Psicoterapia infantil e de adolescentes",
    description:
      "Atendimento a todas as faixas etárias da infância e da adolescência, com base na Análise do Comportamento Aplicada (ABA) e em ACT/FAP.",
  },
  {
    title: "Orientação parental, familiar e de casais",
    description:
      "Acompanhamento e orientação aos cuidadores e à rede de apoio, fortalecendo o vínculo e a compreensão do processo terapêutico.",
  },
  {
    title: "Avaliação psicológica",
    description:
      "Avaliação cuidadosa e embasada para compreender demandas, potencialidades e orientar o cuidado de forma individualizada.",
  },
  {
    title: "Atendimento psicológico convencional",
    description:
      "Atendimento para outras demandas clínicas não vinculadas à ABA, sempre com escuta e acolhimento.",
  },
];

export function Areas() {
  return (
    <Section
      id="areas"
      label="03 — Áreas de atuação"
      title="Demandas que acompanho no consultório."
      intro={
        <p>
          Modalidades: presencial em Londrina e Assis (SP); online para
          adolescentes a partir dos 14 anos.
        </p>
      }
    >
      <div className="divide-y divide-border border-y border-border">
        {areas.map((area) => (
          <div
            key={area.title}
            className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-3 md:gap-10 py-8 md:py-10"
          >
            <h3 className="font-serif text-2xl md:text-[1.7rem] leading-snug">
              {area.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-[15px] md:text-base md:pt-1">
              {area.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
