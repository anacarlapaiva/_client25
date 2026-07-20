const details = [
  { value: "50 min", label: "Duração das sessões" },
  { value: "Semanal", label: "Frequência sugerida" },
  { value: "Presencial + Online", label: "Modalidades" },
];

export function Approach() {
  return (
    <section id="approach" className="py-16 md:py-22 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="section-label mb-3 text-primary-foreground/65">
          04 — Abordagem e intervenção
        </p>
        <h2 className="text-3xl md:text-4xl max-w-3xl mb-8 text-primary-foreground">
          Uma escuta clínica orientada pela singularidade de cada história.
        </h2>

        <div className="space-y-5 text-primary-foreground/75 leading-relaxed max-w-3xl mb-12 md:mb-14">
          <p>
            O primeiro contato costuma ser com os cuidadores e a rede de apoio da
            criança ou adolescente. É esse momento inicial que me permite conhecer
            o caso em profundidade, entender a história, o contexto e o que trouxe
            a família até aqui. A partir daí, o foco passa a ser a formação e a
            estruturação de um vínculo verdadeiro com o paciente, construído por
            meio de brincadeiras, atividades e recursos terapêuticos pensados para
            cada fase do desenvolvimento.
          </p>
          <p>
            Meu trabalho parte da Análise do Comportamento, uma abordagem científica
            que busca entender como o comportamento se relaciona com o ambiente e as
            experiências de cada pessoa, e a partir disso construir mudanças
            concretas e duradouras. A ela, somo os princípios da ACT (Terapia de
            Aceitação e Compromisso) e da FAP (Psicoterapia Analítica Funcional),
            que trazem um cuidado especial com a experiência emocional, os vínculos
            e os valores que dão sentido a cada processo terapêutico.
          </p>
          <p>
            Na prática, isso significa unir técnica e sensibilidade: comportamento e
            sentimento caminham juntos. A família é parte ativa em todas as etapas.
            Ao longo do acompanhamento, ofereço orientações, devolutivas periódicas
            sobre a evolução do caso e, quando necessário, a própria participação
            dos cuidadores na sessão.
          </p>
          <p>
            Acredito que o cuidado se sustenta quando toda a rede em volta da
            criança ou do adolescente caminha na mesma direção.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {details.map((detail) => (
            <div
              key={detail.label}
              className="border border-primary-foreground/15 bg-primary-foreground/8 p-6"
            >
              <p className="font-serif text-3xl md:text-4xl mb-2 text-warm">
                {detail.value}
              </p>
              <p className="text-sm text-primary-foreground/65">{detail.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
