import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "../data/site";

export function Scheduling() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = `Olá, meu nome é ${form.name}. ${form.message} (Email: ${form.email})`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="scheduling" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="text-sm font-medium tracking-wide mb-4">
          05 — Agendamento
        </p>
        <h2 className="text-3xl md:text-4xl mb-6 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12 md:gap-16">
          <div className="space-y-6">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <MessageCircle className="w-5 h-5 text-primary/70" />
              <div>
                <p className="text-sm text-muted-foreground">WhatsApp</p>
                <p className="font-medium group-hover:text-primary/70 transition-colors">
                  {site.phone}
                </p>
              </div>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 group"
            >
              <Mail className="w-5 h-5 text-primary/70" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium group-hover:text-primary/70 transition-colors">
                  {site.email}
                </p>
              </div>
            </a>
            <a href={`tel:${site.whatsappNumber}`} className="flex items-center gap-4 group">
              <Phone className="w-5 h-5 text-primary/70" />
              <div>
                <p className="text-sm text-muted-foreground">Telefone</p>
                <p className="font-medium group-hover:text-primary/70 transition-colors">
                  {site.phone}
                </p>
              </div>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="font-serif text-2xl">Enviar mensagem</h3>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nome
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Mensagem
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-y"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
