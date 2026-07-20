import { Section } from "../components/ui/Section";

const interests = [
  {
    title: "Observar e compreender",
    description:
      "Na Análise do Comportamento, o que mais me interessa é o processo de observar: entender o que está por trás de um comportamento, o que ele comunica e como pequenas mudanças de contexto podem abrir espaço para transformações reais.",
  },
  {
    title: "Habilidades socioemocionais",
    description:
      "Tenho interesse específico pelo desenvolvimento de habilidades socioemocionais: como uma criança aprende a reconhecer o que sente, a se regular diante de situações difíceis e a se relacionar com o outro sem se anular ou se isolar.",
  },
  {
    title: "Ansiedade infantil e social",
    description:
      "Não trabalho com um público fechado, mas boa parte da minha prática hoje se concentra em ansiedade infantil, ansiedade social e questões de autorregulação — temas que atravessam a maioria dos casos que chegam até mim.",
  },
  {
    title: "Autorregulação",
    description:
      "Acredito que ajudar uma criança a se reconhecer, a nomear suas emoções e a encontrar estratégias para momentos difíceis é um dos caminhos mais poderosos para um desenvolvimento saudável.",
  },
];

export function Interests() {
  return (
    <Section
      id="interests"
      label="02 — Interesses"
      title="O que sustenta minha prática para além do consultório."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {interests.map((interest, index) => (
          <div key={interest.title} className="border-t border-border pt-6">
            <p className="text-xs text-muted-foreground mb-4">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="font-serif text-2xl md:text-[1.75rem] mb-3">
              {interest.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-[15px] md:text-base">
              {interest.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
