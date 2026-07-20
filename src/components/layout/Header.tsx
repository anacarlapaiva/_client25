import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { site, whatsappLink } from "../../data/site";

const navItems = [
  { label: "Apresentação", href: "#hero" },
  { label: "Interesses", href: "#interests" },
  { label: "Áreas", href: "#areas" },
  { label: "Abordagem", href: "#approach" },
  { label: "Agendamento", href: "#scheduling" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
        <a href="#" className="font-serif text-xl tracking-tight">
          {site.initials}
          <span className="font-sans text-sm font-normal tracking-normal ml-2">
            {site.title}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-primary/70 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Agendar
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-full w-fit"
          >
            <Phone className="w-4 h-4" />
            Agendar
          </a>
        </div>
      )}
    </header>
  );
}
