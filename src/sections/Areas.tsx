interface Area {
  title: string;
  description: string;
}

const areas: Area[] = [
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
    <section id="areas" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="text-sm font-medium tracking-wide mb-4">
          03 — Áreas de atuação
        </p>
        <h2 className="text-3xl md:text-4xl mb-16 max-w-2xl">
          Demandas que costumo acompanhar em atendimento.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {areas.map((area) => (
            <div key={area.title} className="space-y-3">
              <h3 className="font-serif text-2xl">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-16 text-muted-foreground leading-relaxed max-w-2xl">
          Modalidades de atendimento: presencial em Londrina e em Assis (SP);
          atendimento online disponível para adolescentes a partir dos 14 anos.
        </p>
      </div>
    </section>
  );
}
