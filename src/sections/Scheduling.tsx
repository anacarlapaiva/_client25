import { useState } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "../data/site";
import { Button } from "../components/ui/Button";

export function Scheduling() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = `Olá, meu nome é ${form.name}.\n\n${form.message}\n\nEmail: ${form.email}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  const contacts = [
    {
      label: "WhatsApp",
      value: site.phone,
      href: whatsappLink("Olá, Raquel! Gostaria de agendar uma conversa."),
      icon: MessageCircle,
      external: true,
    },
    {
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      icon: Mail,
      external: false,
    },
    {
      label: "Telefone",
      value: site.phone,
      href: `tel:+${site.whatsappNumber}`,
      icon: Phone,
      external: false,
    },
  ];

  return (
    <section id="scheduling" className="py-16 md:py-22 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-start">
          <div>
            <p className="section-label mb-3">05 — Agendamento</p>
            <h2 className="font-serif text-3xl md:text-4xl max-w-md mb-4 leading-snug">
              Vamos conversar sobre o que te trouxe até aqui.
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-8">
              O primeiro contato é acolhedor e sem compromisso. Escreva um pouco
              sobre você — ou fale comigo direto pelos canais abaixo.
            </p>

            <div className="space-y-3">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 border border-border bg-accent/50 px-4 py-3.5 hover:border-primary/30 hover:bg-accent transition-colors group"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary">
                    <contact.icon className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-medium uppercase tracking-wide text-muted-foreground mb-0.5">
                      {contact.label}
                    </span>
                    <span className="block text-sm font-medium truncate group-hover:text-primary transition-colors">
                      {contact.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border border-border bg-accent/40 p-7 md:p-8 space-y-5"
          >
            <h3 className="font-serif text-2xl md:text-3xl">Enviar mensagem</h3>

            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-[11px] font-medium uppercase tracking-wide text-muted-foreground"
              >
                Nome
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-[11px] font-medium uppercase tracking-wide text-muted-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-[11px] font-medium uppercase tracking-wide text-muted-foreground"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring resize-y"
              />
            </div>

            <Button type="submit" className="w-full">
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
