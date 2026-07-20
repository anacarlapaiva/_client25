import { Eye, Heart, Users, Brain } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Interest {
  icon: LucideIcon;
  title: string;
  description: string;
}

const interests: Interest[] = [
  {
    icon: Eye,
    title: "Observar e compreender",
    description:
      "Na Análise do Comportamento, o que mais me interessa é o processo de observar: entender o que está por trás de um comportamento, o que ele comunica e como pequenas mudanças de contexto podem abrir espaço para transformações reais.",
  },
  {
    icon: Heart,
    title: "Habilidades socioemocionais",
    description:
      "Tenho interesse específico pelo desenvolvimento de habilidades socioemocionais: como uma criança aprende a reconhecer o que sente, a se regular diante de situações difíceis e a se relacionar com o outro sem se anular ou se isolar.",
  },
  {
    icon: Users,
    title: "Ansiedade infantil e social",
    description:
      "Não trabalho com um público fechado, mas boa parte da minha prática hoje se concentra em ansiedade infantil, ansiedade social e questões de autorregulação, temas que atravessam a maioria dos casos que chegam até mim.",
  },
  {
    icon: Brain,
    title: "Autorregulação",
    description:
      "Acredito que ajudar uma criança a se reconhecer, a nomear suas emoções e a encontrar estratégias para momentos difíceis é um dos caminhos mais poderosos para um desenvolvimento saudável.",
  },
];

export function Interests() {
  return (
    <section id="interests" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="text-sm font-medium tracking-wide mb-4">02 — Interesses</p>
        <h2 className="text-3xl md:text-4xl mb-16 max-w-2xl">
          O que sustenta minha prática para além do consultório.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {interests.map((interest) => (
            <div key={interest.title} className="space-y-3">
              <interest.icon className="w-6 h-6 text-primary/70" />
              <h3 className="font-serif text-2xl">{interest.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
